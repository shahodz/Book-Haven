from django.urls import path,include
from . import views
# project > books > urls.py
urlpatterns = [
    path('view-books/', views.view_books, name='view_books'),
    path('borrowing/borrow2/', views.borrow_book2, name='borrow_book2'),
    path('search/',include('search.urls')),
]