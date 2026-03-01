<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Navbar from "../../components/Navbar.svelte";

  const countries = [
    "ARGENTINA",
    "AUSTRALIA",
    "AUSTRIA",
    "BELGIUM",
    "BRAZIL",
    "CANADA",
    "CHILE",
    "CHINA",
    "COLOMBIA",
    "CZECHIA",
    "DENMARK",
    "FINLAND",
    "FRANCE",
    "GERMANY",
    "GREECE",
    "HUNGARY",
    "INDIA",
    "INDONESIA",
    "IRELAND",
    "ISRAEL",
    "ITALY",
    "JAPAN",
    "MEXICO",
    "NETHERLANDS",
    "NEW ZEALAND",
    "NORWAY",
    "POLAND",
    "PORTUGAL",
    "ROMANIA",
    "SINGAPORE",
    "SOUTH KOREA",
    "SPAIN",
    "SWEDEN",
    "SWITZERLAND",
    "TURKEY",
    "UNITED ARAB EMIRATES",
    "UNITED KINGDOM",
    "UNITED STATES",
  ];

  let selectedCountry = $state("");
  let countrySearch = $state("");
  let countryDropdownOpen = $state(false);
  let countryDropdown = $state(null);
  let leftIntroVisible = $state(false);
  let rightIntroVisible = $state(false);

  function filteredCountries() {
    const query = countrySearch.trim().toUpperCase();
    if (!query) return countries;
    return countries.filter((country) => country.includes(query));
  }

  function toggleCountryDropdown() {
    countryDropdownOpen = !countryDropdownOpen;
    if (countryDropdownOpen) {
      countrySearch = "";
    }
  }

  function selectCountry(country) {
    selectedCountry = country;
    countrySearch = "";
    countryDropdownOpen = false;
  }

  onMount(() => {
    const leftTimer = setTimeout(() => {
      leftIntroVisible = true;
    }, 80);
    const rightTimer = setTimeout(() => {
      rightIntroVisible = true;
    }, 180);

    const onPointerDown = (event) => {
      if (countryDropdown && !countryDropdown.contains(event.target)) {
        countryDropdownOpen = false;
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => {
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
      document.removeEventListener("mousedown", onPointerDown);
    };
  });
</script>

<main
  class="min-h-screen w-full overflow-x-hidden bg-black text-white transition-colors duration-500 xl:h-screen xl:overflow-hidden"
>
  <Navbar theme="dark" />

  <section class="relative w-screen min-h-screen pt-28 md:pt-36 pb-20 px-6 md:px-24 overflow-hidden xl:h-full xl:pt-24 xl:pb-8">
    <div class="pointer-events-none absolute inset-0 opacity-35">
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[75rem] h-[75rem] bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_38%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute -bottom-60 left-0 w-[42rem] h-[42rem] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_68%)]"></div>
    </div>

    <div class="relative w-full max-w-7xl mx-auto xl:h-full">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 xl:h-full">
        <div class="xl:col-span-6 xl:overflow-y-auto xl:pr-8 xl:pt-12">
          <div class="max-w-xl xl:min-h-[calc(100vh-14rem)] xl:flex xl:flex-col left-intro" class:is-visible={leftIntroVisible}>
            <h1 class="syne text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.92] text-white">
              LET'S GET
              <br />
              IN TOUCH.
            </h1>
            <p class="dm-mono mt-5 text-xs md:text-sm uppercase tracking-wide leading-relaxed text-white/65">
              TELL US WHAT YOU ARE BUILDING. ONCE BACKEND IS CONNECTED, THIS FORM WILL SEND DIRECTLY TO OUR INBOX PIPELINE.
            </p>

            <div class="mt-10 xl:mt-auto border-t border-white/15 pt-4">
              <p class="dm-mono text-xs md:text-sm uppercase tracking-wide leading-relaxed text-white/65">
                Building something autonomous?
                <br />
                Let's talk.
              </p>
            </div>
          </div>
        </div>

        <div class="xl:col-span-6 xl:self-center">
          <form class="grid grid-cols-1 gap-4 xl:gap-3.5 right-stagger" class:is-visible={rightIntroVisible} action="#" method="post">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-3.5 right-item" style="--delay: 0ms;">
              <label class="flex flex-col gap-2">
                <span class="dm-mono text-[10px] uppercase tracking-widest text-white">FULL NAME</span>
                <input
                  name="name"
                  type="text"
                  autocomplete="name"
                  class="dm-mono text-sm bg-white/[0.03] border border-white/20 focus:border-white/70 outline-none text-white px-4 py-3 transition-colors duration-200"
                  placeholder="ENTER YOUR FULL NAME..."
                />
              </label>

              <label class="flex flex-col gap-2">
                <span class="dm-mono text-[10px] uppercase tracking-widest text-white">COUNTRY</span>
                <div class="relative" bind:this={countryDropdown}>
                  <input type="hidden" name="country" value={selectedCountry} />
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={countryDropdownOpen}
                  class="dm-mono text-sm uppercase bg-white/[0.03] border border-white/20 hover:border-white/35 focus:border-white/70 outline-none pl-4 pr-11 py-3 w-full text-left cursor-pointer transition-colors duration-150 {selectedCountry ? 'text-white' : 'text-white/45'}"
                  on:click={toggleCountryDropdown}
                >
                  {selectedCountry || "SELECT COUNTRY"}
                </button>
                  <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60 text-xs transition-transform duration-200 {countryDropdownOpen ? 'rotate-180' : ''}">&#9662;</span>

                  {#if countryDropdownOpen}
                    <div
                      class="absolute z-30 mt-1 w-full border border-white/20 bg-zinc-900/95 backdrop-blur-sm"
                      in:fly={{ y: -6, duration: 140 }}
                      out:fade={{ duration: 100 }}
                    >
                      <div class="p-2 border-b border-white/15">
                        <input
                          type="text"
                          bind:value={countrySearch}
                          class="dm-mono text-xs bg-white/[0.04] border border-white/20 focus:border-white/70 outline-none text-white px-3 py-2 w-full"
                          placeholder="SEARCH COUNTRY..."
                        />
                      </div>

                      <ul role="listbox" class="max-h-44 overflow-y-auto no-scrollbar">
                        {#if filteredCountries().length === 0}
                          <li class="dm-mono text-xs uppercase text-white/45 px-4 py-3">NO COUNTRY FOUND</li>
                        {:else}
                          {#each filteredCountries() as country}
                            <li>
                              <button
                                type="button"
                                class="dm-mono w-full text-left text-sm uppercase px-4 py-3 transition-colors duration-150 {selectedCountry === country ? 'bg-white text-black' : 'text-white hover:bg-white/8'}"
                                on:click={() => selectCountry(country)}
                              >
                                {country}
                              </button>
                            </li>
                          {/each}
                        {/if}
                      </ul>
                    </div>
                  {/if}
                </div>
              </label>
            </div>

            <label class="flex flex-col gap-2 right-item" style="--delay: 90ms;">
              <span class="dm-mono text-[10px] uppercase tracking-widest text-white">ORGANIZATION</span>
              <input
                name="company"
                type="text"
                autocomplete="organization"
                class="dm-mono text-sm bg-white/[0.03] border border-white/20 focus:border-white/70 outline-none text-white px-4 py-3 transition-colors duration-200"
                placeholder="ENTER YOUR ORGANIZATION..."
              />
            </label>

            <label class="flex flex-col gap-2 right-item" style="--delay: 180ms;">
              <span class="dm-mono text-[10px] uppercase tracking-widest text-white">EMAIL ADDRESS</span>
              <input
                name="email"
                type="email"
                autocomplete="email"
                class="dm-mono text-sm bg-white/[0.03] border border-white/20 focus:border-white/70 outline-none text-white px-4 py-3 transition-colors duration-200"
                placeholder="ENTER YOUR EMAIL..."
              />
            </label>

            <label class="flex flex-col gap-2 right-item" style="--delay: 270ms;">
              <span class="dm-mono text-[10px] uppercase tracking-widest text-white">MESSAGE</span>
              <textarea
                name="message"
                rows="4"
                maxlength="300"
                class="dm-mono text-sm bg-white/[0.03] border border-white/20 focus:border-white/70 outline-none text-white px-4 py-3.5 resize-none h-32 overflow-hidden transition-colors duration-200"
                placeholder="WHAT CAN WE HELP WITH?"
              ></textarea>
            </label>

            <button
              type="submit"
              class="mt-1 dm-mono text-xs uppercase tracking-widest text-black bg-white border border-white px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 right-item"
              style="--delay: 360ms;"
            >
              SEND MESSAGE &#8594;
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .left-intro {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 520ms ease, transform 520ms ease;
  }

  .left-intro.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .right-stagger .right-item {
    opacity: 0;
    transform: translateX(34px);
    transition: opacity 480ms ease, transform 520ms ease;
    transition-delay: var(--delay, 0ms);
  }

  .right-stagger.is-visible .right-item {
    opacity: 1;
    transform: translateX(0);
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
