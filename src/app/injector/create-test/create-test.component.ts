import { Component, OnInit } from '@angular/core';
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  prueba = "";
  rangoOperacion = "";
  datosInyector = 0;
  tipoInyector = "";
  codPrueba = "";
  dataSource = [];

  displayedColumns: string[] = ['prueba', 'rangoOperacion', 'datosInyector','tipoInyector','codPrueba'];

  constructor(private testService: TestService) {
  }
  ngOnInit(): void {
    this.getTest();
  }

  createTest(){
    const request = {
      prueba : this.prueba,
      rangoOperacion : this.rangoOperacion,
      datosInyector : this.datosInyector,
      tipoInyector : this.tipoInyector,
      codPrueba: this.codPrueba,
    }
    this.testService.createTest(request).subscribe();
    this.getTest();
  }

  getTest(){
    // @ts-ignore
    this.testService.getTest().subscribe(res => this.dataSource=res);
  }
}
