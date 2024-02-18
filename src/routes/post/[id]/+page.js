import { getPost } from "$lib/appwrite";

export async function load({ params }) {
    return {
        post: await getPost(params.id)
    };
}