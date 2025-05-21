from django.shortcuts import render, redirect
from django.core.mail import EmailMessage


def index(request):
    if request.method == "POST":
        name = request.POST["name"]
        sender = (request.POST["email"],)
        subject = request.POST["subject"]
        message = request.POST["message"]
        receiver = ("jose.contreras.p25@gmail.com",)

        email = EmailMessage(
            subject=subject,
            body=message,
            from_email=receiver[0],
            to=receiver,
            reply_to=sender
        )

        email.send()

        return redirect("contact_success")

    else:
        return render(request, "core/index.html")


def contact_success_view(request):
    return render(request, "core/contact_success.html")
