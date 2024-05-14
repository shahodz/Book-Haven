from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from books.models import Book
import json
# Create your views here.

def main_view(request):
    return render(request,'user_result.html')

def search_results(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        res = None
        search_key = request.POST.get('book')
        matching_books = []
        matching_books += Book.objects.filter(name__icontains=search_key)
        if not matching_books:
            matching_books+=Book.objects.filter(author__icontains=search_key)
        if not matching_books:
            matching_books+=Book.objects.filter(genre__icontains=search_key)    

        if len(search_key) > 0 and len(matching_books) > 0:
            results = []
            for book in matching_books:
                item = {
                    'name': book.name,
                    'image': book.image,
                    'author': book.author,
                }
                results.append(item)
            res = results
        else:
            res = "no book found"
        return JsonResponse({'data': res})
    return JsonResponse({})




