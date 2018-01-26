import { AreaService } from './../../../service/area.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
import { DataTableModule } from 'primeng/datatable';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Area } from '../../../domain/Area';
import { WebServResponce } from '../../../domain/WebServResponce';
import { Message } from 'primeng/components/common/api';
declare let jsPDF;

//let jsPDF = require('jspdf');
//require('jspdf-autotable');

@Component({
  selector: 'app-jacktest',
  templateUrl: './jacktest.component.html',
  styleUrls: ['./jacktest.component.css']
})
export class JacktestComponent implements OnInit {
  [x: string]: any;


  myForm: FormGroup;
  msgs: Message[] = [];
  errorMessage: string;
  successMessage: string;
  saveEdit: Area;
  allData: Area[];
  maxData: Area[];
  genaratedId: string;
  newGenaratedId: string;
  createdDate: Date = new Date();
  createdBy = 'Admin';
  selected: Area = new Area(0, '', '', null, '', '');
  mode = 'Observable';
  public events: any[] = [];

  animal: string;
  name: string;

  constructor(private formBuilder: FormBuilder,
    private areaService: AreaService, public snackBar: MatSnackBar
  ) {


  }

  ngOnInit() {

   // this.getAll();
  //  this.getMax();

    this.myForm = this.formBuilder.group({
      //  this.form = new ControlGroup({
      id: new FormControl(''),
      genaratedId: new FormControl(''),
      // tslint:disable-next-line:max-line-length
      'area': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z](?:[a-zA-Z ]*[a-zA-Z])?$'), Validators.maxLength(50)])]
    });

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  convert() {
    console.log('all data ' + JSON.stringify(this.allData));
    var columns = ['idwrwrtwr', 'Area'];
    var data = [
      [2, 'Denmark', 7.526, 'Copenhagen'],
      [2, 'Switzerland', 7.509, 'Bern'],
      [3, 'Iceland', 7.501, 'Reykjavík'],
      [4, 'Norway', 7.498, 'Oslo'],
      [5, 'Finland', 7.413, 'Helsinki']
    ];

    let doc = new jsPDF();
    doc.autoTable(columns, data);
    doc.save('test.pdf');
    this.openSnackBar('Success', 'Print created');


  }

  getAll() {
    console.log('click getall');
    let webServResponce: WebServResponce;
    this.areaService.getAllData()
      .subscribe(
      resObj => {
        webServResponce = resObj;
        if (webServResponce.statusId === 200) {
          this.allData = <Area[]>webServResponce.result;
        } else {
          this.errorMessage = webServResponce.errMessage;
        }
      }
      ,
      error => this.errorMessage = <any>error
      );
  }

  getMax() {
    let webServResponce: WebServResponce;
    this.areaService.getMaxData()
      .subscribe(
      resObj => {
        webServResponce = resObj;
        if (webServResponce.statusId === 200) {
          this.maxData = <Area[]>webServResponce.result;

          if (this.maxData[0] === undefined) {
            this.genaratedId = null;
          } else {
            this.genaratedId = this.maxData[0].genaratedId;
          }
          console.log('Maxxxxxx' + this.genaratedId);
          this.genarateIdNormal(this.genaratedId);
        } else {
          this.errorMessage = webServResponce.errMessage;
        }
      }
      ,
      error => this.errorMessage = <any>error
      );
  }


  addNew() {

    this.selected = new Area(0, '', '', null, '', '');
    this.myForm.reset();
    this.myForm.patchValue({ id: 0 });
    this.getMax();
  }


  saveOrEdit(data: Area) {
    let webServResponce: WebServResponce;
    this.saveEdit = new Area(data.id, data.genaratedId, data.area, this.createdDate, this.createdBy, '');

    let b: boolean = this.isAllReadyExits(this.saveEdit);

    if (b) {
      if (data.id === 0) {
        this.selected = data;
        this.saveEdit = new Area(data.id, data.genaratedId, data.area, this.createdDate, this.createdBy, '');

        this.areaService.saveData(this.saveEdit)
          .subscribe(
          resObj => {
            webServResponce = resObj;

            if (webServResponce.statusId === 200) {
              this.getAll();
              this.getMax();
              // console.log('catagoryId : '+this.selectedCatagory.id+' , catagory Name : '+this.selectedCatagory.itemCategory);
              this.addNew();
              this.openSnackBar('Success', 'Data Saved');
              console.log('Save');

              // console.log('catagoryId : '+this.selectedCatagory.id+' , catagory Name : '+this.selectedCatagory.itemCategory);
            } else {
              this.errorMessage = webServResponce.errMessage;

            }


          }
          ,
          error => this.errorMessage = <any>error
          );
      } else {
        this.saveEdit = new Area(data.id, data.genaratedId, data.area, this.createdDate, this.createdBy, '');
        this.areaService.editData(this.saveEdit)
          .subscribe(
          resObj => {
            webServResponce = resObj;
            if (webServResponce.statusId === 200) {
              this.getAll();
              // console.log('catagoryId : '+this.selectedCatagory.id+' , catagory Name : '+this.selectedCatagory.itemCategory);
              this.addNew();
              this.openSnackBar('Success', 'Data Updated');
              console.log('Update');
              // console.log('catagoryId : '+this.selectedCatagory.id+' , catagory Name : '+this.selectedCatagory.itemCategory);
            } else {
              this.errorMessage = webServResponce.errMessage;
            }
          }
          ,
          error => this.errorMessage = <any>error
          );
      }
    } else {
      this.addNew();
      this.openSnackBar('Warning', 'Data AllReadyExits');
      console.log('allReadyExits');
    }





  }

  deleteById(id: number) {
    let webServResponce: WebServResponce;
    this.areaService.deleteData(id).subscribe(
      resObj => {
        webServResponce = resObj;
        if (webServResponce.statusId === 200) {
          this.getAll();
          this.addNew();
          this.selected = new Area(0, '', '', null, '', '');
          this.openSnackBar('Success', 'Data Deleted');
        } else {
          this.errorMessage = webServResponce.errMessage;
        }
      }
      ,
      error => this.errorMessage = <any>error
    );
  }



  isAllReadyExits(data: Area): boolean {
    const obj: Area = this.allData
      .filter(Area => Area.area.toLowerCase() === data.area.toLowerCase())
      .pop();

    // console.log(Json.stringify(obj));

    if (obj === undefined) {

      return true;
    } else {
      return false;
    }

  }

  genarateIdNormal(oldId: string) {
    const year = (new Date()).getFullYear();
    const type = 'ARE';
    let id;
    let newId;
    let genaratedId;

    if (oldId == null) {
      id = '000001';
      genaratedId = type + '-' + id;

    } else {
      const fullid = oldId.split('-');
      id = parseInt(fullid[1]);
      id++;

      if (id > 9999) {
        newId = '0' + id;
      } else if (id > 999) {
        newId = '00' + id;
      } else if (id > 99) {
        newId = '000' + id;
      } else if (id > 9) {
        newId = '0000' + id;
      } else if (id > 0) {
        newId = '00000' + id;
      }
      genaratedId = type + '-' + newId;
    }


    this.newGenaratedId = genaratedId;
    console.log('next Id =' + genaratedId);

    this.myForm.patchValue({ genaratedId: genaratedId });
  }





}






