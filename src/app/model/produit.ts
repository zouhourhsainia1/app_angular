import { Categorie } from "./Categorie ";

export class Produit {
  id: number | undefined;
  code: string | undefined;
  designation: string | undefined;
  prix: number | undefined;
  categorie: Categorie | undefined; 
  constructor() {
    this.id = undefined;
    this.code = '';
    this.designation = '';
    this.prix = 0;
    this.categorie = undefined; // Vous pouvez initialiser cette valeur selon vos besoins
  }
}