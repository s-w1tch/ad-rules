/*
 * @Author: sw1tch
 * @Date: 2025-08-23 14:09:25
 * @LastEditors: sw1tch
 * @LastEditTime: 2025-08-24 12:26:26
 *
 * Copyright (c) 2025 by sw1tch, All Rights Reserved.
 */
let rsp = JSON.parse($response.body);
let url = $request.url;
if (url.includes('bbs/app/feeds/banner')) {
    rsp.result.ads_banner = [];
} else if (url.includes('game/all_recommend/v2')) {
    let temp_list = rsp.result.all_list
    rsp.result.all_list = temp_list.filter(item => item.type !== "header")
}
$done(JSON.stringify(rsp));
