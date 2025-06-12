import { Item } from "../model/Item";
import { ItemRespository } from "../repository/ItemRepository";
import { colors } from "../util/Colors";

export class ItemController implements ItemRespository{
    

private listaItens: Array<Item> = new Array<Item>();
    numero: number = 0;

procurarPorNumero(numero: number): void {
        let buscaItem = this.buscarNoArray(numero);

        if (buscaItem != null) {
            buscaItem.visualizar();
        } else
            console.log(colors.fg.red, "\nO Item: " + numero + " não foi encontrado!", colors.reset);
    }

    listarTodas(): void {
        for (let item of this.listaItens) {
            item.visualizar();
        };
    }

    cadastrar(item: Item): void {
        this.listaItens.push(item);
        console.log(colors.fg.green, "\nO Item: " + item.numero +" foi criada com sucesso!", colors.reset);
    }

    atualizar(item: Item): void {
        let buscaItem = this.buscarNoArray(item.numero);

        if (buscaItem != null) {
            this.listaItens[this.listaItens.indexOf(buscaItem)] = item;
            console.log(colors.fg.green, "\nO Item: " + item.numero + " foi atualizada com sucesso!", colors.reset);
        
        } else
            console.log(colors.fg.red, "\nO Item: " + item.numero + " não foi encontrado!", colors.reset);
    }

    deletar(numero: number): void {
        let buscaItem = this.buscarNoArray(numero);

        if (buscaItem != null) {
        this.listaItens.splice(this.listaItens.indexOf(buscaItem), 1);
        console.log(colors.fg.green,"\nO Item: " + numero + " foi apagada com sucesso!", colors.reset);

        }else
        console.log(colors.fg.red,"\nO Item : " + numero + " não foi encontrado!", colors.reset);
    }


    public gerarNumero(): number {
        return ++ this.numero;
    }


    public buscarNoArray(numero: number): Item | null {

        for (let item of this.listaItens) {
            if (item.numero === numero)
                return item;
        }

        return null;
    }




}