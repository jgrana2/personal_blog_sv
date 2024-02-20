<script>
    import { MapPin } from "svelte-heros-v2";
</script>

<div class="flex flex-col">
    <div class="flex w-full">
        <img
            src="Jose_perfil.jpeg"
            alt=""
            class="w-16 h-16 mt-12 mb-2 rounded-full"
        />
    </div>
    <span class="text-2xl font-extrabold">JOSE GRANADOS</span>
    <span class="text-sm text italic mb-2"
        >Sistemas Embebidos, Investigación, Desarrollo de Software</span
    >
    <div class="flex gap-10 mb-10">
        <div class="flex items-center gap-1 text-sm">
            <MapPin />Medellín, Colombia
        </div>
        <div class="flex items-center gap-1 text-sm">
            <div class="w-4 h-4 bg-green-400 rounded-full"></div>
            Available to work
        </div>
    </div>
    <span class="text-xl"
        >Me complace anunciar el lanzamiento global de esta nueva plantilla
        de portafolio minimalista, disponible ahora para todos ustedes (consíguela <a class="underline" href="https://github.com/jgrana2/personal_blog_sv">aquí</a>).
        Paralelamente, estoy dedicado al desarrollo de proyectos propios, los
        cuales comparto con ustedes a través de este blog y mantengo un
        registro continuo de su evolución en diversas plataformas de redes
        sociales.</span
    >
</div>
