from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth import update_session_auth_hash
from signup.models import CustomUser
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt

@login_required
def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')

@login_required
def adminprofile(request):
    return render(request, 'adminProfile.html')

@login_required
def save_profile_changes(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        date_of_birth = request.POST.get('dateOfBirth')
        email = request.POST.get('email')
        contact = request.POST.get('contact')
        old_password = request.POST.get('oldPassword')
        new_password = request.POST.get('newPassword')
        confirm_password = request.POST.get('confirmPassword')

        user = request.user
        user.username = username
        user.date_of_birth = date_of_birth
        user.email = email
        user.contact = contact

        if old_password and new_password and confirm_password:
            if user.check_password(old_password):
                if new_password == confirm_password:
                    user.set_password(new_password)
                    update_session_auth_hash(request, user)
                    messages.success(request, 'Profile and password updated successfully.')
                else:
                    messages.error(request, 'New passwords do not match.')
                    return JsonResponse({'success': False, 'error': 'New passwords do not match.'})
            else:
                messages.error(request, 'Incorrect old password.')
                return JsonResponse({'success': False, 'error': 'Incorrect old password.'})
        else:
            messages.success(request, 'Profile updated successfully.')

        user.save()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

@login_required
@csrf_exempt
def check_old_password(request):
    if request.method == 'POST':
        old_password = request.POST.get('oldPassword')
        user = authenticate(username=request.user.username, password=old_password)

        if user is not None:
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Incorrect old password'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

@login_required
def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            messages.success(request, 'Password changed successfully.')
            return JsonResponse({'success': True})
        else:
            if 'old_password' in form.errors:
                return JsonResponse({'success': False, 'error': form.errors['old_password'][0]})
            else:
                return JsonResponse({'success': False, 'error': 'Failed to change password. Please check the input.'})
    else:
        form = PasswordChangeForm(request.user)
    return JsonResponse({'success': False, 'error': 'Invalid request method'})
