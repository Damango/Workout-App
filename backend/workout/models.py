from django.db import models

# Create your models here.


class Workout(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    jtype = models.JSONField(default=[])

    def __str__(self):
        return self.title
