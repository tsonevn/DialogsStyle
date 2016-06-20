import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {alert} from "ui/dialogs"
import {View} from'ui/core/view'

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
    
}

export function onTapButton(args:EventData){
    alert("Your message").then(()=> {
        console.log("Dialog closed!");
    });
}