// CapCut Pro Unlock Simple
let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // Mở khóa Premium cho user
        if (obj.data && obj.data.user) {
            obj.data.user.is_premium = true;
            obj.data.user.is_vip = true;
            obj.data.user.vip_expire_time = 4102416000;
        }
        
        // Mở khóa subscription
        if (obj.data && obj.data.subscription) {
            obj.data.subscription.status = "active";
            obj.data.subscription.expire_time = 4102416000;
        }
        
        body = JSON.stringify(obj);
    } catch(e) {
        // Bỏ qua lỗi
    }
}

$done({body});
