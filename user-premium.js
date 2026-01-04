// CapCut User Premium Status Unlock
// Shadowrocket/Quantumult X

const $ = new Compatibility();
const url = $request.url;
let body = $response.body;

console.log(`[CapCut Premium] Processing user status: ${url}`);

if (body && typeof body === "string") {
    try {
        let obj = JSON.parse(body);
        
        // Enhanced user premium data
        if (obj.data) {
            // Full premium user profile
            obj.data.user = {
                "user_id": obj.data.user?.user_id || "premium_user_001",
                "username": obj.data.user?.username || "Premium User",
                "avatar_url": obj.data.user?.avatar_url || "",
                "is_premium": true,
                "is_vip": true,
                "vip_type": 2, // VIP Pro
                "vip_level": 3,
                "vip_expire_time": 4102416000, // 2100-01-01
                "subscription_status": "active",
                "subscription_type": "yearly_pro",
                "subscription_expiry": 4102416000,
                "auto_renew": true,
                "first_subscribe_time": 1609459200,
                "remaining_days": 9999,
                "total_subscribed_days": 3650,
                "payment_method": "apple",
                "platform": "ios",
                "region": "SG",
                "language": "en"
            };
            
            // Premium features access
            obj.data.features = {
                "export": {
                    "max_quality": "4k",
                    "allow_hdr": true,
                    "remove_watermark": true,
                    "max_fps": 60,
                    "max_duration": 3600,
                    "batch_export": true
                },
                "templates": {
                    "access_all": true,
                    "pro_templates": true,
                    "commercial_use": true,
                    "unlimited_downloads": true
                },
                "ai_tools": {
                    "ai_cut": true,
                    "ai_filter": true,
                    "ai_music": true,
                    "ai_subtitle": true,
                    "ai_voiceover": true,
                    "ai_script": true,
                    "ai_thumbnail": true,
                    "daily_credits": 9999
                },
                "storage": {
                    "cloud_space": 10737418240, // 10GB
                    "max_file_size": 5368709120, // 5GB
                    "team_collab": true,
                    "version_history": true
                },
                "editing": {
                    "advanced_tools": true,
                    "premium_effects": true,
                    "all_fonts": true,
                    "all_stickers": true,
                    "all_transitions": true,
                    "color_grading": true,
                    "audio_editing": true
                }
            };
            
            // Subscription details
            obj.data.subscription = {
                "product_id": "capcut_pro_yearly",
                "price": 0,
                "currency": "USD",
                "original_price": 79.99,
                "discount": 100,
                "billing_cycle": "yearly",
                "trial_available": false,
                "family_sharing": true,
                "devices_allowed": 5,
                "next_billing_date": 4102416000,
                "cancellation_allowed": false,
                "refund_available": true
            };
            
            // Usage statistics
            obj.data.usage = {
                "export_count": 150,
                "template_usage": 89,
                "ai_usage": 45,
                "storage_used": 2147483648, // 2GB
                "remaining_exports": 99999,
                "last_export": Date.now() / 1000
            };
            
            // Promotional offers (none since already premium)
            obj.data.offers = [];
        }
        
        // Ensure success response
        obj.code = 0;
        obj.message = "success";
        obj.timestamp = Math.floor(Date.now() / 1000);
        
        body = JSON.stringify(obj);
        console.log("[CapCut Premium] User status set to Premium Pro");
        
    } catch (e) {
        console.log(`[CapCut Premium] Error: ${e}`);
    }
}

$done({body});

function Compatibility() {
    this.version = "1.0";
}