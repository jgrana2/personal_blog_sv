<script>
    import Footer from "../../components/Footer.svelte";
    import NewsletterSignUp from "../../components/NewsletterSignUp.svelte";

    import Profile from "../../components/Profile.svelte";
</script>

<div
    class="flex w-full h-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Profile />
        <form>
            <div class="flex flex-col gap-2">
                <label for="name">Nombre</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    class="p-2 rounded-lg"
                    placeholder="Opcional"
                />

                <label for="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    class="p-2 rounded-lg"
                    placeholder="nombre@email.com"
                    required
                />

                <label for="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    class="p-2 rounded-lg"
                    rows="4"
                    placeholder="Su mensaje"
                    required
                ></textarea>
                <button class="w-full border p-4 my-4 rounded-lg">Enviar</button>
            </div>
        </form>
        <div class="flex justify-center gap-8 p-4">
            <span>Instagram</span>
            <span>Github</span>
            <span>Threads</span>
        </div>
        <NewsletterSignUp />
        <Footer />
    </div>
</div>
