from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import permission_classes, api_view
from rest_framework.request import Request
from rest_framework.response import Response

from django.db.models import QuerySet

from tracker.models import Citation, Category, Firm, Record, Platform
from tracker.serializers import (
    CitationSerializer,
    CategorySerializer,
    RecordSerializer,
    FirmSerializer,
    PlatformSerializer,
)



def extract_list_arg(arg: str | None) -> list[str] | None:
    if arg is None:
        return None
    return arg.split(',')

@api_view(["GET"])
@permission_classes([permissions.IsAuthenticatedOrReadOnly])
def timeline_view(request: Request):
    # parse query params
    category_slugs = extract_list_arg(request.query_params.get("categories", None))
    platform_slugs = extract_list_arg(request.query_params.get("platforms", None))

    records = Record.objects.all()

    # filter based on params
    if category_slugs:
        records = records.filter(category__in=Category.objects.filter(slug__in=category_slugs))
    if platform_slugs:
        records = records.filter(platform__in=Platform.objects.filter(slug__in=platform_slugs))

    # group by month/year
    result: dict[str, list[dict]] = {}
    for record in records:
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
    filter_backends = [filters.SearchFilter]
    search_fields = ["name",]


class FirmViewSet(viewsets.ModelViewSet):
    queryset = Firm.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = FirmSerializer


class CitationViewSet(viewsets.ModelViewSet):
    queryset = Citation.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = CitationSerializer
