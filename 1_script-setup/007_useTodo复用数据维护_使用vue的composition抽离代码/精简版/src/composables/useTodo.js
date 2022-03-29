import userRequest from "../composables/userRequest"
import {
    ref
} from 'vue'

const todos = ref([])

export default () => {
    const request = userRequest()
    const deleted = async() => {
        todos.value = await request._get()
    }

    const del = async id => {
        await request._delete(id)
        deleted()
    }
    return {
        todos,
        del,
        deleted
    }
}