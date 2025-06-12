import { Item } from "../model/Item";


export interface ItemRespository{


procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(item: Item): void;
	atualizar(item: Item): void;
	deletar(number: number): void;











}

