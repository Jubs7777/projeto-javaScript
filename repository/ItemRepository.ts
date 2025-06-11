import { Item } from "../src/model/Item";

export interface ItemRepository{

procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(item: Item): void;
	atualizar(item: Item): void;
	deletar(numero: number): void;





}