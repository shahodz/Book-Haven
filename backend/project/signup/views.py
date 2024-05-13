from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login

def signup(request):
    if request.method == "POST":
        username= request.POST['username']
        # role1= request.POST['role1']
        role2= request.POST['role2']
        email= request.POST['email']
        pswd= request.POST['pswd']
        pswdconf= request.POST['pswdconf']
        
        myuser=User.objects.create_user(username, email, pswd)
        
        myuser.save()
        messages.success(request, "Signup successful!")
        return redirect('signin')
    return render(request, "Signup.html")


def signin(request):

    if request.method == "POST":
        username= request.POST['username']
        # role1= request.POST['role1']
        # role2= request.POST['role2']
        # email= request.POST['email']
        pswd= request.POST['pswd']
        user= authenticate(username= username, password=pswd)
        if user is not None:
            login(request,user)
            username=user.username
            return render (request, "index.html", {'username':username})
        else:
            messages.error(request, "Bad credentials")
            return redirect('signup')
    return render(request, "login.html")

def logout(request):
    logout(request)
    messages.success(request, "Logged out successfully!")
    # return redirect ()//to be linked with home