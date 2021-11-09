import {Component, OnInit} from '@angular/core';
import {Film} from "../../shared/models/Film";
import {FilmService} from "../../core/film.service";
import {ToastrService} from "ngx-toastr";
import {Utils} from "../../shared/functions/Utils";
import {Router} from "@angular/router";
import { CategoryService } from 'src/app/core/category.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-tabela-categoria',
  templateUrl: './tabela-categoria.component.html',
  styleUrls: ['./tabela-categoria.component.css']
})
export class TabelaCategoriaComponent implements OnInit {

  categories: Category[] = []
  deleting: any[] = [];

  constructor(private categorieService: CategoryService, private toastr: ToastrService, private router: Router, private utils: Utils) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.list().subscribe({
      next: (categories) => {
        this.categories = categories;
      }
    })
  }

  deleteContent(id: any) {
    this.deleting.push(id);
    this.categorieService.delete(id).subscribe({
      next: (res) => {
        this.toastr.success('Categoria deletada com sucesso', 'Sucesso');
        this.deleting = this.deleting.filter(idC => idC !== id);
        this.getCategories();
      },
      error: (error) => {
        this.toastr.error(error.error.title);
        this.deleting = this.deleting.filter(idC => idC !== id);
      }
    })
  }

  goToCategory(category: Category) {
    this.router.navigate(['/admin/categories/edit', category.id, this.utils.cleanString(category.name)])
  }

}
