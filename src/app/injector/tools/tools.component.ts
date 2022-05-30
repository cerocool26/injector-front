import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  displayedColumns: string[] = ['name','description', 'image'];
  dataSource: any[] = [
    {name : "Morsa CR o Fase 3",description:"herramienta usada para el desarme y calibrado de inyectores bosch y Delphi", image:"assets/2.jpg"},
    {name : "Z-0118 ",description:"herramienta usada para el ajuste del inyector en la morza cr", image:"assets/3.jpg"},
    {name : "Microscopio",description:"Analizar el desgaste de los elementos internos del inyector", image:"assets/4.jpg"},
    {name : "N.º 24 y copa de Tobera",description:"Herramientas usadas para desajustar la tobera y calibrar el recorrido de la aguja según su código ", image:"assets/5.jpg"},
    {name : "Z-0116/0117/0147",description:"Herramienta usada para desajustar el solenoide", image:"assets/6.jpg"},
    {name : "N°17",description:"Calibrar recorrido del solenoide", image:"assets/7.jpg"},
    {name : "CR-40",description:"Herramienta usada para medir la resistencia, inductancia y aislación del bobinado", image:"assets/10.jpg"},
    {name : "N° 19",description:"Herramienta usada para medir el plato inducido con la arandela puesta en el inyector.", image:"assets/11.png"},
    {name : "2-3029 y Z-01201",description:"Herramientas para retirar válvula y vástago", image:"assets/13.jpg"},
    {name : "Z-0131 y Z-0122",description:"Juego de puntas para colocar y retirar sello de la fibra", image:"assets/img.png"},
    {name : "Z-3029",description:"Herramienta usada para colocar válvula del inyector", image:"assets/09.jpg"},
    {name : "Z-01201",description:"Herramienta usada para colocar vástago del inyector", image:"assets/09.png"},
    {name : "Z-0105",description:"Soporte para desarme de inyectores Denso.", image:"assets/04.png"},
    {name : "Z-0115",description:"Retirar solenoide inyector denso.", image:"assets/02.jpg"},
    {name : "Z-3025",description:"Herramienta para retirar plaqueta.", image:"assets/01.jpg"},
    {name : "Z-0149",description:"Herramientas usadas para remplazar el filtro del racord.", image:"assets/05.jpg"},


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
