<script>
    export let post = {};

    function formatDate(dateString) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        };
        return new Date(dateString).toLocaleDateString("es-ES", options);
    }
</script>

<div class="flex flex-col">
    <!-- Title -->
    <h1 class="text-lg font-extrabold mt-2">{post.title}</h1>
    {#if post.created_at}
        <span class="text-xs mt-4"
            >Publicado el {formatDate(post.created_at)}</span
        >
    {/if}
    {#if post.updated_at}
        <span class="mb-4 text-xs"
            >Actualizado el {formatDate(post.updated_at)}</span
        >
    {/if}

    <!-- Content -->
    <div>
        {@html post.content}
    </div>
</div>
