from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet, ComplaintByConstituents, GetUserProfileViewSet

router = routers.SimpleRouter(trailing_slash=False)
router.register(r'', ComplaintViewSet, 'complaint')
router.register(r'complaintsByConstituents/', ComplaintByConstituents, 'complaintsByConstituents')
router.register(r'userProfile/', GetUserProfileViewSet, 'userProfile')
router.register(r'openCases/', OpenCasesViewSet, 'openCases')
router.register(r'closedCases/', ClosedCasesViewSet, 'closedCases')
router.register(r'topComplaints/', TopComplaintTypeViewSet,
                'topComplaints')

#urlpatterns = []
urlpatterns = router.urls
