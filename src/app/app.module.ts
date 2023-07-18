import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrifoComponent } from './grifo/grifo.component';
import { CabezaComponent } from './grifo/cabeza/cabeza.component';
import { CuerpoLeonComponent } from './grifo/cuerpo-leon/cuerpo-leon.component';
import { AlasAguilasComponent } from './grifo/alas-aguilas/alas-aguilas.component';
import { GarrasLeonComponent } from './grifo/garras-leon/garras-leon.component';
import { PatasdeAguilasComponent } from './grifo/patasde-aguilas/patasde-aguilas.component';
import { PicodeAguilaComponent } from './grifo/picode-aguila/picode-aguila.component';
import { OjosAgudosComponent } from './grifo/ojos-agudos/ojos-agudos.component';
import { ColaDeLeonComponent } from './grifo/cola-de-leon/cola-de-leon.component';
import { PlumasenElCuelloComponent } from './grifo/plumasen-el-cuello/plumasen-el-cuello.component';
import { EspolonEnlacolaComponent } from './grifo/espolon-enlacola/espolon-enlacola.component';

@NgModule({
  declarations: [
    AppComponent,
    GrifoComponent,
    CabezaComponent,
    CuerpoLeonComponent,
    AlasAguilasComponent,
    GarrasLeonComponent,
    PatasdeAguilasComponent,
    PicodeAguilaComponent,
    OjosAgudosComponent,
    ColaDeLeonComponent,
    PlumasenElCuelloComponent,
    EspolonEnlacolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
