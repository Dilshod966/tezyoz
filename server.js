const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// 🔗 MongoDB Atlas bilan ulan
mongoose
  .connect(
    "mongodb+srv://bohodirovdilshod3_db_user:D5724251@cluster0.um5d4gi.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("✅ MongoDB ulandi"))
  .catch((err) => console.log(err));

// 📦 Schema yaratamiz
const userSchema = new mongoose.Schema({
  nameValue: String,
  emailValue: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
// 📨 signup API
app.post("/signup", async (req, res) => {
  const { nameValue, emailValue, password } = req.body;
  const user = new User({ nameValue, emailValue, password });
  try {
    let tek = await User.findOne({ emailValue });
    if (!tek) {
      await user.save();
      res.json({ message: true });
    }
    else {
      res.json({ message: false });
    }
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

app.listen(3000, () =>
  console.log("🚀 Server http://localhost:3000 da ishlamoqda")
);
