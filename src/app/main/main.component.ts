import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "main-page",
    templateUrl: "./main.component.html"
})
export class MainComponent {
    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.routerExtension.navigate([{ outlets: { contributeTab: ["contribute"], homeTab: ["home"], searchTab: ["search"] } }], { relativeTo: this.activeRoute });
    }
}