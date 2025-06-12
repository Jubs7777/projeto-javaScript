import { Item } from "./Item";

export class ItemBlusa extends Item{

private _tamanho: number;

constructor(numero: number,nome:string, tipo:number, modelo: string, cor:string, tamanho:number, quantidade:number){
super(numero, nome, tipo,modelo, cor, quantidade);
this._tamanho = tamanho;
}

public get tamanho(){
return this._tamanho;
}

public set tamanho(tamanho:number){
this._tamanho = tamanho;
}


public visualizar(): void {
super.visualizar();
console.log("Tamanho: ", this._tamanho);
}

}