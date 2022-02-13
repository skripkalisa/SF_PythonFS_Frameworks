from django.urls import path
from . views import RecipeList
# from rest_framework.schemas import get_schema_view
# from django.views.generic import TemplateView

urlpatterns = [
  path('', RecipeList.as_view()),
]