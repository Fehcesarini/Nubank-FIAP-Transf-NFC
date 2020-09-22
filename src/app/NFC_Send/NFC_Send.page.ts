import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'NFC_Send.page.html',
  styleUrls: ['NFC_Send.page.scss'],
})
export class HomePage {
  [x: string]: any;
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

  constructor() {}

  pushPage() {
    this.navCtrl.push();
}

}
