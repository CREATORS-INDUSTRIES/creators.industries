<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import { getI18n } from "$lib/i18n.svelte";
  import { getTheme } from "$lib/theme.svelte";
  import outlineImg from "$lib/assets/outline.svg";

  const i18n = getI18n();
  const theme = getTheme();
  let showContent = $state(false);
  let showOutline = $state(false);
  let highlightActive = $state(false);

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 400);

    setTimeout(() => {
      showOutline = true;
    }, 1000);

    setTimeout(() => {
      highlightActive = true;
    }, 2000);
  });
</script>

<main
  class="min-h-screen w-full overflow-x-hidden transition-colors duration-500"
>
  <!-- Hero Section -->
  <section class="min-h-screen w-full relative overflow-hidden flex flex-col">
    <Navbar />

    <!-- Main Content -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center z-20 px-6 md:px-10 pointer-events-none"
    >
      <!-- Title Layer (Background) -->
      <img
        src={outlineImg}
        alt="CREATORS"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         w-[180vw] md:w-[90vw] transition-all duration-1000 -z-10
         {theme?.current === 'light' ? 'invert' : ''}
         {showOutline
          ? 'opacity-100 md:opacity-100 blur-0 scale-100'
          : 'opacity-0 blur-xl scale-100'}"
      />

      <!-- Subtitle Layer (Underneath Title vertically) -->
      <!-- Mobile Subtitle -->
      <p
        class="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2
        dm-mono font-light uppercase tracking-[0.3em] transition-all duration-1000 delay-500
        {showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
        text-[10px] max-w-[80vw] text-center leading-loose pointer-events-auto"
      >
        {#each i18n.t("hero.subtitle").split(" ") as word, i}
          {@const isSpecial = word.toUpperCase().includes("KPI'S")}
          <span
            class="relative inline-block transition-opacity duration-500 {showContent
              ? highlightActive && isSpecial
                ? 'opacity-100'
                : 'opacity-60'
              : 'opacity-0'}"
          >
            {word}
            {#if isSpecial}
              <span
                class="absolute -bottom-1 -left-1 h-[1px] bg-brand-fg transition-[width,opacity] duration-500 ease-in block"
                style="width: {highlightActive
                  ? '110%'
                  : '0%'}; opacity: {highlightActive ? '0.6' : '0'}"
              ></span>
            {/if}
            {i < i18n.t("hero.subtitle").split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        {/each}
      </p>

      <!-- Desktop Subtitle -->
      <p
        class="hidden md:block absolute bottom-40 left-1/2 transform -translate-x-1/2
        dm-mono font-light uppercase tracking-[0.3em] transition-all duration-1000 delay-500
        {showContent ? 'opacity-100' : 'opacity-0'} 
        text-base max-w-3xl text-center leading-loose pointer-events-auto"
      >
        {#each i18n.t("hero.subtitle").split(" ") as word, i}
          {@const isSpecial = word.toUpperCase().includes("KPI'S")}
          <span
            class="relative inline-block transition-opacity duration-500 {showContent
              ? highlightActive && isSpecial
                ? 'opacity-100'
                : 'opacity-60'
              : 'opacity-0'}"
          >
            {word}
            {#if isSpecial}
              <span
                class="absolute -bottom-1 -left-1 h-[1px] bg-brand-fg transition-[width,opacity] duration-500 ease-in block"
                style="width: {highlightActive
                  ? '110%'
                  : '0%'}; opacity: {highlightActive ? '0.6' : '0'}"
              ></span>
            {/if}
            {i < i18n.t("hero.subtitle").split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        {/each}
      </p>
    </div>
  </section>

  <!-- Areas Section -->
  <section
    class="py-20 md:py-32 px-6 md:px-24 border-t border-brand-fg/5 transition-colors duration-500"
  >
    <h2
      class="syne text-[10px] md:text-sm font-bold tracking-[0.3em] mb-10 md:mb-16 pl-5 uppercase
        bg-brand-fg text-brand-bg transition-colors duration-500"
    >
      {i18n.t("section.services.title")}
    </h2>

    <div class="flex flex-col gap-4 md:gap-8">
      {#each ["01", "02", "03"] as id}
        <div
          class="group border-b border-brand-fg/10 pb-5 md:pb-8 flex flex-col md:flex-row md:items-end justify-between hover:border-brand-fg transition-colors duration-500"
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
  <section
    class="pt-20 pb-40 md:pt-32 md:pb-60 px-6 md:px-24 bg-brand-bg transition-colors duration-500"
  >
    <h2
      class="syne text-[10px] md:text-sm font-bold tracking-[0.3em] mb-10 md:mb-16 pl-5 uppercase
        bg-brand-fg text-brand-bg transition-colors duration-500"
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
    class="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-24 bg-brand-fg text-brand-bg flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500"
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
        <!-- <a
          href="https://instagram.com"
          target="_blank"
          class="hover:opacity-100">INSTAGRAM</a
        >
        <a href="https://twitter.com" target="_blank" class="hover:opacity-100"
          >TWITTER</a
        > -->
        <a
          href="https://www.linkedin.com/company/creat0rs"
          target="_blank"
          class="hover:opacity-100">LINKEDIN</a
        >
      </div>
      <p class="order-3 md:order-2">© 2026 CREATORS</p>
      <p class="order-2 md:order-3">{i18n.t("section.footer.email")}</p>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
  }
</style>
