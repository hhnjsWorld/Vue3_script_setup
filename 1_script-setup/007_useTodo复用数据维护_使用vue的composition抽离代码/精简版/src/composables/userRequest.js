export default () => ({

    async request(url = '', options = { method: 'get' }) {
        console.log(url);
        return await fetch(`http://127.0.0.1:3333/news/${url}`, options).then(data());

        function data() {
            return (r) => r.json();
        }
    },

    async _get(url) {
        console.log(url, "获取");
        return await this.request(url)
    },

    async _delete(url) {
        console.log(url, '删除');
        return await this.request(url, { method: 'delete' })
    }
})