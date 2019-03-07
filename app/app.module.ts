import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { InventionsListComponent } from './inventions-list/inventions-list.component';
import { HomeComponent } from './home/home.component';
import { BuildMapService } from './map/map.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    InventionsListComponent,
    HomeComponent,
    RegistrationComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoia3NlbmFhbm4iLCJhIjoiY2pzcm5ybHJ4MGUydjQ0cndvdXh6MHFjeSJ9.01MkmKIgeQ0mgSNhgI2iLw'
    })
  ],
  providers: [
    BuildMapService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
