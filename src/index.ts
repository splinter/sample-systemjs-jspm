"use strict";

import * as $ from "jquery";

export class App {
  public static init() {
    console.log("Hello World!");
    const message = $("#message").html();
    console.log(`Message is ${message}`);
  }
}



App.init();
