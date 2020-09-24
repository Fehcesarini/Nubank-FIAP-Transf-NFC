import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EnvioModel } from './models/envio.model';

@Injectable({
  providedIn: 'root'
})

export class SendService {
private defaultHeader: HttpHeaders;
  constructor(private httpClient: HttpClient) {
  }

  post(model: EnvioModel) {
    return this.httpClient.post<any>(
      `${environment.apis.transferenciaNFCEnvio}/api/transferencia/enviar`,
      JSON.stringify(model),
      this.createOptions());
  }

  private createOptions() {
    return {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
