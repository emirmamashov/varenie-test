// cores
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from '../../pages/home/home.component';
import { FavoritesRepositoryComponent } from '../../pages/home/favorites-repository/favorites-repository.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesRepositoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeeRoutingModule { }

export const routedComponents = [
  HomeComponent,
  FavoritesRepositoryComponent
];
