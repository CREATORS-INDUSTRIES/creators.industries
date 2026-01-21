<script>
  import { getI18n } from "$lib/i18n.svelte";
  const i18n = getI18n();
</script>

<nav class="fixed top-0 right-0 z-50 p-6 md:p-14">
  <div class="flex flex-row gap-4 md:gap-6">
    <button
      onclick={() => i18n.setLang("en")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all {i18n.currentLang === 'en'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-60'}"
    >
      EN
    </button>
    <div class="w-[1px] h-3 bg-white/10 self-center"></div>
    <button
      onclick={() => i18n.setLang("es")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all {i18n.currentLang === 'es'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-60'}"
    >
      ES
    </button>
  </div>
</nav>
