<script>
    import ProjectList from "../../components/ProjectList.svelte";
    import NewsletterSignUp from "../../components/NewsletterSignUp.svelte";
    import Footer from "../../components/Footer.svelte";
    import Profile from "../../components/Profile.svelte";
    import Posts from "../../components/Posts.svelte";

    const posts = [
        {
            title: "La verdad sobre el bitcoin",
            action: "Leer",
        },
        {
            title: "Nada es lo que parece",
            action: "Leer",
        },
        {
            title: "Complejidad y caos",
            action: "Leer",
        },
        {
            title: "Semiconductor news",
            action: "Leer",
        },
        {
            title: "Introduction to LLMs",
            action: "Leer",
        },
        {
            title: "SvelteKit + Tailwind CSS for the win",
            action: "Leer",
        },
        // Add more reflections here
    ];
</script>

<div
    class="flex w-full h-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Profile />
        <Posts {posts} />
        <NewsletterSignUp />
        <Footer />
    </div>
</div>
