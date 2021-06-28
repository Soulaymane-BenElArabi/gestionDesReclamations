from rest_framework import serializers
from .models import Client, Departement, Reclamation


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = "__all__"
        # fields = ("nom", "prenom", "cin", "telephone", "email", "adresse")


class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departement
        fields = ("id", "nomDep", "email")


class ReclamationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamation
        fields = "__all__"
        # fields = ("client", "departement", "")
