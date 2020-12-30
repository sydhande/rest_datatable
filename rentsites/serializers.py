from rentsites.models import Rentsite
from rest_framework import serializers

class RentsitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rentsite
        fields = ('ssa', 'sdca', 'name','id')