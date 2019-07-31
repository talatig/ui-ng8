import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storesuccess',
  templateUrl: './storesuccess.component.html',
  styleUrls: ['./storesuccess.component.scss']
})
export class StoreSuccessComponent implements OnInit {
  @Input() stepperIndex: number;  
  @Output() stepperIndexChange = new EventEmitter(); 
  onboardingData;

  constructor(
    private router: Router,
    private dataService: DataService
  ) {
    // this.getData(dataService);
    this.onboardingData = {};
    this.dataService.getObdata().subscribe(response => {
      console.log(response[0]);
      if(response.toString().trim()!='') {
        this.onboardingData = response[0];        
      }
      else {
        this.onboardingData = {};
      }
    });   

  }

  ngOnInit() {
  }

  goToSecondScreen() {
    // this.router.navigate(['/store-credentials']);
    this.changeStepperIndex(1);
  }  

  getData(dataService) {
    console.log(dataService.getOption());    
    // this.onboardingData = dataService.getOption();
    this.dataService.getObdata().subscribe(response => {
      console.log(response[0]);
      this.onboardingData = response[0];
    });     
  }

  changeStepperIndex(newIndex) {
    this.stepperIndexChange.emit(newIndex);
  }  

}
