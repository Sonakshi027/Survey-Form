const form = document.getElementById("surveyForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  // Basic validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;

  if (name === "" || email === "" || rating === "") {
    message.style.color = "red";
    message.textContent = "⚠️ Please fill in all required fields!";
    return;
  }

  // Show success message
  message.style.color = "green";
  message.textContent = "✅ Thank you! Your response has been recorded.";

  // Reset form
  form.reset();
});
