from django.shortcuts import render, redirect
from django.core.mail import send_mail


def index(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        subject = request.POST["subject"]
        message = request.POST["message"]
        receiver = [
            "jose.contreras.p25@gmail.com",
        ]

        send_mail(
            subject,
            message,
            email,
            receiver,
            fail_silently=False,
        )

        return redirect("contact_success")

    else:
        return render(request, "core/index.html")


def contact_success_view(request):
    return render(request, "core/contact_success.html")
