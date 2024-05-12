from django.shortcuts import render
from django.http import *
from .models import Book
# Create your views here.

def main_view(request):
    return render(request,'user_result.html',{'boo':Book.objects.all()})


