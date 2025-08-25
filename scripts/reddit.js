let headers = $request.headers;
let rsp = JSON.parse($response.body);
switch (headers['X-APOLLO-OPERATION-NAME']) {
    case 'PdpCommentsAds':
        console.log('-评论区广告')
        rsp = {};
        break;
    case 'HomeFeedSdui':
        console.log('-首页广告')
        let temp_list = rsp.data.homeV3.elements.edges
        rsp.data.homeV3.elements.edges = temp_list.filter(item => item.node?.adPayload === null)
        break;
}
$done(JSON.stringify(rsp));