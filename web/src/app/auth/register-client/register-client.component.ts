import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../core/userAuth.service";
import {ToastrService} from "ngx-toastr";
import {LocalStorage} from "../../shared/functions/LocalStorage";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listagem-conteudo',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  register = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  }
  loading: Boolean = false;

  constructor(private userAuth: UserAuthService, private toastr: ToastrService, private storage:LocalStorage, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(!this.register.name){
      this.toastr.error('Preencha o nome', 'Ops, ocorreu um erro');
      return;
    }

    if(!this.register.email){
      this.toastr.error('Preencha o email', 'Ops, ocorreu um erro');
      return;
    }

    if(!this.register.password){
      this.toastr.error('Preencha a senha', 'Ops, ocorreu um erro');
      return;
    }

    if(this.register.confirm_password !== this.register.password){
      this.toastr.error('As senhas não são iguais', 'Ops, ocorreu um erro');
      return;
    }

    this.loading = true;
    this.handleRegister()
  }

  async handleRegister(){
    const data = {
      name: this.register.name,
      email: this.register.email,
      password: this.register.password
    }
    await this.userAuth.register(data).subscribe({
      next: (res: any) => {
        this.storage.lsSet('auth', res.token)
        this.loading = false;
        this.goToHome()
      },
      error: (error) => {
        this.toastr.error(error.error.title, 'Ops, ocorreu um erro');
        this.loading = false;
      }
    })
  }

  goToHome(){
    this.router.navigate(['/'])
  }

}
