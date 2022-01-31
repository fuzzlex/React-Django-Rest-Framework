from django.contrib import admin
from api.models import Article



@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title',)
