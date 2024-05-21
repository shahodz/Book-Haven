from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth import update_session_auth_hash
from django.shortcuts import render
from signup.models import CustomUser
# Create your views here.

def user_dashboard(request):
    return render(request, 'user_dashboard.html')

def userprofile(request):
    return render(request, 'userProfile.html')

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
            else:
                messages.error(request, 'Incorrect old password.')
        else:
            messages.success(request, 'Profile updated successfully.')

        user.save()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})

@login_required
def change_password(request):
    if request.method == 'POST':
        old_password = request.POST.get('oldPassword')
        new_password = request.POST.get('newPassword')
        confirm_password = request.POST.get('confirmPassword')

        user = request.user

        if not user.check_password(old_password):
            return JsonResponse({'success': False, 'error': 'Incorrect old password'})

        if len(new_password) < 8:
            return JsonResponse({'success': False, 'error': 'New password is too short'})

        if new_password == confirm_password:
            user.set_password(new_password)
            user.save()
            update_session_auth_hash(request, user)
            messages.success(request, 'Password changed successfully.')
            return JsonResponse({'success': True})
        return JsonResponse({'success': False, 'error': 'New passwords do not match'})
    return JsonResponse({'success': False, 'error': 'Invalid request method'})