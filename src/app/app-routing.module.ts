// core
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const APP_ROUTES: Routes = [
  {
    path: "",
    loadChildren: "src/app/modules/home/home.module#HomeModule"
  },
  {
    path: "**",
    loadChildren: "src/app/modules/home/home.module#HomeModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
