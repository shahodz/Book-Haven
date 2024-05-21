from django.urls import include, path
from .views import user_dashboard,userprofile,save_profile_changes,change_password

urlpatterns = [
    path('userdashboard/',user_dashboard,name='userdashboard'),
    path('search',include('books.urls')),
    path('userprofile/',userprofile,name='userprofile'),
    path('save_profile_changes/', save_profile_changes, name='save_profile_changes'),
    path('change_password/', change_password, name='change_password'),
    
]