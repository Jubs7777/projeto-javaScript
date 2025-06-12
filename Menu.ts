import { colors } from './src/util/Colors';
import readlinksync = require ("readline-sync");
import { ItemBlusa } from './src/model/ItemBlusa';
import { ItemCalca } from './src/model/ItemCalca';
import { ItemController } from './src/controller/ItemController';

export function main(){

let Item : ItemController = new ItemController();

let opcao, tipo,tamanho, numeracao, quantidade, numero: number;
let nome, modelo, cor: string;
const tipoItens = ["Item Blusa", "Item Calca"];

console.log("\nAdicionar Item\n");

let it1: ItemBlusa = new ItemBlusa(Item.gerarNumero(),"Blusa de Inverno",1,"Manga Longa","Marrom",38,15);
Item.cadastrar(it1);

let it2: ItemCalca = new ItemCalca(Item.gerarNumero(),"Calça Jeans", 2, "Cargo","Bege",40, 30);
Item.cadastrar(it2);

Item.listarTodas();

while(true){

        console.log(colors.bg.black, colors.fg.blue,
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log("                Loja Closet da Ju                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Item                       ");
        console.log("            2 - Listar todos os Itens                ");
        console.log("            3 - Buscar o Item por Número             ");
        console.log("            4 - Atualizar Dados do Item              ");
        console.log("            5 - Apagar Item                          ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);


        console.log("Entre com a opção desejada: ");
        opcao = readlinksync.questionInt("");

        if(opcao == 6){
        console.log(colors.fg.blue, "\nLoja Closet da Ju - Contagem Essencial");
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nAdicionar Item\n\n", colors.reset);

                console.log("Digite o Nome do Item: ");
                nome = readlinksync.question("");

                console.log("\nDigite o tipo do Item: ");
                tipo = readlinksync.keyInSelect(tipoItens, "", { cancel: false }) + 1;

                console.log("\nDigite o modelo: ");
                modelo = readlinksync.question("");

                console.log("\nDigite a cor: ");
                cor = readlinksync.question("");

                console.log("\nDigite a quantidade: ");
                quantidade = readlinksync.questionInt("");

        switch(tipo){
            case 1:
            
        console.log("\nDigite o número do tamanho: [38 - P ] - [40 - M] - [42 - G] ");
        tamanho = readlinksync.questionInt("");
        Item.cadastrar(new ItemBlusa(Item.gerarNumero(), nome, tipo,modelo, cor, quantidade,tamanho));
        break;

        case 2:

        console.log("\nDigite a numeração:");
        numeracao = readlinksync.questionInt("");
        Item.cadastrar(new ItemCalca(Item.gerarNumero(),nome, tipo, modelo, cor, quantidade, numeracao));
        break;
                }

            keyPress();
            break;

            case 2: 
            console.log(colors.fg.whitestrong, "\n\nListar todos os Itens\n\n", colors.reset);
            
            Item.listarTodas();


            keyPress();
            break;

            case 3:
            console.log(colors.fg.whitestrong, "\n\nBuscar o Item por Nome\n\n", colors.reset);
            
            console.log("Digite o número do Item: ");
            numero = readlinksync.questionInt("");
            Item.procurarPorNumero(numero);



            keyPress();
            break;

            case 4:
            console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Item\n\n", colors.reset);
            
            console.log("Digite o número do Item: ");
            numero = readlinksync.questionInt("");
            Item.procurarPorNumero(numero);

            let item = Item.buscarNoArray(numero);

            if (item != null) {

                    console.log("Digite o Nome do Item: ");
                    nome = readlinksync.question("");

                    console.log("Digite o Modelo: ");
                    modelo = readlinksync.question("");

                    tipo = item.tipo;

                    console.log("\nDigite a cor: ");
                    cor= readlinksync.question("");

                    console.log("\nDigite a quantidade: ");
                    quantidade = readlinksync.questionInt("");

                    switch (tipo) {
                        case 1:
                    console.log("\nDigite o Número do tamanho: [38 - P ] - [40 - M] - [42 - G]");
                    tamanho = readlinksync.questionInt("");
                    Item.cadastrar(new ItemBlusa(Item.gerarNumero(), nome, tipo,modelo, cor, quantidade,tamanho));
                    break;

                        case 2:
                    console.log("\nDigite a numeração: ");
                    numeracao = readlinksync.questionInt("");
                    Item.cadastrar(new ItemCalca(Item.gerarNumero(),nome, tipo, modelo, cor, quantidade, numeracao));
                    break;
                    }

                } else {
                    console.log(colors.fg.red, "\nO número do Item: " + numero + 
                    " não foi encontrado!", colors.reset);
                }

                keyPress()
                break;

            keyPress();
            break;

            case 5: 
            console.log(colors.fg.whitestrong, "\n\nApagar o Item\n\n", colors.reset);

            console.log("Digite o número do Item: ");
            numero = readlinksync.questionInt("");
            Item.deletar(numero);

            keyPress();
            break;

            default:
            console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
            
            keyPress();
            break;
        }
    }
}



export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Juliana Vieira ");
    console.log("Generation Brasil - senavieira.74@gmail.com");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}


function keyPress(): void{
console.log(colors.reset, "");
console.log("\nPressione enter para continuar...");
readlinksync.prompt();
}


main();