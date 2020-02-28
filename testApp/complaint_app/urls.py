from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet

router = routers.SimpleRouter(trailing_slash=False)
router.register(r'', ComplaintViewSet, 'complaint')
router.register(r'opencases/', OpenCasesViewSet, 'openCases')
router.register(r'closedcases/', ClosedCasesViewSet, 'closedCases')
router.register(r'topComplaints/', TopComplaintTypeViewSet,
                'topComplaints')
#urlpatterns = []
urlpatterns = router.urls
