import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrateComponent } from './registrate/registrate.component';

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