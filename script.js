new ClipboardJS("#copier");
let closer = new ClipboardJS("#closer");
let url = new URL(window.location.href);

function blankpage() {
  window.location.replace("about:blank");
}

closer.on("success", e => { blankpage() })

let ssid = url.searchParams.get("ssid") || "";
if (ssid) ssid = decode(ssid);
document.querySelector(".ssid").innerHTML = ssid;

function al() {
  let c = url.searchParams.get("pw");
  if (c) {
    let response = c;
    response = decode(response);
    // fill in input field with decoded password
    document.getElementById("bar").value = response;
  } else {
    document.getElementById("bar").value =
    "error: password not copied properly";
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
