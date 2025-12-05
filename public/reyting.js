



async function getResultsBySpeed() {
  try {
    const res = await fetch("http://localhost:3000/resoultall-speed");
    const data = await res.json();
    
  } catch (err) {
    console.log("Xatolik:", err);
  }
}


getResultsBySpeed();