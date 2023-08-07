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
