"use strict";
var main_view_model_1 = require("./main-view-model");
var dialogs_1 = require("ui/dialogs");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onTapButton(args) {
    dialogs_1.alert("Your message").then(function () {
        console.log("Dialog closed!");
    });
}
exports.onTapButton = onTapButton;
//# sourceMappingURL=main-page.js.map