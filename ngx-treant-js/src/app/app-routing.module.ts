import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicPopoverComponent } from './demo-charts/basic-popover/basic-popover.component';

const routes: Routes = [
    { path: '', redirectTo: '/tree/top', pathMatch: 'full' },
    { path: 'tree', component: BasicPopoverComponent },
    { path: 'tree/:id', component: BasicPopoverComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
