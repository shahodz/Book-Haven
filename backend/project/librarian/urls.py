from django.urls import include, path
from .views import admin_dashboard, adminprofile, save_profile_changes, change_password

urlpatterns = [
    path('admindashboard/', admin_dashboard, name='admindashboard'),
    path('adminprofile/', adminprofile, name='adminprofile'),
    path('save_profile_changes/', save_profile_changes, name='save_profile_changes'),
    path('change_password/', change_password, name='change_password'),
    path('search/', include('books.urls')),
]
