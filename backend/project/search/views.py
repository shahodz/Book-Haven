from django.shortcuts import render
from django.http import JsonResponse
from books.models import Book
from django.db.models import Q
import json

def main_view(request):
    return render(request,'search.html')

def search_results(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        res = None
        search_key = request.POST.get('book')
        matching_books = []
        matching_books += Book.objects.filter(
            Q(name__icontains=search_key) |
            Q(genre__icontains=search_key) |
            Q(author__icontains=search_key)
        )  

        if len(search_key) > 0 and len(matching_books) > 0:
            results = []
            for book in matching_books:
                item = {
                    'id':book.id,
                    'name': book.name,
                    'image': book.image,
                    'author': book.author,
                    'description': book.description,
                }
                results.append(item)
            res = results
        else:
            res = "no book found"
        return JsonResponse({'data': res})
    return JsonResponse({})


# Create your views here.
