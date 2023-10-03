from django.core.management.base import BaseCommand

from tracker.models import Record


class Command(BaseCommand):
    help = "Checks for records in the database.  Exits 0 if there are, exits 1 fi there aren't."

    def handle(self, *args, **options):
        try:
            if len(Record.objects.all()):
                exit(0)
            exit(1)
        except Exception:
            exit(1)
