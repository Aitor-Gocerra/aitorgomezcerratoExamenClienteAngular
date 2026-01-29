import { Component } from '@angular/core';

@Component({
  selector: 'app-junta',
  templateUrl: './junta.component.html',
  styleUrls: ['./junta.component.css']
})
export class JuntaComponent {
  juntas: any[] = [];

  id: number = 0;
  fecha_junta: string = '';
  
}
