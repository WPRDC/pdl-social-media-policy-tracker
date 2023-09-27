from django.db import models
from solo.models import SingletonModel
from tinymce.models import HTMLField


class GlobalSettings(SingletonModel):
    def __str__(self):
        return "Global Settings"

    class Meta:
        verbose_name = "Global Settings"


class FrontPage(SingletonModel):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300)
    content = HTMLField()

    def __str__(self):
        return "Front Page"

    class Meta:
        verbose_name = "Front Page"
