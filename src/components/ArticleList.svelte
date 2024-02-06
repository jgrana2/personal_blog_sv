<script>
    import { ChevronRight } from "svelte-heros-v2";
    export let entradas = [];
</script>

<div class="flex justify-between items-center py-4 mt-4 border-b">
    <span class="text-2xl font-bold font-mono"> Entradas</span>
    <button class="flex items-center hover:underline">
        <span class="text-base">Ver todo </span><ChevronRight size="15" />
    </button>
</div>

{#each entradas as entrada}
    <div class="flex flex-col py-4 border-b">
        <div class="flex justify-between items-center">
            <span class="font-mono">{entrada.title}</span>
            <button class="flex items-center hover:underline">
                <span class="text-base">{entrada.action} </span><ChevronRight
                    size="15"
                />
            </button>
        </div>
    </div>
{/each}
