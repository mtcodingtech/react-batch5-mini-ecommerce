const BASE_URL = "https://dummyjson.com";


export const api = {
    getCategories: async () => {
        const res = await fetch(`${BASE_URL}/products/category-list`);
        if(!res.ok) throw new Error("Failed to fetch categories")
        return res.json()
    }
}