import { Component, OnInit } from "@angular/core";
import { Page } from '@nativescript/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

	public currentDraw: any;

    constructor(private page: Page, private http: HttpClient) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.getCurrentDraw();
    }

    public getCurrentDraw() {
	    let params = new HttpParams({
	        fromObject: {
	            "product": "forecast_7days_simple",
	        }
	    });

	    this.http.get("https://ouno.tech/api/currentDraw", { params: params })
	        //.pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
	        .subscribe(result => {
	            this.currentDraw = result;
	            console.log('FLAGGY1:');
	            console.log(result);
	        }, error => {
	        	console.log('FLAGGY2:');
	            console.error(error);
	        });
	        
	}
}
