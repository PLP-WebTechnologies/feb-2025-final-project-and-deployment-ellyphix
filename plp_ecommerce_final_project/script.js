
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let valid = true;
      requiredFields.forEach(field => {
        if (!field.value) valid = false;
      });
      if (!valid) {
        alert("Please fill in all required fields.");
        e.preventDefault();
      }
    });
  });
});
