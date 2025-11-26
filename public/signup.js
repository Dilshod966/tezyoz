let xatolik2 = document.getElementsByClassName("xatolik");

async function register() {
  const name = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("pas1").value;
  const emailValue = email.value;
  const nameValue = name.value;
  let pas1 = document.getElementById("pas1");
  let pas2 = document.getElementById("pas2");
  let xatolik = document.getElementsByClassName("xatolik");

  if (name.value.trim() != "") {
    if (email.value.trim() != "") {
      if (!email.value.includes("@")) {
        email.style.border = "1px solid red";
        xatolik[1].innerHTML = "Bunday email turi yo'q!";
        xatolik[1].style.visibility = "visible";
      } else if (pas1.value.trim() != "") {
        if (pas2.value.trim() != "") {
          if (pas1.value != pas2.value) {
            pas2.style.border = "1px solid red";
            xatolik[3].innerHTML = "Takroriy parol mos emas!";
            xatolik[3].style.visibility = "visible";
          } else {
            const res = await fetch("http://localhost:3000/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ nameValue, emailValue, password }),
            });
            const data = await res.json();
            if(data.error) {
              alert(data.error);
            }
            if(data.message) {
              window.location.href = 'index.html'
            }
          }
        } else {
          pas2.style.border = "1px solid red";
          xatolik[3].innerHTML = "Majburiy maydon!";
          xatolik[3].style.visibility = "visible";
        }
      } else {
        pas1.style.border = "1px solid red";
        xatolik[2].innerHTML = "Majburiy maydon!";
        xatolik[2].style.visibility = "visible";
      }
    } else {
      email.style.border = "1px solid red";
      xatolik[1].innerHTML = "Majburiy maydon!";
      xatolik[1].style.visibility = "visible";
    }
  } else {
    name.style.border = "1px solid red";
    xatolik[0].innerHTML = "Majburiy maydon!";
    xatolik[0].style.visibility = "visible";
  }
}

let inputlar = document.getElementsByTagName("input");

let i = 0;
while (inputlar[i] != undefined) {
  let j = i;
  inputlar[i].addEventListener("change", () => {
    xatolik2[j].style.visibility = "hidden";
    inputlar[j].style.border = "none";
  });
  i++;
}
