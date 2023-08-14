import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SmartFilterModule } from './smart-filter/smart-filter.module';
import { MyLibModule } from 'projects/my-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SmartFilterModule,
    MyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
