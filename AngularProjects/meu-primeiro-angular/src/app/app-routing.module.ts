import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
{ path: 'header', component: HeaderComponent },
{ path: 'footer', component: FooterComponent },
{ path: '', component: HomeComponent },
{ path: 'sobre', component: SobreComponent },
{ path: 'contato', component: ContatoComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}