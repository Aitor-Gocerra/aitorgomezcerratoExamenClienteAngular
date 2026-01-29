import { Component, OnInit } from '@angular/core';
import { VecinoService } from 'src/app/services/vecino.service';

@Component({
  selector: 'app-vecino-list',
  templateUrl: './vecino-list.component.html',
  styleUrls: ['./vecino-list.component.css']
})
export class VecinoListComponent implements OnInit{

  constructor(private sVecino: VecinoService) {}

  listaVecinos: any[] = [];
  ordenDeuda: any[] = [];
  busquedaNombre: any[] = [];

  id: number | null = null;
  nombre: string = '';
  piso: string = '';
  deuda: number = 0;

  haBuscado: boolean = false;
  textoBusqueda: string = '';

  ngOnInit(){
    this.listaVecinos = this.sVecino.getVecinos();
  }

  prepararEdicion(vecino: any){
    this.id = vecino.id;
    this.nombre = vecino.nombre;
    this.piso = vecino.piso;
    this.deuda = vecino.deuda;
  }

  limpiarFormulario(){
    this.id = null;
    this.nombre = '';
    this.piso = '';
    this.deuda = 0;
  }

  ordenarArray() {
    const arrayVecinos = this.sVecino.getVecinos().slice(); /* Esto tambien crea una copia del original para no ordenar el array madre */
    this.ordenDeuda = arrayVecinos.sort((a,b) => a.deuda - b.deuda);
  }

  guardar(){
    if(this.id !== null){
      this.sVecino.updateVecino(this.id, this.nombre, this.piso, this.deuda);
    } else {
      this.sVecino.addVecino(this.nombre, this.piso, this.deuda);
    }

    this.ngOnInit();
    this.limpiarFormulario();
  }

  eliminar(id: number){
    this.listaVecinos = this.listaVecinos.filter(vecino => vecino.id !== id)
  }

  busquedaPorNombre(titulo: string) { 

    this.haBuscado = true;

    const vecinoN = this.sVecino.getVecinos();
    this.busquedaNombre = vecinoN.filter(vecino => 
        vecino.nombre.toLowerCase().includes(titulo.toLowerCase())
    );
  }
}
