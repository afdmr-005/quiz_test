const quizData = [
    // 1-VARIANT
    { q: "Oʻzbekiston Respublikasi Prezidentining 2017-yil 5-iyuldagi 5106-sonli farmoniga asosan harbiy akademik litseylar qanday nomlandi?", a: ["“Temurbeklar maktabi”", "“Jaloliddin Manguberdi maktabi”", "“Temurbeklar harbiy litseylari”", "“Bobur maktablari”"], c: 2 },
    { q: "Oʻzbekiston yoshlar ittifoqi faoliyatini takomillashtirishga doir kompleks chora-tadbirlar toʻgʻrisida Dasturi nechta yoʻnalish va banddan iborat?", a: ["4 yoʻnalish va 57 banddan", "4 yoʻnalish va 58 banddan", "5 yoʻnalish va 58 banddan", "5 yoʻnalish va 57 banddan"], c: 2 },
    { q: "Oʻzbekiston Respublikasi Konstitutsiyasiga asosan davlat hokimiyati qanday boʻlinadi?", a: ["Qonun chiqaruvchi, ijro etuvchi va sud", "Oliy Majlis Qonunchilik palatasi, Vazirlar Mahkamasi va oliy sud", "Oliy Majlis Senati, Vazirlar Mahkamasi va oliy sud", "Vazirlar Mahkamasi, xududiy hokimliklar va oliy sud"], c: 0 },
    { q: "“Yoshlarga oid davlat siyosati toʻgʻrisida”gi Qonunga asosan yoshlar kim?", a: ["14 yoshga toʻlgan va 30 yoshdan oshmagan shahslar", "13 yoshga toʻlgan va 30 yoshdan oshmagan shahslar", "14 yoshga toʻlgan va 31 yoshdan oshmagan shahslar", "15 yoshga toʻlgan va 30 yoshdan oshmagan shahslar"], c: 0 },
    { q: "Oʻzbekiston Respublikasi Prezidentining 2017-yil 5-iyuldagi 5106-sonli farmonida nechta ustuvor yoʻnalish belgilangan?", a: ["21", "10", "12", "11"], c: 3 },
    { q: "Oʻzbekiston yoshlar ittifoqining ingliz tilidagi toʻgʻri yozilgan nomini aniqlang?", a: ["Uzbekistan Children Social", "Youth Union of Uzbekistan", "Uzbekistan Youth", "Children Social"], c: 1 },
    { q: "Demokratiya soʻzining maʼnosi nima?", a: ["Xalq vakilligi", "Xalq birlashmasi", "Xalq soʻzi", "Xalq hokimiyati"], c: 3 },
    { q: "Oʻzbekiston yoshlar ittifoqining negizi — bu", a: ["Markaziy Kengash", "Oʻzbekiston bolalar tashkiloti", "Tashkilotning aʼzolari", "Boshlangʻich tashkilotlari"], c: 3 },
    { q: "Oʻzbekiston Respublikasining “Yoshlarga oid davlat siyosati toʻgʻrisida”gi qonuni nechta bobdan iborat?", a: ["4", "6", "8", "5"], c: 1 },
    { q: "Ittifoq qanday huquqiy asoslarga tayanadi?", a: ["Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlari", "Ittifoq rahbarining buyruqlari", "Xalqaro tashkilotlarning tavsiyalari", "Faqat Ustav"], c: 0 },
    { q: "Farzandlarimizni yaxshi xulq egalari qilib tarbiyalashimiz uchun avvalo, millat onalari tarbiya va ilm olishlari lozim - Ushbu soʻzlar kimga tegishli?", a: ["Abdulla Avloniy", "Abdurauf Fitrat", "Munavvarqori Abdurashidxonov", "Abdulla Qodiriy"], c: 1 },
    { q: "Muayyan etnik guruh ustuvorligiga erishishda terror va agressiyaga asoslangan siyosiy ideologiyaning koʻrinishi bu?", a: ["Fashizm", "Millatchilik", "Ratsizm", "Feminizm"], c: 2 },
    { q: "Oliy Majlis Senati senatorligiga Prezident tomonidan necha nafar nomzod koʻrsatiladi?", a: ["15 nafar", "10 nafar", "9 nafar", "5 nafar"], c: 2 },
    { q: "Inson huquqlari Umumjahon Deklaratsiyasi qachon qabul qilingan?", a: ["1945 yil", "1946 yil", "1947 yil", "1948-yil"], c: 3 },
    { q: "Besh asrkim, nazmiy saroyni, Titratadi zanjirband bir sher. Shoir A.Oripov kimni nazarda tutgan?", a: ["Abduraxmon Jomiy", "Lutfiy", "Alisher Navoiy", "Zaxiriddin Muhammad Bobur"], c: 2 },

    // 2-VARIANT
    { q: "Farmonga asosan Oʻzbekiston yoshlar ittifoqi va xotin qizlar qoʻmitasi qanday jurnal taʼsis etishi belgilangan?", a: ["“Saodat” jurnali", "“Dugonalar” jurnali", "“Qizlarjon” jurnali", "“Goʻzallik” jurnali"], c: 2 },
    { q: "Qonunchilik palatasi deputatligiga necha yoshdan saylanish mumkin?", a: ["21 yoshdan", "25 yoshdan", "35 yoshdan", "30 yoshdan"], c: 1 },
    { q: "Oʻzbekiston Respublikasi davlat madhiyasi qachon qabul qilingan?", a: ["1992-yil 8-dekabr", "1992-yil 10-dekabr", "1991-yil 10-dekabr", "1991-yil 8-dekabr"], c: 1 },
    { q: "Amir Temur davlatining bosh shiori qanday?", a: ["Kuch – bilim va tafakkurda", "Kuch – murosa va adolatda", "Kuch - birlashgan ittifoqda", "Kuch – adolatda"], c: 3 },
    { q: "“Oʻzbekiston yoshlar ittifoqi faoliyatini takomillashtirishga doir...” Qaror qachon qabul qilingan?", a: ["2017-yil 5-iyulda", "2017-yil 30-iyunda", "2017-yil 18-iyulda", "2017-yil 11-iyulda"], c: 2 },
    { q: "Oʻzbekiston yoshlar ittifoqi qaysi organ tomonidan roʻyxatdan oʻtkaziladi?", a: ["Adliya vazirligi", "Oliy taʼlim vazirligi", "Oliy sud", "Bosh prokuratura"], c: 0 },
    { q: "Boshlangʻich tashkilot yetakchisi qanday saylanadi?", a: ["Ochiq ovoz berish yoʻli bilan", "Snoq komissiyasi qaroriga asosan", "Pedagogik ilmiy yigʻilishda", "Tayinlanadi"], c: 0 },
    { q: "“Yoshlarga oid davlat siyosati toʻgʻrisida”gi qonun nechta moddadan iborat?", a: ["35", "30", "23", "33"], c: 3 },
    { q: "Oʻzbekiston yoshlar ittifoqi qanday tashkilot hisoblanadi?", a: ["Davlat tashkiloti", "Nodavlat notijorat tashkiloti", "Tijorat tashkiloti", "Xalqaro tashkilot"], c: 1 },
    { q: "Yangi tahrirdagi Konstitutsiyamizni qabul qilishda nechta davlat tajribasi oʻrganildi?", a: ["120 dan ortiq", "190 dan ortiq", "130 dan ortiq", "56 dan ortiq"], c: 1 },
    { q: "Konstitutsiyaning 25-moddasi: Inson hayotiga suiqasd qilish...", a: ["qonun bilan taʼqiqlangan", "xalqaro talabalrga mos emas", "eng ogʻir jinoyatdir", "oʻlim jazosiga olib keladi"], c: 2 },
    { q: "Toʻrt ulus tarixi asari muallifi kim?", a: ["Mirzo Ulugʻbek", "Abdullaxon", "Alisher Navoiy", "Zaxiriddin Muhammad Bobur"], c: 0 },
    { q: "Axloqiy, badiiy, diniy, milliy qadriyatlar majmuasi bu - ?", a: ["Mafkura", "Maʼnaviyat", "Madaniyat", "Tarix"], c: 1 },
    { q: "“Haq olinur, berilmas” shiori kimga tegishli?", a: ["Abdulla Avloniy", "Mahmudxoʻja Behbudiy", "Munavvarqori", "Abdulla Qodiriy"], c: 1 },

    // 3-VARIANT
    { q: "Yuksak natijaga erishayotgan yigitlar uchun qanday davlat mukofoti taʼsis etilgan?", a: ["“Kelajak bunyodkori”", "“Jasoratli yoshlar”", "“Matonat” medali", "“Mard oʻgʻlon”"], c: 3 },
    { q: "Oʻzbekistonda nechta siyosiy partiya faoliyat koʻrsatadi?", a: ["3 ta", "4 ta", "5 ta", "2 ta"], c: 2 },
    { q: "AYSESKO tomonidan qaysi shahar Islom madaniyati poytaxti deb eʼlon qilingan?", a: ["Fargʻona", "Toshkent shahri", "Samaraqand", "Margʻilon"], c: 1 },
    { q: "Konstitutsiya nechta boʻlim va moddadan iborat?", a: ["6 boʻlim 155 modda", "6 boʻlim 154 modda", "7 boʻlim 155 modda", "6 boʻlim 128 modda"], c: 0 },
    { q: "“Tarbiya biz uchun yo hayot- yo mamot...” soʻzlari muallifi?", a: ["M.Behbudiy", "A.Avloniy", "A.Fitrat", "A.Qodiriy"], c: 1 },
    { q: "Oʻzbekiston Respublika mustaqillik deklaratsiyasi qachon qabul qilingan?", a: ["1990-yil 20-iyun", "1991-yil 31-avgust", "1991-yil 1-sentabr", "1990-yil 18-mart"], c: 0 },
    { q: "Oʻzbekiston Qurolli Kuchlari qachon tashkil etilgan?", a: ["1992-yil 14-noyabr", "1992-yil 14-janvar", "1991-yil 14-janvar", "1991-yil 18-noyabr"], c: 1 },
    { q: "“Yoshlarga oid davlat siyosati toʻgʻrisida”gi qonun qachon qabul qilingan?", a: ["2014-yil 6-sentabr", "2017-yil 5-iyul", "2016-yil 14-sentabr", "2017-yil 18-iyul"], c: 2 },
    { q: "Ittifoqning rahbar organi kim tomonidan saylanadi?", a: ["Markaziy Kengash", "Prezident administratsiyasi", "Bosh vazir", "Oliy Majlis"], c: 0 },
    { q: "Senatga har bir hududdan necha nafar shaxs saylanadi?", a: ["5 nafardan", "4 nafardan", "3 nafardan", "6 nafardan"], c: 1 },
    { q: "Oʻzbekiston 1993-yilda BMTning qaysi muassasasiga aʼzo boʻldi?", a: ["YUNESKO", "Xalqaro valyuta fondi", "Butunjahon banki", "YUNIDO"], c: 0 },
    { q: "Oʻrta asrlarda Shayx ur-rais nomi bilan mashhur boʻlgan alloma?", a: ["Abu Ali ibn Sino", "Imom Buxoriy", "Abu Nasr Farobiy", "Abu Rayhon Beruniy"], c: 0 },
    { q: "“Inson qadri deganda...” ushbu jumlalar muallifi kim?", a: ["Akmal Saidov", "Samuyel Xantington", "Shavkat Mirziyoyev", "Mahatma Gandi"], c: 2 },

    // 4-VARIANT
    { q: "Qaysi kun “Yoshlar kuni” deb belgilandi?", a: ["30-iyul", "30-iyun", "13-avgust", "1-avgust"], c: 1 },
    { q: "Davlatimizning oliy mukofoti bu - ?", a: ["Mehnat shuhrati", "Oʻzbekiston Iftihori", "Oʻzbekiston Qahramoni", "Doʻstlik ordeni"], c: 2 },
    { q: "Oʻzbekiston BMTga qachon aʼzo boʻldi?", a: ["1991-yil mart", "1992-yil dekabr", "1992-yil mart", "1991-yil dekabr"], c: 2 },
    { q: "Oliy Majlis Qonunchilik palatasi deputatlari soni nechta?", a: ["135 ta", "150 ta", "120 ta", "100 ta"], c: 1 },
    { q: "Oʻzbek tiliga qachon davlat tili maqomi berilgan?", a: ["1989-yil 21-oktabrda", "1993-yil 8-dekabrda", "1991-yil 12-oktabrda", "1992-yil 8-dekabrda"], c: 0 },
    { q: "“Mard oʻgʻlon” mukofoti haqidagi qaror qachon qabul qilingan?", a: ["2017-yil 18-iyul", "2018-yil 20-noyabr", "2017-yil 21-noyabr", "2017-yil 30-iyun"], c: 2 },
    { q: "Ittifoqning oliy rahbar organi nima?", a: ["Konferensiya", "Kengash", "Nazorat-taftish komissiyasi", "Qurultoy"], c: 3 },
    { q: "Konstitutsiyaga koʻra hukumat raisi kim?", a: ["Senat raisi", "Qonunchilik palatasi spikeri", "Bosh vazir", "Prezident maslahatchisi"], c: 2 },
    { q: "Oʻzbekiston milliy valyutasi “soʻm” qachon kiritilgan?", a: ["1991-yil", "1994-yil 21-yanvar", "1994-yil 1-iyul", "1992-yil"], c: 2 },
    { q: "Referendum nima?", a: ["Maslahatlashuv", "Umumxalq muhokamasi", "Ijtimoiy soʻrov", "Fuqarolarning umumxalq ovozi"], c: 3 },
    { q: "Sohibqiron Temur tuzuklarida saltanat qoidalari necha toifaga boʻlingan?", a: ["11 toifa", "12 toifa", "13 toifa", "14 toifa"], c: 1 },
    { q: "Nikoh yoshi erkaklar va ayollar uchun necha yosh belgilangan?", a: ["18/17", "18/19", "18 yosh", "17 yosh"], c: 2 },

    // QOLGAN SAVOLLAR (To'ldirish uchun)
    { q: "Oliy Majlis Senati a’zolari soni nechta?", a: ["100 ta", "85 ta", "65 ta", "150 ta"], c: 2 },
    { q: "Viloyat hokimi kim tomonidan tayinlanadi?", a: ["Xalq deputatlari", "Prezident", "Bosh vazir", "Senat"], c: 1 },
    { q: "O'zbekistonning poytaxti qaysi shahar?", a: ["Samarqand", "Buxoro", "Toshkent", "Xiva"], c: 2 },
    { q: "Konstitutsiyaning nechanchi moddasida vatanparvarlik haqida aytilgan?", a: ["52-modda", "40-modda", "15-modda", "60-modda"], c: 0 },
    { q: "Mahalla raisi necha yilga saylanadi?", a: ["2 yil", "3 yil", "5 yil", "4 yil"], c: 1 }
];

let currentIdx = 0;
let score = 0;
let timeLeft = 45;
let timerInterval;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const cEl = document.getElementById("current");
const tEl = document.getElementById("total");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");

function startTimer() {
    timeLeft = 45;
    timerEl.innerText = timeLeft;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSkip();
        }
    }, 1000);
}

function loadQuiz() {
    const currentQuiz = quizData[currentIdx];
    qEl.innerText = currentQuiz.q;
    aEl.innerHTML = "";
    tEl.innerText = quizData.length;
    cEl.innerText = currentIdx + 1;
    nextBtn.classList.add("hide");

    currentQuiz.a.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = (e) => checkAnswer(i, e.target);
        aEl.appendChild(btn);
    });
    startTimer();
}

function checkAnswer(selected, btn) {
    clearInterval(timerInterval);
    const correct = quizData[currentIdx].c;
    const allBtns = document.querySelectorAll("#answers button");
    
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        allBtns[correct].classList.add("correct");
    }
    nextBtn.classList.remove("hide");
}

function autoSkip() {
    const correct = quizData[currentIdx].c;
    const allBtns = document.querySelectorAll("#answers button");
    allBtns.forEach(b => b.disabled = true);
    allBtns[correct].classList.add("correct");
    nextBtn.classList.remove("hide");
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timerInterval);
    document.getElementById("quiz").classList.add("hide");
    document.querySelector(".controls").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("scoreText").innerText = 
        `Test yakunlandi!\nTo'g'ri javoblar: ${score} ta\nJami: ${quizData.length} tadan`;
}

loadQuiz();
