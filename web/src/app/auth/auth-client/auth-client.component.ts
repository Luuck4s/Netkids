import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../core/userAuth.service";
import {ToastrService} from "ngx-toastr";
import {LocalStorage} from "../../shared/functions/LocalStorage";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listagem-conteudo',
  templateUrl: './auth-client.component.html',
  styleUrls: ['./auth-client.component.css']
})
export class AuthClientComponent implements OnInit {

  auth = {
    email: "",
    password: "",
  }
  loading: Boolean = false;

  constructor(private userAuth: UserAuthService, private toastr: ToastrService, private storage:LocalStorage, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(!this.auth.email){
      this.toastr.error('Preencha o email', 'Ops, ocorreu um erro');
      return;
    }

    if(!this.auth.email){
      this.toastr.error('Preencha a senha', 'Ops, ocorreu um erro');
      return;
    }

    this.loading = true;
    this.makeLogin();
  }

  async makeLogin(){
    const data = {
      email: this.auth.email,
      password: this.auth.password
    }
    await this.userAuth.login(data).subscribe({
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
