import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReceiveModel } from './models/receive.model';
import { ReceiveResponseModel } from './models/receive-response.model';

@Injectable({
  providedIn: 'root'
})

export class SendService {
private defaultHeader: HttpHeaders;
  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<any>(
      `${environment.apis.transferenciaNFCEnvio}/api/transferencia/receber`);
  }

}
