import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/Categorie ';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  nouvelleCategorie: Categorie = new Categorie();

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.recupererCategories();
  }
  modifierCategorie(categorie: Categorie) {
    this.nouvelleCategorie = { ...categorie }; // Copie des détails de la catégorie sélectionnée dans le formulaire
  }
  
  recupererCategories() {
    this.categoriesService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    );
  }

  ajouterCategorie() {
    this.categoriesService.ajouterCategorie(this.nouvelleCategorie).subscribe(
      categorie => {
        console.log('Catégorie ajoutée :', categorie);
        this.nouvelleCategorie = new Categorie(); // Réinitialiser le formulaire
        this.recupererCategories(); // Mettre à jour la liste des catégories affichées
      },
      error => {
        console.error('Erreur lors de l\'ajout de la catégorie :', error);
      }
    );
  }

  supprimerCategorie(id: number | undefined) {
    if (id !== undefined) {
      this.categoriesService.supprimerCategorie(id).subscribe(
        () => {
          console.log('Catégorie supprimée avec succès');
          this.recupererCategories(); // Mettre à jour la liste des catégories affichées
        },
        error => {
          console.error('Erreur lors de la suppression de la catégorie :', error);
        }
      );
    } else {
      console.error('ID de catégorie non défini');
    }
  }
}  