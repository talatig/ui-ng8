import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-storecredentials',
  templateUrl: './storecredentials.component.html',
  styleUrls: ['./storecredentials.component.scss']
})
export class StoreCredentialsComponent implements OnInit {
  @Input() stepperIndex: number;
  @Output() stepperIndexChange = new EventEmitter();
  @Output() makeCurrentStepComplete = new EventEmitter<string>();

  onboardingData;
  selectedStoreName: string;
  productListOptions: string[] = ['Invoice', 'Sales Receipt'];
  spinnershow: boolean = false;

  myForm: FormGroup;
  storeNameCtrl: FormControl;
  storePassCtrl: FormControl;
  productListExistCtrl: FormControl;
  productListCtrl: FormControl;

  constructor(private router: Router,
    private dataService: DataService) {
      this.storeNameCtrl = new FormControl('', Validators.required);
      this.storePassCtrl = new FormControl('', Validators.required);
      this.productListExistCtrl = new FormControl('', Validators.required);
      this.productListCtrl = new FormControl('', Validators.required);
  
      this.myForm = new FormGroup({
        storeName: this.storeNameCtrl,
        storePass: this.storePassCtrl,
        productListExist: this.productListExistCtrl,
        productList: this.productListCtrl
      });

      this.onboardingData = {};
      this.dataService.getObdata().subscribe(response => {
        if(response.toString().trim()!='') {
          this.onboardingData = response[0];
          this.onboardingData['onboardingRecordID'] = response[0]._id;
          this.setFormValuesOnLoad();          
        }
        else {
          this.onboardingData = {};
        }
      });     

      // this.getData(dataService);
      // this.setFormValuesOnLoad();
     
      // this.onboardingData = Object.keys(dataService.getOption()).length!=0 ? dataService.getOption() : JSON.parse(localStorage.getItem('Settings'));  
      // this.selectedStoreName = this.onboardingData.selectedStoreName;
   }

   get storeName() { return this.myForm.get('storeName'); }
   get storePass() { return this.myForm.get('storePass'); }
   get productListExist() { return this.myForm.get('productListExist'); }
   get productList() { return this.myForm.get('productList'); }   

  ngOnInit() {
    // var a = new OnboardingComponent();
    // console.log(a);    
  }

  displayStores() {
    // this.storeDisplay=true;
    // this.showCredentialScreen=false;
    // this.storeDisplayChange.emit(this.storeDisplay);
    // this.showCredentialScreenChange.emit(this.showCredentialScreen);
    this.setData();
    // this.router.navigate(['/select-store']);
    setTimeout(() => {    
      this.changeStepperIndex(0);
    }, 10);
  }

  submitForm() {
    this.makeCurrentStepComplete.next(); 
    // console.log(this.myForm.controls.storeName.value + " username " + this.myForm.controls.storePass.value + " password" );
    this.setData();
    // this.router.navigate(['/store-success']);
    this.toggleSpinner();
    setTimeout(() => {
      this.toggleSpinner();
      this.changeStepperIndex(2);
  }, 1500);
  }

  setFormValuesOnLoad() {
    this.myForm.controls.storeName.setValue(this.onboardingData.storeName);
    this.myForm.controls.storePass.setValue(this.onboardingData.storePass);
    this.myForm.controls.productListExist.setValue(this.onboardingData.productListExist);
    this.myForm.controls.productList.setValue(this.onboardingData.productList);
  }

  getData(dataService) {
    console.log(dataService.getOption());
    this.onboardingData = dataService.getOption();
  }

  setData() {
    this.onboardingData['storeName'] = this.myForm.controls.storeName.value;
    this.onboardingData['storePass'] = this.myForm.controls.storePass.value;
    this.onboardingData['productListExist'] = this.myForm.controls.productListExist.value;
    this.onboardingData['productList'] = this.myForm.controls.productList.value;
    // this.dataService.setOption(this.onboardingData); 
    this.dataService.updateObdata(this.onboardingData.onboardingRecordID,this.onboardingData.selectedStoreIndex,this.onboardingData.selectedStoreName,this.onboardingData.storeName,this.onboardingData.storePass,this.onboardingData.productList,this.onboardingData.productListExist).subscribe(response => {
      console.log(response);
    });  
  }

  changeStepperIndex(newIndex) {
    this.stepperIndexChange.emit(newIndex);
  }

  toggleSpinner(){
    this.spinnershow =! this.spinnershow;
  }

}
