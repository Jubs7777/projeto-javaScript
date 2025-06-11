import { colors } from './src/util/Colors';
import readlinksync = require ("readline-sync");
import { ItemBlusa } from './src/model/ItemBlusa';
import { ItemCalca } from './src/model/ItemCalca';

export function main(){

let opcao: number;

const itemblusa: ItemBlusa = new ItemBlusa("Blusa de Inverno",1,"Manga Longa","Marrom","M",15);
itemblusa.visualizar();

const itemcalca: ItemCalca = new ItemCalca("Calça Jeans", 2, "Cargo","Bege",40, 30);
itemcalca.visualizar();



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

        switch(opcao){
            case 1:
            console.log(colors.fg.whitestrong, "\n\n\Adicionar Item\n\n", colors.reset);
            
            keyPress();
            break;

            case 2: 
            console.log(colors.fg.whitestrong, "\n\nListar todos os Itens", colors.reset);
            
            keyPress();
            break;

            case 3:
            console.log(colors.fg.whitestrong, "\n\nBuscar o Item por Número\n\n", colors.reset);
            
            keyPress();
            break;

            case 4:
            console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Item\n\n", colors.reset);
            
            keyPress();
            break;

            case 5: 
            console.log(colors.fg.whitestrong, "\n\nApagar o Item\n\n", colors.reset);

            keyPress();
            break;

            case 6:
            console.log(colors.fg.whitestrong, "\n\nSair\n\n", colors.reset);

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

// Colocar a numeração e o tamanho em calça e blusa.

main();