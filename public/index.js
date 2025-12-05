document.createElement("div").style.backgroundColor;

function surish(a) {
  let tugmacha = document.getElementsByClassName("suruvchi1")[a];

  if (tugmacha.style.justifyContent == "flex-start") {
    tugmacha.style.justifyContent = "flex-end";
    tugmacha.style.backgroundColor = "black";
  } else {
    tugmacha.style.justifyContent = "flex-start";
    tugmacha.style.backgroundColor = "rgb(192, 192, 192)";
  }
}

let body = document.body;
let nav = document.getElementsByTagName("nav")[0];
let tugma = document.getElementsByClassName("tugma");
let tanlovRejim = document.getElementById("tanlovRejim");
let yoniq = document.getElementById("yoniq");
let yoniqlar = document.querySelectorAll("#yoniq");
let main = document.getElementsByTagName("main")[0];
let Mainspan = document.querySelectorAll("main span");
let tugma2 = document.getElementsByClassName("tugma2");
let odiyuq = document.querySelector("main > div:nth-child(2)");
let sign = document.getElementsByClassName("sign");
let input = document.querySelectorAll(".sign input");
let tugma3 = document.getElementsByClassName("tugma3");
let paragrf = document.querySelectorAll(".sign p");
let signpa = document.querySelectorAll(".sign p a");
let flexchaSpan = document.querySelector(".flexcha span:nth-child(2)");
let naticha = document.getElementsByClassName("natija");
let natijaP = document.querySelectorAll(".natija > div:nth-child(1) p");
let natijaSpan = document.querySelectorAll(".natija span");
let top3 = document.getElementsByClassName("top3");
let navDiva = document.querySelectorAll("nav div a");
let tugma4 = document.getElementsByClassName("tugma4");
let vaqtSpan = document.querySelectorAll(".vaqt span");
let suruvchi1 = document.getElementsByClassName("suruvchi1");
let suruvchi2 = document.getElementsByClassName("suruvchi2");
let kulrangSpan = document.querySelectorAll(".kulrang span");
let trlar = document.querySelectorAll(".jadval table tr");
let rasmlar = document.querySelectorAll("nav img");
let h1lar = document.querySelector(".senter > h1");
let Plar = document.querySelector(".senter > p");
let LogoP = document.querySelector(".logotip p");
rasmanzil = [
  [
    "icons8-keyboard-96 (1).png",
    "icons8-keyboard-96 (1).png",
    "icons8-cup-60 (1).png",
    "icons8-settings-24 (1).png",
    "icons8-settings-24 (1).png",
  ],
  [
    "icons8-keyboard-96.png",
    "icons8-keyboard-96.png",
    "icons8-cup-60.png",
    "icons8-settings-24.png",
    "icons8-settings-24.png",
  ],
];
rasmanzilIndex = [
  ["icons8-settings-24 (1).png", "icons8-restart-50 (1).png"],
  ["icons8-settings-24.png", "icons8-restart-50.png"],
];
function rasmChange(a, b, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].setAttribute("src", `./image/${c == "tun" ? b[0][i] : b[1][i]}`);
    i++;
  }
}

function kun() {
  let smile = document.getElementsByClassName("resoult")[0];
  let smile1 = document.getElementById("yaxshi");
  let smile2 = document.getElementById("norm");
  let smile3 = document.getElementById("yomon");

  if (smile1 != undefined) {
    smile1.style.backgroundImage = "radial-gradient(rgb(167, 224, 167),white)";
  }
  if (smile2 != undefined) {
    smile2.style.backgroundImage = "radial-gradient(rgb(255, 237, 204),white)";
  }
  if (smile3 != undefined) {
    smile3.style.backgroundImage = "radial-gradient(rgb(255, 213, 213),white)";
  }
  if (smile != undefined) {
    smile.style.color = "black";
  }

  body.style.backgroundColor = "rgb(240, 240, 240)";
  nav.style.borderBottom = "0.5px solid rgb(185, 185, 185);";
  siklcolor(tugma, "black");
  siklcolor(sign, "black");
  siklhover(tugma, "white", "rgba(0, 0, 0, 0)");
  yoniq.style.backgroundColor = "black";
  rasmChange(rasmlar, rasmanzil, "kun");
  yoniq.style.color = "white";
  h1lar.style.color = "black";
  LogoP.style.color = "black";
  Plar.style.color = "black";

  if (main != undefined) {
    main.style.backgroundColor = "white";
    mainh4.style.color = "black";
    mainP.style.color = "black";
  }
  siklBorder(Mainspan, "rgb(206, 206, 206)");
  siklcolor(Mainspan, "black");
  siklcolor(tugma2, "black");
  rasmChange(tugma2Image, rasmanzilIndex, "kun");
  siklBoxShadow(tugma2, "0 0 4px rgb(171, 171, 171)");
  siklhover(tugma2, "rgb(219, 219, 219)", "rgba(0, 0, 0, 0)");
  if (odiyuq != undefined) {
    odiyuq.style.borderColor = "rgb(198, 198, 198)";
    odiyuq.style.color = "rgb(198, 198, 198)";
  }
  siklBackcolor(input, "white");
  siklBackcolor(sign, "white");
  siklBoxShadow(sign, "0 0 10px rgb(136, 136, 136)");
  siklBoxShadow(input, "0 1px 3px rgb(167, 167, 167)");
  siklcolor(tugma3, "white");
  siklBackcolor(tugma3, "black");
  siklhover(tugma3, "rgb(40, 40, 40)", "black");
  siklcolor(paragrf, "rgb(113, 113, 113)");
  siklcolor(signpa, "black");
  if (flexchaSpan != undefined) {
    flexchaSpan.style.borderColor = "rgb(104, 104, 104)";
    flexchaSpan.style.color = "rgb(66, 66, 66)";
  }
  siklBorder(naticha, "rgb(174, 174, 174)");
  siklcolor(natijaP, "black");
  siklcolor(natijaSpan, "rgb(95, 95, 95)");
  siklBoxShadow(top3, "0 0 3px yellowgreen");
  siklBackImage(top3, "linear-gradient(to right,rgb(247, 247, 152), white)");
  siklcolor(navDiva, "black");
  siklBackcolor(tugma4, "rgb(238, 238, 238)");
  siklBorder(tugma4, "rgb(167, 167, 167)");
  siklhover(tugma4, "rgb(255, 255, 255)", "rgb(238, 238, 238)");
  siklBorder(vaqtSpan, "rgb(167, 167, 167)");
  siklBackcolor(suruvchi1, "rgb(192, 192, 192)");
  siklBackcolor(suruvchi2, "rgb(233, 233, 233)");
  siklcolor(kulrangSpan, "rgb(147, 147, 147)");
  siklBorderBottom(trlar, "rgb(192, 192, 192)");
  LogoP.style.color = "black";
  siklhover(yoniqlar, "rgba(150, 150, 150, 1)", "black");
  if (minut != undefined) {
    minut.style.backgroundColor = "black";
  }
}
let tugma2Image = document.querySelectorAll(".tugma2 img");
let mainh4 = document.querySelector("main > div h4");
let mainP = document.querySelector("main > div p");
let minut = document.getElementById("vaqt");

function tun() {
  let smile = document.getElementsByClassName("resoult")[0];
  let smile1 = document.getElementById("yaxshi");
  let smile2 = document.getElementById("norm");
  let smile3 = document.getElementById("yomon");

  if (smile1 != undefined) {
    smile1.style.backgroundImage = "radial-gradient(rgba(45, 90, 45, 1),black)";
  }
  if (smile2 != undefined) {
    smile2.style.backgroundImage = "radial-gradient(rgba(97, 83, 56, 1),black)";
  }
  if (smile3 != undefined) {
    smile3.style.backgroundImage = "radial-gradient(rgba(99, 36, 36, 1),black)";
  }
  if (smile != undefined) {
    smile.style.color = "white";
  }
  if (minut != undefined) {
    minut.style.backgroundColor = "white";
  }
  body.style.backgroundColor = "black";
  nav.style.borderBottom = "0.5px solid rgb(185, 185, 185);";
  siklcolor(tugma, "white");
  siklhover(tugma, "rgba(82, 82, 82, 1)", "rgba(0, 0, 0, 0)");
  yoniq.style.backgroundColor = "white";
  yoniq.style.color = "black";
  rasmChange(rasmlar, rasmanzil, "tun");
  h1lar.style.color = "white";
  LogoP.style.color = "white";
  Plar.style.color = "white";
  if (main != undefined) {
    main.style.backgroundColor = "rgba(26, 26, 26, 1)";
  }
  siklBorder(Mainspan, "rgba(150, 150, 150, 1)");
  siklcolor(Mainspan, "rgba(150, 150, 150, 1)");
  siklcolor(tugma2, "white");
  rasmChange(tugma2Image, rasmanzilIndex, "tun");
  siklBoxShadow(tugma2, "0 0 4px rgb(171, 171, 171)");
  siklhover(tugma2, "rgba(82, 81, 81, 1)", "rgba(0, 0, 0, 0)");
  if (main != undefined) {
    mainh4.style.color = "white";
    mainP.style.color = "white";
  }
  if (odiyuq != undefined) {
    odiyuq.style.borderColor = "rgb(198, 198, 198)";
    odiyuq.style.color = "rgb(198, 198, 198)";
  }

  siklBackcolor(sign, "rgba(26, 26, 26, 1)");
  siklBoxShadow(sign, "0 0 10px rgb(136, 136, 136)");
  siklcolor(sign, "white");
  siklBackcolor(input, "black");
  siklBoxShadow(input, "0 1px 3px rgb(167, 167, 167)");
  siklcolor(tugma3, "black");
  siklBackcolor(tugma3, "white");
  siklhover(tugma3, "rgba(90, 90, 90, 1)", "white");
  siklcolor(paragrf, "rgb(113, 113, 113)");
  siklcolor(signpa, "white");
  if (flexchaSpan != undefined) {
    flexchaSpan.style.borderColor = "rgb(104, 104, 104)";
    flexchaSpan.style.color = "white";
  }
  siklBorder(naticha, "rgb(174, 174, 174)");
  siklcolor(natijaP, "white");
  siklcolor(natijaSpan, "rgba(192, 192, 192, 1)");
  siklBoxShadow(top3, "0 0 3px yellowgreen");
  siklBackImage(
    top3,
    "linear-gradient(to right,rgba(104, 104, 2, 1), rgba(90, 90, 90, 1)"
  );
  siklcolor(navDiva, "black");
  siklBackcolor(tugma4, "rgba(60, 60, 60, 1)");
  siklBorder(tugma4, "rgb(167, 167, 167)");
  siklhover(tugma4, "rgba(97, 97, 97, 1)", "rgba(60, 60, 60, 1)");
  siklBorder(vaqtSpan, "rgb(167, 167, 167)");
  siklBackcolor(suruvchi1, "rgb(192, 192, 192)");
  siklBackcolor(suruvchi2, "rgb(233, 233, 233)");
  siklcolor(kulrangSpan, "rgb(147, 147, 147)");
  siklBorderBottom(trlar, "rgb(192, 192, 192)");
  siklhover(yoniqlar, "rgba(150, 150, 150, 1)", "white");
}

function siklcolor(a, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].style.color = c;
    i++;
  }
}
function siklBackcolor(a, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].style.backgroundColor = c;
    i++;
  }
}

function siklBackImage(a, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].style.backgroundImage = c;
    i++;
  }
}

function siklBorder(a, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].style.borderColor = c;
    i++;
  }
}
function siklBorderBottom(a, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].style.borderBottomColor = c;
    i++;
  }
}
function siklBoxShadow(a, c) {
  let i = 0;
  while (a[i] != undefined) {
    a[i].style.boxShadow = c;
    i++;
  }
}

function siklhover(a, c1, c2) {
  let i = 0;
  while (a[i] != undefined) {
    let index = i;
    a[i].addEventListener("mouseenter", () => {
      a[index].style.backgroundColor = c1;
    });
    a[i].addEventListener("mouseleave", () => {
      a[index].style.backgroundColor = c2;
    });
    i++;
  }
}

tanlovRejim.addEventListener("change", () => {
  if (tanlovRejim.value == "tun") {
    tun();
  } else {
    kun();
  }

  localStorage.setItem("rejim", tanlovRejim.value);
});

if (localStorage.getItem("rejim")) {
  let novidir = localStorage.getItem("rejim");
  if (novidir == "tun") {
    tun();
  } else if (novidir == "kun") {
    kun();
  }
}

let til = document.getElementById("til");
let tilcha = document.getElementsByClassName("tilcha");

function tilrunning(bet, t) {
  let i = 0;
  while (tilcha[i] != undefined) {
    tilcha[i].innerHTML = sozlar[bet][t][i];
    i++;
  }
}

sozlar = [
  [
    [
      "Bosh Sahifa",
      "Test",
      "Reyting",
      "Sozlamalar",
      "Rejim",
      `Yorug'`,
      `Qorong'u`,
      "Til",
      "Kirish",
      `Ro'yhatdan o'tish`,
      "Tezligingizni Sinab Ko‘ring",
      "Matn terish tezligingizni tekshiring va reytingda yuqoriga ko‘tariling!",
      "soniya",
      "Matn Tili",
      "Sozlamalar",
      `Qayta o'rnatish`,
      "Yozishni boshlash uchun matn maydonini bosing",
      "Birinchi harfni bosganingizda test avtomatik boshlanadi",
    ],
    [
      "Home",
      "Test",
      "Rating",
      "Settings",
      "Mode",
      "Light",
      "Dark",
      "Language",
      "Login",
      "Register",
      "Test Your Speed",
      "Check your typing speed and climb up the rankings!",
      "seconds",
      "Text Language",
      "Settings",
      "Reset",
      "Click the text field to start typing",
      "The test will start automatically when you click the first letter",
    ],
    [
      "Домашняя страница",
      "тест",
      "рейтинг",
      "настройки",
      "режим",
      "яркий",
      "темный",
      "язык",
      "вход",
      "регистрация",
      "проверьте свою скорость набора текста",
      "проверьте свою скорость набора текста и поднимитесь в рейтинге!",
      "секунды",
      "язык текста",
      `Настройки`,
      "Сброс настроек",
      "щелкните текстовое поле, чтобы начать запись",
      "тест запускается автоматически при нажатии на первую букву",
    ],
  ],
  [
    [
      "Kirish",
      "Test",
      "Reyting",
      "Sozlamalar",
      "Rejim",
      `Yorug'`,
      `Qorong'u`,
      "Til",
      "Kirish",
      `Ro'yhatdan o'tish`,
      "Profilingiz",
      "Yozishdagi yutuqlaringiz va rivojlanishingizni kuzatib boring",
      `Qo'shilgan sana`,
      "Test tarixi natijalari",
      "Sana",
      `So'z/daq`,
      "Aniqlik",
      "Xatolar",
      "Test turi",
      "Matn tili",
      "Test davomiyligi",
    ],
    [
      "Access",
      "Test",
      "Rating",
      "Settings",
      "Mode",
      "Light",
      "Dark",
      "Language",
      "Sign in",
      "Register",
      "Profil",
      "Track your progress and progress in writing",
      "Date Added",
      "Test history results",
      "Date",
      "Word / min",
      "Accuracy",
      "Errors",
      "Test type",
      "Text language",
      "Test duration",
    ],
    [
      "Войти",
      "Tест",
      "Pейтинг",
      "Hастройки",
      "Pежим",
      "свет",
      "темнота",
      "язык",
      "доступ",
      "Регистрация",
      "Профиль",
      "Oтслеживать свой прогресс и прогресс в написании",
      "дата добавления",
      "Результаты истории испытаний",
      "Дата",
      "Cлово/ Mин",
      "Tочность",
      "Oшибки",
      "Tип теста",
      "язык текста",
      "продолжительность теста",
    ],
  ],
  [
    [
      "Bosh Sahifa",
      "Test",
      "Reyting",
      "Sozlamalar",
      "Rejim",
      `Yorug'`,
      `Qorong'u`,
      "Til",
      "Kirish",
      `Ro'yhatdan o'tish`,
      `Eng yaxshi yozuvchilar`,
      `Boshqalar bilan qanday taqqoslashingizni ko'ring`,
      `Best WPM reytinglar`,
      `raqobatchilar`,
    ],
    [
      "Home",
      "Test",
      "Rating",
      "Settings",
      "Mode",
      "Light",
      "Dark",
      "Language",
      "Login",
      "Register",
      "Top Writers",
      `See how you compare to others`,
      `Best WPM ratings`,
      `Competitors`,
    ],
    [
      "Главная страница",
      "Тест",
      "Рейтинг",
      "Настройки",
      "Режим",
      "Светлый",
      "Темный",
      "Язык",
      "Вход",
      "Регистрация",
      "Лучшие авторы",
      "Посмотрите, как вы сравниваете себя с другими",
      "Лучшие рейтинги WPM",
      `Конкуренты`,
    ],
  ],
  [
    [
      `Ro'yhatdan O'tish`,
      "Test",
      "Reyting",
      "Sozlamalar",
      "Rejim",
      "Yorug",
      `Qorong'u`,
      "Til",
      "Kirish",
      `Ro'yhatdan o'tish`,
      "Sozlamalar",
      "Yozish tajribangizni sozlang",
      "Test turi",
      "Vaqt rejimi",
      `So'z rejimi`,
      "Vaqt rejimi",
      "Matn tili",
      `Ko‘rinish`,
      `Jonli so'z/Daq`,
      `Matn terish tezligini real vaqtda ko‘rsatish`,
      "Ovoz effektlari",
      "Tugma bosish va yakunlash ovozlari",
      "Sozlamalarni tiklash",
      "Standart sozlamalarni tiklash",
      `Qayta o'rnatish`,
    ],
    [
      `Register`,
      "Test",
      "rating",
      "settings",
      "mode",
      "Light",
      `Dark`,
      "Language",
      "Login",
      `register`,
      "Settings",
      "customize your writing experience",
      "Test Type",
      "Time Mode",
      `word Mode`,
      "Time Mode",
      "Text language",
      `View`,
      `Live word/min`,
      `Real-Time display of typing speed`,
      `sound effects`,
      "button press and finish voices",
      "Reset Settings",
      "default reset settings",
      "reset",
    ],
    [
      "Регистрация",
      "тест",
      "рейтинг",
      "настройки",
      "режим",
      "светлый",
      "темный",
      "язык",
      "вход",
      "регистрация",
      "настройки",
      "настройте свой опыт набора текста",
      "тип теста",
      " режим времени",
      "Режим слова",
      "режим времени",
      "язык текста",
      "внешний вид",
      "живое слово/мин",
      "отображение скорости набора текста в реальном времени",
      "звуковые эффекты",
      "звуки нажатия кнопки и завершения",
      "сброс настроек",
      "сброс настроек по умолчанию",
      `Сброс`,
    ],
  ],
  [
    [
      "Kirish",
      "Test",
      "Reyting",
      "Sozlamalar",
      `Yorug'`,
      `Qorong'u`,
      "Til",
      "Rejim",
      "Kirish",
      `Ro'yhatdan o'tish`,
      "Qaytib kelganingizdan xursandmiz",
      "Taraqqiyotingizni kuzatish uchun tizimga kiring!",
      "Kirish",
      "Email",
      "Password",
      "Kirish",
      `Hali ro'yhatdan o'tmadingizmi?`,
      `Ro'yhatdan o'tish`,
    ],
    [
      "Enter",
      "Test",
      "Rating",
      "Settings",
      "Light",
      "Dark",
      "Language",
      "Mode",
      "Login",
      "Register",
      `We're glad you're back`,
      "Login to track your progress!",
      "Login",
      "Email",
      "Password",
      "Login",
      "Not registered yet",
      "Register",
    ],
    [
      "Вход",
      "Тест",
      "Рейтинг",
      "Настройки",
      "Светлый",
      "Тёмный",
      "Язык",
      "Режим",
      "Вход",
      "Регистрация",
      "Мы рады вашему возвращению",
      "Войдите, чтобы отслеживать свой прогресс!",
      "Вход",
      "Эл. почта",
      "Пароль",
      "Вход",
      "Ещё не зарегистрирован",
      "Регистрация",
    ],
  ],
  [
    [
      `Ro'yhatdan O'tish`,
      "Test",
      "Reyting",
      "Sozlamalar",
      "Rejim",
      `Yorug'`,
      `Qorong'u`,
      "Til",
      "Kirish",
      `Ro'yhatdan o'tish`,
      "Xush Kelibsiz",
      `Tizimdan to'liq foydalanish uchun ro'yhatdan o'ting!`,
      `Ro'yhatdan o'tish`,
      "Ism",
      "Email",
      "Yangi Parol",
      "Takroriy parol",
      `Ro'yhatdan o'tish`,
      `Ilgari ro'yhatdan o'tganmisiz?`,
      "Kirish",
    ],
    [
      `Register`,
      "Test",
      "Rating",
      "Settings",
      "Mode",
      "Light",
      "Dark",
      "Language",
      "Login",
      `Register`,
      "Welcome",
      "Register to use the system fully!",
      `Register`,
      "Name",
      "Email",
      "New Password",
      "Repeat password",
      `Register`,
      `Have you registered before?`,
      "Login",
    ],

    [
      `Регистрация`,
      "Тест",
      "Рейтинг",
      "Настройки",
      "Режим",
      "Светлый",
      "Темный",
      "Язык",
      "Вход",
      `Регистрация`,
      "Добро пожаловать",
      "Зарегистрируйтесь, чтобы пользоваться системой в полной мере!",
      `Регистрация`,
      "Имя",
      "Электронная почта",
      "Новый пароль",
      "Повторите пароль",
      `Регистрация`,
      `Вы уже регистрировались?`,
      "Вход",
    ],
  ],
];

function tilozgar(a) {
  if (til.value == "ru") {
    tilrunning(a, 2);
  } else if (til.value == "eng") {
    tilrunning(a, 1);
  } else if (til.value == "uz") {
    tilrunning(a, 0);
  } else {
    alert("Bunday til yuq");
  }
}

let umumiyvaqt = 30;
let maydon = document.getElementById("maydon");
let time = document.getElementById("vaqt");
let sekunds = document.getElementById("sekunds");
let ishlaganlik = false;
let qadam = 0;
let togriSozlar = 0;
let notogriSozlar = 0;
let KanditsianerPulti = [];
if(maydon != undefined) {
  maydon.addEventListener("keydown", (k) => {
  if (
    k.key != "Shift" &&
    k.key != "Control" &&
    k.key != "Tab" &&
    k.key != "CapsLock" &&
    k.key != "Alt" &&
    k.key != "Meta" &&
    k.key != "Backspace"
  ) {
    if (k.key == document.querySelectorAll("#gaplar span")[qadam].innerHTML) {
      if (k.key != " ") {
        KanditsianerPulti.push(1);
      } else {
        if (KanditsianerPulti.includes(0)) {
          notogriSozlar++;
        } else {
          togriSozlar++;
        }
        KanditsianerPulti = [];
      }
      document.querySelectorAll("#gaplar span")[qadam].style.backgroundColor =
        "rgba(166, 208, 153, 1)";
      document.querySelectorAll("#gaplar span")[qadam].style.color = "green";
    } else {
      KanditsianerPulti.push(0);
      document.querySelectorAll("#gaplar span")[qadam].style.backgroundColor =
        "rgba(236, 175, 168, 1)";
      document.querySelectorAll("#gaplar span")[qadam].style.color = "red";
    }

    qadam++;

    if (!ishlaganlik) {
      anime();
      time.style.display = "block";
      time.style.animation = `vaqtcha ${umumiyvaqt}s linear`;
    } else {
      ishlaganlik = true;
    }
  } else if (k.key == "Backspace" && qadam > 0) {
    KanditsianerPulti.pop();
    qadam--;
    document.querySelectorAll("#gaplar span")[qadam].style.backgroundColor =
      "white";
    document.querySelectorAll("#gaplar span")[qadam].style.color =
      "rgb(198, 198, 198)";
  }
});
}


function anime() {
  let sanoq = umumiyvaqt;
  sekunds.style.display = "inline";
  setTimeout(() => {
    time.style.display = "none";
    time.style.animation = ``;
    sekunds.style.display = "none";
    ishlaganlik = true;

    if (gap[randomNumber][qadam] == " ") {
      if (KanditsianerPulti.includes(0)) {
        notogriSozlar++;
      } else {
        togriSozlar++;
      }
      KanditsianerPulti = [];
    }

    document.getElementsByClassName("testing")[0].style.display = "none";
    document.getElementById("natija").innerHTML = resoultElement(
      umumiyvaqt,
      togriSozlar,
      notogriSozlar
    );

    if(localStorage.getItem('name')) {
      
      let sanacha = new Date();
      let shablon = sanacha.getDay() + '/' + sanacha.getMonth() + '/' + sanacha.getFullYear() + '<br>' + sanacha.getHours() + ":" + sanacha.getMinutes() + ":" + sanacha.getSeconds();
      natijasaqla(localStorage.getItem('name'),togriSozlar,notogriSozlar,localStorage.getItem('vaqt')?localStorage.getItem('vaqt'):umumiyvaqt,shablon);
    }
     












    document.getElementById("natija").style.display = "block";
    if (localStorage.getItem("rejim")) {
      let novidir = localStorage.getItem("rejim");
      if (novidir == "tun") {
        tun();
      } else if (novidir == "kun") {
        kun();
      }
    }
    else {
      if(tanlovRejim.value == 'tun') {
        tun()
      }
      else {
        kun()
      }
    }
  }, umumiyvaqt * 1000);
  sekunds.innerHTML = sanoq;
  sanoq--;
  let intervalcha = setInterval(() => {
    sekunds.innerHTML = sanoq;
    sanoq--;
    if (sanoq <= 0) {
      clearInterval(intervalcha);
    }
  }, 1000);

  ishlaganlik = true;
}

let gap = [
  "Bugungi kunda texnologiya inson hayotining ajralmas qismiga aylangan. Har bir sohada zamonaviy texnikalar ishlatilmoqda. Telefonlar, kompyuterlar va internet yordamida odamlar o‘z ishlarini osonlashtirishmoqda. O‘quvchilar bilim olish uchun onlayn darslarga qatnashishadi, tadbirkorlar esa onlayn savdo orqali daromad topishmoqda. Texnologiya vaqtni tejaydi, lekin uni to‘g‘ri ishlatish juda muhim. Chunki noto‘g‘ri foydalanish insonni dangasa qiladi.",
  "Tabiat — bu bizning hayotimizning asosi. Daraxtlar havoni tozalaydi, daryolar suv beradi, hayvonlar esa ekologik muvozanatni saqlaydi. Inson tabiatni asrashi, unga zarar yetkazmasligi kerak. Afsuski, ayrim odamlar chiqindilarni tashlab, daraxtlarni kesishadi. Shuning uchun bolalarga yoshlikdan tabiatni sevish, unga g‘amxo‘rlik qilishni o‘rgatish zarur. Chunki tabiat bizning uyimizdir.",
  "Mehnatsevar inson har doim hurmatga sazovor bo‘ladi. U o‘z oldiga maqsad qo‘yadi va uni bajarish uchun harakat qiladi. Mehnat orqali inson o‘z hayotini o‘zgartiradi, tajriba orttiradi va mustaqil bo‘ladi. Har bir muvaffaqiyat ortida tinimsiz mehnat turadi. Kimdir san’at sohasida, kimdir texnikada, boshqasi esa o‘qishda yutuqqa erishadi. Muhimi, dangasalikdan uzoq bo‘lib, doimo harakatda bo‘lishdir.",
  "Kitob inson tafakkurini kengaytiradi, so‘z boyligini oshiradi. Kitob o‘qigan odam boshqalardan farqli fikrlaydi, nutqi chiroyli bo‘ladi. Bugun internet davrida ko‘pchilik telefon bilan band, ammo kitob o‘qishning o‘rni beqiyos. Har kuni kamida bir necha sahifa kitob o‘qish odatini shakllantirish lozim. Kitob bizni to‘g‘ri yo‘lga boshlaydi va hayotda to‘g‘ri qaror qabul qilishga yordam beradi.",
  "Do‘stlik — hayotdagi eng qimmat tuyg‘ulardan biri. Chin do‘st har doim yoningda bo‘ladi, yordam beradi va senga ishonadi. Do‘stlar o‘zaro hurmat, sadoqat va ishonch asosida munosabat qurishadi. Har kimga ham do‘st deb bo‘lmaydi, shuning uchun do‘st tanlashda ehtiyot bo‘lish kerak. Yaxshi do‘st seni yomon ishlardan qaytaradi va to‘g‘ri yo‘lga boshlaydi.",
  "Har bir insonning o‘z orzusi bor. Kimdir shifokor, kimdir muhandis, boshqasi esa o‘qituvchi bo‘lishni xohlaydi. Orzular hayotga ma’no beradi, insonni oldinga undaydi. Lekin orzuga erishish uchun faqat xohlash yetarli emas, mehnat qilish kerak. Har kuni oz bo‘lsa ham harakat qilgan odam albatta muvaffaqiyatga erishadi. Shuning uchun hech qachon taslim bo‘lmaslik lozim.",
];

let gaplarBox = document.getElementById("gaplar");

let randomNumber = Math.floor(Math.random() * 100);

while (randomNumber >= gap.length) {
  randomNumber = Math.floor(Math.random() * 100);
}

if(gaplarBox != undefined) {
  for (let i = 0; i < gap[randomNumber].length; i++) {
  let newspan = document.createElement("span");
  newspan.innerHTML = gap[randomNumber][i];
  gaplarBox.appendChild(newspan);
}
}

function retext() {
  document.getElementById("gaplar").innerHTML = "";
  qadam = 0;
  ishlaganlik = false;
  KanditsianerPulti = [];
  togriSozlar=0;
  notogriSozlar=0;
  let randomNumber = Math.floor(Math.random() * 100);

  while (randomNumber >= gap.length) {
    randomNumber = Math.floor(Math.random() * 100);
  }

  for (let i = 0; i < gap[randomNumber].length; i++) {
    let newspan = document.createElement("span");
    newspan.innerHTML = gap[randomNumber][i];
    gaplarBox.appendChild(newspan);
  }

  document.getElementsByClassName("testing")[0].style.display = "block";
  document.getElementById("natija").style.display = "none";
}

function resoultElement(vaqt, togri, notogri) {
  let a = [
    ["yaxshi", "./image/smile/kulib-removebg-preview.png"],
    ["norm", "./image/smile/hafa-removebg-preview.png"],
    ["yomon", "./image/smile/Jahli-removebg-preview.png"],
  ];
  let b;
  if ((togri * 60) / vaqt >= 22) {
    b = 0;
  } else if ((togri * 60) / vaqt >= 14) {
    b = 1;
  } else {
    b = 2;
  }

  return `      <div id="${a[b][0]}"  class="resoult">
                    <h2>Natijangiz..</h2>
                    <ul>
                        <li>Tezlik: ${(togri * 60) / vaqt} so'z/min</li>
                        <li>To'g'ri so'zlar: ${togri} ta</li>
                        <li>Noto'g'ri so'zlar: ${notogri} ta</li>
                        <li>Vaqt: ${vaqt}s</li>
                    </ul>
                    <img src="${a[b][1]}" alt="">
                </div>`;
}




let userLoc =  document.querySelectorAll('#til ~ a');

if(localStorage.getItem("name") && document.getElementById('user') != undefined) {
    userLoc[0].style.display = 'none';
    userLoc[1].style.display = 'none';
    document.getElementById('user').innerHTML = localStorage.getItem('name');
    document.getElementById('profil').style.display = 'block';
}


let vaqtlar = document.querySelectorAll('.vaqt > span');
let oxirgibosilgan=1;
let k = 0;
while(vaqtlar[k] != undefined) {
  let s=k;
  if(localStorage.getItem('vaqt')) {
    if(localStorage.getItem('vaqt') == Number(vaqtlar[s].innerHTML.slice(0,(vaqtlar[s].innerHTML.length-1)))) {
      vaqtlar[s].style.borderColor = 'blue';
      oxirgibosilgan = s;
    }
  }
  else {
    vaqtlar[oxirgibosilgan].style.borderColor = 'blue';
  }
  vaqtlar[s].addEventListener('click',()=>{
    if(oxirgibosilgan != s) {
      vaqtlar[oxirgibosilgan].style.borderColor = 'rgb(167, 167, 167)';
      oxirgibosilgan = s;
      vaqtlar[s].style.borderColor = 'blue';
      let spancha = vaqtlar[s].innerHTML;
      umumiyvaqt = Number(spancha.slice(0,(spancha.length-1)));
      localStorage.setItem('vaqt',umumiyvaqt);
    }
  })
  k++;
}

let tanlanganV = document.getElementById('tanlanganV');

if(tanlanganV != undefined) {
  if(localStorage.getItem('vaqt')) {
    tanlanganV.innerHTML = localStorage.getItem('vaqt');
    umumiyvaqt = Number(localStorage.getItem('vaqt'));
  }
  else {
    tanlanganV.innerHTML = umumiyvaqt;
  }
}







async function natijasaqla(username1, togrilari1, notogrilari1, umumiyvaqt1, sana1) {
  const res = await fetch("http://localhost:3000/resoultsave", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username1, togrilari1, notogrilari1, umumiyvaqt1, sana1 }),
    });

    const data = await res.json();

    if(!data.message) {
      alert('natija saqlashda muommo')
    }
    if(data.error) {
      alert(data.error)
    }
}