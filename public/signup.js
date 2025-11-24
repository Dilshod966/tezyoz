let pas1 = document.getElementById("pas1");
let pas2 = document.getElementById("pas2");
let xatolik = document.getElementsByClassName("xatolik");

async function register() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pas1").value;

  const res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  alert(data.message || data.error);

  if (pas1.value != pas2.value) {
    pas2.style.border = "1px solid red";
    xatolik[3].innerHTML = "Takroriy parol mos emas!";
    xatolik[3].style.visibility = "visible";
  }
}
