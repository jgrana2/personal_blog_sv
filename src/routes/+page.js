import { getPosts, getProjects } from "$lib/appwrite";

export async function load() {
	return {
		projects: await getProjects(2),
        posts: await getPosts(3)
	};
}
