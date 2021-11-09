import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../core/category.service";
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  id!: number;
  category!: Category;
  loading: Boolean = false;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.category = new Category();

    this.categoryService.get(this.id).subscribe({
      next: (data: Category) => {
        this.category = {
          ...this.category,
          ...data,
        }

      }
    })
  }

  onSubmit() {
    if (!this.category.name) {
      this.toastr.error('Preencha o título', 'Ops, ocorreu um erro');
      return;
    }

    this.updateContent();

  }

  updateContent() {
    this.loading = true;
    let data = {
      ...this.category,
    }
    this.categoryService.update(this.id, data).subscribe({
      next: (data) => {
        this.loading = false;
        this.toastr.success('Categoria atualizada com sucesso', 'Sucesso');
        this.router.navigate(['/admin/categories'])
      },
      error: (error) => {
        this.toastr.error(error.error.title);
        this.loading = false;
      }
    })
  }

}
