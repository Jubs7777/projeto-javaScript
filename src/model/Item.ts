export class Item{

private _nome:string;
private _tipo:number;
private _cor: string;
private _tamanho: number;
private _quantidade: number;

constructor(nome:string, tipo:number, cor:string, tamanho:number, quantidade:number ){
this._nome = nome;
this._tipo = tipo;
this._cor = cor;
this._tamanho = tamanho;
this._quantidade = quantidade;
}

public get nome(){
    return this._nome;
}

public set nome(nome:string){
    this._nome = nome;
}

public get tipo(){
    return this._tipo;
}

public set tipo(tipo:number){
    this._tipo = tipo;
}

public get cor(){
    return this._cor;
}

public set cor(cor:string){
    this._cor = cor;
}

public get tamanho(){
    return this._tamanho;
}

public set tamanho(tamanho:number){
    this._tamanho = tamanho;
}

public get quantidade(){
    return this._quantidade;
}

public set quantidade(quantidade:number){
    this._quantidade = quantidade;
}



}