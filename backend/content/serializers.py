from rest_framework import serializers

from content.models import FrontPage


class FrontPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FrontPage
        fields = (
            "title",
            "subtitle",
            "content",
        )
