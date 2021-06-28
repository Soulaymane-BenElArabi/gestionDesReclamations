from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Client, Departement, Reclamation


class ClientAdmin(admin.ModelAdmin):
    list_display = ["nom", "prenom", "cin", "telephone", "email", "adresse"]


class DepartementAdmin(admin.ModelAdmin):
    list_display = ["nomDep", "email"]


class ReclamationsAdmin(admin.ModelAdmin):
    list_display = [
        "client",
        "departement",
        "created_at",
        "status",
        "code",
        "reponse",
    ]
    # list_filter = ["created_at"]
    search_fields = ["code"]


# admin.site.unregister(Group)
admin.site.register(Client, ClientAdmin)
admin.site.register(Departement, DepartementAdmin)
admin.site.register(Reclamation, ReclamationsAdmin)
admin.site.site_header = "Gestion des reclamations"
admin.site.index_title = "GestionEnsaj"
admin.site.site_title = "Ensaj"
