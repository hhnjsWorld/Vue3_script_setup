import userRequest from "../composables/userRequest"
import { ref } from 'vue'
/* 所有数据统一响应 */
const todos = ref([])
    /* 放行数据的集合 */
export default () => {
    const request = userRequest()
        /* 管理加载后的视图 */
    const finishedLoading = async() => {
            todos.value = await request._get()
        }
        /* 管理根据id执行的delete方法 */
    const del = async(id) => {
            /* 根据id删除 */
            await request._delete(id)
                /* 执行删除完的视图 */
            finishedLoading()
        }
        /* 处理添加一个数据 */
    const add = async(todo) => {
            /* 添加一项目 */
            await request._post(todo)
                /* 执行添加完的视图 */
            finishedLoading()
        }
        /* 放行 */
    return {
        todos,
        del,
        finishedLoading,
        add
    }
}