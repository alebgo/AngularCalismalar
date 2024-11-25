import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AlertifyService } from './services/alertify.service';
import { PostFilterPipe } from './post/post-filter.pipe';

const routes :Routes=[
  {path:"posts", component:PostComponent},
  {path:"",redirectTo:"posts",pathMatch:"full"},
  {path:"customers", component: CustomerComponent},
  {path:"posts/:userid", component: PostComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [
    provideClientHydration(),AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private http:HttpClientModule){}
}

