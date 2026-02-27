<script>
  import { onMount } from "svelte";

  let { length = 5, speed = 80, class: className = "" } = $props();

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function randomStr(len) {
    return Array.from({ length: len }, () =>
      CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");
  }

  let text = $state(randomStr(length));

  onMount(() => {
    const interval = setInterval(() => {
      text = randomStr(length);
    }, speed);
    return () => clearInterval(interval);
  });
</script>

<span class={className}>{text}</span>
