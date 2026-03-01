<script>
  import logoDark from "$lib/assets/creator/CREATORS (5).png";
  import logoLight from "$lib/assets/creator/CREATORS (7).png";

  let { theme = "dark", useLogo = true } = $props();
  const isLight = theme === "light";
</script>

<nav
  class="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-14 flex justify-between items-center transition-colors duration-500 {isLight ? 'bg-white/95 backdrop-blur-sm border-b border-black/10' : 'bg-black'}"
>
  <a
    href="/"
    class="flex items-center transition-opacity duration-300 hover:opacity-80 {isLight ? 'text-black' : 'text-white'}"
  >
    {#if useLogo}
      <img
        src={isLight ? logoLight : logoDark}
        alt="CREATORS"
        class="h-4 md:h-5 w-auto object-contain"
      />
    {:else}
      <span class="dm-mono text-xs font-light uppercase tracking-widest">
        CREATORS INDUSTRIES
      </span>
    {/if}
  </a>
  <div class="flex flex-row gap-4 md:gap-6 items-center">
    <!-- <button
      onclick={() => i18n.setLang("en")}
      class="dm-mono text-xs font-light uppercase tracking-widest cursor-pointer transition-all text-white {i18n.currentLang ===
      'en'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-100'}"
    >
      REQUEST DEMO
    </button> -->
    <!--
    <div class="w-[1px] h-3 bg-white/20 self-center"></div>
    <button
      onclick={() => i18n.setLang("es")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all text-white {i18n.currentLang ===
      'es'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-100'}"
    >
      ES
    </button> -->
  </div>
</nav>
