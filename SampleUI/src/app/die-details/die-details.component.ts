import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GoogleAPIService } from '../services/google-map.services'
declare const google: any;
import { Chart } from 'angular-highcharts';
import { ApiServices } from '../services/api.services'
import { AppConfig } from '../config/app.config'
import { DatePipe } from '@angular/common'
import { GlobalService } from '../services/index'
interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-die-details',
    templateUrl: './die-details.component.html',
    styleUrls: ['./die-details.component.css'],
    providers: [GlobalService]
})
export class DieDetailsComponent implements OnInit, OnChanges {

    @Input() detailElement: { toolId: string, count: string, relatedPart: string, mtbFailure: string, quality: string, failureDTime: string, lat: string, lng: string, battery: string, maxCount: string, vendor: string };
    @Input() selectedPeriod = this.global.selectedPeriod;
    chart;
    constructor(private googleAPIService: GoogleAPIService, private apicall: ApiServices, private datepipe: DatePipe, public global: GlobalService) {
    }
    chartValues = [];
    chartCategories = [];
    interval
    ngOnInit() {
        //clearInterval(this.interval);
        this.initmap();
        this.addMarker();
        this.initChart();
        this.interval = setInterval(() => {
            console.log('Interval Polling ngOnint',this.interval,this.flagSidebaropen)
            this.addMarker();
            this.updateChartValues();
        }, 10000);
    }
    ngOnChanges() {
        this.initmap();
        this.addMarker();
        this.initChart();
        this.chartValues = [];
        this.chartCategories = [];
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log('ngOnDestroy:',this.interval)
        clearInterval(this.interval);
    }
    initChart() {
        let startTime;
        let values;
        this.chart = new Chart({
            chart: {
                type: 'line'
            },
            title: {
                text: ''
            }, xAxis: {
                categories: this.chartCategories
            },
            credits: {
                enabled: true
            },
            series: [{
                name: 'PressCount',
                data: this.chartValues
            }]
        });
    }
    updateChartValues() {
        if (this.selectedPeriod == this.global.dropdownPeriods[1]) {
            console.log('ChartUpdate : ',this.selectedPeriod )
            this.apicall.getHistoryWeek(this.detailElement.vendor, this.detailElement.relatedPart, this.detailElement.toolId).subscribe(data => {
                let values = data['val'];
                let str: string;
                values.forEach(element => {
                    this.chartValues.push(+element['count']);
                    str = element['server_datetime'];
                    this.chartCategories.push(str.split(' ')[1]);
                });
            });
        }
        else if (this.selectedPeriod == this.global.dropdownPeriods[2]) {
            console.log('ChartUpdate : ',this.selectedPeriod )
            this.apicall.getHistoryMonth(this.detailElement.vendor, this.detailElement.relatedPart, this.detailElement.toolId).subscribe(data => {
                let values = data['val'];
                let str: string;
                values.forEach(element => {
                    this.chartValues.push(+element['count']);
                    str = element['server_datetime'];
                    this.chartCategories.push(str.split(' ')[1]);
                });
            });
        }
        else if (this.selectedPeriod == this.global.dropdownPeriods[3]) {
            console.log('ChartUpdate : ',this.selectedPeriod )
            this.apicall.getHistoryYear(this.detailElement.vendor, this.detailElement.relatedPart, this.detailElement.toolId).subscribe(data => {
                let values = data['val'];
                let str: string;
                values.forEach(element => {
                    this.chartValues.push(+element['count']);
                    str = element['server_datetime'];
                    this.chartCategories.push(str.split(' ')[3]);
                });
            });
        }
        else {
            console.log('ChartUpdate : ',this.selectedPeriod )
            this.apicall.getHistoryDay(this.detailElement.vendor, this.detailElement.relatedPart, this.detailElement.toolId).subscribe(data => {
                let values = data['val'];
                let str: string;
                values.forEach(element => {
                    this.chartValues.push(+element['count']);
                    str = element['server_datetime'];
                    this.chartCategories.push(str.split(' ')[1]);
                });
            });
        }

    }
    bounds: { north: number, south: number, east: number, west: number };
    myCenter;
    map;
    initmap() {

        this.apicall.getFloorDetails(this.detailElement.vendor, this.detailElement.toolId, this.detailElement.relatedPart).subscribe(data => {
            this.bounds = data['loc'][0]
            this.googleAPIService.googleReady()
                .subscribe(
                    null,
                    err => console.log(err),
                    () => {
                        var historicalOverlay;
                        this.myCenter = new google.maps.LatLng(this.detailElement.lat, this.detailElement.lng);
                        this.map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 21,
                            center: this.myCenter,
                            scrollwheel: false
                        });

                        var imageBounds = {
                            north: + this.bounds['north_lat'],
                            south: + this.bounds['south_lat'],
                            east: +this.bounds['east_long'],
                            west: + this.bounds['west_long']
                        };
                        historicalOverlay = new google.maps.GroundOverlay(
                            AppConfig.endpoints['serverIp'] + this.bounds['floorplan'],
                            imageBounds);
                        historicalOverlay.setMap(this.map);

                    }
                );
        })

    }
    Marker;
    addMarker() {
        this.Marker = new google.maps.Marker({
            position: this.myCenter,
            title: this.detailElement.toolId + ' is Here'
        })
        this.Marker.setMap(this.map);
        console.log('Added marker', new Date().getUTCDate());
    }
    getBarColor() {
        return '#d8d8d8';
    }

    getBarPercent() {
        let prodBarPercent = +this.detailElement.count / +this.detailElement.maxCount * 100;
        return prodBarPercent.toFixed(2) + '%';
    }
    @Input() flagSidebaropen = false;
}
