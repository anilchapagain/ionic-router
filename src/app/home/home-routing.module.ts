import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from '../components/a/a.component';
import { BComponent } from '../components/b/b.component';
import { CComponent } from '../components/c/c.component';

const routes: Routes = [
    { path: 'acomp', component: AComponent },
    { path: 'bcomp', component: BComponent },
    {path: 'ccomp', component: CComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule {}
