import uuid
from django.db import models
from django.utils import timezone

# Create your models here.

class User(models.Model):
    class Meta:
        db_table = "users"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    password = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)