import { Component, OnInit } from "@angular/core";
import { Page } from '@nativescript/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

	public causes: any;

    constructor(private page: Page, private http: HttpClient) {
        // Use the constructor to inject services.
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.getCauses({ latitude: 37.7397, longitude: -121.4252 });
    }

    public getCauses(coordinates: any) {
	    let params = new HttpParams({
	        fromObject: {
	            "product": "forecast_7days_simple",
	        }
	    });
	    /*
	    this.causes = [{
	    	'name': 'Care Flight'
	    },{
	    	'name': 'Food Bank'
	    },{
	    	'name': 'The Ocean Cleanup'
	    },{
	    	'name': 'Wells for Africa'
	    }];
	    */

	    this.http.get("https://ouno.tech/api/causes", { params: params })
	        //.pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
	        .subscribe(result => {
	            this.causes = result;
	            console.log('FLAGGY1:');
	            console.log(result);
	        }, error => {
	        	console.log('FLAGGY2:');
	            console.error(error);
	        });
	        
	}
}
