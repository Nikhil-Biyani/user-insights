from django.urls import path
from .views import MovieDetailView, HomeView, register, login
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    path('movie/<int:pk>', MovieDetailView.as_view(), name="movie-detail"),
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('logout/', LogoutView.as_view(next_page='home'), name='logout')
]
