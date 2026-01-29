import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VecinoService {

  private vecinos = [
    {id: 1, nombre: 'Aitor Gomez', piso: '1º A', deuda: 2000},
    {id: 2, nombre: 'Miguel Albenca', piso:'1º B', deuda: 1234},
    {id: 3, nombre: 'Alejandro Trigo', piso: '3º C', deuda: 0},
    {id: 4, nombre: 'Diego Evaristo', piso: 'Bajo A', deuda: 900}
  ];

  constructor() { }

  getVecinos(){
    return this.vecinos;
  }

  addVecino(nombre: string, piso: string, deuda: number){
    const newId = this.vecinos.length + 1;
    const newVecino = {
      id: newId,
      nombre,
      piso,
      deuda
    }

    this.vecinos.push(newVecino);
  }

  updateVecino(id: number, nombre: string, piso: string, deuda: number){
    const posicion = this.vecinos.findIndex(vecino => vecino.id === id);

    if(posicion !== -1) {
      this.vecinos[posicion].id = id;
      this.vecinos[posicion].nombre = nombre;
      this.vecinos[posicion].piso = piso;
      this.vecinos[posicion].deuda = deuda;
    }
  }

  deleteVecino(id: number){
    this.vecinos = this.vecinos.filter(vecino => vecino.id !== id);
  }
}
