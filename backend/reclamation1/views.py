from django.http.response import Http404
from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    ListCreateAPIView,
    RetrieveAPIView,
)
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework import status
from rest_framework.viewsets import ViewSet
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
import random
import string


class GetStatus(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Reclamation.objects.all()
    serializer_class = ReclamationSerializer


"""     def retrieve(self, request, code=None):
        status = get_object_or_404(self.queryset, code=code)
        serializer_class = ReclamationSerializer(status)
        return Response(serializer_class.data) """


# used to zip files and send it to departements
"""import zipfile

with zipfile.ZipFile(
    Reclamation.objects.order_by("-created_at")[0].client.nom, "w"
) as file:
    file.write(Reclamation.objects.order_by("-created_at")[0].image)
    file.write(Reclamation.objects.order_by("-created_at")[0].fichier)
    # TypeError: stat: path should be string, bytes, os.PathLike or integer, not ImageFieldFile
"""


class CreateReclamation(APIView):
    permission_classes = (AllowAny,)
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = ReclamationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            c = Reclamation.objects.get(
                departement=request.data["departement"][0:],
                client=request.data["client"][0:],
                commentaire=request.data["commentaire"][0:],
            )
            c.code = randomCode()
            c.save()
            # l'envoie d'email au clients
            template = render_to_string(
                "reclamation1/suivie_email.html",
                {
                    "name": c.client.nom,
                    "code": c.code,
                },
            )

            email = EmailMessage(
                "Suivie de votre reclamation",
                template,
                settings.EMAIL_HOST_USER,
                [c.client.email],
            )

            email.fail_silently = False
            email.send()
            # l'envoie d'email au departement
            template1 = render_to_string(
                "reclamation1/envoie_departemnt.html",
                {
                    "departement": c.departement.nomDep,
                    "nomClient": c.client.nom,
                },
            )
            email1 = EmailMessage(
                "Nouvelle réclamation",
                template1,
                settings.EMAIL_HOST_USER,
                [c.departement.email],
            )

            email1.fail_silently = False
            email1.send()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# used to generate random code


# Create your views here.
def randomCode():
    longueur = 10
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    num = string.digits
    all = lower + upper + num
    temp = random.sample(all, longueur)
    codeSuivie = "".join(temp)
    return codeSuivie


class ClientCreateView(CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class DepartementView(ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Departement.objects.all()
    serializer_class = DepartementSerializer


class ClientListView(ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Client.objects.order_by("-created_at")
    serializer_class = ClientSerializer


from django.db.models import Count


def index(request):
    r = (
        Reclamation.objects.values_list("departement")
        .order_by("departement")
        .annotate(count=Count("departement"))
        .filter(status="True")
    )
    Deps = []
    nombre = []
    for tup in r:
        Deps.append(tup[0])
        nombre.append(tup[1])

    return render(
        request,
        "admin/index.html",
        {"deps": Deps, "nombre": nombre},
    )


#  r = Reclamation.objects.values_list('departement').order_by('departement')
# .annotate(count=Count('departement')).get(status="True")
