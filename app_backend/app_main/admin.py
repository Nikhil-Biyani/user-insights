from django.contrib import admin
from .models import Movies, WatchHistory

# Register your models here.
admin.site.register(Movies)
admin.site.register(WatchHistory)