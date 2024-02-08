<script>
    import Header from "../components/Header.svelte";
    import Introduction from "../components/Introduction.svelte";
    import GetInTouch from "../components/GetInTouch.svelte";
    import ProjectList from "../components/ProjectList.svelte";
    import Posts from "../components/Posts.svelte";
    import NewsletterSignUp from "../components/NewsletterSignUp.svelte";
    import Footer from "../components/Footer.svelte";

    const proyectos = [
        {
            title: "PaySubs",
            year: "2024",
            description: "A subscription management and payment gateway",
        },
        {
            title: "Mastertrends",
            year: "2024",
            description: "Know what's hot and relevant",
        },
        // Add more projects here
    ];

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
        // Add more reflections here
    ];
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>
<div
    class="flex w-full h-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Header />
        <Introduction />
        <GetInTouch />
        <ProjectList {proyectos} />
        <Posts {posts} />
        <NewsletterSignUp />
        <Footer />
    </div>
</div>