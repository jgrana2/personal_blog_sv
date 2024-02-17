import { getPosts } from "$lib/appwrite";

export async function load() {
	return {
        posts: await getPosts()
	};
}
