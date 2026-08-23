<template>
  <section
    id="about-me-section"
    class="common-padding text-flax-smoke-200 relative z-10 overflow-y-clip rounded-b-3xl bg-[#1b0731] shadow-2xl will-change-auto sm:mt-0"
  >
    <!-- Header row -->
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <!-- Content: image + text (stacked on mobile, side by side on md+) -->
    <div class="padding-y md:column-gap mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
      <!-- Profile image: full width on mobile, 4 cols on md+ -->
      <div
        class="pointer-events-none w-full max-w-xs mx-auto rounded-lg select-none md:col-span-4 md:max-w-none md:mx-0"
      >
        <img
          :src="dolmaLama"
          class="w-full aspect-[1/1.4] rounded-lg object-cover object-top"
          alt="Headshot of Dolma Lama facing a camera"
        />
      </div>

      <!-- Text content -->
      <div class="w-full md:col-span-8 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          With a passion for design and development, I take projects from
          ideation to launch, ensuring a seamless journey that leaves a lasting
          positive impact on the digital landscape and your business.
        </p>

        <div
          class="text-flax-smoke-300 mt-8 flex flex-col gap-4 sm:flex-row sm:gap-16"
        >
          <p class="heading-6 text-flax-smoke-300/85 text-nowrap font-bold">
            ( ABOUT ME )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            Creating great digital experiences is my primary focus. I ensure each
            project leaves users with a feel-good sensation through meticulous
            attention to detail and user-centric design principles. <br /><br />
            When I'm not deep in design or development, you can find me
            sharing ideas on <i>&Xopf;</i>, exploring music (Funk), or just unwinding.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import { dolmaLama } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const aboutMe = ref('Designer, Developer/');

  onBeforeMount(() => {
    aboutMe.value = textSplitterIntoChar(
      'Designer, Developer/',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>
