from rest_framework import viewsets, permissions
from rest_framework.decorators import permission_classes, api_view
from rest_framework.request import Request
from rest_framework.response import Response

from tracker.models import Citation, Category, Firm, Record, Platform
from tracker.serializers import (
    CitationSerializer,
    CategorySerializer,
    RecordSerializer,
    FirmSerializer,
    PlatformSerializer,
)


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticatedOrReadOnly])
def timeline_view(request: Request):
    result: dict[str, list[dict]] = {}
    record: Record
    for record in Record.objects.all():
        key = f"{record.date.strftime('%Y-%m')}-01"
        if key not in result:
            result[key] = []
        result[key].append(RecordSerializer(record).data)
    return Response(dict(sorted(result.items(), reverse=True)))


class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = RecordSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = CategorySerializer


class PlatformViewSet(viewsets.ModelViewSet):
    queryset = Platform.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PlatformSerializer


class FirmViewSet(viewsets.ModelViewSet):
    queryset = Firm.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = FirmSerializer


class CitationViewSet(viewsets.ModelViewSet):
    queryset = Citation.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = CitationSerializer
