from django.db import models
from django.utils.translation import gettext_lazy as _


def upload_to(instance, filename):
    return "reclamation/{filename}".format(filename=filename)


# Create your models here.
class Client(models.Model):
    nom = models.CharField(max_length=20)
    prenom = models.CharField(max_length=20)
    cin = models.CharField(max_length=20, primary_key=True)
    telephone = models.CharField(max_length=10)
    email = models.EmailField()
    adresse = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)


class Departement(models.Model):
    nomDep = models.CharField(max_length=40)
    email = models.EmailField()


class Reclamation(models.Model):
    client = models.ForeignKey("Client", on_delete=models.CASCADE)
    departement = models.ForeignKey("Departement", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    commentaire = models.TextField(blank=True, null=True)
    image = models.ImageField(_("Image"), upload_to=upload_to, null=True, blank=True)
    """ image = models.ImageField(
        blank=True,
        null=True,
        verbose_name="Image Supplementaire",
        upload_to="ReclamationImages",
    ) """
    fichier = models.FileField(
        _("File"),
        blank=True,
        null=True,
        upload_to=upload_to,
    )
    # status = models.TextChoices(choices=["creation", "encours", "traitee"])

    status = models.BooleanField(blank=True, default=False)
    code = models.CharField(max_length=20, null=True, blank=True, default="")
    reponse = models.TextField(max_length=400, null=True, blank=True)
