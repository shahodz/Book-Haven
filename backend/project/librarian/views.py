from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth import update_session_auth_hash

# Create your views here.

def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')

def adminprofile(request):
    return render(request, 'adminProfile.html')


def save_profile_changes(request):
    if request.method == 'POST':
        # Retrieve form data
        username = request.POST.get('username')
        date_of_birth = request.POST.get('dateOfBirth')
        email = request.POST.get('email')
        contact = request.POST.get('contact')
        old_password = request.POST.get('oldPassword')
        new_password = request.POST.get('newPassword')
        confirm_password = request.POST.get('confirmPassword')

        # Perform server-side validation if needed
        
        # Update user profile information
        user = request.user
        user.username = username
        user.date_of_birth = date_of_birth
        user.email = email
        user.contact = contact
        user.save()

        # Change password if provided
        if old_password and new_password and confirm_password:
            if user.check_password(old_password):
                if new_password == confirm_password:
                    user.set_password(new_password)
                    user.save()
                    messages.success(request, 'Profile updated successfully.')
                else:
                    messages.error(request, 'New passwords do not match.')
            else:
                messages.error(request, 'Incorrect old password.')
        else:
            messages.success(request, 'Profile updated successfully.')

        return JsonResponse({'success': True})  # Return success response
    else:
        return JsonResponse({'success': False})  # Return failure response
    

def change_password(request):
    if request.method == 'POST':
        # Retrieve form data
        old_password = request.POST.get('oldPassword')
        new_password = request.POST.get('newPassword')
        confirm_password = request.POST.get('confirmPassword')

        # Verify old password matches current password
        user = request.user
        if not user.check_password(old_password):
            return JsonResponse({'success': False, 'error': 'Incorrect old password'})

        # Validate new password
        # You can implement additional validation here (e.g., length, complexity)
        if len(new_password) < 8:
            return JsonResponse({'success': False, 'error': 'New password is too short'})

        # Update password if new password matches confirm password
        if new_password == confirm_password:
            user.set_password(new_password)
            user.save()
            # Update session authentication hash to prevent logout
            update_session_auth_hash(request, user)
            messages.success(request, 'Password changed successfully.')
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'New passwords do not match'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})
