import { LayoutModule } from './../layout/layout.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


// import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        // IonicModule,
        // IonicModule.foforRoot(DashboardComponent),
        // IonicPageModule.forChild(DashboardComponent),
        ChartsModule,
        LayoutModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
