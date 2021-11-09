import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {FilmService} from "../../core/film.service";
import {Router} from "@angular/router";
import {Film} from "../../shared/models/Film";
import {CategoryService} from "../../core/category.service";
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent implements OnInit {

  category!: Category;
  loading: Boolean = false;

  constructor(private toastr: ToastrService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {

  
    this.category = new Category();
  }

  onSubmit(){
    if(!this.category.name){
      this.toastr.error('Preencha o nome', 'Ops, ocorreu um erro');
      return;
    }

    this.createContent();


  }

  createContent(){
    this.loading = true;
    let data = {
      ...this.category,
    }
    this.categoryService.create(data).subscribe({
      next: (data) => {
        this.toastr.success( 'Categoria criada com sucesso','Sucesso');
        this.router.navigate(['/admin/categories'])
        this.loading = false;
      },error: (error) => {
        this.toastr.error(error.error.title);
        this.loading = false;
      }
    })
  }
}
