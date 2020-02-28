from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet

router = routers.SimpleRouter()
router.register(r'', ComplaintViewSet, 'complaint')
router.register(r'opencases', OpenCasesViewSet, 'openCases')
# router.register(r'closedCases', ClosedCasesViewSet, base_name='closedCases')
# router.register(r'topComplaints', TopComplaintTypeViewSet, base_name='topComplaints')
#urlpatterns = []
urlpatterns = router.urls