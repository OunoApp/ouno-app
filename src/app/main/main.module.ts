import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { MainComponent } from "./main.component";
import { ContributeModule } from "../contribute/contribute.module";
import { HomeModule } from "../home/home.module";
import { SearchModule } from "../search/search.module";

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
                        //loadChildren: () => import("~/app/contribute/contribute.module").then((m) => m.ContributeModule),
                        loadChildren: () => ContributeModule,
                        outlet: "contributeTab"
                    },
                    {
                        path: "home",
                        component: NSEmptyOutletComponent,
                        //loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
                        loadChildren: () => HomeModule,
                        outlet: "homeTab"
                    },
                    {
                        path: "search",
                        component: NSEmptyOutletComponent,
                        //loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
                        loadChildren: () => SearchModule,
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