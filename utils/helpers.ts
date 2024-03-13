'use server'

export const submitPost = async (content: string) => {
    try {
        const url = process.env.API_PATH + "/api/posts"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: content, test: "test" }),
        });

        if (!response.ok) {
            return { error: "something went wrong" }
        }
        return response.json()
    } catch (error) {
        return { error: "something went wrong" }
    }
}
export const getPosts = async () => {
    try {
        const url = process.env.API_PATH + "/api/posts"
        const res = await fetch(url)
        if (!res.ok) {
            return []
        }

        return res.json()
    } catch (error) {
        console.log(error)
        return []
    }
}