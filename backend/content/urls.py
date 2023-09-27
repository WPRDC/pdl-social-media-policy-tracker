from django.urls import path

from content.views import FrontPageView

urlpatterns = [path("front-page", FrontPageView.as_view())]
