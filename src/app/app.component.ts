import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // este el nombre que se utilizara en el html general para llamar el componente
  templateUrl: './app.component.html',  //ruta y nombre del archivo html que contendrá el componente.
  styleUrls: ['./app.component.scss']  // ruta y nombre del archivo scss que contendrá los estilos del componente.
})

export class AppComponent {  //al exportarlo, utilizo el componente donde lo necesite (index.html)
  title = 'sesion1';  //variable que puede ser usada en el html del componente usando {{ }}
  id:number=1;
  fecha: Date = new Date('12/12/1980');
  direcciones: String[]=[];

  public imprimir(cad:string): void {
    console.log("El mensaje es "+cad);
  }

  private getmin(a:number, b:number): number { // este método, al ser private solo puede usarse dentro de su clase
    return Math.min(a,b);
    
  }
  public get getTitle():string {
    console.log("Cargando.....");
    return this.title;
  }
  constructor(){ //método que se ejecuta al usar el componente!!.
    console.log("El valor de la variable id es: "+this.id); // se muestra el valor en la consola del navegador
    console.log("El valor de la variable title es: "+this.title);
    console.log("El valor de la variable fecha es: "+this.fecha);
    this.imprimir("hola");
    console.log("El menor entre 5 y 2 es: ",(this.getmin(5,2)))
  }
 
}
