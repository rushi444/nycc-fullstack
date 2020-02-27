from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ComplaintViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()

    # def get_queryset(self):
    #   user = self.request.user
    #   user_profile = user.userprofile
    #   user_district = user_profile.district
    #   return Complaint.objects.filter(council_dist__endswith=user_district)
    
# Get all complaints from the user's district
    def list(self, *args, **kwargs):
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        complaints = self.queryset.filter(council_dist__endswith=user_district)
        serializer_instance = self.serializer_class(complaints, many=True)
        return Response(serializer_instance.data, status=status.HTTP_200_OK)


class OpenCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']

    def list(self, request):
        # Get only the open complaints from the user's district
        return Response()


class ClosedCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']

    def list(self, request):
        # Get only complaints that are close from the user's district
        return Response()


class TopComplaintTypeViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']

    def list(self, request):
        # Get the top 3 complaint types from the user's district
        return Response()
