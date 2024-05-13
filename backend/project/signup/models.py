from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    is_admin = models.BooleanField(default=False)  # Boolean field to indicate admin status
    groups = models.ManyToManyField(Group, verbose_name=_('groups'), blank=True, related_name='custom_users_groups')
    user_permissions = models.ManyToManyField(Permission, verbose_name=_('user permissions'), blank=True, related_name='custom_users_permissions')
