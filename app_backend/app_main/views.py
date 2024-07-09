from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import DetailView, ListView
from .models import Movies
from .forms import UserRegisterForm
from django.contrib import auth
from django.contrib.auth.forms import AuthenticationForm 


class MovieDetailView(DetailView):
    model = Movies

    def get_context_data(self, *args, **kwargs):
        mov_menu = Movies.objects.all()
        context = super(Movies, self).get_context_data(*args, **kwargs)
        context["mov_menu"] = mov_menu

        return context
    
class HomeView(ListView):
    model = Movies
    ordering = ['-average_rating']

    def get_context_data(self, *args, **kwargs):
        cat_menu = Movies.objects.all()
        context = super(HomeView, self).get_context_data(*args, **kwargs)
        context["cat_menu"] = cat_menu

        return context
    
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth.login(request, user)
            return redirect('home')
    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form}) 

def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
                return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form}) 