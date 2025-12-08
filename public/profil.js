async function profil() {
  const nameValue = localStorage.getItem("name");
  const email = document.getElementById("email2");
  const name2 = document.getElementById("nameValue");
  name2.innerHTML = nameValue;
  const jadvalcha = document.getElementById("jadvalcha");

  const res = await fetch("http://localhost:3000/profil", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nameValue }),
  });

  const data = await res.json();
  email.innerHTML = data[1];
  document.getElementById("res_leng").innerHTML = data[0].length;
  console.log(data[0], data[1]);
  
  let yangiTr = document.createElement("tr");
  yangiTr.innerHTML = `
                    <td>
                       ${data[0][0].sana1}
                    </td>
                    <td>
                        ${data[0][0].togrilari1*60/data[0][0].umumiyvaqt1} So'z/daq
                    </td>
                    <td>
                        <span>${Math.round(Number(data[0][0].togrilari1)*100/(Number(data[0][0].togrilari1) + Number(data[0][0].notogrilari1)))}%</span>
                    </td>
                    <td>${data[0][0].notogrilari1}</td>
                    <td>Vaqt (${data[0][0].umumiyvaqt1}s)</td>
                    <td>O'zbek</td>
                    <td>${data[0][0].umumiyvaqt1}s</td>
                `;
jadvalcha.appendChild(yangiTr);
}

profil();
