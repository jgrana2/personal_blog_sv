import { Client, Databases, Account, Query, ID } from "appwrite";

const PROJECT_ID = '65d11e6b146ad55ee1de';
const DATABASE_ID = '65d11e8af3d5fd8ba809'; // Replace with your database ID
const PROJECTS_COLLECTION_ID = '65d11e9541615c7725ec'; // Replace with your collection ID
const POSTS_COLLECTION_ID = '65d11e9c666346a21cab'; // Replace with your collection ID
const MESSAGES_COLLECTION_ID = '65d21d60410fbdde0137'; // Replace with your collection ID
const CONTACTS_COLLECTION_ID = '65d40e353fc388adb189'; // Replace with your collection ID

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

export async function submitMessage(message) {
    return await databases.createDocument(
        DATABASE_ID,
        MESSAGES_COLLECTION_ID,
        ID.unique(),
        message
    );
}

export async function submitContact(email) {
    return await databases.createDocument(
        DATABASE_ID,
        CONTACTS_COLLECTION_ID,
        ID.unique(),
        email
    );
}

export async function checkContactExists(email) {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            CONTACTS_COLLECTION_ID,
            [
                Query.equal('email', email),
            ]
        );

        // If a contact is found, return the $id of the first matching document
        if (response.documents.length > 0) {
            return response.documents[0].$id; // Assuming that $id is the field with the document id
        } else {
            // Return null or however you wish to indicate that the contact does not exist
            return null;
        }

    } catch (error) {
        console.error("Error: el contacto ya existe", error);
        alert("Error: el contacto ya existe");
        throw new Error("Failed to check if contact exists");
    }
}

export async function updateContact(id, email) {
    return await databases.updateDocument(
        DATABASE_ID,
        CONTACTS_COLLECTION_ID,
        id,
        {email}
    );
}
