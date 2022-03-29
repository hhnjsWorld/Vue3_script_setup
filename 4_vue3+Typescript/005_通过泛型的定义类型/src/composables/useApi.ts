import { ref } from 'vue'

// export default async url => {
//     /* 换算成响应式 */
//     const response = ref()
//     /* 转化响应式公式*/
//     const result = await fetch(url).then(r => r.json())
//     response.value = result
//     /* 返回出去 */
//     return { response }
// }

/* 比如做一个分页式响应 */
/* options定义获取后定义的方法什么的 */
export default async (url: RequestInfo, options: RequestInit/* 对比不设置对象的话是个any类型 */) => {
    /* 换算成响应式 */
    /* ctrl查看泛型 */
    /* 类型不能固定写在这里面 */
    const response = ref<{ title?: string; id?: number }>()
    /* 转化响应式公式*/
    const request = async () => {
        response.value = await fetch(url, options).then(r => r.json())

    }
    return { response, request }
}