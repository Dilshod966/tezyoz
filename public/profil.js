
async function profil() {
  const nameValue = localStorage.getItem('name');

  const res = await fetch("http://localhost:3000/profil", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nameValue }),
  });

  const data = await res.json();


  console.log(data);

}

profil();

