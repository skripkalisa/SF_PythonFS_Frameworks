from django.contrib import admin
from django.urls import path
from django.urls import re_path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    re_path(r'^api/posts', views.posts),
    re_path(r'^api/like_post/(?P<post_id>[0-9]+)$', views.like_post),
    re_path(r'^api/del_post/(?P<post_id>[0-9]+)$', views.delete_post),
]
