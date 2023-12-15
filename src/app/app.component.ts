import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 actions:Array<any>=
 [
  { titre: "Accueil", route: "/accueil", icon: "bi bi-house-door-fill" },
  { titre: "Liste des produits", route: "/produits", icon: "bi bi-list-ul" },
  { titre: "Ajouter Produit", route: "/ajouterProduit", icon: "bi bi-plus-square-fill" },
  { titre: "Ajouter Category", route: "/ajouterCategory", icon: "bi bi-plus-square-fill" }

 ]
 actionCourante:any;
 setActionCourante(a:any)
 {
  this.actionCourante=a;
 }
}
