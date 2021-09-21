import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {FilmService} from "../../core/film.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Film} from "../../shared/models/Film";
import {CategoryService} from "../../core/category.service";

@Component({
  selector: 'app-editar-conteudo',
  templateUrl: './editar-conteudo.component.html',
  styleUrls: ['./editar-conteudo.component.css']
})
export class EditarConteudoComponent implements OnInit {

  id!: number;
  film!: Film;
  categories: any = [];
  dropdownSettings: any = {};
  loading: Boolean = false;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private filmService: FilmService, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      text: "Selecionar Categorias",
      selectAllText: 'Selecionar Todas',
      unSelectAllText: 'Desmarcar Todas',
      classes: "multi-select-app"
    };

    this.getCategories()

    this.id = this.route.snapshot.params['id'];
    this.film = new Film()
    this.filmService.get(this.id).subscribe({
      next: (data: Film) => {
        let categories: any = []

        if (data.categories && data.categories.length > 0) {
          categories = data.categories.map(item => {
              return {id: item.id, itemName: item.name}
            }
          );
        }

        this.film = {
          ...data,
          catForm: categories
        }

      }
    })
  }

  onSubmit() {
    if (!this.film.name) {
      this.toastr.error('Preencha o título', 'Ops, ocorreu um erro');
      return;
    }

    if (!this.film.description) {
      this.toastr.error('Preencha a descrição', 'Ops, ocorreu um erro');
      return;
    }

    if (!this.film.image) {
      this.toastr.error('Preencha a capa do conteúdo', 'Ops, ocorreu um erro');
      return;
    }

    if (!this.film.video) {
      this.toastr.error('Preencha o link do conteúdo', 'Ops, ocorreu um erro');
      return;
    }

    this.film.catForm = this.film.catForm.map((item: any) => item.id);

    this.updateContent();

  }

  updateContent() {
    this.loading = true;
    let data = {
      ...this.film,
      categories: this.film.catForm
    }
    this.filmService.update(this.id, data).subscribe({
      next: (data) => {
        this.loading = false;
        this.toastr.success('Conteúdo atualizado com sucesso', 'Sucesso');
        this.router.navigate(['/admin/content'])
      }
    })
  }

  getCategories() {
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
