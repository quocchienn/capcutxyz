// CapCut Pro Unlock Main Script
// Shadowrocket/Quantumult X
// Version: 3.0

let url = $request.url;
let body = $response.body;

console.log(`[CapCut Pro] Processing: ${url}`);

// Process JSON responses
if (body && typeof body === "string" && (url.includes("capcutapi.com") || url.includes("faceueditor.com"))) {
    try {
        let obj = JSON.parse(body);
        
        // Unlock user premium status
        if (obj.data && obj.data.user) {
            obj.data.user.is_premium = true;
            obj.data.user.is_vip = true;
            obj.data.user.vip_type = 2;
            obj.data.user.vip_expire_time = 4102416000; // 2100-01-01
            obj.data.user.subscription_status = "active";
            obj.data.user.subscription_expiry = 4102416000;
            obj.data.user.remaining_days = 9999;
            
            // Premium features
            obj.data.user.features = {
                "4k_export": true,
                "no_watermark": true,
                "premium_templates": true,
                "ai_features": true,
                "cloud_storage": true,
                "team_collab": true,
                "advanced_editing": true
            };
        }
        
        // Unlock templates
        if (obj.data && (obj.data.list || obj.data.templates)) {
            let items = obj.data.list || obj.data.templates || [];
            items.forEach(item => {
                item.is_pro = false;
                item.pro = 0;
                item.price = 0;
                item.vip_only = false;
                item.premium = false;
                item.requires_purchase = false;
                item.is_available = true;
                item.is_free = true;
            });
        }
        
        // Unlock AI features
        if (obj.data && obj.data.ai_features) {
            obj.data.ai_features.forEach(feature => {
                feature.locked = false;
                feature.requires_subscription = false;
                feature.credits_required = 0;
                feature.free_uses = 999;
            });
        }
        
        // Unlock effects and filters
        if (obj.data && obj.data.effects) {
            obj.data.effects.forEach(effect => {
                effect.is_pro = false;
                effect.price = 0;
                effect.vip = false;
            });
        }
        
        // Unlock music library
        if (obj.data && obj.data.music) {
            obj.data.music.forEach(track => {
                track.is_premium = false;
                track.requires_license = false;
                track.is_available = true;
            });
        }
        
        // Unlock fonts
        if (obj.data && obj.data.fonts) {
            obj.data.fonts.forEach(font => {
                font.premium = false;
                font.locked = false;
            });
        }
        
        // Unlock stickers
        if (obj.data && obj.data.stickers) {
            obj.data.stickers.forEach(sticker => {
                sticker.is_pro = false;
                sticker.price = 0;
            });
        }
        
        // Unlock transitions
        if (obj.data && obj.data.transitions) {
            obj.data.transitions.forEach(transition => {
                transition.premium = false;
                transition.locked = false;
            });
        }
        
        // Response success enhancement
        if (obj.code !== undefined) {
            obj.code = 0; // Success code
            obj.message = "success";
        }
        
        body = JSON.stringify(obj);
        console.log("[CapCut Pro] Successfully unlocked features");
        
    } catch (e) {
        console.log(`[CapCut Pro] JSON parse error: ${e}`);
    }
}

// Handle specific API endpoints
if (url.includes("/commerce/v1/subscription/user_info")) {
    try {
        let obj = JSON.parse(body);
        obj.data = {
            "subscription_type": "pro",
            "status": "active",
            "expire_time": 4102416000,
            "auto_renew": true,
            "platform": "ios",
            "entitlements": ["premium_templates", "no_watermark", "4k_export", "ai_tools", "cloud_10gb"]
        };
        body = JSON.stringify(obj);
    } catch (e) {}
}

if (url.includes("/video/export/settings")) {
    try {
        let obj = JSON.parse(body);
        obj.data = {
            "max_quality": "4k",
            "available_qualities": ["480p", "720p", "1080p", "2k", "4k"],
            "max_fps": 60,
            "allow_hdr": true,
            "max_duration": 3600,
            "remove_watermark": true,
            "custom_watermark": false
        };
        body = JSON.stringify(obj);
    } catch (e) {}
}

if (url.includes("/template/categories")) {
    try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.categories) {
            obj.data.categories.forEach(cat => {
                cat.is_pro = false;
                cat.locked = false;
            });
        }
        body = JSON.stringify(obj);
    } catch (e) {}
}

$done({body});