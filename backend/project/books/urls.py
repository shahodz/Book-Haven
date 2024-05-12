from django.urls import path
from .views import main_view, search_results, signup

urlpatterns = [
    path('search/',main_view,name='main'),
    path('ser/',search_results,name='results'),
]