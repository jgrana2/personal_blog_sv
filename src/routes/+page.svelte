<script>
    import Header from "../components/Header.svelte";
    import Introduction from "../components/Introduction.svelte";
    import GetInTouch from "../components/GetInTouch.svelte";
    import ProjectList from "../components/ProjectList.svelte";
    import ArticleList from "../components/ArticleList.svelte";
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

    const reflexiones = [
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

<div
    class="flex w-full h-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Header />
        <Introduction />
        <GetInTouch />
        <ProjectList {proyectos} />
        <ArticleList {reflexiones} />
        <NewsletterSignUp />
        <Footer />
    </div>
</div>
