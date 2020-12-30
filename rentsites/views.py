# views.py
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rentsites.models import Rentsite
from rentsites.serializers import RentsitesSerializer
from rest_framework.response import Response


def index(request):
    return render(request, template_name='index.html')


class RentsitesViewSet(viewsets.ModelViewSet):
    queryset = Rentsite.objects.all()
    serializer_class = RentsitesSerializer