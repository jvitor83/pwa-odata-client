import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Component, OnInit, ApplicationRef, AfterViewInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { LazyLoadEvent } from 'primeng/primeng';
import { ODataConfiguration, ODataPagedResult, ODataQuery, ODataService, ODataServiceFactory } from 'angular-odata-es5';
import { PrimeNGDataTableODataQueryExtensions } from 'primeng-datatable-extensions';

@Injectable()
export class CustomODataConfigurationFactory {

  constructor() {
    const config = new ODataConfiguration();
    // config.baseUrl = 'https://odatateststef.azurewebsites.net/odata';
    config.baseUrl = 'https://gis.ices.dk/qcservice/api/qcdata/';
    return config;
  }
}


@Component({
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
  providers: [{ provide: ODataConfiguration, useFactory: CustomODataConfigurationFactory }, ODataServiceFactory],
})
export class DashboardComponent implements OnInit {


  public totalRecords: number;
  public sortMulti = false;

  public rows: any[] = [];
  public cols: any[] = [];


  private odata: ODataService<any>;
  public filter: LazyLoadEvent;


  constructor(public menu: MenuController, public zone: NgZone, public application: ApplicationRef,
    private odataFactory: ODataServiceFactory) {
    this.odata = this.odataFactory.CreateService<any>('mains');
  }

  ngOnInit() {
  }


  public loadLazy(event: LazyLoadEvent) {
    console.log('event = ' + JSON.stringify(event));
    this.filter = event;

    this.getPagedData(event);
  }

  private getPagedData(event: LazyLoadEvent) {

    const query: ODataQuery<any> = this.odata
      .Query();

    PrimeNGDataTableODataQueryExtensions.applyLazyLoadEvent(query, event);

    query
      .ExecWithCount()
      .subscribe((pagedResult: ODataPagedResult<any>) => {
        this.rows = pagedResult.data;
        this.cols = Object.keys(pagedResult.data[0]).map(key => ({ field: key, header: key }));
        this.totalRecords = pagedResult.count;
      },
        (error) => {
          console.error('getPagedData ERROR ' + error);
        });
  }


}
