#!/usr/bin/env node
"use strict";

var ø = require("../dist/euh.js");

/* ================================== ·.· ================================== */

ø
  .log("euh.js ", ø.VERSION)
  .ln()
  .ast()
  .ln();
ø
  .log("Captain’s log, stardate 2258.42.")
  .warn("Siehe, ich bin das, was sich immer selber überwinden muß.")
  .error("Errare humanum est, sed perseverare diabolicum.")
  .ln()
  .sep()
  .ln();
ø
  .fyi("ø.enabled: ", ø.enabled)
  .par("ø.doesConsoleExist(): ", ø.doesConsoleExist())
  .pil("this: ", this)
  .ln()
  .wtf("ø.wtf.prototype: ", ø.wtf.prototype)
  .wat("ø.wat.prototype: ", ø.wat.prototype)
  .wut("ø.wut.prototype: ", ø.wut.prototype)
  .br()
  .omg("ø.omd: ", ø.omd)
  .omd("ø.omg: ", ø.omg)
  .nl();



/* ================================== .·. ================================== */
