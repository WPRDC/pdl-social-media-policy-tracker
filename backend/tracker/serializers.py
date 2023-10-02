from rest_framework import serializers
from colorfield.serializers import ColorField as ColorFieldSerializer
from tracker.models import Citation, Category, Firm, Record, Platform


class CitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citation
        fields = (
            "id",
            "url",
        )


class FirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firm
        fields = (
            "slug",
            "name",
            "homepage",
        )


class PlatformSerializer(serializers.ModelSerializer):
    parent_firm = FirmSerializer()
    background_color = ColorFieldSerializer()
    text_color = ColorFieldSerializer()

    class Meta:
        model = Platform
        fields = (
            "slug",
            "name",
            "homepage",
            "parent_firm",
            "background_color",
            "text_color",
        )


class CategorySerializer(serializers.ModelSerializer):
    color = ColorFieldSerializer()

    class Meta:
        model = Category
        fields = ("slug", "name", "color")


class RecordSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    platform = PlatformSerializer()
    citations = serializers.SerializerMethodField()

    class Meta:
        model = Record
        fields = (
            "id",
            "summary",
            "date",
            "category",
            "details",
            "platform",
            "citations",
        )

    def get_citations(self, obj: Record):
        return [citation.url for citation in obj.citations.all()]
