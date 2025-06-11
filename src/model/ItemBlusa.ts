import { Item } from "./Item";

export class ItemBlusa extends Item{

    private _tamanho: string;

constructor(nome:string, tipo:number, modelo: string, cor:string, tamanho:string, quantidade:number){
super(nome, tipo,modelo, cor, quantidade);
this._tamanho = tamanho;
}

public get tamanho(){
return this._tamanho;
}

public set tamanho(tamanho:string){
this._tamanho = tamanho;
}




public visualizar(): void {
super.visualizar();
console.log("Tamanho: ", this._tamanho);
}

}