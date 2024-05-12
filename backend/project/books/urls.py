from django.urls import path
from .views import main_view, search_results, singup

urlpatterns = [
    path('search/',main_view,name='main'),
    path('ser/',search_results,name='results'),
    path('',singup,name='signup'),

]