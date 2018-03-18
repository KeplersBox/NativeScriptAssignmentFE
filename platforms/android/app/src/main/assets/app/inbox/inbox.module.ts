import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { InboxRoutingModule } from "./inbox-routing.module";
import { InboxComponent } from "./inbox.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InboxRoutingModule,
        SharedModule
    ],
    declarations: [
        InboxComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InboxModule { }
