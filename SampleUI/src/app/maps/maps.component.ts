import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { GoogleAPIService } from '../services/google-map.services'
import { destroyView } from '@angular/core/src/view/view';
declare const google: any;
interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit, OnChanges, OnDestroy {

    constructor(private googleAPIService: GoogleAPIService) { }
    @Input() selectedTab =1;
    locations;
    ngOnInit() {
        this.getMapData();
        this.initMap();
    }
    ngOnChanges() {
        this.getMapData();
        this.initMap();
    }
    ngOnDestroy() {
        console.log('Called Destroy');
    }
    map;
    getMapData() {
        if (this.selectedTab == 1) {
            this.locations = [
                ['Bondi Beach', -33.890542, 151.274856, 4],
            ];
        }
        else if (this.selectedTab == 2) {
            this.locations = [
                ['Bondi Beach', -33.890542, 151.274856, 4],
                ['Coogee Beach', -33.923036, 151.259052, 5],
            ];
        }
        else if (this.selectedTab == 3) {
            this.locations = [
                ['Bondi Beach', -33.890542, 151.274856, 4],
                ['Coogee Beach', -33.923036, 151.259052, 5],
                ['Cronulla Beach', -34.028249, 151.157507, 3],
                ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
                ['Maroubra Beach', -33.950198, 151.259302, 1]
            ];
        }
        else {
            return null;
        }
    }
    initMap() {
        this.googleAPIService.googleReady()
            .subscribe(
                null,
                err => console.log(err),
                () => {

                    const myLatlng = new google.maps.LatLng(this.locations[0][1], this.locations[0][2]);
                    const mapOptions = {
                        zoom: 10,
                        center: myLatlng,
                        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
                        mapTypeId: "satellite",
                        styles: [
                            { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                            {
                                'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                                { 'saturation': -100 }, { 'lightness': 99 }]
                            },
                            {
                                'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                                { 'lightness': 54 }]
                            },
                            { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                            { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                            { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                            { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                            { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                            {
                                'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                                { 'color': '#b8cb93' }]
                            },
                            { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                            { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                            { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                            { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
                        ]
                    };
                    try {
                        this.map = new google.maps.Map(document.getElementById('map2'), mapOptions);
                        let marker;
                        for (var i = 0; i < this.locations.length; i++) {
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
                                map: this.map
                            });
                            var infowindow = new google.maps.InfoWindow();
                            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                return function () {
                                    infowindow.setContent(this.locations[i][0]);
                                    infowindow.open(this.map, marker);
                                }
                            })(marker, i));
                        }
                    }
                    catch (E) {
                        this.map = null;
                        console.log('Reload')
                    }
                }
            );
    }

}
