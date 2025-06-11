export abstract class Item{

private _nome:string;
private _tipo:number;
private _modelo: string;
private _cor: string;
private _quantidade: number;


constructor(nome:string, tipo:number,modelo: string ,cor:string, quantidade:number ){
this._nome = nome;
this._tipo = tipo;
this._modelo = modelo;
this._cor = cor;
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


public get modelo(){
    return this._modelo;
}

public set modelo(modelo:string){
    this._modelo = modelo;
}


public get cor(){
    return this._cor;
}

public set cor(cor:string){
    this._cor = cor;
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

    
        }




console.log("\n\n*****************************************************");
console.log("Dados do Item:");
console.log("*****************************************************");
console.log("Nome do Item: " + this._nome);
console.log("Tipo do Item: " + this.tipo);
console.log("Modelo: " + this._modelo);
console.log("Cor: " + this._cor);
console.log("Quantidade: " + this._quantidade);




    }










}