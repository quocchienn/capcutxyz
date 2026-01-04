/*
* Script fake logo Pro CapCut (Reference Only)
*/

let body = $response.body;
if (body) {
    let obj = JSON.parse(body);
    
    // Kiểm tra và sửa đổi các trường dữ liệu phổ biến của CapCut
    if (obj.data) {
        obj.data.is_pro = true;
        obj.data.vip_type = 1;
        obj.data.status = 1;
        obj.data.exp_time = 2147483647; // Hết hạn năm 2038
        
        // Cấu trúc bổ sung cho một số khu vực khác nhau
        if (obj.data.subscription_part) {
            obj.data.subscription_part = [
                {
                    "is_pro": true,
                    "expiry_time": 2147483647,
                    "type": "vip"
                }
            ];
        }
    }
    
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
