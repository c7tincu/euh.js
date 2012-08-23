[![build status](https://secure.travis-ci.org/CristianTincu/euh.js.png)](http://travis-ci.org/CristianTincu/euh.js)
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

• ø.fyi, ø.par, ø.pil —wrap around ø.log
• ø.wtf, ø.wat, ø.wut —     ”      ø.warn
• ø.omg, ø.omd        —     ”      ø.error
• ø.ln,  ø.br,  ø.nl  —     ”      ø.log —new lines/breaks
• ø.ast, ø.sep        —     ”      ø.log —asterisms/separators

  These are various alias methods that wrap around the core methods of “ø”,
  as specified. They can output timestamps in ISO 8601 format—An attribute
  that you might find handy for basic performance tests.

• ø.logTimestamps

  You can use this boolean property to toggle timestamp output on/off, for
  the alias methods. By default, “ø.logTimestamps” is “true”.

• ø.noConflict

  If the environment is a browser, this method would—if called—throw euh.js
  into “no conflict” mode[3] and restore “ø” to its previous owner, if any.

               ···············•     ***     •···············               

§3. Support[4]

  I’ve tested euh.js on the following environments:

• Chrome “latest” (19)

• Chrome 4

• Firefox “latest” (13) 
  • w/ the native console
  • w/ Firebug “latest” (1.9.2)

• Firefox 3.6
  • w/o console (default)
  • w/ Firebug 1.7.3

• IE 9
  • w/o F12 (default)
  • w/ F12, in all modes: IE 9, IE 9 Compat View, IE 8, IE 7

• IE 8
  • w/o F12 (default)
  • w/ F12, in all modes: IE 8, IE 8 Compat View, IE 7

• Safari “latest” (5.1.7)

• Safari on iOS “latest” (5.1.1)

• Opera “latest” (12)

• Node.js “latest” (0.6.19)

               ···············•     ***     •···············               

§4. Change Log

• 0.2.0 (2012-06-14)

  Added timestamps to “ø.fyi”, “ø.par”, “ø.pil”, “ø.wtf”, “ø.wat”, “ø.wut”,
  “ø.omg” and “ø.omd”, toggleable via “ø.logTimestamps”.

• 0.1.2 (2012-06-04)

  Updated the Node.js module exports/require sections.

• 0.1.1 (2012-05-28)

  Changed the output of “ø.ast” and “ø.sep”. The new asterism/separator
  style uses less non-Latin-1 characters.

• 0.1.0 (2012-05-25)

  Initial development release of euh.js.

               ···············•     ***     •···············               

§5. Future Plans[5]

• Make euh.js Ender-compatible.

• Make euh.js semicolon-less.

• Comment out the code.

               ···············•     ***     •···············               

§6. Credits

• Cristian Tincu (@CristianTincu)

               ···············•     ***     •···············               

§7. License

  I made euh.js as an exercise and as an experiment. You’re free to use it
  in your own exercises, experiments or projects, whether they’re “closed”
  or “open”, commercial or non-commercial, “good” or “evil”, subject to
  the terms of the MIT License[6].

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
  • https://raw.github.com/CristianTincu/euh.js/master/license.txt
