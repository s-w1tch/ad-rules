/*
 * @Author: sw1tch
 * @Date: 2025-08-23 14:09:25
 * @LastEditors: sw1tch
 * @LastEditTime: 2025-08-23 15:22:50
 *
 * Copyright (c) 2025 by sw1tch, All Rights Reserved.
 */
let jsonResponse = JSON.parse($response.body);
jsonResponse.result.ads_banner = [];
// console.log(JSON.stringify(jsonResponse));
$done(JSON.stringify(jsonResponse));
