from django.db import models

# Create your models here.
class Rentsite(models.Model):
    ssa = models.CharField(max_length=20, null=True, blank=True, default=None)
    sdca = models.CharField(max_length=30, null=True, blank=True, default=None)
    name = models.CharField(max_length=50, null=True, blank=True, default=None)

    def __str__(self):
        return self.name