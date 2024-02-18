<script>
    import ProjectList from "../../components/ProjectList.svelte";
    import NewsletterSignUp from "../../components/NewsletterSignUp.svelte";
    import Footer from "../../components/Footer.svelte";
    import Profile from "../../components/Profile.svelte";

    export let data;
    const proyectos = data.projects.documents;
</script>

<div
    class="flex w-full min-h-screen bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Profile />
        <ProjectList {proyectos} />
        <NewsletterSignUp />
        <Footer />
    </div>
</div>
