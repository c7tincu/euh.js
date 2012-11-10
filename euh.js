void function (context) {
  "use strict"

  var
    ø = {
      "logs" : []
    , "enabled" : true
    , "VERSION" : "0.3.1"
    , "logTimestamps" : true
    }

  if (typeof exports !== "undefined") {
    typeof module !== "undefined" && typeof module.exports !== "undefined"
      && (exports = module.exports = ø)
    exports["ø"] = ø
  }
  else {
    var prevEuh = context["ø"]
    context["ø"] = ø
    ø.noConflict = function () {
      context["ø"] = prevEuh
      return ø
    }
  }

/*                                  ***                                  */

  var
    pArray = Array.prototype
  , pObject = Object.prototype
  , pFunction = Function.prototype
  , pDate = Function.prototype

  ø.consoleExists =
    typeof console !== "undefined"
      && (
        function (str) {
          return str === "[object Object]" || str === "[object Console]"
        }
      )(pObject.toString.call(console))

/*                                  ***                                  */

  var
    makeMethod = function (method) {
      return (
        function () {
          if (ø.enabled === true) {
            if (ø.consoleExists === true) {
              if (typeof pFunction.bind !== "undefined") {
                if (typeof console[method] === "object") {
                  console[method] =
                    pFunction.call.bind(console[method], console)
                }
                console[method].apply(console, arguments)
              }
              else {
                pFunction.call.call(
                  console[method]
                , console
                , pArray.slice.call(arguments)
                )
              }
            }
            else {
              ø.logs.push(pArray.slice.call(arguments))
            }
          }
        return ø
        }
      )
    }
  , methods = [
      "log"
    , "warn"
    , "error"
    ]
  , method
  , i
  , l

  for (i = 0, l = methods.length; i < l; ++ i) {
    method = methods[i]
    ø[method] = makeMethod(method)
  }

/*                                  ***                                  */

  typeof pDate.toISOString === "undefined"
    && void function (pad) {
      Date.prototype.toISOString = function () {
        return (
          this.getUTCFullYear()
            + "-" + pad(this.getUTCMonth() + 1)
            + "-" + pad(this.getUTCDate())
            + "T" + pad(this.getUTCHours())
            + ":" + pad(this.getUTCMinutes())
            + ":" + pad(this.getUTCSeconds())
            + "."
            + String(
              (this.getUTCMilliseconds() / 1000).toFixed(3)
            ).slice(2, 5)
            + "Z"
        )
      }
    }(
      function (number) {
        return (number < 10 ? "0" : "") + number
      }
    )

/*                                  ***                                  */

  var
    makeAlias = function (method, prefix, content) {
      return (
        function () {
          if (prefix !== null) {
            pArray.unshift.call(arguments, prefix)
          }
          if (ø.logTimestamps === true && content === null) {
            pArray.unshift.call(arguments, new Date().toISOString())
          }
          ø[method].apply(ø, content !== null ? [content] : arguments)
          return ø
        }
      )
    }
  , aliases = [
      {
        "alias" : "fyi"
      , "method" : "log"
      , "prefix" : "FYI—"
      , "content" : null
      }
    , {
        "alias" : "par"
      , "method" : "log"
      , "prefix" : "¶ "
      , "content" : null
      }
    , {
        "alias" : "pil"
      , "method" : "log"
      , "prefix" : "¶ "
      , "content" : null
      }
    , {
        "alias" : "wtf"
      , "method" : "warn"
      , "prefix" : "WTF‽ "
      , "content" : null
      }
    , {
        "alias" : "wat"
      , "method" : "warn"
      , "prefix" : "Wat‽ "
      , "content" : null
      }
    , {
        "alias" : "wut"
      , "method" : "warn"
      , "prefix" : "Wut‽ "
      , "content" : null
      }
    , {
        "alias" : "omg"
      , "method" : "error"
      , "prefix" : "OMG! "
      , "content" : null
      }
    , {
        "alias" : "omd"
      , "method" : "error"
      , "prefix" : "OMD! "
      , "content" : null
      }
    , {
        "alias" : "ln"
      , "method" : "log"
      , "prefix" : null
      , "content" : " "
      }
    , {
        "alias" : "br"
      , "method" : "log"
      , "prefix" : null
      , "content" : " "
      }
    , {
        "alias" : "nl"
      , "method" : "log"
      , "prefix" : null
      , "content" : " "
      }
    , {
        "alias" : "ast"
      , "method" : "log"
      , "prefix" : null
      , "content"
          : "                              "
          + "      ***      "
          + "                              "
      }
    , {
        "alias" : "sep"
      , "method" : "log"
      , "prefix" : null
      , "content"
          : "                              "
          + "      ***      "
          + "                              "
      }
    ]
  , alias

  for (i = 0, l = aliases.length; i < l; ++ i) {
    alias = aliases[i]
    ø[alias.alias] = makeAlias(alias.method, alias.prefix, alias.content)
  }

/*                                  ***                                  */

}(this)
