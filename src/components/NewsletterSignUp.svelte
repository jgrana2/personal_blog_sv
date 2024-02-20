<script>
    import { checkContactExists, submitContact, updateContact } from "$lib/appwrite";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");

        if (!email.trim()) {
            console.error("Se requiere el correo electrónico");
            dispatch("submitError", {
                message: "Se requiere el correo electrónico",
            });
            return;
        }

        try {
            let response;

            // Check if contact already exists
            const contactId = await checkContactExists(email);

            // Returned value from 'checkContactExists' will be stored in 'contactId'
            if (contactId) {
                // If contact exists, update the contact information, the email should be the same
                response = await updateContact(contactId, email);
                console.log("Contacto actualizado con éxito");

                // Dispatch event indicating success with the response object and a message
                dispatch("updateSuccess", {
                    response, // contains the returned value from 'updateContact'
                    message: "Contacto actualizado con éxito",
                });

                alert("Contacto actualizado con éxito");
            } else {
                // If contact does not exist, submit as new contact
                response = await submitContact({ email });
                console.log("Suscripción confirmada");

                // Dispatch event indicating success with the response object and a message
                dispatch("submitSuccess", {
                    response, // contains the returned value from 'submitContact'
                    message: "Suscripción confirmada",
                });

                // Notify the user about the confirmation
                alert("Suscripción confirmada");

                // Reset the form
                event.target.reset();
            }
        } catch (error) {
            // Log the error and notify the user
            console.error("Subscription failed", error);
            alert("Suscripción fallida");

            // Dispatch event indicating an error with the error object
            dispatch("submitError", { error });
        }
    }
</script>

<div
    class="flex flex-col rounded-xl p-4 mt-4 bg-stone-200 dark:bg-stone-800 mb-4"
>
    <span class="text-2xl font-bold">Lista de correo</span>
    <span class="text-lg pt-4"
        >Regístrese aquí para obtener actualizaciones mensuales enviadas
        directamente a su correo electrónico.</span
    >
    <form on:submit={handleSubmit}>
        <div class="flex pt-4 gap-2">
            <input
                type="email"
                name="email"
                class="required email w-full rounded-lg p-2 text-stone-800"
                id="mce-EMAIL"
                required
            />
            <button
                class="p-4 text-sm bg-stone-200 dark:bg-stone-700 rounded-lg"
                type="submit">Registrarse</button
            >
        </div>
    </form>
</div>
