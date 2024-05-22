from django.urls import path
from .views import main_view, search_results,update_book,delete_book

urlpatterns=[
    path('',main_view,name="main_view"),
    path('search/',search_results,name='searchbooks'),
    path('update/', update_book, name='updatebook'),
    path('delete/', delete_book, name='deletebook'), 
]