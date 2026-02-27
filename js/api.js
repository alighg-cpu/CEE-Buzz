const API_BASE = "https://cee.buzz/api/android";

const ApiService = {
    // جلب التصنيفات الرئيسية [cite: 119]
    async fetchCategories() {
        try {
            const res = await fetch(`${API_BASE}/mainCategories?lang=ar`);
            return await res.json();
        } catch (e) { console.error("Error categories:", e); }
    },

    // جلب فيديوهات تصنيف معين [cite: 34]
    async fetchVideosByCat(id) {
        try {
            const res = await fetch(`${API_BASE}/relatedVideos/id/${id}/kind/1/level/0`);
            return await res.json();
        } catch (e) { console.error("Error videos:", e); }
    },

    // جلب روابط الملفات المشفرة للفيديو (للمشغل) [cite: 62]
    async fetchVideoFiles(id) {
        try {
            const res = await fetch(`${API_BASE}/transcoddedFiles/id/${id}`);
            return await res.json();
        } catch (e) { console.error("Error files:", e); }
    }
};
