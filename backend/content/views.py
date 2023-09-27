from rest_framework import views
from rest_framework.request import Request
from rest_framework.response import Response
from content.models import FrontPage
from content.serializers import FrontPageSerializer


class FrontPageView(views.APIView):
    def get(self, request: Request):
        front_page = FrontPage.objects.get()
        return Response(FrontPageSerializer(front_page).data)
