import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {FilmService} from "../../core/film.service";
import {Router} from "@angular/router";
import {Film} from "../../shared/models/Film";
import {CategoryService} from "../../core/category.service";

@Component({
  selector: 'app-criar-conteudo',
  templateUrl: './criar-conteudo.component.html',
  styleUrls: ['./criar-conteudo.component.css']
})
export class CriarConteudoComponent implements OnInit {

  film!: Film;
  categories: any = [];
  dropdownSettings: any = {};

  constructor(private toastr: ToastrService, private filmService: FilmService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.dropdownSettings = {
      singleSelection: false,
      text:"Selecionar Categorias",
      selectAllText:'Selecionar Todas',
      unSelectAllText:'Desmarcar Todas',
      classes:"multi-select-app"
    };

    this.getCategories()
    this.film = new Film();
  }

  onSubmit(){
    if(!this.film.name){
      this.toastr.error('Preencha o título', 'Ops, ocorreu um erro');
      return;
    }

    if(!this.film.description){
      this.toastr.error('Preencha a descrição', 'Ops, ocorreu um erro');
      return;
    }

    if(!this.film.image){
      this.toastr.error('Preencha a capa do conteúdo', 'Ops, ocorreu um erro');
      return;
    }

    if(!this.film.video){
      this.toastr.error('Preencha o link do conteúdo', 'Ops, ocorreu um erro');
      return;
    }

    this.film.catForm = this.film.catForm.map((item: any) => item.id);

    this.createContent();

  }

  createContent(){
    let data = {
      ...this.film,
      categories: this.film.catForm
    }
    this.filmService.create(data).subscribe({
      next: (data) => {
        this.toastr.success( 'Conteúdo criado com sucesso','Sucesso');
        this.router.navigate(['/admin/content'])
      }
    })
  }

  getCategories(){
    this.categoryService.list().subscribe({
      next: data => {

        this.categories = data.map(item => {
          return {
            id: item.id,
            itemName: item.name
          }
        });
      }
    })
  }
}
