
from typing import Any
from django.shortcuts import get_object_or_404, render,HttpResponse
from django.views.generic import ListView
from books.models import Book
from django.http import JsonResponse
from django.contrib import messages
import json


def main_view(request):
    return render(request,'editApp/edit_book.html')
    
def search_results(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        search_key = request.POST.get('book')
        if search_key:
            matching_books = Book.objects.filter(name__icontains=search_key).values('id','name', 'author', 'description', 'publisher', 'genre', 'language', 'edition', 'year', 'ISBN', 'image', 'available')
            results = list(matching_books)
            return JsonResponse({'data': results})
        return JsonResponse({'data': []})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def update_book(request):
    if request.method == 'POST':
        book_id = request.POST.get('id')
        book = get_object_or_404(Book, id=book_id)
        book.name = request.POST.get('bookname')
        book.author = request.POST.get('author')
        book.description = request.POST.get('book_description')
        book.publisher = request.POST.get('Publisher')
        book.genre = request.POST.get('genre')
        book.language = request.POST.get('language')
        book.edition = request.POST.get('edition')
        book.year = request.POST.get('date')
        book.ISBN = request.POST.get('isbn')
        book.image = request.POST.get('cover')
        book.available = request.POST.get('stock') == 'in_stock'
        book.save()
        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def delete_book(request):
    if request.method == 'POST':
        book_id = request.POST.get('id')
        book = get_object_or_404(Book, id=book_id)
        book.delete()
        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Invalid request'}, status=400)
# def edit_book(request):
#      if request.method=='POST':
#           bookname=request.POST.get('bookname')
#           # author=request.POST.get('author')
#           # description=request.POST.get('book_description')
#           # publisher=request.POST.get('Publisher')
#           # genre=request.POST.get('genre')
#           # language=request.POST.get('language')
#           # edition=request.POST.get('edition')
#           # publication=request.POST.get('date')
#           isbn=request.POST.get('isbn')
#           # cover=request.POST.get('cover')
#           # available=request.POST.get('available')
#           # data= Book(name=bookname,author=author,description=description,publisher=publisher,genre=genre,language=language,edition=edition,year=publication,ISBN=isbn,image=cover,available=available)
#           book=Book.objects.get(pk=isbn)
#           book.name=bookname
#           book.save()
#           return HttpResponse('Success')
#      return HttpResponse('Error')