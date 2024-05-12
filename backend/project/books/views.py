from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from .models import Book
import json
# Create your views here.

def main_view(request):
    return render(request,'user_result.html',{'boo':Book.objects.all()})

def search_results(request):
    pass

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