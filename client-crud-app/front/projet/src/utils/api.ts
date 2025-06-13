export async function api<T>(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    route: string,
    body?: object
) {
    return fetch(`http://localhost:443/${route}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined
    })
        .then(res => res.json())
        .then((data: Partial<T>) => data)
}