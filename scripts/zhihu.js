// const rsp = require('../debug.json');
// let url = '';
let url = $request.url;
let rsp = JSON.parse($response.body);
if (url.includes("/recommendations")) {
    console.log('-回答底部广告');
    rsp.data = [];
} else if (url.includes('topstory/recommend')) {
    console.log('-首页推荐广告');
    rsp.data = rsp.data.filter(item => !item.hasOwnProperty('adjson'));
}
if (rsp.hasOwnProperty('ad_info')) {
    console.log('-问题中间广告');
    rsp.ad_info = {};
}
$done(JSON.stringify(rsp));
