new ClipboardJS("#copier");
let closer = new ClipboardJS("#closer");
let url = new URL(window.location.href);

function blankpage() {
  //window.location.replace("close.html");
  window.open("close.html" , "_self","").close();
}

closer.on("success", _e => { blankpage() })

let ssid = url.searchParams.get("ssid");
if (ssid && decode(ssid)) {
  ssid = decode(ssid);
  document.querySelector(".ssid").innerHTML += ` to ${ssid}`;
  document.getElementById("select-ssid").innerHTML = `<kbd>${ssid || document.getElementById("select-ssid").innerHTML}</kbd>`;
}
document.querySelector(".ssid").innerHTML += "!";

function al() {
  let c = url.searchParams.get("pw");
  if (c) {
    let response = c;
    response = decode(response);
    // fill in input field with decoded password
    document.getElementById("bar").value = response;
  }
}

function encode(str) {
  str.replaceAll("+", "~");
  str.replaceAll("/", "_");
  return btoa(encodeURIComponent(str));
}

function decode(str) {
  str.replaceAll("~", "+");
  str.replaceAll("_", "/");
  return decodeURIComponent(atob(str));
}
