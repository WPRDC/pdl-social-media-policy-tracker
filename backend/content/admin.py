from django.contrib import admin

from solo.admin import SingletonModelAdmin

from .models import FrontPage

admin.site.register(FrontPage, SingletonModelAdmin)
