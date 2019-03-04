
// core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// services
import { UnsubscribeService } from '../../services/unsubscribe/unsubscribe.service';
import { NotifyService } from '../../services/notify/notify.service';
import { MasterQueryService } from '../../services/master-query/master-query.service';


// components
//import { NavbarHeaderComponent } from '../../components/navbar-header/navbar-header.component';

// pipes
//import { NumSeparatorPipe } from '../../pipes/num-separator.pipe';

@NgModule({
 imports: [
  RouterModule,
  HttpClientModule,
  CommonModule,
  FormsModule
 ],
 exports: [
  HttpClientModule,
  RouterModule,
  CommonModule,
  FormsModule
 ],
 declarations: [
 ],
 providers: [
  UnsubscribeService,
  NotifyService,
  MasterQueryService
 ]
})
export class SharedModule { }
