/*集合一个fetch请求并且放行 */
export default () => ({
    /* 执行request任务 */
    async request(url = '', options = { method: 'get' }) {
        console.log(url);
        return await fetch(`http://127.0.0.1:3333/news/${url}`, options).then(data());
        /* 获取后台数据 */
        function data() {
            return (r) => r.json();
        }
    },
    /* 获取request中的get任务 */
    async _get(url) {
        console.log(url, "获取");
        return await this.request(url)
    },
    /* 获取request中的delete任务 */
    async _delete(url) {
        console.log(url, '删除');
        return await this.request(url, { method: 'delete' })
    }
})