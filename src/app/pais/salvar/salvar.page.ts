import { Component, OnInit } from '@angular/core';
import { Pais } from '../entidade/pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
   pais: Pais = new Pais();

  constructor(private rota: Router) { }

  ngOnInit() {
  }

}
