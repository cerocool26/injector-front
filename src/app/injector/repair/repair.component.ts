import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  tipo:string = "";
  name:string = "";
  dataSource: any[]= []
  dataSource2: any;
  //Inyectores bosch CRI, CRI 1, CRI 2, CRI 2.2, CRIN 1, CRIN 1.6.
  reparacionBosch1:any[] = [
    {step : "1." , content:"Montar el inyector en una morsa para CR, herramienta Z-0118."},
    {step : "2." , content:"Sacar la porta tobera, evaluar las condiciones de la tobera con microscopio, y realizar la medición con la herramienta N.º 24 con la pieza de presión puesta en el inyector."},
    {step : "3." , content:"Retirar el solenoide con herramienta Z-0116/0117/0147 según corresponda. medir el mismo con la herramienta N° 17."},
    {step : "4." , content:"medir la resistencia, inductancia, y aislación del bobinado con CR-40. Medir el plato inducido con la herramienta N° 19 con la arandela puesta en el inyector."},
    {step : "5." , content:"Medir el recorrido de la bolilla con la herramienta Z-0103."},
    {step : "6." , content:"Retirar válvula y vástago, con herramienta 2-3029 y Z-01201el sello de fibra con herramienta Z-0122. Limpiar debidamente todos los componentes."},
    {step : "7." , content:"Colocar el sello de fibra con herramienta Z-0122."},
    {step : "8." , content:"Colocar válvula y vástago con herramienta Z-3029 y Z-01201."},
    {step : "9." , content:"Armar plato inducido, y calibrar el juego axial midiendo con herramienta Z-0103."},
    {step : "10." , content:"Calibrar Entrehierro con herramienta N 17 y N.º 19."},
    {step : "11." , content:"Calibrar carrera de la aguja con herramienta N° 24, En el caso de no poder sacar la aguja de la tobera con unas pinzas."},
    {step : "12." , content:"Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];

  torqueBosch1: any = [{name: "Bobina:", content: "33 a 38 Kgf/m"},
    {name: "Tuerca válvula:", content: "35 a 6.5 Kgf/m (Según Bomba)"},
    {
      name: "Porta tobera:", content: "5.0 a 6.5 Kgf/m (Mariposa)\n" +
        "                                  5.5 a 6.5 Kgf/m (Cruz de malta)\n" +
        "                                  6.0 a 7.0 Kgf/m (Macizo)\n"
    }
  ];



  //Inyectores bosch CRI 2.1
  reparacionBosch2:any[] = [
    {step : "1." , content:"Montar el inyector en una morsa para CR, herramienta Z-0118."},
    {step : "2." , content:"Sacar la porta tobera, evaluar las condiciones de la tobera con el microscopio."},
    {step : "3." , content:"Retirar el solenoide con herramienta Z-0117, medirlo con la herramienta N°17."},
    {step : "4." , content:"Medir la resistencia, inductancia. Y aislación del bobinado con CR-40."},
    {step : "5." , content:"Medir el plato inducido con herramienta N°19 con la arandela del inyector."},
    {step : "6." , content:"Retirar válvula y vástago, con herramienta Z-3029 y z-0120"},
    {step : "7." , content:"Retirar el sello de fibra con herramienta Z-0132"},
    {step : "8." , content:"Limpiar debidamente todos los componentes."},
    {step : "9." , content:"Colocar el sello de fibra con herramienta Z-0122."},
    {step : "10." , content:"Colocar válvula y vástago con herramienta Z-0131"},
    {step : "11." , content:"Calibrar entrehierro con herramienta N°17 y N° 19."},
    {step : "12." , content:"Calibrar carrera de la aguja con herramienta N° 24"},
    {step : "13." , content:"En el caso de no poder sacar la aguja de la tobera utilizar unas pinzas"},
    {step : "14." , content:"Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];

  torqueBosch2: any = [{name: "Bobina:", content: "33 a 38 Kgf/m"},
    {name: "Tuerca válvula:", content: "4.5 a 5.5 Kgf/m"},
    {name: "Porta tobera:", content: "5.0 a 6.0 Kgf/m"}
  ];

  //Inyectores bosch CRI 2.5
  reparacionBosch3:any[] = [
    {step : "1." , content:"Montar el inyector en una morsa para cr, herramienta Z-0118."},
    {step : "2." , content:"Sacar la porta tobera, evaluar las condiciones de la tobera con el microscopio."},
    {step : "3." , content:"Retirar el solenoide con herramienta Z-0117, medirlo con la herramienta N°17."},
    {step : "4." , content:"Medir la resistencia, inductancia. Y aislación del bobinado con CR-40."},
    {step : "5." , content:"Medir el plato inducido con herramienta N°19 con lamina y arandela del inyector."},
    {step : "6." , content:"Retirar válvula y vástago, con herramienta Z-3029 y Z-0120"},
    {step : "7." , content:"Retirar el sello de fibra con herramienta Z-0132."},
    {step : "8." , content:"Limpiar debidamente todos los componentes."},
    {step : "9." , content:"Colocar el sello de fibra con herramienta Z-0131."},
    {step : "10." , content:"Colocar válvula y vástago con herramienta Z-0131"},
    {step : "11." , content:"Calibrar entrehierro con herramienta N°17 y N° 19."},
    {step : "12." , content:"Calibrar carrera de la aguja con herramienta N° 24"},
    {step : "13." , content:"En el caso de no poder sacar la aguja de la tobera utilizar unas pinzas."},
    {step : "14." , content:"Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];

  torqueBosch3:any = [{name:"Bobina:", content : "3.3 a 3.8 Kgf/m"},
    {name:"Tuerca válvula:", content:"3.5 a 4.5 Kgf/m"},
    {name:"Porta tobera:", content:"4.3 a 4.8 Kgf/m"}
  ];

  //Inyectores bosch CRI 3.0, 3.1, 3.2.

  reparacionBosch4:any[] = [
    {step : "1." , content:"Montar el inyector en una morsa para cr, herramienta Z-0118."},
    {step : "2." , content:"Sacar la porta tobera, evaluar las condiciones de la tobera con el microscopio."},
    {step : "3." , content:"Evaluar el buje de la cámara de control y su asiento en la placa de control."},
    {step : "4." , content:"Medir la resistencia, capacitancia, y aislación del piezo con CR-40"},
    {step : "5." , content:"Comprobar fugas y desgaste de la válvula de control"},
    {step : "6." , content:"Comprobar fugas y desgaste en el amplificador hidráulico"},
    {step : "7." , content:"Comprobar fugas y desgaste en la tobera"},
    {step : "8." , content:"Limpiar debidamente todos los componentes"},
    {step : "9." , content:"En el caso de remplazar la válvula de control, comprobar su calibración"},
    {step : "10." , content:"En el caso de no poder sacar la aguja de la tobera utilizar unas pinzas."},
    {step : "11." , content:"Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];

  torqueBosch4:any = [{name:"Bobina:", content : "4.8 a 5.2 Kgf/m"},
    {name:"Tuerca válvula:", content:""},
    {name:"Porta tobera:", content:""}
  ];

  //Inyectores denso G2S Y G3S
  reparacionDenso1:any[] = [
    {step : "1." , content:"Montar el inyector en el soporte Z-0105."},
    {step : "2." , content:"Sacar la porta tobera, evaluar las condiciones de la tobera con microscopio."},
    {step : "3." , content:"Retirar el solenoide con herramienta Z-0115, medir el mismo con la herramienta N.º 18, medir la resistencia, inductancia, y aislación del bobinado con CR-40."},
    {step : "4." , content:"Medir el plato inducido con la herramienta N° 17 con la arandela puesta en el inyector. "},
    {step : "5." , content:"Comprobar estado de la plaqueta con microscopio."},
    {step : "6." , content:"Retirar la plaqueta con la herramienta Z-3025 utilizando un torquímetro calibrado a 7 Kgf/m."},
    {step : "7." , content:"De ser necesario remplazar el filtro del racor con la herramienta N° Z-0149"},
    {step : "8." , content:"Limpiar debidamente todos los componentes."},
    {step : "9." , content:"Colocar la plaqueta, ajustar la tuerca con la herramienta Z-3025, torque de 7Kg f/m."},
    {step : "10." , content:"Asegurarse que la media esfera se encuentra con el plano hacia la plaqueta de control."},
    {step : "11." , content:"Calibrar Entrehierro con herramienta N° 18 y N° 17"},
    {step : "12." , content:"En el caso de no poder sacar la aguja de la tobera utilizar la herramienta Z-0148"},
    {step : "13." , content:"Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];

  torqueDenso1:any[] = [{name:"Bobina:", content : "1.0 a 1.4 Kgf/m"},
    {name:"Tuerca válvula:", content:"7.0 a 7.4 Kgf/m Según herramienta"},
    {name:"Porta tobera:", content:"5.0 a 6.0 Kgf/m 3ra Generación" +
        "6.0 a 6.5 Kgf/m 2ra Generación" +
        "6.0 a 7.0 Kgf/m 1ra Generación"}
  ];

  //Inyectores denso G4S
  reparacionDenso2:any[] = [
    {step : "1." , content:"Montar el inyector en la morsa Z-0118"},
    {step : "2." , content:"Sacar la porta tobera, evaluar las condiciones de la tobera con microscopio."},
    {step : "3." , content:"Evaluar el buje de la cámara de control y su asiento en la placa de control."},
    {step : "4." , content:"Comprobar la integridad y buen funcionamiento del microfiltro"},
    {step : "5." , content:"Medir la resistencia, inductancia, y aislación del bobinado con CR-40."},
    {step : "6." , content:"Evaluar el estado de la plaqueta de control y la media esfera con microscopio."},
    {step : "7." , content:"Calibrar entrehierro en el caso de reemplazar buje de calibración, plato inducido o media esfera."},
    {step : "8." , content:"Limpiar debidamente todos componentes."},
    {step : "9." , content:"Asegurarse que la media esfera se encuentra con el plano hacia la plaqueta de control al momento del armado."},
    {step : "10." , content:"En el caso de no poder sacar la aguja de la tobera utilizar la herramienta Z-0148."},
    {step : "11." , content:"Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];

  torqueDenso2:any[] = [{name:"Bobina:", content : "5.3 a 5.8 Kgf/m"},
    {name:"Tuerca válvula:", content:""},
    {name:"Porta tobera:", content:""}
  ];

  //Inyectores delphi DF1, DF1.1, DF1.2, DF1.3, DF1.4, DF1.5.
  reparacionDelphi1: any[] = [
    {step: "1.", content: "Montar el inyector en una morsa para CR, herramienta Z-0118"},
    {step: "2.", content: "Sacar la porta tobera, evaluar las condiciones de la tobera con microscopio."},
    {step: "3.", content: "Limpiar debidamente todos los componentes."},
    {step: "4.", content: "Medir resistencia de la bobina, y aislación con CR-40."},
    {step: "5.", content: "En el caso de no poder sacar la aguja de la tobera utilizar la herramienta Z-0148."},
    {step: "6.", content: "Reemplazar plaqueta y/o tobera de ser necesario."},
    {step: "7.", content: "Armar el inyector y comprobar su funcionamiento en banco de pruebas."},
  ];
  torqueDelphi1: any [] = [{name: "Bobina:", content: "3.8 a 4.5 Kgf/m"},
    {name: "Tuerca válvula:", content: ""},
    {name: "Porta tobera:", content: ""}
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data:nameInjector) { }

  ngOnInit(): void {
    this.typeInjector();
  }

  typeInjector():void{
    if (this.data.tipo == 'bosch') {
      if (this.data.name == 'CRI 1' || this.data.name == 'CRI 2'
        || this.data.name == 'CRI 2.2' || this.data.name == 'CRIN 1' || this.data.name == 'CRIN 1.6') {
        this.tipo = 'bosch';
        this.name= this.data.name;
        this.dataSource = this.reparacionBosch1;
        this.dataSource2 = this.torqueBosch1;
      }
      if(this.data.name == 'CRI 2.1'){
        this.tipo = 'bosch';
        this.name= this.data.name;
        this.dataSource = this.reparacionBosch2;
        this.dataSource2 = this.torqueBosch2;
      }
      if(this.data.name == 'CRI 2.5'){
        this.tipo = 'bosch';
        this.name = this.data.name;
        this.dataSource =  this.reparacionBosch3;
        this.dataSource2 = this.torqueBosch3
      }
      if(this.data.name == 'CRI 3.0'  || this.data.name == 'CRI 3.1' || this.data.name == 'CRI 3.2'){
        this.tipo = 'bosch';
        this.name = this.data.name;
        this.dataSource =  this.reparacionBosch4;
        this.dataSource2 = this.torqueBosch4;
      }
    }
    if(this.data.tipo == 'denso'){
      if(this.data.name == 'Denso G2S' || this.data.name == 'Denso G3S'){
        this.tipo = 'denso';
        this.name= this.data.name;
        this.dataSource =  this.reparacionDenso1;
        this.dataSource2 =  this.torqueDenso1;
      }
      if(this.data.name == 'Denso G4S'){
        this.tipo = 'denso';
        this.name =  this.data.name;
        this.dataSource = this.reparacionDenso2;
        this.dataSource2 = this.reparacionDenso2;
      }
    }
    if(this.data.tipo == 'delphi'){
      if(this.data.name == 'DELPHI DF1' || this.data.name == 'DELPHI DF1.1' || this.data.name == 'DELPHI DF1.2'
        || this.data.name == 'DELPHI DF1.3' || this.data.name == 'DELPHI DF1.4' || this.data.name == 'DELPHI DF1.5') {
        this.tipo = 'delphi';
        this.name= this.data.name;
        this.dataSource = this.reparacionDelphi1;
        this.dataSource2 =  this.torqueDelphi1;
      }
    }
  }

}

interface nameInjector{
  tipo: string;
  name: string;
}
