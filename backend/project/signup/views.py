from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login

def signup(request):
    if request.method == "POST":
        username= request.POST['username']
        role= request.POST['role']
        email= request.POST['email']
        pswd= request.POST['pswd']
        pswdconf= request.POST['pswdconf']
        

        myuser=User.objects.create_user(username, email, pswd,role)
        myuser.role=role
        
        myuser.save()
        messages.success(request, "Signup successful!")
        return redirect('signin')
    return render(request, "Signup.html")


def signin(request):
    if request.method == "POST":
        username = request.POST['username']
        pswd = request.POST['pswd']
        user = authenticate(username=username, password=pswd)
        
        if user is not None:
            # Check if the chosen role matches the role stored in the database
            chosen_role = request.POST.get('role')  # Get the chosen role from the form data
            if chosen_role != user.role:
                messages.error(request, "You are not authorized for this role.")
                return redirect('signin')  # Redirect to signin page or wherever appropriate
            
            login(request, user)
            return render(request, "index.html", {'username': username})
        else:
            messages.error(request, "Bad credentials")
            return redirect('signup')
    return render(request, "login.html")

def logout(request):
    logout(request)
    messages.success(request, "Logged out successfully!")
    # return redirect ()//to be linked with home