// Mở khóa template
let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // Mở khóa tất cả template
        if (obj.data && obj.data.list) {
            obj.data.list.forEach(item => {
                item.is_pro = false;
                item.price = 0;
                item.vip_only = false;
            });
        }
        
        body = JSON.stringify(obj);
    } catch(e) {
        // Bỏ qua lỗi
    }
}

$done({body});
