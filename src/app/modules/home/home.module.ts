// core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

// component
import { HomeeRoutingModule, routedComponents } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HomeeRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [ routedComponents ],
  providers: [],
})

export class HomeModule {
}
