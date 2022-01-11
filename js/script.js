
let hslSiffra = 160;
let radnr = 1;
for (let i = 5; i > 0; i--) {
    const el = document.createElement(`h${i}`);
    el.style.backgroundColor = `hsl(${hslSiffra}, 100%, 77%)`;
    el.style.color = "#9896f1"
    el.innerText = `Rad ${radnr}`
    document.body.append(el);
    document.querySelector(`h${i}`).style.textAlign = "center";
    hslSiffra = hslSiffra + 10;
    radnr = radnr + 1;
    
}

var borderdiv = document.createElement("div");
borderdiv.id = "123";
document.body.appendChild(borderdiv);
borderdiv.style.border = "1px solid black";
borderdiv.style.height = "400px";

for (let i = 0; i < 3; i++) {
    const contentdiv = document.createElement("div");
    borderdiv.append(contentdiv);
    contentdiv.style.width = "50px";
    contentdiv.style.border = "10px solid #9896f1";
    contentdiv.style.margin = "auto";
}

borderdiv.style.display = "flex";
borderdiv.style.flexDirection = "row";
// contentdiv.style.display = "flex";
// contentdiv.style.flexDirection = "column";
const divs = document.querySelectorAll('div div');

for (let i = 0; i < 10; i++) {
    let p = document.createElement("p");
    p.innerText = i;
    divs[0].append(p);
    p.style.margin = "0";

    if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    if (i === 4) {
        p.style.backgroundColor = "#9896f1";
    }
}
console.log(divs);

for (let i = 9; i >= 0; i--) {
    let p = document.createElement("p");
    p.innerText = i;
    divs[1].append(p);
    p.style.margin = "0";
    p.style.textAlign = "center";

    if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    if (i === 8) {
        p.style.backgroundColor = "#9896f1";
    }
}
const siffertal = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]
for (let i = 0; i < 10; i++) {
    let p = document.createElement("p");
    p.innerText = siffertal[i];
    divs[2].append(p);
    p.style.margin = "0";
    p.style.textAlign = "end";
    if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    if (i === 5) {
        p.style.backgroundColor = "#9896f1";
    }
}
