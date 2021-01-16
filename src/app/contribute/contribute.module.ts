import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ContributeRoutingModule } from "./contribute-routing.module";
import { ContributeComponent } from "./contribute.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContributeRoutingModule
    ],
    declarations: [
        ContributeComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContributeModule { }
