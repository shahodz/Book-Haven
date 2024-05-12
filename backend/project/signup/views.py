from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages

def signup(request):
    if request.method == "POST":
        username= request.POST['username']
        role1= request.POST['role1']
        role2= request.POST['role2']
        email= request.POST['email']
        pswd= request.POST['pswd'],
        pswdconf= request.POST['pswdconf']
        
        myuser=User.objects.create_user(username, email, pswd)
        
        myuser.save()
        messages.success(request, "Signup successful!")
        return redirect('signin')
    return render(request, 'Signup.html')