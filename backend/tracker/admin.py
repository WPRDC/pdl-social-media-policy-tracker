from django.contrib import admin

from tracker.forms import RecordForm
from tracker.models import Category, Citation, Record, Platform, Firm


@admin.register(Firm)
class FirmAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ["name"]}


@admin.register(Platform)
class PlatformAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "background_color", "text_color")
    prepopulated_fields = {"slug": ["name"]}


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "color")
    prepopulated_fields = {"slug": ["name"]}


@admin.register(Citation)
class CitationAdmin(admin.ModelAdmin):
    list_display = ("url",)


class CitationInline(admin.TabularInline):
    model = Citation
    extra = 1


@admin.register(Record)
class RecordAdmin(admin.ModelAdmin):
    list_display = ("summary", "date", "platform")
    inlines = (CitationInline,)

    form = RecordForm
