import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KakonServiceService {
  constructor() {}

  logToConsole(data: string) {
    return console.log(data);
  }

  displayMsg() {
    return 'I am a Angular JS service';
  }
}
