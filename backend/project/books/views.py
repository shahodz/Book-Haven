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

