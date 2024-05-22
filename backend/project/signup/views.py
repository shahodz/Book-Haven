from django.shortcuts import render,redirect
# from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login, logout
from .models import CustomUser



def signin(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('pswd')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            if user.is_admin:
                return redirect('admindashboard')  # Redirect to the admin dashboard
            else:
                return redirect('userdashboard')  # Redirect to the user dashboard
        else:
            messages.error(request, "Bad credentials")
            return redirect('signin')
    
    return render(request, "login.html")


def signup(request):
    if request.method == "POST":
        username= request.POST['username']
        is_admin = request.POST.get('is_admin') == 'True'  # Convert 'True' string to boolean
        email= request.POST['email']
        pswd= request.POST['pswd']
        pswdconf= request.POST['pswdconf']
        
        if CustomUser.objects.filter(username=username).exists():
            messages.error(request, "Username already exists")
            return redirect('signup')  # Redirect back to the signup page
        if CustomUser.objects.filter(email=email).exists():
            messages.error(request, "Email already exists")
            return redirect('signup')  # Redirect back to the signup page



        myuser = CustomUser.objects.create_user(username=username, email=email, password=pswd, is_admin=is_admin)
        
        myuser.save()
        messages.success(request, "Signup successful!")
        return redirect('signin')

    return render(request, "Signup.html")


def signout(request):
    logout(request)
    return redirect ('home')