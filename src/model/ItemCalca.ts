import { Item } from "./Item";

export class ItemCalca extends Item{

private _numeracao: number;

constructor(nome:string, tipo:number, modelo:string, cor:string, numeracao:number,quantidade:number){
super(nome, tipo, modelo, cor, quantidade);
this._numeracao = numeracao;
}

public get numeracao(){
return this._numeracao;
}

public set numeracao(numeracao:number){
this._numeracao = numeracao;
}

public visualizar(): void {
super.visualizar();
console.log("Numeração: " + this._numeracao);
}






}