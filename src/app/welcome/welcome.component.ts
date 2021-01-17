import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    moduleId: module.id,
    selector: "welcome-page",
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onGoMain() {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(["../main/default"], { 
        	clearHistory: true, 
        	animated: true,
      		transition: { name: 'slide' } 
      	});
    }

    onLogout() {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(["../login"], { 
        	clearHistory: true, 
        	animated: true,
      		transition: { name: 'slide' } 
      	});
    }
}