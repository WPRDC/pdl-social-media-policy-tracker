import uuid

from colorfield.fields import ColorField
from django.db import models
from tinymce.models import HTMLField


class Record(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    summary = models.CharField(max_length=256)
    details = HTMLField(null=True, blank=True)
    date = models.DateField()

    category = models.ForeignKey("Category", related_name="records", on_delete=models.PROTECT)
    platform = models.ForeignKey(
        "Platform",
        related_name="records",
        on_delete=models.PROTECT,
    )

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return f"{self.summary} ({self.category})"


class Firm(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    homepage = models.URLField()

    def __str__(self):
        return self.name


class Platform(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    homepage = models.URLField()
    parent_firm = models.ForeignKey(
        "Firm",
        related_name="platforms",
        on_delete=models.PROTECT,
    )
    background_color = ColorField()
    text_color = ColorField()

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    color = ColorField()

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Citation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.URLField()
    record = models.ForeignKey(
        "Record",
        related_name="citations",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.url
