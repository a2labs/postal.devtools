postal.devtools
===============

A extension for Google Chrome that allows you to view postal messages and interact with the message bus.

_Disclaimer: This is an appendTo Labs project and as such there is no promise of support or even future development of this project. We are working on this project to meet a need at appendTo and sharing it in the spirit of open source software. If it helps you or your team meet needs as well, that is awesome – however, use at your own risk._

**This was a hacky attempt at getting this to work to do some debugging, over time this needs to be cleaned up**

## Features that would be great to add:

* Ability to edit and replay messages
* Ability to send custom messages
* Ability to filter the list by channel and/or topic

## Usage

To use this extension (after loading it into Google Chrome via the Development Tools option on the extension page), you need to add code into your app to allow this extension to access your postal instance:

```javascript
window._postalWireTapMessages = [];
postal.addWireTap( function ( data, env ) {
	window._postalWireTapMessages.push( JSON.stringify({ data: data, env: env }) );
});
```

Currently the application polls that variable for changes.

## License

This project is available under a dual license of MIT

---

Copyright (c) 2012 appendTo (MIT License)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

See the MIT License for more details: http://opensource.org/licenses/MIT