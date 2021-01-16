import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: MainComponent, children: [
                    {
                        path: "contribute",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/contribute/contribute.module").then((m) => m.ContributeModule),
                        outlet: "contributeTab"
                    },
                    {
                        path: "home",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
                        outlet: "homeTab"
                    },
                    {
                        path: "search",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
                        outlet: "searchTab"
                    }
                ]
            }
        ])
    ],
    declarations: [
        MainComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MainModule { }