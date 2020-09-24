import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { env } from 'process';
import { EnvioModel } from './models/envio.model';
import { SendService } from './send.service';



@Component({
  selector: 'app-home',
  templateUrl: 'NFC_Send.page.html',
  styleUrls: ['NFC_Send.page.scss'],
})
export class HomePage {
  [x: string]: any;
  valorTransf: number;
  public options: Array<any> = [    
    { icon: 'person-add-outline', text:'Indicar amigos' },
    { icon: 'phone-portrait-outline', text:'Recarga de celular' },
    { icon: 'wallet-outline', text:'Depositar' },
    { icon: 'options-outline', text:'Ajustar limite' },
    { icon: 'help-circle-outline', text:'Me ajuda' },
    { icon: 'barcode-outline', text:'Pagar' },
    { icon: 'lock-open-outline', text:'Bloquear cartão' },
    { icon: 'card-outline', text:'Cartão virtual' },
  ];
  public slidesOptions: any = { slidesPerView: 3, freeMode: true };
  public itens: Array<any> = [
    { icon: 'help-circle-outline', text: 'me ajuda'},
    { icon: 'person-outline', text: 'perfil'},
    { icon: 'cash-outline', text: 'Configurar conta'},
    { icon: 'card-outline', text: 'Configurar cartão'},
    { icon: 'phone-portrait-outline', text: 'Configurações de app'},
  ];



  constructor(private sendService: SendService) {}



  enviar() {
    const envio = new EnvioModel();
    envio.DispositivoId = '4576f38e-999e-45a6-ad1b-57b121b0207a';
    envio.Valor = this.valorTransf;
    this.sendService.post(envio).subscribe(response => {
      console.log(response);
    });
  }
}
