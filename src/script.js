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
LCs.map((opt) => {
    let new_option = document.createElement("option")
    new_option.text = opt
    new_option.value = opt
    lcDropdown.add(new_option)
})

let langDropdown = document.getElementById("lang-lvl")
langOpt.map((opt) => {
    let new_option = document.createElement("option")
    new_option.text = opt
    new_option.value = opt
    langDropdown.add(new_option)
})

let mktDropdown = document.getElementById("mkt-action")
mktOpt.map((opt) => {
    let new_option = document.createElement("option")
    new_option.text = opt
    new_option.value = opt
    mktDropdown.add(new_option)
})

function handleSubmit(event) {
  // Overwrites the submit function of the button to convert formData into JSON before sending to server
  event.preventDefault();
  const checkboxes = ["reason-exp", "reason-network", "reason-social"]
  const data = new FormData(event.target);
  let value = Object.fromEntries(data.entries())
  value.topics = data.getAll("topics")
  value.dataSecurity = Boolean(value.dataSecurity).toString()
  value.contactAllowed = Boolean(value.contactAllowed).toString()
  
  value.motivation = []
  checkboxes.forEach(cb => value.motivation.push(Boolean(value[cb]).toString()));
  [...checkboxes, "topics"].forEach(n => delete value[n])

  fetch('http://localhost:8000/applicants/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  })
  .then(response => response.json())
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
