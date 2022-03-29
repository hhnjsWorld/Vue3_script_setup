import useApi from "../composables/useApi";

/* 定义变量 */
const host = `http://127.0.0.1:3222`
/* 定义泛型 */
export type Article = {
    id: number,
    title: string,
    author: string,
    status: boolean,
}


/* 获取文章列表 */
export const all = async () => {
    /* 获取全部S */
    const { response, request } = await useApi<Article[]>(`${host}/articles`)
    request()
    return { response }
}
/* 获取单条*/
export const find = async (id: number) => {
    const { response, request } = await useApi<Article>(`${host}/articles/${id}`);
    request()
    return { response }
}
