import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './NFC_Send_Aproximar.page';


import { HomePageRoutingModule } from './NFC_Send_Aproximar-routing.module';
import { SendService } from './send.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers: [
    HttpClient,
    SendService
  ]
})
export class HomePageModule {}
