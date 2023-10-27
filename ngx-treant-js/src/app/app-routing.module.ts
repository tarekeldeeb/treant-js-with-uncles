import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicPopoverComponent } from './demo-charts/basic-popover/basic-popover.component';

const routes: Routes = [
    { path: '', redirectTo: '/tree', pathMatch: 'full' },
    { path: 'tree', component: BasicPopoverComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
