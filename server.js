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

const resoultSchema = new mongoose.Schema({
  username1: String,
  togrilari1: String,
  notogrilari1: String,
  umumiyvaqt1: String,
  sana1: String,
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
  const { emailValue, password } = req.body;

  try {
    const user = await User.findOne({ emailValue });
    if (!user) {
      return res.json({ message: false });
    }

    if (user.password != password) {
      return res.json({ message: 0 });
    }
    res.json({ message: true , name: user.nameValue});
  } catch (err) {
    res.status(500).json({ error: "Xatolik yuz berdi" });
  }
});





const Resoult = mongoose.model("Resoult", resoultSchema);

app.post("/resoultsave", async (req, res) => {
  const { username1, togrilari1, notogrilari1, umumiyvaqt1, sana1 } = req.body;
  const natija = new Resoult({ username1, togrilari1, notogrilari1, umumiyvaqt1, sana1 });
  try { 
      natija.save();
      res.json({ message: true });
    
  } catch (err) {
    res.status(500).json({ error: "Xatolik yuz berdi" });
  }
});

app.get("/resoultall-speed", async (req, res) => {
  try {
    const results = await Resoult.find();

    // Tezlikni hisoblab, sort qilish
    const sorted = results
      .map((r) => ({
        ...r._doc,
        tezlik: r.togrilari1 / r.umumiyvaqt1, // tezlik formula
      }))
      .sort((a, b) => b.tezlik - a.tezlik); // eng tez → sekin

    res.json(sorted);

  } catch (err) {
    res.status(500).json({ error: "Sortlashda xatolik yuz berdi" });
  }
});




app.listen(3000, () =>
  console.log("🚀 Server http://localhost:3000 da ishlamoqda")
);
