<script>
    export let post = {};

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }
</script>

<div class="flex flex-col">
    <!-- Title -->
    <h1 class="text-lg font-extrabold mt-2">{post.title}</h1>
    <span class="mb-4 text-xs">Publicado el {formatDate(post.created_at)}</span>

    <!-- Content -->
    <div>
        {@html post.content}
    </div>
</div>