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


public visualizar(): void {

    let tipo: string = "";

    switch (this._tipo) {
        case 1:
        tipo = "Blusa";
        break;

        case 2:
        tipo = "Calça";
        break;

        case 3:
        tipo = "Jaqueta";
        break;
        }




console.log("\n\n*****************************************************");
console.log("Dados do Item:");
console.log("*****************************************************");
console.log("Nome do Item: ", this._nome);
console.log("Tipo do Item: ", this._tipo);
console.log("Cor do Item: ", this._cor);
console.log("Tamanho do Item: ", this._tamanho);
console.log("Quantidade: ", this._quantidade);




    }










}