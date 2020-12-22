# wifinfc
A website that allows you to copy the wifi password from the URL parameters
## How to use
1. Go to https://ed789d0.github.io/wifinfc/
2. Open your browser's JavaScript console and run `encode("mySSID")` and replace mySSID with your network name (this is only used to display the network name on the page).
3. Run `encode("coolPassword")` and replace coolPassword with your WiFi password.
4. Use this final url: `https://ed789d0.github.io/wifinfc/?ssid=<<network>>&pw=<<password>>` but replace <<network>> with whatever was printed after step 2 (without the quotation marks) and replace <<password>> with whatever was printed after step 3 (without the quotation marks).

You can now share this URL, but please note that it's easy for anyone to get your password from the link.
