;(function(context, undefined) {
  "use strict";

  var
    prevEuh = context.ø
  , ø = {
      "logs": []
    , "enabled": true
    , "VERSION": "0.1.2"
    }
  ;

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports !== void 0) {
      exports = module.exports = ø;
    }
    exports.ø = ø;
  }
  else {
    context.ø = ø;
  }

/*               ···············•   ***   •···············               */

  var
    pArray = Array.prototype
  , pObject = Object.prototype
  , pFunction = Function.prototype
  ;

  var
    OBJECT_TO_STRING = "[object Object]"
  , CONSOLE_TO_STRING = "[object Console]"
  ;

  ø.consoleExists = false;
  if (typeof console !== "undefined") {
    var consoleToString = pObject.toString.call(console);
    ø.consoleExists =
      consoleToString === OBJECT_TO_STRING
      || consoleToString === CONSOLE_TO_STRING
    ;
  }

/*               ···············•   ***   •···············               */

  var
    methodFactory = function(method) {
      return (
        function() {
          if (ø.enabled === true) {
            if (ø.consoleExists === true) {
              if (pFunction.bind !== void 0) {
                if (typeof console[method] === "object") {
                  console[method] = pFunction.call.bind(
                    console[method]
                  , console
                  );
                }
                console[method].apply(console, arguments);
              }
              else {
                pFunction.call.call(
                  console[method]
                , console
                , pArray.slice.call(arguments)
                );
              }
            }
            else {
              ø.logs.push(pArray.slice.call(arguments));
            }
          }
          return ø;
        }
      );
    }
  , methods = [
      "log"
    , "warn"
    , "error"
    ]
  ;

  for (var i = 0, l = methods.length; i < l; i ++) {
    var method = methods[i];
    ø[method] = methodFactory(method);
  }

/*               ···············•   ***   •···············               */

  var
    aliasFactory = function(method, prefix, content) {
      return (
        function() {
          if (prefix !== void 0) {
            pArray.unshift.call(arguments, prefix);
          }
          ø[method].apply(
            ø
          , content !== void 0
              ? [content]
              : arguments
          );
          return ø;
        }
      );
    }
  , aliases = [
      {
        "alias": "fyi"
      , "method": "log"
      , "prefix": "FYI—"
      , "content": void 0
      }
    , {
        "alias": "par"
      , "method": "log"
      , "prefix": "¶ "
      , "content": void 0
      }
    , {
        "alias": "pil"
      , "method": "log"
      , "prefix": "¶ "
      , "content": void 0
      }
    , {
        "alias": "wtf"
      , "method": "warn"
      , "prefix": "WTF‽ "
      , "content": void 0
      }
    , {
        "alias": "wat"
      , "method": "warn"
      , "prefix": "Wat‽ "
      , "content": void 0
      }
    , {
        "alias": "wut"
      , "method": "warn"
      , "prefix": "Wut‽ "
      , "content": void 0
      }
    , {
        "alias": "omg"
      , "method": "error"
      , "prefix": "OMG! "
      , "content": void 0
      }
    , {
        "alias": "omd"
      , "method": "error"
      , "prefix": "OMD! "
      , "content": void 0
      }
    , {
        "alias": "ln"
      , "method": "log"
      , "prefix": void 0
      , "content": " "
      }
    , {
        "alias": "br"
      , "method": "log"
      , "prefix": void 0
      , "content": " "
      }
    , {
        "alias": "nl"
      , "method": "log"
      , "prefix": void 0
      , "content": " "
      }
    , {
        "alias": "ast"
      , "method": "log"
      , "prefix": void 0
      , "content"
          : "               ···············"
            + "•     ***     •"
            + "···············               "
      }
    , {
        "alias": "sep"
      , "method": "log"
      , "prefix": void 0
      , "content"
          : "               ···············"
            + "•     ***     •"
            + "···············               "
      }
    ]
  ;

  for (var i = 0, l = aliases.length; i < l; i ++) {
    var alias = aliases[i];
    ø[alias.alias] = aliasFactory(
      alias.method
    , alias.prefix
    , alias.content
    );
  }

/*               ···············•   ***   •···············               */

  ø.noConflict = function() {
    context.ø = prevEuh;
    return this;
  };

}).call(this, this);
