<script>
    import NewsletterSignUp from "../../components/NewsletterSignUp.svelte";
    import Footer from "../../components/Footer.svelte";
    import Profile from "../../components/Profile.svelte";
    import Posts from "../../components/Posts.svelte";

    export let data;
    const posts = data.posts.documents;
</script>

<div
    class="flex w-full min-h-screen bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Profile />
        <Posts {posts} />
        <NewsletterSignUp />
        <Footer />
    </div>
</div>
