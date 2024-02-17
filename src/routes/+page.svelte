<script>
    import Header from "../components/Header.svelte";
    import Introduction from "../components/Introduction.svelte";
    import GetInTouch from "../components/GetInTouch.svelte";
    import ProjectList from "../components/ProjectList.svelte";
    import Posts from "../components/Posts.svelte";
    import NewsletterSignUp from "../components/NewsletterSignUp.svelte";
    import Footer from "../components/Footer.svelte";

    export let data;

    const proyectos = data.projects.documents;
    const posts = data.posts.documents;
</script>

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