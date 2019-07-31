import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _products_url = 'assets/data/http/products.json';
  private _amazon_report_url = 'assets/data/http/amazonreport.json';

  private data = {};
  private _store_url = 'assets/data/http/store-list.json'; // Set Store List Data JSON file Url in Data service variable
  uri = 'http://localhost:4000';   
  // private storageName: string = "Settings";

  // setOption(option, value) {      
  //   this.data[option] = value;  
  // } 

  setOption(data) {
    // localStorage.setItem(this.storageName, JSON.stringify(data));
    this.data = data;
    console.log(this.data);
  }
  
  getOption() {
    // if(this.data) {
    //   this.data = Object.keys(this.data).length!=0 ? this.data : JSON.parse(localStorage.getItem(this.storageName));   
    // } 
    // else {
    //   this.data = {};
    // }

    return this.data;
  }

  constructor(public http: HttpClient) { }

  getProducts(): Observable<IProducts> {
    return this.http.get<IProducts>(this._products_url);
  }
  // Get Store List Data from JSON file/Url
  getStoreList(): Observable<StoreList> {
    return this.http.get<StoreList>(this._store_url);
  }

  getAmazonReport(): Observable<IAmazonReport> {
    return this.http.get<IAmazonReport>(this._amazon_report_url);
  }

  addObdata(selectedStoreIndex, selectedStoreName, storeName, storePass, productList, productListExist) {
    const obdata = {
      selectedStoreIndex: selectedStoreIndex,
      selectedStoreName: selectedStoreName,
      storeName: storeName,
      storePass: storePass,
      productList: productList,
      productListExist: productListExist


    };
    return this.http.post(`${this.uri}/obdatas/add`, obdata);
  }  

  getObdata() {
    return this.http.get(`${this.uri}/obdatas`);
  }

  updateObdata(id, selectedStoreIndex, selectedStoreName, storeName, storePass, productList, productListExist) {
    const obdata = {
      selectedStoreIndex: selectedStoreIndex,
      selectedStoreName: selectedStoreName,
      storeName: storeName,
      storePass: storePass,            
      productList: productList,
      productListExist: productListExist
    };
    return this.http.post(`${this.uri}/obdatas/update/${id}`, obdata);
  }

  // getIssueById(id) {
  //   return this.http.get(`${this.uri}/issues/${id}`);
  // }
  
  // deleteIssue(id) {
  //   return this.http.get(`${this.uri}/issues/delete/${id}`);
  // } 

}

interface IProducts {
  name: string;
  age: number;
  data: any;
  stores: any;
}
// Fetch Store List Data from JSON file/Url
interface StoreList {
  storesList: [];
}
interface IAmazonReport {
  ListInventorySupplyResponse: any;
}
