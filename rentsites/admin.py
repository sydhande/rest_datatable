from django.contrib import admin
from rentsites.models import Rentsite

# Register your models here.
class RentsiteAdmin(admin.ModelAdmin):
    pass

admin.site.register(Rentsite, RentsiteAdmin )