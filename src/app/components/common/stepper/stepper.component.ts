import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {StepperSelectionEvent} from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper', {static: true}) stepper: MatStepper;
  // isLinear = false;
  stepperIndex = 0;
  step1Completed = false;
  step2Completed = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    this.stepper.selectionChange.subscribe((event: StepperSelectionEvent) => {
      // console.log(event.selectedStep.ariaLabel);
      // console.log(event);
      this.stepperIndex = event.selectedIndex;
    });
    // this.stepper.selectedIndex = 0;    
  }

  ngAfterViewInit() {
    console.log(`Stepper Index: ${this.stepper.selectedIndex}`);
    // console.log(`Selected Step's Label: ${this.stepper.selected.ariaLabel}`);
  }

  makeStep1Completed() {
    this.step1Completed = true;
  }

  makeStep2Completed() {
    this.step2Completed = true;
  }  
}