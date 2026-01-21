<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import { getI18n } from "$lib/i18n.svelte";

  const i18n = getI18n();
  let showContent = $state(false);
  let highlightActive = $state(false);

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 400);

    setTimeout(() => {
      highlightActive = true;
    }, 3000);
  });
</script>

<main
  class="bg-black text-white selection:bg-white selection:text-black min-h-screen w-full overflow-x-hidden"
>
  <!-- Hero Section -->
  <section class="min-h-screen w-full relative overflow-hidden flex flex-col">
    <Navbar />

    <!-- Main Centered Content -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center z-20 px-6 md:px-10"
    >
      <h1
        class="syne font-bold uppercase text-center leading-none tracking-tighter transition-all duration-1000 {showContent
          ? 'opacity-100 blur-0 scale-100'
          : 'opacity-0 blur-xl scale-95'} text-[12vw] sm:text-7xl md:text-[14vw]"
      >
        {i18n.t("hero.title")}
      </h1>
      <p
        class="dm-mono font-light uppercase mt-4 tracking-widest transition-all duration-1000 delay-500 {showContent
          ? 'opacity-70 translate-y-0'
          : 'opacity-0 translate-y-4'} text-md md:text-lg max-w-[90vw] md:max-w-3xl text-center leading-relaxed"
      >
        {#each i18n.t("hero.subtitle").split(" ") as word, i}
          <span
            class="relative inline-block {highlightActive &&
            (word.includes('REVENUE') || word.includes('METRICAS'))
              ? 'text-white'
              : ''}"
          >
            {word}
            {#if word.includes("REVENUE") || word.includes("METRICAS")}
              <div
                class="absolute -bottom-2 -left-3 h-[1px] bg-white transition-all duration-500 ease-in"
                style="width: {highlightActive
                  ? '120%'
                  : '0%'}; opacity: {highlightActive ? '0.6' : '0'}"
              ></div>
            {/if}
            {i < i18n.t("hero.subtitle").split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        {/each}
      </p>
    </div>

    <!-- Bottom Description -->
    <div class="mt-auto w-full flex justify-center pb-20 md:pb-32 z-20 px-10">
      <p
        class="dm-mono font-light tracking-tight transition-all duration-1000 delay-700 {showContent
          ? 'opacity-40 translate-y-0'
          : 'opacity-0 translate-y-4'} text-md max-w-[80vw] md:max-w-xl text-center leading-relaxed uppercase"
      >
        {i18n.t("hero.description")}
      </p>
    </div>
  </section>

  <!-- Areas Section -->
  <section class="py-20 md:py-32 px-6 md:px-24 border-t border-white/5">
    <h2
      class="syne text-[10px] md:text-sm font-bold tracking-[0.3em] mb-10 md:mb-16 pl-5 uppercase
        bg-white text-black"
    >
      {i18n.t("section.services.title")}
    </h2>

    <div class="flex flex-col gap-4 md:gap-8">
      {#each ["01", "02", "03"] as id}
        <div
          class="group border-b border-white/10 pb-5 md:pb-8 flex flex-col md:flex-row md:items-end justify-between hover:border-white transition-colors duration-500"
        >
          <h3
            class="syne text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none"
          >
            {i18n.t(`section.services.${id}`)}
          </h3>
          <span
            class="dm-mono text-base md:text-xl opacity-40 group-hover:opacity-100 transition-opacity mt-2 md:mt-0 font-light"
          >
            /{id}
          </span>
        </div>
      {/each}
    </div>
  </section>

  <!-- Process Section -->
  <section class="pt-20 pb-40 md:pt-32 md:pb-60 px-6 md:px-24 bg-stone-950/50">
    <h2
      class="syne text-[10px] md:text-sm font-bold tracking-[0.3em] mb-10 md:mb-16 pl-5 uppercase
        bg-white text-black"
    >
      {i18n.t("section.process.title")}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
      {#each ["01", "02", "03"] as id}
        <div class="group">
          <span
            class="dm-mono text-[10px] opacity-30 mb-4 block tracking-widest"
            >{id}</span
          >
          <h4
            class="syne text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight leading-none group-hover:italic transition-all duration-300"
          >
            {i18n.t(`section.process.${id}.title`)}
          </h4>
          <p
            class="dm-mono text-md opacity-50 leading-relaxed max-w-xs transition-opacity duration-500 group-hover:opacity-100 uppercase"
          >
            {i18n.t(`section.process.${id}.desc`)}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer Section -->
  <footer
    class="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-24 bg-white text-black flex flex-col items-center justify-center text-center overflow-hidden"
  >
    <a
      href="mailto:{i18n.t('section.footer.email')}"
      class="syne text-5xl md:text-[10vw] font-bold tracking-tighter hover:italic transition-all duration-500 leading-none flex flex-col items-center"
    >
      <span>{i18n.t("section.footer.cta.1")}</span>
      <span>{i18n.t("section.footer.cta.2")}</span>
    </a>

    <div
      class="mt-20 md:mt-32 w-full flex flex-col md:flex-row justify-between items-center opacity-60 dm-mono text-[10px] md:text-sm gap-6 md:gap-8"
    >
      <div class="flex gap-6 md:gap-8">
        <a href="#" class="hover:opacity-100">INSTAGRAM</a>
        <a href="#" class="hover:opacity-100">TWITTER</a>
        <a href="#" class="hover:opacity-100">LINKEDIN</a>
      </div>
      <p class="order-3 md:order-2">© 2026 THE CREAT0RS</p>
      <p class="order-2 md:order-3">{i18n.t("section.footer.email")}</p>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    background-color: black;
    margin: 0;
  }

  h1 {
    font-size: clamp(4rem, 10vw, 15rem);
    letter-spacing: -0.05em;
  }
</style>
