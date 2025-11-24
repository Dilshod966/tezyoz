async function signin() {
      const email = document.getElementById("pochta").value;
      const password = document.getElementById("parol").value;

      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      alert(data.message || data.error);

      // Agar kirish muvaffaqiyatli bo‘lsa, bosh sahifaga yo‘naltiramiz
      if (data.message) {
        window.location.href = "index.html";
      }
    }