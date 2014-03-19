define(function (require, exports, module) {
    "use strict";

    // Set the editor font style
    (function() {
        var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
        var style = ".CodeMirror { \
                      font-family: Ubuntu Mono; \
                      font-size:   16pt; \
                      line-height: 22px;}";

        ExtensionUtils.addEmbeddedStyleSheet(style);
    })();

});
