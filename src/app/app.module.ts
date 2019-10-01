
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import localePtBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BalancoComponent } from './pages/balanco/balanco.component';
import { AnaliseVerticalComponent } from './pages/analise-vertical/analise-vertical.component';
import { CapitalGiroComponent } from './pages/capital-giro/capital-giro.component';
import { AnaliseHorizontalComponent } from './pages/analise-horizontal/analise-horizontal.component';


registerLocaleData(localePtBr);
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BalancoComponent,
    AnaliseVerticalComponent,
    CapitalGiroComponent,
    AnaliseHorizontalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    CurrencyMaskModule
  ],
  providers: [ { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }