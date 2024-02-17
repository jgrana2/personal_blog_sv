<script>
    import { MapPin } from "svelte-heros-v2";
</script>

<div class="flex w-full">
    <img
        src="JoseProfilePic.jpeg"
        alt=""
        class="w-44 h-44 mt-12 mb-10 rounded-full"
    />
</div>
<div class="flex flex-col">
    <span class="text-2xl font-extrabold mb-2"
        >Hola, soy José Granados.<br />Ingeniero de sistemas embebidos, investigador y
        desarrollador de software</span
    >
    <div class="flex gap-10 mb-10">
        <div class="flex items-center gap-1 text-sm"><MapPin />Medellín, Colombia</div>
        <div class="flex items-center gap-1 text-sm"><div class="w-4 h-4 bg-green-400 rounded-full"></div>Available to work</div>
    </div>
    <span class="text-xl"
        >En el momento, acabo de lanzar esta plantilla de portafolio mínima que
        estás viendo.
        También estoy trabajando en mis propios proyectos, compartiendo mis
        pensamientos en este blog y documentado el progreso en redes sociales.</span
    >
</div>
