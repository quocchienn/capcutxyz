// CapCut Template Unlock Script
// Unlocks all premium templates

const $ = new Compatibility();
const url = $request.url;
let body = $response.body;

console.log(`[CapCut Templates] Unlocking: ${url}`);

if (body && typeof body === "string") {
    try {
        let obj = JSON.parse(body);
        
        // Handle template list response
        if (obj.data && (obj.data.list || obj.data.templates || obj.data.items)) {
            let templates = obj.data.list || obj.data.templates || obj.data.items || [];
            
            templates.forEach(template => {
                // Remove all premium restrictions
                template.is_pro = false;
                template.pro = 0;
                template.pro_template = false;
                template.premium = false;
                template.vip_only = false;
                template.vip_required = false;
                template.requires_purchase = false;
                template.price = 0;
                template.original_price = 0;
                template.discount = 100;
                template.is_free = true;
                template.is_available = true;
                template.locked = false;
                template.downloadable = true;
                template.commercial_use = true;
                
                // Unlimited usage
                template.usage_limit = 999;
                template.remaining_uses = 999;
                template.can_save = true;
                template.can_edit = true;
                template.can_duplicate = true;
                
                // Remove watermarks
                template.has_watermark = false;
                template.watermark_removable = true;
                
                // Highest quality
                template.quality = "4k";
                template.max_duration = 3600;
                template.resolution = "3840x2160";
                
                // All features enabled
                template.features = {
                    "audio_editing": true,
                    "text_animation": true,
                    "transition_effects": true,
                    "color_filters": true,
                    "speed_control": true,
                    "reverse_video": true,
                    "picture_in_picture": true,
                    "green_screen": true,
                    "split_screen": true
                };
                
                // Add premium tags (but free)
                if (!template.tags) template.tags = [];
                if (!template.tags.includes("pro")) template.tags.push("pro");
                if (!template.tags.includes("premium")) template.tags.push("premium");
                if (!template.tags.includes("featured")) template.tags.push("featured");
                
                // Mock download stats
                template.download_count = Math.floor(Math.random() * 10000) + 5000;
                template.like_count = Math.floor(Math.random() * 5000) + 1000;
                template.view_count = Math.floor(Math.random() * 100000) + 50000;
                template.rating = (Math.random() * 1.5 + 3.5).toFixed(1);
            });
            
            // Update pagination to show all templates
            if (obj.data.pagination) {
                obj.data.pagination.total = templates.length;
                obj.data.pagination.has_more = false;
                obj.data.pagination.next_cursor = "";
            }
            
            // Add premium categories
            if (!obj.data.categories) {
                obj.data.categories = [
                    {"id": "trending", "name": "Trending", "count": 150, "icon": "🔥"},
                    {"id": "pro", "name": "Pro Templates", "count": 89, "icon": "⭐"},
                    {"id": "business", "name": "Business", "count": 45, "icon": "💼"},
                    {"id": "social", "name": "Social Media", "count": 120, "icon": "📱"},
                    {"id": "wedding", "name": "Wedding", "count": 67, "icon": "💍"},
                    {"id": "travel", "name": "Travel", "count": 56, "icon": "✈️"},
                    {"id": "food", "name": "Food & Drink", "count": 34, "icon": "🍕"},
                    {"id": "gaming", "name": "Gaming", "count": 78, "icon": "🎮"},
                    {"id": "fitness", "name": "Fitness", "count": 42, "icon": "💪"},
                    {"id": "education", "name": "Education", "count": 23, "icon": "📚"}
                ];
            }
        }
        
        // Handle single template detail
        if (obj.data && obj.data.template) {
            let template = obj.data.template;
            
            // Unlock single template
            template.is_pro = false;
            template.price = 0;
            template.downloadable = true;
            template.preview_url = template.preview_url || "https://example.com/preview.mp4";
            template.download_url = template.download_url || "https://example.com/download.zip";
            
            // Add asset URLs
            template.assets = {
                "video": "https://example.com/assets/video.mp4",
                "audio": "https://example.com/assets/audio.mp3",
                "images": [
                    "https://example.com/assets/image1.jpg",
                    "https://example.com/assets/image2.jpg"
                ],
                "fonts": ["Arial", "Helvetica", "Roboto"],
                "json_config": "https://example.com/assets/config.json"
            };
            
            // Add usage instructions
            template.instructions = {
                "duration": "0:15-1:00",
                "aspect_ratio": "9:16, 1:1, 16:9",
                "placeholder_count": 5,
                "text_layers": 3,
                "music_track": "included",
                "export_settings": "4K, 60fps, HDR"
            };
        }
        
        // Ensure success
        obj.code = 0;
        obj.message = "All templates unlocked";
        obj.timestamp = Math.floor(Date.now() / 1000);
        
        body = JSON.stringify(obj);
        console.log(`[CapCut Templates] Unlocked ${templates?.length || 1} templates`);
        
    } catch (e) {
        console.log(`[CapCut Templates] Error: ${e}`);
    }
}

$done({body});

function Compatibility() {
    this.version = "1.0";
}