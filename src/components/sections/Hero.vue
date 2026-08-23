<template>
  <section class="padding-x mb-[-100svh] py-0">
    <div
      id="hero"
      class="sticky top-0 flex min-h-svh w-full items-end pb-[clamp(1.5rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <div class="relative flex w-full flex-col items-center">
        <div class="w-full items-end overflow-clip">
          <div class="flex w-full items-center justify-between gap-4 sm:gap-6">
            <MyName />
            <Star id="star" class="hide-on-mobile translate-x-full" />
          </div>
        </div>

        <div class="lg:column-gap spacing-t grid w-full grid-cols-12 gap-y-6">
          <!-- Left: intro text + CTA -->
          <div
            class="col-span-full flex flex-col items-start gap-8 sm:col-span-4 sm:gap-14"
          >
            <div class="overflow-hidden">
              <svg
                id="down-arrow"
                stroke="currentColor"
                fill="none"
                stroke-width="1.25"
                viewBox="6 6 12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-6"
                color="#9b6bd7"
                style="color: #9b6bd7"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <p class="sr-only">
              Product Designer &amp; Developer — crafting intuitive digital experiences and building scalable applications from concept to launch.
            </p>
            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i heading-5 w-full max-w-[28ch] overflow-clip leading-snug font-medium text-balance sm:max-w-[37ch] lg:text-start"
            ></p>

            <div class="relative origin-left overflow-hidden">
              <div id="contact-btn" class="flex -translate-y-full">
                <Button label="Get in touch" url="https://wa.me/447345133369" />
              </div>
            </div>
          </div>

          <!-- Center: profile image (hidden on small mobile, visible from sm+) -->
          <div
            id="profile-container"
            class="relative col-span-full mt-4 h-[28vh] max-w-lg select-none sm:col-span-4 sm:mt-0 sm:h-full md:flex md:h-[50vh]"
          >
            <div class="overlay bg-flax-smoke-50 absolute inset-0 z-2"></div>
            <img
              id="profile-img"
              :src="profile"
              alt="Dolma Lama profile"
              class="size-full scale-90 rounded-lg object-cover object-top"
            />
          </div>

          <!-- Right: availability text -->
          <div
            class="relative col-span-full size-full overflow-clip text-start sm:col-span-4 sm:text-end"
          >
            <div
              id="available-for-work"
              class="sm:absolute sm:right-0 sm:bottom-0 flex sm:translate-y-full flex-col sm:items-end"
            >
              <p
                class="3xl:text-base block leading-snug font-medium -tracking-tight uppercase text-end"
              >
                Available onsite<br />
                West Yorkshire area or remote
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { MyName, Star } from '../design';
  import { Button } from '@/components/common';
  import { profile } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';

  const whoAmI = ref(
    'Product Designer & Developer — crafting intuitive digital experiences and building scalable applications from concept to launch.',
  );

  onBeforeMount(() => {
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
  });
</script>
