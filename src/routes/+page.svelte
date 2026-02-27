<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import ScrambleText from "../components/ScrambleText.svelte";
  import { getI18n } from "$lib/i18n.svelte";
  import { getTheme } from "$lib/theme.svelte";

  import droneVideo from "$lib/assets/dots/drone.mp4";
  import v0 from "$lib/assets/creator/Vector.png";
  import v1 from "$lib/assets/creator/Vector-1.png";
  import v2 from "$lib/assets/creator/Vector-2.png";
  import v3 from "$lib/assets/creator/Vector-3.png";
  import v4 from "$lib/assets/creator/Vector-4.png";
  import v5 from "$lib/assets/creator/Vector-5.png";
  import v6 from "$lib/assets/creator/Vector-6.png";
  import v7 from "$lib/assets/creator/Vector-7.png";

  const letterItems = [
    { src: v7, width: "auto", mx: "-2px" }, // C
    { src: v6, width: "auto", mx: "-2px" }, // R
    { src: v5, width: "auto", mx: "-2px" }, // E
    { src: v4, width: "auto", mx: "-10px" }, // A
    { src: v3, width: "auto", mx: "-20px" }, // T
    { src: v2, width: "auto", mx: "-2px" }, // R
    { src: v1, width: "auto", mx: "-2px" }, // O
    { src: v0, width: "auto", mx: "-10px" }, // S
  ];
  let activeLetters = $state(new Array(letterItems.length).fill(false));

  const i18n = getI18n();

  // Animation States
  let videoReady = $state(false); // Controls the drone video intro
  let showContent = $state(false);
  let showOutline = $state(false);
  let highlightActive = $state(false);

  onMount(() => {
    // 1. Start video animation almost immediately
    setTimeout(() => {
      videoReady = true;
    }, 100);

    // 2. Letters begin to appear
    setTimeout(() => {
      showOutline = true;
      const sequence = [3, 0, 5, 1, 7, 2, 4, 6];
      sequence.forEach((index, i) => {
        setTimeout(
          () => {
            activeLetters[index] = true;
          },
          500 + i * 100,
        );
      });
    }, 300);

    // 3. Subtitle appears
    setTimeout(() => {
      showContent = true;
    }, 1700);

    // 4. Final highlight
    setTimeout(() => {
      highlightActive = true;
    }, 2300);
  });
</script>

<main
  class="min-h-screen w-full overflow-x-hidden bg-black text-white transition-colors duration-500 dark"
>
  <section
    class="min-h-screen w-full relative overflow-hidden flex flex-col dark bg-black"
  >
    <video
      muted
      playsinline
      autoplay
      loop
      class="absolute inset-0 w-full h-full object-cover grayscale invert z-0 transition-all duration-[2500ms] ease-out
  {videoReady ? 'opacity-30 blur-0 scale-100' : 'opacity-0 blur-2xl scale-125'}"
      style="
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  "
    >
      <source src={droneVideo} type="video/mp4" />
    </video>

    <div
      class="absolute inset-0 flex flex-col justify-center items-center z-20 px-6 md:px-10 pointer-events-none"
    >
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         w-[70vw] md:w-[40vw] h-12 md:h-24 flex justify-center items-center transition-all duration-1000 -z-10
         invert
         {showOutline ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}"
      >
        {#each letterItems as item, i}
          <img
            src={item.src}
            alt="Letter {i}"
            style="margin-left: {item.mx}; margin-right: {item.mx}; width: {item.width}"
            class="h-full object-contain transition-all duration-300
              {activeLetters[i] ? 'letter-active' : 'opacity-0'}"
          />
        {/each}
      </div>

      <p
        class="md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[calc(3rem+0.75rem)]
        dm-mono font-light uppercase tracking-[0.3em] transition-all duration-1000
        {showContent ? 'opacity-100' : 'opacity-0'} 
        text-base max-w-3xl text-center leading-loose pointer-events-auto text-white"
      >
        {i18n.t("hero.subtitle")}
      </p>
    </div>
  </section>

  <section
    class="w-screen py-20 md:py-32 px-6 md:px-24 bg-black flex flex-col items-center overflow-hidden"
  >
    <div class="w-full max-w-6xl">
      <div class="flex items-center gap-6 mb-12">
        <span
          class="dm-mono text-xs text-white/30 uppercase tracking-widest flex-shrink-0"
          >[SYSTEMS]</span
        >
        <div class="flex-1 h-[1px] bg-white/10"></div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[1px] bg-white/10"
      >
        <div
          class="md:col-span-2 md:row-span-2 bg-black p-8 flex flex-col gap-6"
        >
          <div class="flex items-center justify-end">
            <span
              class="dm-mono text-[10px] text-white/40 border border-white/10 px-2 py-1 uppercase tracking-widest"
              >VISION & SOUND</span
            >
          </div>

          <h2
            class="dm-mono text-lg md:text-xl font-thin uppercase tracking-tight text-white/20"
          >
            <ScrambleText
              length={8}
              speed={100}
              class="text-white tabular-nums"
            />
            - DRONE DETECTION SYSTEM
          </h2>

          <div class="relative flex-1 group/video min-h-0">
            <div
              class="relative h-full overflow-hidden bg-white/5 border border-white/10 group-hover/video:border-white/25 transition-colors duration-500"
            >
              <video
                autoplay
                loop
                muted
                playsinline
                class="w-full h-full object-cover grayscale opacity-60 group-hover/video:grayscale-0 group-hover/video:opacity-100 transition-all duration-700"
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
              <div
                class="absolute inset-0 pointer-events-none bg-scanline opacity-20"
              ></div>
            </div>
          </div>

          <a
            href="mailto:{i18n.t(
              'section.footer.email',
            )}?subject=Drone detection system demo"
            class="dm-mono sm:w-fit h-fit text-[10px] uppercase tracking-widest text-white/80 border border-white/30 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            REQUEST DEMO →
          </a>
        </div>

        <div class="bg-black p-8 flex flex-col gap-5">
          <div class="flex items-center justify-end">
            <span
              class="dm-mono text-[10px] text-white/20 border border-white/10 px-2 py-1 uppercase tracking-widest"
              >CLASSIFIED</span
            >
          </div>
          <div
            class="flex-1 border border-white/5 bg-white/[0.02] flex items-center justify-center min-h-32"
          >
            <div class="relative w-8 h-8">
              <div
                class="absolute inset-0 border border-white/10 rotate-45"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-1 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
          <h3
            class="dm-mono text-sm font-light text-white/25 uppercase tracking-tight"
          >
            [REDACTED]
          </h3>
        </div>

        <div class="bg-zinc-700 p-8 flex flex-col gap-5">
          <div class="flex items-center justify-end">
            <span
              class="dm-mono text-[10px] text-white/50 border border-white/20 px-2 py-1 uppercase tracking-widest"
              >AD-HOC</span
            >
          </div>
          <div class="flex-1 flex flex-col justify-center gap-4 min-h-32">
            <p class="dm-mono text-sm text-white/80 uppercase leading-loose">
              CUSTOM INTELLIGENCE. BUILT AROUND YOUR ENVIRONMENT, YOUR SENSORS,
              YOUR MISSION.
            </p>
          </div>
          <a
            href="mailto:{i18n.t(
              'section.footer.email',
            )}?subject=AD-HOC intelligence"
            class="dm-mono text-[10px] uppercase tracking-widest text-white/80 border border-white/30 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            GET IN TOUCH →
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer
    class="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-24 bg-brand-fg text-brand-bg flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500"
  >
    <p
      class="syne text-7xl md:text-[17vw] font-bold -tracking-[3vw] opacity-10 hover:italic transition-all duration-500 leading-none flex flex-col items-center"
    >
      CREATORS
    </p>
    <div
      class="mt-20 md:mt-32 w-full flex flex-col md:flex-row justify-start items-center opacity-60 dm-mono text-[10px] md:text-sm gap-6 md:gap-8"
    >
      <div class="flex flex-1 gap-6 md:gap-8">
        <a
          href="https://www.linkedin.com/company/creat0rs"
          target="_blank"
          class="hover:opacity-100">LINKEDIN</a
        >
      </div>
      <div class="flex flex-1 justify-center">
        <p class="order-3 md:order-2">© 2026 CREATORS</p>
      </div>
      <div class="flex flex-1 justify-end">
        <p class="order-2 md:order-3">
          {i18n.t("section.footer.email").toUpperCase()}
        </p>
      </div>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
  }

  @keyframes flicker {
    0%,
    10%,
    20%,
    40% {
      opacity: 0;
    }
    5%,
    15%,
    25%,
    45% {
      opacity: 1;
    }
    30% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  .letter-active {
    animation: flicker 0.6s steps(1) forwards;
  }
</style>
