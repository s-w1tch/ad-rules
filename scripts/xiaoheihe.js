/*
 * @Author: sw1tch
 * @Date: 2025-08-23 14:09:25
 * @LastEditors: sw1tch
 * @LastEditTime: 2025-08-23 20:43:24
 *
 * Copyright (c) 2025 by sw1tch, All Rights Reserved.
 */
let rsp = JSON.parse($response.body);
rsp.result.ads_banner = [];
$done(JSON.stringify(rsp));
