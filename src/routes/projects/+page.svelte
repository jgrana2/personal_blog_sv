<script>
    import ProjectList from "../../components/ProjectList.svelte";
    import NewsletterSignUp from "../../components/NewsletterSignUp.svelte";
    import Footer from "../../components/Footer.svelte";
    import Profile from "../../components/Profile.svelte";

    const proyectos = [
        {
            title: "PaySubs",
            year: "2024",
            description: "A subscription management and payment gateway",
            link: "https://github.com/jgrana2/paygate_cloud",
        },
        {
            title: "Mastertrends",
            year: "2025",
            description: "Know what's hot and relevant",
            link: "https://github.com/jgrana2/3ch.report",
        },
        {
            title: "ECG Report Generator",
            year: "2024",
            description: "Generate PDF ECG reports",
            link: "https://github.com/jgrana2/pyqt_test",
        },
        {
            title: "Decision Making App",
            year: "2024",
            description:
                "Analise options and criteria for the best AI-assisted decision",
            link: "https://github.com/jgrana2/decision_making_py",
        },
        // Add more projects here
    ];
</script>

<div
    class="flex w-full h-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300"
>
    <div class="flex flex-col max-w-xl mx-auto m-4 p-4">
        <Profile />
        <ProjectList {proyectos} />
        <NewsletterSignUp />
        <Footer />
    </div>
</div>
