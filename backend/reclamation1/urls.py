from django.conf.urls import url
from .views import *
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(
        "clients/",
        csrf_exempt(ClientCreateView.as_view()),
        name="client",
    ),
    url(
        "createReclamations/",
        csrf_exempt(CreateReclamation.as_view()),
        name="reclamtion",
    ),
    url(
        "getDepartements/",
        csrf_exempt(DepartementView.as_view()),
        name="departement",
    ),
    url(
        "getClients/",
        csrf_exempt(ClientListView.as_view()),
        name="getClient",
    ),
    url(
        "getStatus/",
        csrf_exempt(GetStatus.as_view()),
        name="getStatus",
    ),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
