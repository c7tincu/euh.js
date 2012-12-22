[euh.js](https://github.com/CristianTincu/euh.js)
===============================================================================

+ [§1. Synopsis](#§1-synopsis)
+ [§2. Installation Instructions](#§2-installation-instructions)
+ [§3. Quick API Reference](#§3-quick-api-reference)
+ [§4. Support](#§4-support4)
+ [§5. Change Log](#§5-change-log)
+ [§6. Credits](#§6-credits)
+ [§7. License](#§7-license)
+ [§8. Notes](#§8-notes)



§1. Synopsis
-------------------------------------------------------------------------------

euh.js<sup>[1](#1)</sup> is a JavaScript console wrapper that provides a
simple, unified, and non-breaking way of logging across several different
environments. It makes things, arguably, a little bit less painful than this:

```javascript
try {
  console.log("I can has cheezburger?");
} catch (e) { /* … */ }
```

Or this:

```javascript
if (typeof console !== "undefined" && console.log) {
  console.log("I can has cheezburger?");
}
```



§2. Installation Instructions
-------------------------------------------------------------------------------

### In browsers:

Download
[`dist/euh.js`](https://github.com/CristianTincu/euh.js/tree/1.0.0/dist/euh.js).
<br/>
Then:

```html
<script src="path/to/euh.js"></script>
```
See
[`test/euh-browser.html`](https://github.com/CristianTincu/euh.js/blob/1.0.0/test/euh-browser.html)
for details.

### In Node.js:

Fire up a terminal window, and type the following command:

```bash
npm install euh.js
```
Then:

```javascript
var ø = require("path/to/euh.js");
```

See
[`test/euh-node.js`](https://github.com/CristianTincu/euh.js/blob/1.0.0/test/euh-node.js)
for details.

### In browsers, with Ender:

Fire up a terminal window, and type the following command:

```bash
ender build euh.js
```

Then:

```html
<script src="path/to/ender.js"></script>
```

See
[`test/euh-ender.html`](https://github.com/CristianTincu/euh.js/blob/1.0.0/test/euh-ender.html)
for details.



§3. Quick API Reference
-------------------------------------------------------------------------------

euh.js exposes the `ø` object—the console wrapper—to the environment on “load”,
if the environment is a browser, or on “require”, if the environment supports
CommonJS modules (e.g. Node.js).

+ `ø.log()`
+ `ø.warn()`
+ `ø.error()`

These are the core methods of `ø`, and they behave pretty much like you’d
probably expect.<br/>
Additionally, they support “chaining”:

```javascript
ø.log("Hi kids!").warn("Do you like chains?");
```

+ `ø.enabled`

You can use this boolean property to toggle logging on/off, at any time. By
default, `ø.enabled` is `true`.

+ `ø.VERSION`

This property can be queried to find out the current euh.js release.<br/>
euh.js is semantically versioned<sup>[2](#2)</sup>. See
[§5. Change Log](#§5-change-log) for a brief release history.

+ `ø.doesConsoleExist()`

This function allows you to check the existence of the `console` object in the
environment—There are some environments (e.g. IE 8–9 w/o F12) that don’t
provide `console` straight out of the box.

+ `ø.logs`

This property stores the log messages when `ø.doesConsoleExist()` is `false`,
so that you can examine them when, and by whatever means you desire.

+ `ø.fyi()`, `ø.par()`, `ø.pil()` —wrap around `ø.log()`
+ `ø.wtf()`, `ø.wat()`, `ø.wut()` —wrap around `ø.warn()`
+ `ø.omg()`, `ø.omd()` —wrap around `ø.error()`
+ `ø.ln()`,  `ø.br()`,  `ø.nl()` —wrap around `ø.log()` —new lines/breaks
+ `ø.ast()`, `ø.sep()` —wrap around `ø.log()` —asterisms/separators

These are various alias methods that wrap around the core methods of `ø`, as
specified. They can output timestamps in ISO 8601 format—An attribute that you
might find handy for basic performance tests.

+ `ø.logTimestamps`

You can use this boolean property to toggle timestamp output on/off, for the
alias methods. By default, `ø.logTimestamps` is `true`.

+ `ø.noConflict()`

If the environment is a browser, this method would—if called—throw euh.js into
“no conflict” mode<sup>[3](#3)</sup>, and restore `ø` to its previous owner, if
any.



§4. Support<sup>[4](#4)</sup>
-------------------------------------------------------------------------------

I’ve tested euh.js on the following environments:

+ **Chrome “latest” (23.0.1271.97)**

+ **Chrome 4**

+ **Firefox “latest” (17.0.1)**<br/>
  — w/ the native console<br/>
  — w/ Firebug “latest” (1.11.1)

+ **Firefox 3.6**<br/>
  — w/o console (default)<br/>
  — w/ Firebug 1.7.3

+ **IE 10**, in all modes: IE 10, IE 10 Compat View, IE 9, IE 8, IE 7

+ **IE 9**<br/>
  — w/o F12 (default)<br/>
  — w/ F12, in all modes: IE 9, IE 9 Compat View, IE 8, IE 7

+ **IE 8**<br/>
  — w/o F12 (default)<br/>
  — w/ F12, in all modes: IE 8, IE 8 Compat View, IE 7

+ **IE 7**

+ **IE 6**

+ **Safari “latest” (6.0.2)** on OS X

+ **Safari “latest” (5.1.7)** on Windows

+ **Mobile Safari on iOS 6** w/ Remote Web Inspector

+ **Mobile Safari on iOS 5** w/ Debug Console

+ **Opera “latest” (12.12)**

+ **Node.js “latest” (0.8.16)**



§5. Change Log
-------------------------------------------------------------------------------

+ **1.0.0 (2012-12-22)**

Changed the output of `ø.ast` and `ø.sep`.

The API is now “freezed”. I don’t have any plans for adding new features or
changing existing ones. Should any issues appear, I’ll try to fix them.

+ **0.4.0 (2012-12-18)**

Complete rewrite.

+ **0.3.1 (2012-11-10)**

Made euh.js semicolon-less.

Fixed a bug where the `toISOString` “shim” was being applied to a local proxy
variable instead of `Date.prototype`.

+ **0.3.0 (2012-06-21)**

Made euh.js Ender-compatible.

Changed the output of `ø.ast` and `ø.sep`.

+ **0.2.0 (2012-06-14)**

Added timestamps to `ø.fyi`, `ø.par`, `ø.pil`, `ø.wtf`, `ø.wat`, `ø.wut`,
`ø.omg`, and `ø.omd`, toggleable via `ø.logTimestamps`.

+ **0.1.2 (2012-06-04)**

Updated the Node.js module exports/require sections.

+ **0.1.1 (2012-05-28)**

Changed the output of `ø.ast` and `ø.sep`. The new asterism/separator style
uses less non-Latin-1 characters.

+ **0.1.0 (2012-05-25)**

Initial development release of euh.js.



§6. Credits
-------------------------------------------------------------------------------

+ **Cristian Tincu** (@CristianTincu on GitHub and Twitter)



§7. License
-------------------------------------------------------------------------------

I made euh.js as an exercise, and as an experiment. You’re free to use it in
your own exercises, experiments, or projects, whether they’re “closed” or
“open”, commercial or non-commercial, “good” or “evil”, subject to the terms of
the MIT License<sup>[5](#5)</sup>.



§8. Notes
-------------------------------------------------------------------------------

### 1

Yep, “euh” (IPA: `/ø/`) is an interjection.

See http://www.larousse.com/en/dictionaries/french-english/euh

### 2

See http://semver.org/

### 3

I’ve borrowed this trick—as well as others—from Underscore.js.

See http://underscorejs.org/#noConflict

### 4

“Latest” means the current stable version of the respective environment, at the
time I’m writing this text.

### 5

See https://github.com/CristianTincu/euh.js/blob/master/LICENSE.md
