from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
# Create your views here.

class PostView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)