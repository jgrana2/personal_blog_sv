<script>
    import { ChevronRight } from "svelte-heros-v2";
    export let reflexiones = [];
</script>

<div class="flex justify-between items-center py-4 mt-4 border-b">
    <span class="text-2xl font-bold font-mono"> Reflexiones</span>
    <button class="flex items-center hover:underline">
        <span class="text-base">Ver todo </span><ChevronRight size="15" />
    </button>
</div>

{#each reflexiones as reflexion}
    <div class="flex flex-col py-4 border-b">
        <div class="flex justify-between items-center">
            <span class="font-mono">{reflexion.title}</span>
            <button class="flex items-center hover:underline">
                <span class="text-base">{reflexion.action} </span><ChevronRight
                    size="15"
                />
            </button>
        </div>
    </div>
{/each}
