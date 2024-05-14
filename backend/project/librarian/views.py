from django.shortcuts import render

# Create your views here.

def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')

def adminprofile(request):
    return render(request, 'adminProfile.html')