// const rsp = require('../debug.json');
// let url = 'functionId=welcomeHome';
let url = $request.url;
let rsp = JSON.parse($response.body);
if (url.includes("functionId=personinfoBusiness")) {
    console.log('-个人页清理');
    let final_list = []
    for (let item of rsp.floors) {
        if (item.data?.walletList) {
            // 白条
            continue;
        } else if (item.data?.nodes) {
            // 最下方工具
            continue;
        }
        final_list.push(item);
    }
    rsp.floors = final_list;
} else if (url.includes("functionId=welcomeHome")) {
    console.log('-欢迎页清理');
    let final_list = []
    for (let item of rsp.floorList) {
        if (item.iconText) {
            // 搜索栏上方消费券
            continue;
        }
        final_list.push(item);
    }
    rsp.floorList = final_list;
}
$done(JSON.stringify(rsp));
