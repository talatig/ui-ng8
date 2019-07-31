import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCardModule,
  MatStepperModule,
  MatRadioModule,
  MatChipsModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCardModule,
  MatStepperModule,
  MatRadioModule,
  MatChipsModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }