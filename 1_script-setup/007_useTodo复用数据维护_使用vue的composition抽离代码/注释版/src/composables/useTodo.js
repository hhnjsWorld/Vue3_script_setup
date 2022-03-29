import userRequest from "../composables/userRequest"
import {
    ref
} from 'vue'
/* 所有数据统一响应 */
const todos = ref([])
    /* 放行数据的集合 */
export default async() => {
    const request = userRequest()
        /* 管理删除后的视图 */
    const deleted = async() => {
            todos.value = await request._get()
        }
        /* 管理根据id执行的delete方法 */
    const del = async(id) => {
            /* 根据id删除 */
            await request._delete(id)
                /* 执行删除完的视图 */
            deleted()
        }
        /* 放行 */
    return {
        todos,
        del,
        deleted
    }
}