import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { MustMatch } from '../models/mustMatch';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.sass']
})
export class FormulaireComponent implements OnInit {

  registerForm : FormGroup;
  // lorsque l'utilisateur clique sur valider
  validation : boolean = false;
  // lorsque la saisie est bonne
  validationOK : boolean = false;
  user : User = new User();
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', [Validators.required]],
      codePostal: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      telephone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      civilite: ['', [Validators.required]],
      login: ['', [Validators.required]],
      mdp: ['', [Validators.required]],
      mdp2: ['', [Validators.required]],
    },
    {
      validator: MustMatch('mdp', 'mdp2')
  });
  }

  get f() { return this.registerForm.controls; }

  creerCompte()
  {
    this.validation = true;

   if (this.registerForm.valid) {
      this.validationOK = true;

      this.user.nom = this.registerForm.controls['nom'].value;
      this.user.prenom = this.registerForm.controls['prenom'].value;
      this.user.adresse = this.registerForm.controls['adresse'].value;
      this.user.codePostal = this.registerForm.controls['codePostal'].value;
      this.user.ville = this.registerForm.controls['ville'].value;
      this.user.telephone = this.registerForm.controls['telephone'].value;
      this.user.email = this.registerForm.controls['email'].value;
      this.user.login = this.registerForm.controls['login'].value;
      this.user.civilite = this.registerForm.controls['civilite'].value;
   }
  }
}
