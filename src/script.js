const LCs = [
    "Aachen",
    "Augsburg",
    "Berlin HU",
    "Berlin TU",
    "Bielefeld",
    "Bochum",
    "Bonn",
    "Braunschweig",
    "Bremen",
    "Darmstadt",
    "Dresden",
    "Düsseldorf",
    "Frankfurt am Main",
    "Gießen-Marburg",
    "Göttingen",
    "Halle",
    "Hamburg",
    "Hannover",
    "Kaiserslautern",
    "Karlsruhe",
    "Köln",
    "Leipzig",
    "Lüneburg",
    "Magdeburg",
    "Mainz-Wiesbaden",
    "Mannheim & Heidelberg",
    "München",
    "Münster",
    "Nürnberg",
    "Paderborn",
    "Passau",
    "Regensburg",
    "Stuttgart & Hohenheim"
];

const langOpt = [
  "Gar nicht",
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
  "Muttersprache"
];

const mktOpt = [
  "Freund/-in",
  "Infostand am Campus",
  "Präsentation in einer Vorlesung",
  "Facebook",
  "Twitter",
  "Instagram",
  "LinkedIn",
  "Studo App",
  "Whatsapp",
  "Ein anderer Social Media Kanal",
  "Suchmaschine (z.B. Google)",
  "Event",
  "Email",
  "Medien (Zeitung, Radio, Magazin, TV)",
  "Blog",
  "Anderes"
];

let lcDropdown = document.getElementById("lc")
LCs.map((opt, index) => {
    let new_option = document.createElement("option")
    new_option.text = opt
    new_option.value = index
    lcDropdown.add(new_option)
})

let langDropdown = document.getElementById("lang-lvl")
langOpt.map((opt, index) => {
    let new_option = document.createElement("option")
    new_option.text = opt
    new_option.value = index
    langDropdown.add(new_option)
})

let mktDropdown = document.getElementById("mkt-action")
mktOpt.map((opt, index) => {
    let new_option = document.createElement("option")
    new_option.text = opt
    new_option.value = index
    mktDropdown.add(new_option)
})