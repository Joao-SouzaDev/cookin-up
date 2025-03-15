import type ICategoria from "@/interfaces/ICategoria";
import type IReceitas from "@/interfaces/IReceitas";


async function obterDadosUrl<T>(url:string) {
    const resposne = await fetch(url);
    return resposne.json() as T
}

export async function obterCategrias() {
    return obterDadosUrl<ICategoria[]>("https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json");
}

export async function obterReceitas() {
    return obterDadosUrl<IReceitas[]>("https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json");
}