import {HttpModule} from '@angular/http';
import {ButtonModule, DataTableModule} from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { Routes, RouterModule } from '@angular/router';
import './rxjs-operators';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import 'hammerjs';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MainwrapperComponent } from './mainwrapper/mainwrapper.component';
import { WidgetHeaderButtonCompComponent } from './widget-header-button-comp/widget-header-button-comp.component';
import { ButtonFooterComponent } from './button-footer/button-footer.component';
import { JacktestComponent } from "./SDI/Setup/jacktest/jacktest.component";
import { MenuService } from "./service/menu.service";
import { AreaService } from "./service/area.service";
import { CommonService } from "./service/common.service";
import { GrowlModule } from "../assets/primeng/primeng";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
  {
    path: '',
    component: MainwrapperComponent

  },

  {
    path: 'jack',
    component: JacktestComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'content/:id',
    component: ContentComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HeaderComponent,
    ContentComponent,
    MainwrapperComponent,
    WidgetHeaderButtonCompComponent,
    ButtonFooterComponent,
    JacktestComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    
    DataTableModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FlexLayoutModule,

  ],
  providers: [
    MenuService,
    AreaService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


