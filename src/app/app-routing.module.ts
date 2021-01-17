import { NgModule } from "@angular/core";
import { Routes, PreloadAllModules } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";

import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AccountComponent } from "./account/account.component";
import { MainModule } from "./main/main.module";

export const COMPONENTS = [LoginComponent, WelcomeComponent, AccountComponent];

const routes: Routes = [

    { path: "", redirectTo: "/main/default", pathMatch: "full" },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "welcome", component: WelcomeComponent
    },
    {
        path: "account", component: AccountComponent
    },
    {
        path: "main",
        //component: NSEmptyOutletComponent,
        loadChildren: () => MainModule,
    },
    /*
    {
        path: "main",
        loadChildren: () => import("~/app/main/main.module").then(m => m.MainModule),
    },
    */

    /*
    {
        path: "",
        redirectTo: "/(homeTab:home/default//contributeTab:contribute/default//searchTab:search/default)",
        pathMatch: "full"
    },


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
    */
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy: PreloadAllModules })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
