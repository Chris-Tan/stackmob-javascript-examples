StackMob Node JS Example
=================================

This example isn't refined (sorry!).  Rather, it was an experiment that needs some more love and care to clean up.  :)  But, in the interest of a working example for others to improve on, it's shared here.

This runs the JS SDK in OAuth 2.0 mode on Node JS.  

* It would probably make more sense to run it in OAuth 1.0 mode since the developer owns the Node JS server and would likely want privileged access to the REST API (bypassing Access Control permissions).  To do that I'll need to include the OAUth 1.0 library `jsOAuth` and follow the approach for <a href="https://gist.github.com/ericktai/d6b5c3d6b3fdf40e7731" target="_blank">enabling the StackMob JS SDK in OAuth 1.0 mode</a>.  But OAuth 2.0 is the first step here until I revisit this project.

# How to Run

To run:

1.  Open `./start-oauth2-example.js`

    Add your public key. Find it in your <a href="https://dashboard.stackmob.com/settings" target="_blank">App Settings</a>
    
    ```js
    StackMob.init({
        publicKey: "YOUR PUBLIC KEY",
        apiVersion: 0
    });
    ```

2.  Go to the `./stackmob-javascript-examples/stackmob-nodejs/` folder and run this from the terminal.

	```
	$  node start-oauth2-example.js
	```
	
    Your server is now running.

3.  Visit <a href="http://127.0.0.1:1337/" target="_blank">http://127.0.0.1:1337/</a>



# Current Modifications

Added the following to the top of `./stackmob-javascript-examples/stackmob/stackmob-lib/stackmob-0.9.2.js`

```js
exports.jQuery = require('jquery');
var _ = require("lodash");
Backbone = require("backbone");
localStorage = require('localStorage');
```

I can fix that up once I understand the exports in Node JS more.  I'm welcome to suggestions/forks/fixes from those more familiar with it ;)
