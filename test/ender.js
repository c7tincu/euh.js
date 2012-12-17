/*!
  * =============================================================
  * Ender: open module JavaScript framework (https://ender.no.de)
  * Build: ender build euh.js
  * =============================================================
  */

/*!
  * Ender: open module JavaScript framework (client-lib)
  * copyright Dustin Diaz & Jacob Thornton 2011-2012 (@ded @fat)
  * http://ender.jit.su
  * License MIT
  */
(function (context) {

  // a global object for node.js module compatiblity
  // ============================================

  context['global'] = context

  // Implements simple module system
  // losely based on CommonJS Modules spec v1.1.1
  // ============================================

  var modules = {}
    , old = context['$']
    , oldEnder = context['ender']
    , oldRequire = context['require']
    , oldProvide = context['provide']

  function require (identifier) {
    // modules can be required from ender's build system, or found on the window
    var module = modules['$' + identifier] || window[identifier]
    if (!module) throw new Error("Ender Error: Requested module '" + identifier + "' has not been defined.")
    return module
  }

  function provide (name, what) {
    return (modules['$' + name] = what)
  }

  context['provide'] = provide
  context['require'] = require

  function aug(o, o2) {
    for (var k in o2) k != 'noConflict' && k != '_VERSION' && (o[k] = o2[k])
    return o
  }

  /**
   * main Ender return object
   * @constructor
   * @param {Array|Node|string} s a CSS selector or DOM node(s)
   * @param {Array.|Node} r a root node(s)
   */
  function Ender(s, r) {
    var elements
      , i

    this.selector = s
    // string || node || nodelist || window
    if (typeof s == 'undefined') {
      elements = []
      this.selector = ''
    } else if (typeof s == 'string' || s.nodeName || (s.length && 'item' in s) || s == window) {
      elements = ender._select(s, r)
    } else {
      elements = isFinite(s.length) ? s : [s]
    }
    this.length = elements.length
    for (i = this.length; i--;) this[i] = elements[i]
  }

  /**
   * @param {function(el, i, inst)} fn
   * @param {Object} opt_scope
   * @returns {Ender}
   */
  Ender.prototype['forEach'] = function (fn, opt_scope) {
    var i, l
    // opt out of native forEach so we can intentionally call our own scope
    // defaulting to the current item and be able to return self
    for (i = 0, l = this.length; i < l; ++i) i in this && fn.call(opt_scope || this[i], this[i], i, this)
    // return self for chaining
    return this
  }

  Ender.prototype.$ = ender // handy reference to self


  function ender(s, r) {
    return new Ender(s, r)
  }

  ender['_VERSION'] = '0.4.3-dev'

  ender.fn = Ender.prototype // for easy compat to jQuery plugins

  ender.ender = function (o, chain) {
    aug(chain ? Ender.prototype : ender, o)
  }

  ender._select = function (s, r) {
    if (typeof s == 'string') return (r || document).querySelectorAll(s)
    if (s.nodeName) return [s]
    return s
  }


  // use callback to receive Ender's require & provide and remove them from global
  ender.noConflict = function (callback) {
    context['$'] = old
    if (callback) {
      context['provide'] = oldProvide
      context['require'] = oldRequire
      context['ender'] = oldEnder
      if (typeof callback == 'function') callback(require, provide, this)
    }
    return this
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = ender
  // use subscript notation as extern for Closure compilation
  context['ender'] = context['$'] = ender

}(this));

(function () {

  var module = { exports: {} }, exports = module.exports;

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


  provide("euh.js", module.exports);

  $.ender(
    {
      "ø" : require("euh.js")
    }
  )


}());
