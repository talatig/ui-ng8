import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectStoreComponent } from './components/pages/onboarding/select-store/selectstore.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FilterPipe} from './components/pages/onboarding/select-store/filter.pipe';
import { StoreCredentialsComponent } from './components/pages/onboarding/store-credentials/storecredentials.component';
import { StoreSuccessComponent } from './components/pages/onboarding/store-success/storesuccess.component';
import { StepperComponent } from './components/common/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectStoreComponent,
    FooterComponent,
    HeaderComponent,
    FilterPipe,
    StoreCredentialsComponent,
    StoreSuccessComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
