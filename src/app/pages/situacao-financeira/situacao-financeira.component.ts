import { Balanco2 } from "./../../shared/models/balanco2.model";
import { Balanco } from "./../../shared/models/balanco.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-situacao-financeira",
  templateUrl: "./situacao-financeira.component.html"
})
export class SituacaoFinanceiraComponent implements OnInit {
  @Input() b1: Balanco2;
  @Input() b2: Balanco2;

  ativoCirculanteB1: number = 0;
  ativoCirculanteB2: number = 0;

  realizavelLongoPrazoB1: number = 0;
  realizavelLongoPrazoB2: number = 0;

  passivoCirculanteTotalB1: number = 0;
  passivoCirculanteTotalB2: number = 0;

  passivoNaoCirculanteTotalB1: number = 0;
  passivoNaoCirculanteTotalB2: number = 0;

  estoqueB1: number = 0;
  estoqueB2: number = 0;

  ativoTotalB1: number = 0;
  ativoTotalB2: number = 0;

  patrimonioLiquidoB1: number = 0;
  patrimonioLiquidoB2: number = 0;

  liquidezCorrenteB1: number = 0;
  liquidezCorrenteB2: number = 0;

  liquidezGeralB1: number = 0;
  liquidezGeralB2: number = 0;

  liquidezSecaB1: number = 0;
  liquidezSecaB2: number = 0;

  grauSolvenciaB1: number = 0;
  grauSolvenciaB2: number = 0;

  partCapTercB1: number = 0;
  partCapTercB2: number = 0;

  constructor() {}

  ngOnInit() {
    console.log("Componente SITUAÇÃO FINANCEIRA foi carregado");

    this.ativoCirculanteB1 = this.b1.contas.filter(
      conta => conta.chave === "b1acTotal"
    )[0].valor;
    this.ativoCirculanteB2 = this.b2.contas.filter(
      conta => conta.chave === "b2acTotal"
    )[0].valor;

    this.realizavelLongoPrazoB1 = this.b1.contas.filter(
      conta => conta.chave === "b1ancRealizavelLongoPrazo"
    )[0].valor;
    this.realizavelLongoPrazoB2 = this.b2.contas.filter(
      conta => conta.chave === "b2ancRealizavelLongoPrazo"
    )[0].valor;

    this.passivoCirculanteTotalB1 = this.b1.contas.filter(
      conta => conta.chave === "b1pcTotal"
    )[0].valor;
    this.passivoCirculanteTotalB2 = this.b2.contas.filter(
      conta => conta.chave === "b2pcTotal"
    )[0].valor;

    this.passivoNaoCirculanteTotalB1 = this.b1.contas.filter(
      conta => conta.chave === "b1pncTotal"
    )[0].valor;
    this.passivoNaoCirculanteTotalB2 = this.b2.contas.filter(
      conta => conta.chave === "b2pncTotal"
    )[0].valor;

    this.estoqueB1 = this.b1.contas.filter(
      conta => conta.chave === "b1acEstoque"
    )[0].valor;
    this.estoqueB2 = this.b2.contas.filter(
      conta => conta.chave === "b2acEstoque"
    )[0].valor;

    this.ativoTotalB1 = this.b1.contas.filter(
      conta => conta.chave === "b1aTotal"
    )[0].valor;
    this.ativoTotalB2 = this.b2.contas.filter(
      conta => conta.chave === "b2aTotal"
    )[0].valor;

    this.patrimonioLiquidoB1 = this.b1.contas.filter(
      conta => conta.chave === "b1plTotal"
    )[0].valor;
    this.patrimonioLiquidoB2 = this.b2.contas.filter(
      conta => conta.chave === "b2plTotal"
    )[0].valor;

    this.liquidezCorrenteB1 =
      this.ativoCirculanteB1 / this.passivoCirculanteTotalB1;
    this.liquidezCorrenteB2 =
      this.ativoCirculanteB2 / this.passivoCirculanteTotalB2;

    this.liquidezGeralB1 =
      (this.ativoCirculanteB1 + this.realizavelLongoPrazoB1) /
      (this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1);
    this.liquidezGeralB2 =
      (this.ativoCirculanteB2 + this.realizavelLongoPrazoB2) /
      (this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2);

    this.liquidezSecaB1 =
      (this.ativoCirculanteB1 - this.estoqueB1) / this.passivoCirculanteTotalB1;
    this.liquidezSecaB2 =
      (this.ativoCirculanteB2 - this.estoqueB2) / this.passivoCirculanteTotalB2;

    this.grauSolvenciaB1 =
      (this.ativoTotalB1 /
        (this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1)) *
      100;
    this.grauSolvenciaB2 =
      (this.ativoTotalB2 /
        (this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2)) *
      100;

    //PCT = (PC + PNC) / PL x 100
    this.partCapTercB1 =
      ((this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1) /
        this.patrimonioLiquidoB1) *
      100;
    this.partCapTercB2 =
      ((this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2) /
        this.patrimonioLiquidoB2) *
      100;
  }
}
