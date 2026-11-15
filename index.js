}

  // Contact form feedback
  const form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thanks! Your message has been sent.");
      form.reset();
    });
  }
});
