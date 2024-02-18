<script>
    import { ChevronRight } from "svelte-heros-v2";
    export let proyectos = [];
</script>

<div class="flex rounded-xl justify-between items-center py-4">
    <span class="text-2xl font-bold"> Proyectos</span>
    <a href="projects"
        ><div class="flex items-center hover:underline">
            Ver todo<ChevronRight size="15" />
        </div></a
    >
</div>

{#each proyectos as proyecto}
    <div
        class="flex flex-col rounded-xl bg-stone-200 p-4 dark:bg-stone-800 mt-4"
    >
        <div class="flex justify-between items-center">
            <span class="text-xl font-bold">{proyecto.title}</span>
            <span class="text-base bg">{proyecto.year}</span>
        </div>
        <span class="text-lg my-4">{proyecto.description}</span>
        <a href="{proyecto.repo_link}">
        <button class="flex items-center hover:underline">
            <span class="">GitHub repo</span><ChevronRight
                size="15"
            />
        </button></a>
    </div>
{/each}
