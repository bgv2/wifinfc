# wifinfc
A website that allows you to copy the WiFi password from the URL parameters, or allow iOS users to connect to the network with just a few taps. Mainly for allowing iOS users to connect to a WiFi network from an NFC tag.
## How to use
1. Go to https://ed789d0.github.io/wifinfc/index.html
2. Open your browser's JavaScript console.
3. Type `setup()`, press Enter, and follow the prompts.
4. Copy the URL that appears in the alert box.

You can now share this URL (or write it to an NFC tag, though make sure the actual WiFi record is above this link), but please note that it's easy for anyone to get your password from the URL.
This is mainly for convenience rather than security.

Also, the full URL (with the network name and password) is sent to GitHub servers each time you open the page (that's how the web works).
## Beta Version
The main version of the site ([`index.html`](https://ed789d0.github.io/wifinfc/index.html)) works by asking the user to press a button to copy the password to their clipboard, then pasting it in their WiFi settings. There is a beta version available ([`twotap.html`](https://ed789d0.github.io/wifinfc/twotap.html)) that allows the user to connect directly from the page in just three taps. However, this version doesn't work with screen readers (for vision-impaired users) and is less reliable than the main version. If you'd like to use it, go to the twotap.html page linked above and set it up in the same way you would for the main version.
