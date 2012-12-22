(
  function (context) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var VERSION = "1.0.0";
var enabled;
var logs;
var doesConsoleExistImpl;
var P_ARRAY = Array.prototype;
var P_OBJECT = Object.prototype;
var P_FUNCTION = Function.prototype;
var P_DATE = Date.prototype;
var makeMethod;
var methods;
var method;
var i;
var l;
var pad;
var dateToIsoString;
var logTimestamps;
var makeAlias;
var aliases;
var alias;
var prevØ;

enabled = true;

logs = [];

doesConsoleExistImpl =
  /* Checks the existence of the `console` object in the environment.
     The `toString()` check might be a bit overkill… */
  function () {
    return (
      typeof console !== "undefined" &&
      console.log && console.warn && console.error && (
        /* Chrome, Safari, Opera, IE 10. */
        P_OBJECT.toString.call(console) === "[object Console]" ||
        /* Node.js, Firefox, IE 8–9. */
        P_OBJECT.toString.call(console) === "[object Object]"
      )
    )
  };

makeMethod =
  /* Makes the core methods. */
  function (method) {
    return (
      /* The core method implementation. */
      function () {
        if (api.enabled) {
          if (doesConsoleExistImpl()) {
            /* The common way. */
            if (typeof console[method] === "function") {
              console[method].apply(console, arguments);
            }
            /* The IE 8–9 way. */
            else {
              P_FUNCTION.apply.call(console[method], console, arguments);
            }
          }
          else {
            api.logs.push(P_ARRAY.slice.call(arguments));
          }
        }
        return api;
      }
    );
  };

pad =
  function (number) {
    return (number < 10 ? "0" : "") + number;
  };

dateToIsoString =
  P_DATE.toISOString ?
  function (date) {
    return date.toISOString();
  } :
  /* Fallback for non-ES5-compliant environments.
     https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toISOString#Description */
  function (date) {
    return (
      date.getUTCFullYear() + "-" +
      pad(date.getUTCMonth() + 1) + "-" +
      pad(date.getUTCDate()) + "T" +
      pad(date.getUTCHours()) + ":" +
      pad(date.getUTCMinutes()) + ":" +
      pad(date.getUTCSeconds()) + "." +
      ("" + (date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) + "Z"
    );
  };

logTimestamps = true;

makeAlias =
  /* Makes the alias methods. */
  function (method, prefix, content) {
    return (
      /* The alias method implementation. */
      function () {
        if (prefix !== null) {
          P_ARRAY.unshift.call(arguments, prefix);
        }
        if (api.logTimestamps && content === null) {
          P_ARRAY.unshift.call(arguments, dateToIsoString(new Date()) + " ");
        }
        return (
          api[method].apply(api, content !== null ? [ content ] : arguments)
        );
      }
    );
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  {
    "VERSION" : VERSION,
    "enabled" : enabled,
    "logs" : logs,
    "doesConsoleExist" : doesConsoleExistImpl,
    "logTimestamps" : logTimestamps
  };

methods =
  [
    "log",
    "warn",
    "error"
  ];
for (i = 0, l = methods.length; i < l; ++ i) {
  method = methods[i];
  api[method] = makeMethod(method);
}
aliases =
  [
    {
      "alias" : "fyi",
      "method" : "log",
      "prefix" : "FYI—",
      "content" : null
    },
    {
      "alias" : "par",
      "method" : "log",
      "prefix" : "¶ ",
      "content" : null
    },
    {
      "alias" : "pil",
      "method" : "log",
      "prefix" : "¶ ",
      "content" : null
    },
    {
      "alias" : "wtf",
      "method" : "warn",
      "prefix" : "WTF‽ ",
      "content" : null
    },
    {
      "alias" : "wat",
      "method" : "warn",
      "prefix" : "Wat‽ ",
      "content" : null
    },
    {
      "alias" : "wut",
      "method" : "warn",
      "prefix" : "Wut‽ ",
      "content" : null
    },
    {
      "alias" : "omg",
      "method" : "error",
      "prefix" : "OMG! ",
      "content" : null
    },
    {
      "alias" : "omd",
      "method" : "error",
      "prefix" : "OMD! ",
      "content" : null
    },
    {
      "alias" : "ln",
      "method" : "log",
      "prefix" : null,
      "content" : " "
    },
    {
      "alias" : "br",
      "method" : "log",
      "prefix" : null,
      "content" : " "
    },
    {
      "alias" : "nl",
      "method" : "log",
      "prefix" : null,
      "content" : " "
    },
    {
      "alias" : "ast",
      "method" : "log",
      "prefix" : null,
      "content" :
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    },
    {
      "alias" : "sep",
      "method" : "log",
      "prefix" : null,
      "content" :
        "────────────────────────────────────────" +
        "───────────────────────────────────────"
    }
  ];
for (i = 0, l = aliases.length; i < l; ++ i) {
  alias = aliases[i];
  api[alias.alias] = makeAlias(alias.method, alias.prefix, alias.content);
}

/* Probably CommonJS. */
if (typeof exports !== "undefined") {
  /* Probably Node.js. */
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = api;
  }
  exports["ø"] = api;
}
/* Probably a browser. */
else {
  prevØ = context["ø"];
  context["ø"] = api;
  api.noConflict =
    function () {
      context["ø"] = prevØ;
      return api;
    };
}



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
)(this);
