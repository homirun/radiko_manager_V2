from django.db import models
from django.utils import timezone


class ReservedContent(models.Model):

    name = models.CharField(max_length=255)
    start_time = models.DateTimeField(default=timezone.now)
    end_time = models.DateTimeField(default=timezone.now)
    is_started = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)
