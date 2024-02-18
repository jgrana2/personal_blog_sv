import { Client, Databases, Account, Query } from "appwrite";

const PROJECT_ID = '65d11e6b146ad55ee1de';
const DATABASE_ID = '65d11e8af3d5fd8ba809'; // Replace with your database ID
const PROJECTS_COLLECTION_ID = '65d11e9541615c7725ec'; // Replace with your collection ID
const POSTS_COLLECTION_ID = '65d11e9c666346a21cab'; // Replace with your collection ID

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export async function getProjects(limit = null) {
    const options = [Query.orderDesc('year')];

    if (limit !== null) {
        options.push(Query.limit(limit));
    }

    return await databases.listDocuments(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        options
    );
}

export async function getPosts(limit = null) {
    const options = [Query.orderDesc('updated_at')];

    if (limit !== null) {
        options.push(Query.limit(limit));
    }

    return await databases.listDocuments(
        DATABASE_ID,
        POSTS_COLLECTION_ID,
        options
    );
}

export async function getPost(id) {
    return await databases.getDocument(
        DATABASE_ID,
        POSTS_COLLECTION_ID,
        id
    );
}