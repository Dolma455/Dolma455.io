<template>
  <div :class="$attrs.class">
    <!-- Card header: number + title -->
    <div
      class="heading-3 max-sm:heading-4 relative flex flex-col items-start gap-2 py-5 text-left font-semibold md:grid md:grid-cols-12 md:items-center md:gap-0"
    >
      <span class="text-nowrap text-flax-smoke-400/70 font-mono text-base md:col-span-4">
        ( {{ `0${number}` }} )
      </span>
      <h3 class="font-fancy font-bold md:col-span-7 md:col-start-5">{{ title }}</h3>
      <div
        v-html="shape"
        class="heading-size-3 absolute right-0 top-1/2 -translate-y-1/2 hidden animate-[spin_10s_linear_infinite] fill-flax-smoke-400/50 lg:block"
      />
    </div>

    <!-- Card body: description + headings -->
    <div
      class="relative flex min-h-[auto] flex-col gap-5 pb-6 md:min-h-[35vh] md:grid md:grid-cols-12"
    >
      <div
        class="col-span-7 col-start-5 flex w-full flex-col gap-y-4"
      >
        <p class="text-balance text-base font-medium text-flax-smoke-300/80 sm:max-w-[40ch]">
          {{ body }}
        </p>

        <div class="flex flex-col">
          <template v-for="(heading, index) in headings" :key="index">
            <p
              class="flex gap-x-3 py-2 font-bold heading-5"
              :class="{
                'border-y border-flax-smoke-500/50 py-2.5!': index === 1,
              }"
            >
              <span
                class="self-center font-mono text-sm font-medium text-flax-smoke-500/70"
              >
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
              {{ heading }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    headings: {
      type: Array as () => string[],
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
  });
</script>
