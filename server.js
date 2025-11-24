const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// 🔗 MongoDB Atlas bilan ulan
mongoose.connect("mongodb+srv://bohodirovdilshod3_db_user:D5724251@cluster0.um5d4gi.mongodb.net/?appName=Cluster0")
  .then(() => console.log("✅ MongoDB ulandi"))
  .catch(err => console.log(err));

// 📦 Schema yaratamiz
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);
// 📨 signup API
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "Foydalanuvchi saqlandi!" });
  } catch (err) {
    res.status(500).json({ error: "Xatolik yuz berdi" });
  }
});


app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Bunday email topilmadi!" });
    }

    if (user.password !== password) {
      return res.json({ error: "Parol noto‘g‘ri!" });
    }

    res.json({ message: "Kirish muvaffaqiyatli!", name: user.name });
  } catch (err) {
    res.status(500).json({ error: "Xatolik yuz berdi" });
  }
});

app.listen(3000, () => console.log("🚀 Server http://localhost:3000 da ishlamoqda"));
