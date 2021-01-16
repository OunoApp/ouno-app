import { Component, OnInit } from "@angular/core";
import { Page } from '@nativescript/core';

import { DataService, DataItem } from "../shared/data.service";

@Component({
    selector: "Contribute",
    templateUrl: "./contribute.component.html"
})
export class ContributeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private page: Page, private _itemService: DataService) { 
    	this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
