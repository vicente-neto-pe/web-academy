export const api ={
    baseUrl: process.env.NEXT_PUBLIC_API_URL
    ,
    get: async <T>(url: string): Promise<{ data: T }> => {
        const response = await fetch(api.baseUrl+url);
        const data = await response.json();
        return { data };
    },

    post: async <T>(url: string, body: T): Promise<{ data: T }> => {
        const response = await fetch(api.baseUrl+url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return { data };
    },

    put: async <T>(url: string, body: T): Promise<{ data: T }> => {
        const response = await fetch(api.baseUrl+url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return { data };
    },

    delete: async <T>(url: string): Promise<{ data: T }> => {
        const response = await fetch(api.baseUrl+url, {
            method: "DELETE",
        });
        const data = await response.json();
        return { data };
    },
}