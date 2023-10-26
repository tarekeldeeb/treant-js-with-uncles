import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeChartsComponent } from './demo-charts/home/home-charts.component';
import { BasicPopoverComponent } from './demo-charts/basic-popover/basic-popover.component';

const routes: Routes = [
    { path: '', redirectTo: '/charts', pathMatch: 'full' },
    { path: 'charts', component: HomeChartsComponent },
    { path: 'basic-popover', component: BasicPopoverComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
