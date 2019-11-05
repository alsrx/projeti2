import { Component } from '@angular/core';
import { Pais } from '../pais/entidade/pais';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   pais: Pais = new Pais();

  constructor(private afAuth: AngularFireAuth ,private rota: Router) {}

}
