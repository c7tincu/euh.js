§1. Synopsis

  euh.js[1] is a JavaScript console wrapper that provides a simple, unified
  and non-breaking way of logging across several different environments. It
  makes things, arguably, a little bit less painful than this:

  try {
    console.log("I can has cheezburger?");
  }
  catch (e) {
    /* … */
  }

               ···············•     ***     •···············               

§2. Quick Reference

  euh.js exposes the “ø” object—the console wrapper—to the environment on
  “load”, if the environment is a browser, or on “require”, if the environ-
  ment supports CommonJS modules (e.g. Node.js).

• ø.log
• ø.warn
• ø.error

  These are the core methods of “ø” and they behave pretty much like you’d
  probably expect. Additionally, they support “chaining”:

  ø.log("Hi kids!").warn("Do you like chains?");

• ø.enabled

  You can use this boolean property to toggle logging on/off, at any time.
  By default, “ø.enabled” is “true”.

• ø.VERSION

  This property can be queried to find out the current euh.js release.
  euh.js is semantically versioned[2]. See “§4. Change Log” for a brief re-
  lease history.

• ø.consoleExists

  This boolean property allows you to check the presence of the “console”
  object in the environment—There are some environments (e.g. IE w/o F12)
  that don’t provide “console” straight out of the box.

• ø.logs

  This property stores the log messages when “ø.consoleExists” is “false”,
  so that you can examine them when and by whatever means you desire.

• ø.fyi, ø.par, ø.pil
• ø.wtf, ø.wat, ø.wut
• ø.omg, ø.omd
• ø.ln, ø.br, ø.nl
• ø.ast, ø.sep

  These are various alias methods. They’re included to suit my own taste,
  which means you don’t need to care about them, unless you feel like it.

• ø.noConflict

  If the environment is a browser, this method would—if called—throw euh.js
  into “no conflict” mode[3] and restore “ø” to its previous owner, if any.

               ···············•     ***     •···············               

§3. Support[4]

  I’ve tested euh.js on the following environments:

• Chrome “latest” (19)

• Firefox “latest” (12) 
  • w/ the native console
  • w/ Firebug “latest” (1.9.2)

• IE 9
  • w/o F12
  • w/ F12, in all modes: IE 9, IE 9 Compat View, IE 8, IE 7

• IE 8
  • w/o F12
  • w/ F12, in all modes: IE 8, IE 8 Compat View, IE 7

• Safari “latest” (5.1.7)

• Node.js “latest” (0.6.18)

               ···············•     ***     •···············               

§4. Change Log

• 0.1.1 (2012-05-28)

  Changed the output of ø.ast and ø.sep. The new asterism/separator style
  uses less non-Latin-1 characters.

• 0.1.0 (2012-05-25)

  Initial development release of euh.js.

               ···············•     ***     •···············               

§5. Future Plans[5]

• Provide timestamps to log messages.

• Comment out the code.

• Extend support to:

  • Chrome 4
  • Firefox 3.6
  • Mobile Safari “latest”
  • Opera “latest”

               ···············•     ***     •···············               

§6. Credits

• Cristian Tincu (@CristianTincu)

               ···············•     ***     •···············               

§7. License

  I made euh.js as an exercise and as an experiment. You’re free to use it
  in your own exercises, experiments or projects, whether they’re “closed”
  or “open”, commercial or non-commercial, “good” or “evil”, subject to
  the terms of the MIT License[6], shown below:

  Copyright © 2012 Cristian Tincu

  Permission is hereby granted, free of charge, to any person obtaining a
  copy of this software and associated documentation files (the Software),
  to deal in the Software without restriction, including without limitation
  the rights to use, copy, modify, merge, publish, distribute, sublicense
  and/or sell copies of the Software and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILI-
  TY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
  SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
  OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

               ···············•     ***     •···············               

§8. Notes

[1]

  Yep, “euh” (IPA: /ø/) is an interjection.

  See:
  • http://www.larousse.com/en/dictionaries/french-english/euh

[2]

  See:
  • http://semver.org/

[3]

  I’ve borrowed this trick—as well as others—from Underscore.js.

  See:
  • http://underscorejs.org/#noConflict

[4]

  I’m not really “supporting” all these environments in the cheering-clap-
  ping sense, as you might already imagine.

  “Latest” means the current stable version of the respective environment,
  at the time I’m writing this text.

[5]

  Planning is one thing and doing is another. Please don’t take these as
  promises—They’re mere intentions and might never become more than that.

[6]

  See:
  • http://opensource.org/licenses/mit-license.php
