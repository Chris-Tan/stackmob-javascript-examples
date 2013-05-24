StackMob Node JS Example
=================================

This example isn't refined (sorry!).  Rather, it was an experiment that needs some more love and care to clean up.  :)  But, in the interest of a working example for others to improve on, it's shared here.

To run:

1.  Add your Key

    Open `./start-oauth2-example.js`

    Add your public key

2.  Run this from the terminal.

	```
	$  node nodeexample.js
	```

3.  Visit <a href="http://127.0.0.1:1337/" target="_blank">http://127.0.0.1:1337/</a>



# Current Modifications

Added the following to the top of `./stackmob/stackmob-lib/stackmob-0.9.2.js`

```js
exports.jQuery = require('jquery');
var _ = require("lodash");
Backbone = require("backbone");
localStorage = require('localStorage');
```

I can fix that up once I understand the exports in Node JS more.  I'm welcome to suggestions/forks/fixes from those more familiar with it ;)