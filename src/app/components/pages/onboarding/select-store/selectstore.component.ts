import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-selectstore',
  templateUrl: './selectstore.component.html',
  styleUrls: ['./selectstore.component.scss']
})
export class SelectStoreComponent implements OnInit {
  @Input() stepperIndex: number;  
  @Output() stepperIndexChange = new EventEmitter();  
  @Output() makeCurrentStepComplete = new EventEmitter<string>();
  onboardingData;
  storeArr: string[] = [];
  spinnershow: boolean = true;

  myImages = ["image1.jpg", "image2.jpg"];

  selectedStoreName: string;
  storeUsername: string;
  storePassword: string;
  hightlightStatus: Array<boolean> = [];
  selectedStoreIndex: number;
  searchStores: string;

  constructor(private router: Router,
    private dataService: DataService) { 
      this.dataService.getObdata().subscribe(response => {
        if(response.toString().trim()!='') {
          this.onboardingData = response[0];
          this.onboardingData['onboardingRecordID'] = response[0]._id;
          this.selectedStoreIndex=this.onboardingData.selectedStoreIndex;
          this.selectedStoreName=this.onboardingData.selectedStoreName;
        }
        else {
          this.onboardingData = {};
        }
      });       
      // console.log(dataService.getOption());
      // this.onboardingData = dataService.getOption();
      // this.onboardingData = Object.keys(dataService.getOption()).length!=0 ? dataService.getOption() : JSON.parse(localStorage.getItem('Settings')); 
      // this.selectedStoreIndex=this.onboardingData.selectedStoreIndex;
    }

  ngOnInit() {
    this.dataService.getStoreList().subscribe(response => {
      this.storeArr = response.storesList;
      setTimeout(() => {
      this.toggleSpinner();
    }, 1000);
    }); 
  }

  displayCredentialScreen(item, i) {
    this.makeCurrentStepComplete.next();    
    this.selectedStoreIndex = this.storeArr.indexOf(item);
    this.hightlightStatus.fill(false);//initially set all to false
    this.hightlightStatus[i]=!this.hightlightStatus[i];
    // this.router.navigate(['/store-credentials']);

    setTimeout(() => {
      this.toggleSpinner();      
      this.selectedStoreName = item.storeName || this.selectedStoreName;
      // this.dataService.setOption('storeDisplay',this.storeDisplay);
      // this.dataService.setOption('showCredentialScreen',this.showCredentialScreen); 
      // this.dataService.setOption('selectedStoreName',this.selectedStoreName); 

      // this.onboardingData = {
      //   storeDisplay: this.storeDisplay,
      //   showCredentialScreen: this.showCredentialScreen,
      //   selectedStoreName: this.selectedStoreName,
      //   selectedStoreIndex: this.selectedStoreIndex
      // }
      if(Object.entries(this.onboardingData).length === 0) {
        console.log('inside if');
        this.dataService.addObdata(this.selectedStoreIndex,this.selectedStoreName,'','','','').subscribe(response => {
          this.dataService.getObdata().subscribe(response => {
            console.log(response[0]);
            this.onboardingData['onboardingRecordID'] = response[0]._id;
            this.onboardingData['selectedStoreIndex']=this.selectedStoreIndex;            
            this.onboardingData['selectedStoreName']=this.selectedStoreName;            
          }); 
        }); 
      } else {
        console.log('inside else');
        this.dataService.updateObdata(this.onboardingData.onboardingRecordID,this.selectedStoreIndex,this.selectedStoreName,this.onboardingData.storeName,this.onboardingData.storePass,this.onboardingData.productList,this.onboardingData.productListExist).subscribe(response => {
          console.log(response);
        }); 
      }
    }, 200);

    setTimeout(() => {
      this.toggleSpinner();
      // this.router.navigate(['/store-credentials']);
      this.changeStepperIndex(1);
    }, 2000);  
  }

  changeStepperIndex(newIndex) {
    this.stepperIndexChange.emit(newIndex);
  }

  toggleSpinner(){
    this.spinnershow =! this.spinnershow;
  }
}
