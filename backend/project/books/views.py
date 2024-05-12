from django.shortcuts import render
from django.http import JsonResponse
from .models import Book
import json
# Create your views here.

def main_view(request):
    return render(request,'user_result.html',{'boo':Book.objects.all()})

def search_results(request):
    pass

def singup(request):
    return render(request, 'Signup.html')