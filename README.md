# wifinfc
A website that allows you to copy the wifi password from the URL parameters
## How to use
1. Go to https://ed789d0.github.io/wifinfc/index.html
2. Open your browser's JavaScript console and run `console.log(encode(prompt()))` and type your network name in the dialog (this is only used to display the network name on the page).
3. Run `console.log(encode(prompt()))` and type your WiFi password in the dialog.
4. Use this final URL: `https://ed789d0.github.io/wifinfc/?ssid=<<network>>&pw=<<password>>` but replace `<<network>>` with whatever was printed after step 2 and replace `<<password>>` with whatever was printed after step 3.

You can now share this URL (or write it to an NFC tag), but please note that it's easy for anyone to get your password from the link.
This is mainly for convenience rather than security.
