<script>
  import Navbar from "../components/Navbar.svelte";
  import { page } from "$app/stores";

  const ERROR_CONTENT = {
    400: {
      title: "BAD REQUEST",
      description: "THE REQUEST COULD NOT BE PROCESSED. CHECK THE SENT DATA AND TRY AGAIN.",
    },
    401: {
      title: "UNAUTHORIZED",
      description: "YOU NEED VALID AUTHENTICATION TO ACCESS THIS RESOURCE.",
    },
    403: {
      title: "ACCESS FORBIDDEN",
      description: "YOU DO NOT HAVE PERMISSION TO ACCESS THIS RESOURCE.",
    },
    404: {
      title: "PAGE NOT FOUND",
      description: "THE ROUTE YOU REQUESTED DOES NOT EXIST OR HAS BEEN MOVED.",
    },
    405: {
      title: "METHOD NOT ALLOWED",
      description: "THIS ACTION IS NOT ALLOWED FOR THE REQUESTED ROUTE.",
    },
    408: {
      title: "REQUEST TIMEOUT",
      description: "THE REQUEST TOOK TOO LONG. TRY AGAIN IN A MOMENT.",
    },
    429: {
      title: "TOO MANY REQUESTS",
      description: "RATE LIMIT REACHED. WAIT A MOMENT BEFORE TRYING AGAIN.",
    },
    500: {
      title: "INTERNAL SERVER ERROR",
      description: "AN UNEXPECTED ERROR OCCURRED ON THE SERVER.",
    },
    502: {
      title: "BAD GATEWAY",
      description: "THE SERVER RECEIVED AN INVALID RESPONSE UPSTREAM.",
    },
    503: {
      title: "SERVICE UNAVAILABLE",
      description: "THE SERVICE IS TEMPORARILY UNAVAILABLE. PLEASE TRY AGAIN LATER.",
    },
    504: {
      title: "GATEWAY TIMEOUT",
      description: "THE SERVER DID NOT RECEIVE A RESPONSE IN TIME.",
    },
    default: {
      title: "UNEXPECTED ERROR",
      description: "AN UNEXPECTED ERROR OCCURRED. PLEASE TRY AGAIN.",
    },
  };

  $: currentError = ERROR_CONTENT[$page.status] ?? ERROR_CONTENT.default;
</script>

<main
  class="min-h-screen w-full overflow-x-hidden bg-black text-white transition-colors duration-500"
>
  <div
    class="pointer-events-none fixed -top-8 md:-top-10 left-1/2 -translate-x-1/2 z-[60] w-[54rem] md:w-[82rem] h-[42rem] md:h-[62rem] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.11)_28%,rgba(255,255,255,0.05)_48%,rgba(0,0,0,0)_78%)] opacity-80"
  ></div>

  <Navbar theme="dark" />

  <section class="w-screen min-h-screen pt-28 md:pt-36 pb-16 px-6 md:px-24 flex items-center justify-center">
    <div class="w-full max-w-3xl mx-auto flex flex-col items-center text-center relative">
      <p class="syne text-7xl md:text-9xl font-bold leading-none text-white error-fade">{$page.status}</p>
      <h1 class="syne mt-4 text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.9] text-white error-fade">
        {currentError.title}
      </h1>
      <p class="dm-mono mt-6 text-xs md:text-sm uppercase tracking-wide leading-relaxed text-white/65 max-w-2xl error-fade">
        {currentError.description}
      </p>

      <div class="mt-8 error-fade">
        <a
          href="/"
          class="inline-block dm-mono text-[10px] uppercase tracking-widest text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
        >
          RETURN HOME →
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  .error-fade {
    opacity: 0;
    transform: translateY(10px);
    animation: error-fade 1400ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
    will-change: opacity, transform;
  }

  @keyframes error-fade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
