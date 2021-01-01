# views.py
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rentsites.models import Rentsite
from rentsites.serializers import RentsitesSerializer
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from collections import OrderedDict


def index(request):
    return render(request, template_name='index.html')

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('page', self.page.number),
            ('page_size', self.page_size),
            ('results', data)
        ]))



class RentsitesViewSet(viewsets.ModelViewSet):
    queryset = Rentsite.objects.all()
    serializer_class = RentsitesSerializer
    pagination_class = StandardResultsSetPagination