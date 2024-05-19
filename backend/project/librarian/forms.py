# forms.py
from django import forms
from django.contrib.auth.forms import UserChangeForm, PasswordChangeForm
from signup.models import CustomUser

class ProfileForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'date_of_birth', 'email', 'contact')

    date_of_birth = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    contact = forms.CharField(max_length=15, required=True)

class CustomPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(widget=forms.PasswordInput(attrs={'id': 'oldPassword', 'required': True}))
    new_password1 = forms.CharField(widget=forms.PasswordInput(attrs={'id': 'newPassword', 'required': True}))
    new_password2 = forms.CharField(widget=forms.PasswordInput(attrs={'id': 'confirmPassword', 'required': True}))
