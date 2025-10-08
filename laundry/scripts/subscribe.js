document.querySelector(".subscribe-btn").addEventListener("click", () => {
  const name = document.querySelector(".subscribe input[type='text']").value;
  const email = document.querySelector(".subscribe input[type='email']").value;

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  emailjs.send("service_ob9nda8", "template_xyb1cns", {
    name: name,
    email: email,
  })
  .then(() => {
    alert("✅ Subscription successful! Check your inbox for a happy message.");
  })
  .catch((err) => {
    console.error("Failed:", err);
    alert("❌ Subscription failed, try again later.");
  });
});
