define(function (require, exports, module) {
    "use strict";

    // Set the editor font style
    
    (function() {
        var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
        var style = ".CodeMirror { \
                      font-family: Ubuntu Mono;}";

              ExtensionUtils.addEmbeddedStyleSheet(style);
    })();
    
});
