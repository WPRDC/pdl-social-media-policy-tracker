from django.forms import ModelForm, Textarea


class RecordForm(ModelForm):
    class Meta:
        widgets = {
            "summary": Textarea(attrs={"cols": 100, "rows": 10}),
        }
