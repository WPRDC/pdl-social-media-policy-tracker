from rest_framework import routers
from django.urls import path
from tracker.views import (
    RecordViewSet,
    CitationViewSet,
    CategoryViewSet,
    PlatformViewSet,
    FirmViewSet,
    timeline_view,
)

router = routers.SimpleRouter()
router.register(r"records", RecordViewSet)
router.register(r"category", CategoryViewSet)
router.register(r"platform", PlatformViewSet)
router.register(r"firm", FirmViewSet)
router.register(r"citation", CitationViewSet)

urlpatterns = router.urls + [
    path("timeline", timeline_view),
]
