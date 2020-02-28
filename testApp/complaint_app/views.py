from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count
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

    def list(self, request):
        # Get all complaints from the user's district
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        complaints = self.queryset.filter(account__endswith=user_district)
        serializer_instance = self.serializer_class(complaints, many=True)
        return Response(serializer_instance.data, status=status.HTTP_200_OK)


class OpenCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()
    print('hi')

    def list(self, request):
        # Get only the open complaints from the user's district
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        openComplaints = self.queryset.filter(account__endswith=user_district).filter(closedate__isnull=True)
        serializer_instance = self.serializer_class(openComplaints, many=True)
        return Response('hi')


class ClosedCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()

    def list(self, request):
        # Get only complaints that are close from the user's district
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        closedComplaints = self.queryset.filter(
            account__endswith=user_district).filter(closedate__isnull=False)
        serializer_instance = self.serializer_class(
            closedComplaints, many=True)
        return Response(serializer_instance, status=status.HTTP_200_OK)


class TopComplaintTypeViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()

    def list(self, request):
        # Get the top 3 complaint types from the user's district
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        topComplaints = self.queryset.filter(account__endswith=user_district).annotate(
            tc=Count('complaint-type')).order_by('-tc')
        return Response()
