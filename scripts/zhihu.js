/*
 * @Author: sw1tch
 * @Date: 2025-08-23 14:09:25
 * @LastEditors: sw1tch
 * @LastEditTime: 2025-08-23 20:12:44
 *
 * Copyright (c) 2025 by sw1tch, All Rights Reserved.
 */
let url = $request.url;
let rsp = JSON.parse($response.body);
if (url.includes("/recommendations")) {
    rsp.data = [];
}
if (rsp.hasOwnProperty('ad_info')) {
    rsp.ad_info = {};
}
console.log(JSON.stringify(rsp))
$done(JSON.stringify(rsp));
