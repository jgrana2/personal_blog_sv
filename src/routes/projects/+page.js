import { getProjects } from "$lib/appwrite";

export async function load() {
	return {
		projects: await getProjects()
	};
}
