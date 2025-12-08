let natijalar = document.getElementById("natijalar");

async function getResultsBySpeed() {
  try {
    const res = await fetch("http://localhost:3000/resoultall-speed");
    const data = await res.json();
    let index = 0;
    let baza = []
    for (let i = 0; i <= 9; i++) {
        
      let yangiNatija = document.createElement("div");
      if (i > 2) {
        yangiNatija.setAttribute("class", "natija");
      } else {
        yangiNatija.setAttribute("class", "natija top3");
      }
      while(true) {
        
        if(!baza.includes(data[index].username1)) {
            break;
        }
        index++;
      }
      yangiNatija.innerHTML = `
                    <div>
                        <div>#${i+1}</div>
                        <div><img src="" alt=""></div>
                        <div>
                            <p>${data[index].username1}</p>
                            <span>1 tugallangan test</span>
                        </div>
                    </div>
                    <div>
                        <h3>${data[index].togrilari1/data[index].umumiyvaqt1*60} So'z/daq</h3>
                    </div>`;
      natijalar.appendChild(yangiNatija);
      baza.push(data[index].username1);
      index++;
    }
  } catch (err) {
    console.log("Xatolik:", err);
  }
}

getResultsBySpeed();
