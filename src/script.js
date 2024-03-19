
const LCs = [
  "Aachen",
  "Berlin HU",
  "Berlin TU",
  "Bielefeld",
  "Bochum",
  "Bonn",
  "Braunschweig",
  "Bremen",
  "Dresden",
  "Düsseldorf",
  "Frankfurt am Main",
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

const LcDB = [
"aachen",
"berlin-hu",
"berlin-tu",
"bielefeld",
"bochum",
"bonn",
"braunschweig",
"bremen",
"dresden",
"duesseldorf",
"frankfurt-main",
"goettingen",
"halle",
"hamburg",
"hannover",
"kaiserslautern",
"karlsruhe",
"koeln",
"leipzig",
"lueneburg",
"magdeburg",
"mainz",
"mannheim",
"muenchen",
"muenster",
"nuernberg",
"paderborn",
"passau",
"regensburg",
"stuttgart"
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

const langOptDB = [
"none",
"a1",
"a2",
"b1",
"b2",
"c1",
"c2",
"native"
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

const mktOptDB = [
"friend",
"infobooth",
"lecture",
"facebook",
"twitter",
"instagram",
"linkedin",
"studo",
"whatsapp",
"other-social",
"search-engine",
"event",
"email",
"media",
"blog",
"other"
];

let lcDropdown = document.getElementById("lc");
LCs.map((opt, idx) => {
  let new_option = document.createElement("option");
  new_option.text = opt;
  new_option.value = LcDB[idx];
  lcDropdown.add(new_option);
});

let langDropdown = document.getElementById("lang-lvl");
langOpt.map((opt, idx) => {
  let new_option = document.createElement("option");
  new_option.text = opt;
  new_option.value = langOptDB[idx];
  langDropdown.add(new_option);
});

let mktDropdown = document.getElementById("mkt-action");
mktOpt.map((opt, idx) => {
  let new_option = document.createElement("option");
  new_option.text = opt;
  new_option.value = mktOptDB[idx];
  mktDropdown.add(new_option);
});

function handleSubmit(event) {
// Overwrites the submit function of the button to convert formData into JSON before sending to server
event.preventDefault();
const checkboxes = ["reason-exp", "reason-network", "reason-social"];
const data = new FormData(event.target);
let value = Object.fromEntries(data.entries());
value.topics = data.getAll("topics");
value.dataSecurity = Boolean(value.dataSecurity).toString();
value.contactAllowed = Boolean(value.contactAllowed).toString();

value.motivation = [];
checkboxes.forEach(cb => value.motivation.push(Boolean(value[cb]).toString()));
[...checkboxes, "topics"].forEach(n => delete value[n]);

console.log(value);

fetch('https://polarcrm-backend-bdek.onrender.com/applicants/new', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(value)
})
.then(res => {
  if(!res.ok) {
    console.log(res)
    alert(res.statusText, res.status)
  }
  return res.json();
})
// .then(res => alert(res.message._id))
.catch(err => {
  alert(err.message)
  console.log(err);
})
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
