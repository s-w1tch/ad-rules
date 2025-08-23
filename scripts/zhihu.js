/*
 * @Author: sw1tch
 * @Date: 2025-08-23 14:09:25
 * @LastEditors: sw1tch
 * @LastEditTime: 2025-08-23 15:56:35
 *
 * Copyright (c) 2025 by sw1tch, All Rights Reserved.
 */
let url = $request.url;
let rsp = JSON.parse($response.body);
if (url.includes("/recommendations")) {
    rsp.data = [];
} else if (url.includes("/answers")) {
    rsp.ad_info = {};
}
$done(JSON.stringify(rsp));
