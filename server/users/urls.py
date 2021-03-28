from rest_framework.routers import DefaultRouter

from .views import UserViewSet, RecordViewSet


router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'records', RecordViewSet)

urlpatterns = router.urls