from django.shortcuts import render

# Create your views here.

def user_dashboard(request):
    return render(request, 'user_dashboard.html')

def userprofile(request):
    return render(request, 'userProfile.html')