§1. Synopsis

euh.js[¹] is a JavaScript console wrapper.
I made it as an exercise and as an experiment.

               ···············•❧     ⁂     ☙•···············               

§2. Quick Reference

euh.js exposes the “ø” object to the environment.
“ø” is the console wrapper. Now, let’s see its members:

❧ ø.log
❧ ø.warn
❧ ø.error

These are the core methods. They behave like you’d probably expect.
Additionally, they support “chaining”:

> ø.log("Hi kids!").warn("Do you like chains?");

❧ ø.enabled

This property toggles logging on/off. By default, it’s set to “true”.

❧ ø.VERSION

This property can be queried to find out the current euh.js release.
euh.js is semantically versioned[²].

❧ ø.consoleExists

This property can be queried to check the presence of the “console” object
in the environment—There are certain environments (e.g. IE w/o F12) that
don’t provide “console” straight out of the box.

❧ ø.logs

This property stores the log messages when “ø.consoleExists” is “false”, so
that you can examine them when and by whatever means you desire.

❧ ø.fyi, ø.par, ø.pil
❧ ø.wtf, ø.wat, ø.wut
❧ ø.omg, ø.omd
❧ ø.ln, ø.br, ø.nl
❧ ø.ast, ø.sep

These are various alias methods. They’re included to suit my own taste.
You don’t need to care about them, unless you feel like it.

❧ ø.noConflict

If the environment happens to be a browser, this method would throw euh.js
into “no conflict” mode[³] and restore “ø” to its previous owner, if any.

               ···············•❧     ⁂     ☙•···············               

§3. Support[⁴]

I’ve tested euh.js on:

❧ Chrome “latest” (19)

❧ Firefox “latest” (12) 
  • w/ the native console
  • w/ Firebug “latest” (1.9.2)

❧ IE 9
  • w/o F12
  • w/ F12, in all modes: IE 9, IE 9 Compat View, IE 8, IE 7

❧ IE 8
  • w/o F12
  • w/ F12, in all modes: IE 8, IE 8 Compat View, IE 7

❧ Safari “latest” (5.1.7)

❧ Node.js “latest” (0.6.18)

               ···············•❧     ⁂     ☙•···············               

§4. Change Log

❧ 0.1.0 (2012-05-25)

Initial development release of euh.js.

               ···············•❧     ⁂     ☙•···············               

§5. Future Plans[⁵]

❧ Provide timestamps to log messages.

❧ Comment out the code.

❧ Extend support to:

  • Chrome 4
  • Firefox 3.6
  • Mobile Safari “latest”
  • Opera “latest”

               ···············•❧     ⁂     ☙•···············               

§6. Credits

❧ Cristian Tincu (@CristianTincu)

               ···············•❧     ⁂     ☙•···············               

§7. License

euh.js is licensed under the MIT License[⁶], whose text is shown below.

> Copyright © 2012 Cristian Tincu
>
> Permission is hereby granted, free of charge, to any person obtaining a
> copy of this software and associated documentation files (the Software),
> to deal in the Software without restriction, including without limitation
> the rights to use, copy, modify, merge, publish, distribute, sublicense
> and/or sell copies of the Software and to permit persons to whom the
> Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included
> in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
> OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILI-
> TY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
> SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
> OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
> ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

               ···············•❧     ⁂     ☙•···············               

§8. Notes

[¹]
Yes, “euh” (IPA: /ø/) is an interjection.

⚓ http://www.larousse.com/en/dictionaries/french-english/euh
  —for details

[²]
See “§4. Change Log” for a brief release history.

⚓ http://semver.org/
  —for what semantic versioning means

[³]
I borrowed this trick—as many others—from Jeremy Ashkenas’ Underscore.js.

⚓ http://underscorejs.org/#noConflict
  —for details

[⁴]
I’m not really “supporting” all these environments in the cheering-clapping
sense, as you might imagine.

[⁵]
Planning is one thing and doing is another.
Please don’t take these as promises—They are mere intentions.

[⁶]
I’m not either interested nor knowledgeable in legal matters.
I’ve chosen the MIT License because it’s, arguably, the most well known
permissive free software license.

⚓ http://codinghorror.com/blog/2007/04/pick-a-license-any-license.html
  —for Jeff Atwood’s explanation on why one should pick a license
⚓ http://opensource.org/licenses/mit-license.php
  —for details on the MIT License
