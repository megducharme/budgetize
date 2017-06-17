import django
from django.conf.urls import url
from budgetizeAPI import views

urlpatterns = [
    url(r'^$', views.api_root, name='api-root'),
    # url(r'^transaction/$', views.post_transaction, name='save-transaction'),
]
