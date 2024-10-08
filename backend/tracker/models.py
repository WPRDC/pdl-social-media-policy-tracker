import uuid

from colorfield.fields import ColorField
from django.db import models
from tinymce.models import HTMLField


class TimeStamped(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Record(TimeStamped):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    summary = models.CharField(max_length=256)
    details = HTMLField(null=True, blank=True)
    date = models.DateField()

    categories = models.ManyToManyField("Category", related_name="records", blank=True)

    platform = models.ForeignKey(
        "Platform",
        related_name="records",
        on_delete=models.PROTECT,
    )

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return f"{self.summary}"


class Firm(TimeStamped):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    homepage = models.URLField()

    def __str__(self):
        return self.name


class Platform(TimeStamped):
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


class Category(TimeStamped):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    color = ColorField()

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Citation(TimeStamped):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.URLField()
    record = models.ForeignKey(
        "Record",
        related_name="citations",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.url
