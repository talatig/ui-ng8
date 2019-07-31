import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectStoreComponent } from './components/pages/onboarding/select-store/selectstore.component';
import { StoreCredentialsComponent } from './components/pages/onboarding/store-credentials/storecredentials.component';
import { StoreSuccessComponent } from './components/pages/onboarding/store-success/storesuccess.component';
import { StepperComponent } from './components/common/stepper/stepper.component';

const routes: Routes = [    
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/app-stepper'
},
{
  path: 'app-stepper',
  component: StepperComponent
},
{
  path: 'select-store',
  component: SelectStoreComponent
},
{
  path: 'store-credentials',
  component: StoreCredentialsComponent
},
{
  path: 'store-success',
  component: StoreSuccessComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
