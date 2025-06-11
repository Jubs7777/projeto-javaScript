import { Item } from "./Item";

export class ItemBlusa extends Item{

    private _modelo: number;

constructor(nome:string, tipo:number, cor:string, tamanho:number, quantidade:number, modelo:number){
super(nome, tipo, cor, tamanho, quantidade);
this._modelo = modelo;
}

public get modelo(){
return this._modelo;
}

public set modelo(modelo:number){
this._modelo = modelo;
}



}