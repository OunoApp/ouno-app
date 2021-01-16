import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    moduleId: module.id,
    selector: "account-page",
    templateUrl: "./account.component.html"
})
export class AccountComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onLogout() {
        // Navigate to login page with clearHistory
        //this.routerExtension.navigate(["../login"], { clearHistory: true });
    }
}