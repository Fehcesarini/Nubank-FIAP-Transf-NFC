import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceiveModel } from './models/receive.model';
import { SendService } from './send.service';
import { ReceiveResponseModel } from './models/receive-response.model';



@Component({
  selector: 'app-home',
  templateUrl: 'NFC_Send_Receive.page.html',
  styleUrls: ['NFC_Send_Receive.page.scss'],
})
export class HomePage {
  [x: string]: any;  


  constructor(private sendService: SendService) {}
  recebido = this.valorTransf;
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
  
  
  public  receber = new ReceiveResponseModel();    
 public Receber() {   
     this.sendService.get().subscribe(response => {
      this.receber = response;      
      console.log(response);
      return response;
    });
  }
}
