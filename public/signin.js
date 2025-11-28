xatolik = document.getElementsByClassName("xatolik");
pas1 = document.getElementById("parol");
pochta = document.getElementById("pochta");
async function signin() {
  const email = document.getElementById("pochta").value;
  const password = document.getElementById("parol").value;

  const res = await fetch("http://localhost:3000/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.error) {
    alert(data.error);
  } else {
    if (data.message) {
      localStorage.setItem("name", data.odi);
      window.location.href = "index.html";
    } else if (data.message == false) {
      pochta.style.border = "1px solid red";
      xatolik[0].innerHTML = "Bunday email ro'yhatdan o'tmagan!";
      xatolik[0].style.visibility = "visible";
    } else {
      pas1.style.border = "1px solid red";
      xatolik[1].innerHTML = "Parol notog'ri!";
      xatolik[1].style.visibility = "visible";
    }
  }
}





let inputlar = document.getElementsByTagName("input");

let i = 0;
while (inputlar[i] != undefined) {
  let j = i;
  inputlar[i].addEventListener("change", () => {
    xatolik[j].style.visibility = "hidden";
    inputlar[j].style.border = "none";
  });
  i++;
}