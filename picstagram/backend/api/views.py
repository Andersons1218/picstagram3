from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
from .serializer import *
# Create your views here.


class PostView(APIView):
    serializer_class = PostSerializer
    def get(self, request):
        posts = [{'id':posts.id, 'likes':posts.likes, 'comments':posts.comments, 'description':posts.description}
        for posts in Post.objects.all()]
        return Response(posts)
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class CreatePostView(APIView):
    serializer_class = PostCreateSerializer
    def post(self, request):
        serializer = PostCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    def get (self, request):
        posts = [{'id':posts.id, 'likes':posts.likes, 'comments':posts.comments, 'description':posts.description}
        for posts in Post.objects.all()]
        return Response(posts)

class UpdatePostView(APIView):
    serializer_class = PostSerializer
    def get(self, request, pk):
        posts = Post.objects.get(id=pk)
        serializer = PostSerializer(posts)
        return Response(serializer.data)
    def put(self, request, pk):
        posts = Post.objects.get(id=pk)
        serializer = PostSerializer(posts, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    def delete(self, request, pk):
        posts = Post.objects.get(id=pk)
        posts.delete()
        return Response(status=204)
class DeletePostView(APIView):
    serializer_class = PostSerializer
    def get(self, request, pk):
        posts = Post.objects.get(id=pk)
        serializer = PostSerializer(posts)
        return Response(serializer.data)
    def put(self, request, pk):
        posts = Post.objects.get(id=pk)
        serializer = PostSerializer(posts, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    def delete(self, request, pk):
        posts = Post.objects.get(id=pk)
        posts.delete()
        return Response(status=204)