from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count
import operator
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

    def list(self, request):
        # Get only the open complaints from the user's district
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        openComplaints = self.queryset.filter(
            account__endswith=user_district).filter(closedate__isnull=True)
        serializer_instance = self.serializer_class(openComplaints, many=True)
        return Response(serializer_instance.data, status=status.HTTP_200_OK)


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
        return Response(serializer_instance.data, status=status.HTTP_200_OK)


class TopComplaintTypeViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    # serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()
    def list(self, request):
        user = self.request.user
        user_profile = user.userprofile
        user_district = user_profile.district
        allDistrictComplaints = Complaint.objects.filter(
            account__endswith=user_district)
        topComplaints = [*allDistrictComplaints.values('complaint_type').order_by('complaint_type').annotate(cnt=Count('complaint_type'))
        .values('complaint_type', 'cnt').order_by('-cnt')[:3]] 
        # topComplaints = {}
        # for complaint in allDistrictComplaints:
        #     if complaint.complaint_type in topComplaints:
        #         topComplaints[complaint.complaint_type] += 1
        #     else:
        #         topComplaints[complaint.complaint_type] = 1
        # sortedTopComplaints = sorted(
        #     topComplaints.items(), key=operator.itemgetter(1), reverse=True)
        # print(sortedTopComplaints[slice(0, 3)])
        return Response(topComplaints)

    # def list(self, request):
    #     # Get the top 3 complaint types from the user's district
    #     user = self.request.user
    #     user_profile = user.userprofile
    #     user_district = user_profile.district
    #     topComplaints = self.queryset.filter(account__endswith=user_district)
    #     finalTopComplaints = topComplaints.values.annotate(
    #         tc=Count('complaint_type')).order_by('-tc')
    #     return Response(finalTopComplaints, status=status.HTTP_200_OK)
