import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        component: InicioComponent,
    },
    {
        path: "contactanos",
        component: ContactoComponent
    },
    {
        path: "registro",
        component: RegistrateComponent
    }
];

@NgModule({
    declarations: [
      AppComponent,
      InicioComponent,
      ContactoComponent,
      RegistrateComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }