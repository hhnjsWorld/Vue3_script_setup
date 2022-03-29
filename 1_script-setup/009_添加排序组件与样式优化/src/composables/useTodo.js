import userRequest from "../composables/userRequest"
import {
    ref,
    watch
} from 'vue'
/* 所有数据统一响应 */
const todos = ref([])
    /* 完成排序的响应式数据 */
const orderBy = ref('asc')
    /* 放行数据的集合 */
export default () => {
    const request = userRequest()
        /* 管理加载后的视图 */
    const finishedLoading = async() => {
            todos.value = await request._get()
                /* 当加载完成之后做的一个排序 (当降序的时候 不以升序的方式看到添加) */
            sort()
        }
        /* 管理根据id执行的delete方法 */
    const del = async id => {
            /* 根据id删除 */
            await request._delete(id)
                /* 执行删除完的视图 */
            finishedLoading()
        }
        /* 处理添加一个数据 */
    const add = async todo => {
            /* 判断不能有无效字符 */
            if (todo.title.trim() == '') return alert('不能为空')
                /* 添加一项目 */
            await request._post(todo)
                /* 执行添加完的视图 */
            finishedLoading()
        }
        /* 排序定义成一个函数 */
    const sort = () => {
            console.log(todos);
            todos.value = Array.prototype.sort.call(todos.value, (a, b) => {
                /* 判断升序或者降序 */
                return orderBy.value == 'asc' ? a.id - b.id : b.id - a.id;
            })
        }
        /* 监听通过sort排序改变数据升降*/
    watch(orderBy, () => sort())
        /* 放行 */
    return {
        todos,
        del,
        finishedLoading,
        add,
        orderBy,

    }
}