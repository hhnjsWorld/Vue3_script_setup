const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = () => {
    let data = { news: [] };

    for (let i = 0; i < 40; i++) {
        data.news.push({
            id: i,
            title: Random.cword(10, 10),
            content: Random.cparagraph(1),
        });
    }
    return data
};

//json-serve mockjs 应用到项目中的测试数据