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
export default async url => {
    /* 换算成响应式 */
    const response = ref()
    /* 转化响应式公式*/
    const request = async () => {
        const result = await fetch(url).then(r => r.json())
        response.value = result
    }
    return { response, request }
}