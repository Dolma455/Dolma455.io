<template>
  <div
    id="svg-my-en-name"
    class="w-full flex items-center overflow-hidden py-1"
  >
    <h1
      class="font-title! font-extrabold uppercase text-flax-smoke-900 leading-none text-[clamp(1.75rem,11.5vw,13.5rem)] flex items-center whitespace-nowrap max-w-full"
    >
      <span
        v-for="(char, index) in nameChars"
        :key="index"
        class="hero-char inline-block translate-y-full will-change-transform mx-[0.02em] sm:mx-[0.04em]"
        :class="{ 'mr-[0.3em]! sm:mr-[0.4em]!': char === ' ' }"
      >
        <template v-if="char === ' '">&nbsp;</template>
        <template v-else>{{ char }}</template>
      </span>
    </h1>
  </div>
</template>

<script setup lang="ts">
  const nameChars = 'DOLMA LAMA'.split('');
</script>
