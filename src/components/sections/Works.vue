<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        v-html="selectedWorks"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>
      <p
        class="heading-1 text-flax-smoke-400 text-opacity-50 hidden w-4/5 text-end font-extrabold sm:block"
      >
        ( {{ selectedWorksProps.length }} )
      </p>

      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          (
          <span class="inline sm:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Featured client projects meticulously crafted with passion, intention, and performance.
        </p>
      </div>
    </div>

    <div
      class="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]"
    >
      <div
        class="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex"
      >
        <span class="font-title! relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>
      <aside
        @mouseenter="showCursor"
        @mouseleave="hideCursor"
        class="relative col-span-full flex flex-col space-y-12 md:col-span-7"
      >
        <div
          v-for="(work, i) in selectedWorksProps"
          :key="i"
          class="work-card @container group cursor-pointer"
          @click="openDetailPage(i)"
        >
          <div class="flex flex-col gap-3">
            <!-- 3-Phone Screen Mobile Mockup Container (All 3 Screens in 1 Row) -->
            <div
              v-if="work.isMobileApp"
              class="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-flax-smoke-500/30 bg-gradient-to-b from-[#1b0833] via-[#0f041a] to-[#08020e] p-3 sm:p-5 shadow-2xl transition-all duration-500 hover:border-flax-smoke-400 hover:shadow-[0_15px_40px_rgba(155,107,215,0.35)] flex items-center justify-center"
            >
              <img
                :src="work.imageBg"
                alt="ambient-glow"
                class="absolute inset-0 size-full object-cover opacity-25 blur-3xl scale-125"
              />

              <!-- All 3 Phone Screens Side by Side in 1 Row -->
              <div class="relative z-10 flex h-full max-h-[92%] w-full items-center justify-center gap-1.5 sm:gap-3">
                <!-- Phone 1 (Left Screen) -->
                <div class="relative h-[78%] aspect-[9/19] shrink-0 rounded-[1.2rem] border-[3px] border-zinc-800/90 bg-black shadow-lg overflow-hidden transition-all duration-500 group-hover:-translate-x-1 group-hover:scale-95 group-hover:rotate-[-2deg] opacity-90 flex flex-col items-center">
                  <div class="absolute top-1 z-20 h-2 w-12 rounded-full bg-black"></div>
                  <img
                    :src="work.mobileScreens ? work.mobileScreens[0] : work.imageBg"
                    alt="mobile-screen-left"
                    class="size-full object-cover object-top pt-1.5"
                  />
                </div>

                <!-- Phone 2 (Center Main Screen) -->
                <div class="relative z-20 h-full max-h-[96%] aspect-[9/19] shrink-0 rounded-[1.4rem] border-[4px] border-zinc-700 bg-black shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-105 flex flex-col items-center">
                  <div class="absolute top-1 z-20 h-2.5 w-14 rounded-full bg-black flex items-center justify-center">
                    <div class="h-1 w-1 rounded-full bg-zinc-800"></div>
                  </div>
                  <img
                    :src="work.mobileScreens ? work.mobileScreens[1] : work.imageBg"
                    alt="mobile-screen-center"
                    class="size-full object-cover object-top pt-2"
                  />
                </div>

                <!-- Phone 3 (Right Screen) -->
                <div class="relative h-[78%] aspect-[9/19] shrink-0 rounded-[1.2rem] border-[3px] border-zinc-800/90 bg-black shadow-lg overflow-hidden transition-all duration-500 group-hover:translate-x-1 group-hover:scale-95 group-hover:rotate-[2deg] opacity-90 flex flex-col items-center">
                  <div class="absolute top-1 z-20 h-2 w-12 rounded-full bg-black"></div>
                  <img
                    :src="work.mobileScreens ? work.mobileScreens[2] : work.imageBg"
                    alt="mobile-screen-right"
                    class="size-full object-cover object-top pt-1.5"
                  />
                </div>
              </div>

              <div class="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-full border border-flax-smoke-400/40 bg-flax-smoke-950/85 px-3 py-1 text-[11px] font-mono text-flax-smoke-200 backdrop-blur-md shadow-lg">
                <span>📱 3 Mobile App Screens</span>
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 z-30">
                <div class="flex items-center gap-2 rounded-full border border-flax-smoke-300/40 bg-flax-smoke-950/90 px-4 py-2 text-xs font-mono text-flax-smoke-50 backdrop-blur-md shadow-lg">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>Open Full Project Detail Page</span>
                </div>
                <span class="text-xs font-mono text-flax-smoke-300 font-bold">0{{ i + 1 }}</span>
              </div>
            </div>

            <!-- Standard Desktop Application Showcase Container -->
            <div
              v-else
              class="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-flax-smoke-500/30 bg-[#120422] p-2 sm:p-4 shadow-2xl transition-all duration-500 hover:border-flax-smoke-400 hover:shadow-[0_15px_40px_rgba(155,107,215,0.3)] flex items-center justify-center"
            >
              <img
                alt="ambient-glow"
                :src="work.imageBg"
                class="absolute inset-0 size-full object-cover opacity-20 blur-2xl scale-110"
              />
              <img
                alt="work-preview"
                loading="lazy"
                class="relative z-10 size-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
                :src="work.imageBg"
              />

              <div
                v-if="work.videoSrc"
                class="flex-center absolute inset-0 z-10 size-full overflow-hidden"
              >
                <video
                  ref="videoRefs"
                  :src="work.videoSrc"
                  muted
                  :autoplay="false"
                  type="video/webm"
                  class="size-[85%] rounded-lg object-contain blur transition-all duration-500 ease-in-out group-hover:blur-none"
                ></video>
              </div>

              <!-- Hover Quick View Button Badge -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 z-20">
                <div class="flex items-center gap-2 rounded-full border border-flax-smoke-300/40 bg-flax-smoke-950/80 px-4 py-2 text-xs font-mono text-flax-smoke-50 backdrop-blur-md shadow-lg">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>Open Full Project Detail Page</span>
                </div>
                <span class="text-xs font-mono text-flax-smoke-300 font-bold">0{{ i + 1 }}</span>
              </div>
            </div>

            <!-- Card Info Footer -->
            <div class="mt-2 flex flex-col gap-2">
              <p class="heading-6 font-title! text-flax-smoke-300 leading-none flex items-center justify-between">
                <span>{{ work.category }}</span>
                <span class="text-xs font-mono text-emerald-400 font-bold">
                  {{ work.contribution }}
                </span>
              </p>
              <div class="items-center justify-between space-y-3 sm:flex sm:space-y-0">
                <h3
                  class="heading-3 font-title! font-bold uppercase hover:text-flax-smoke-300 transition-colors"
                >
                  {{ work.name }}
                </h3>
                <div class="flex flex-wrap gap-1.5 select-none items-center">
                  <span
                    class="border-flax-smoke-400/40 bg-flax-smoke-950/60 text-flax-smoke-200 rounded-full border px-3 py-1 text-xs font-medium"
                    v-for="tag in work.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </span>
                  <span
                    class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-950 rounded-full border px-3.5 py-1 text-xs font-bold"
                  >
                    {{ work.year }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- DEDICATED FULL PROJECT DETAIL PAGE VIEW (Fully Scrollable) -->
    <Teleport to="body">
      <div
        v-if="isDetailOpen"
        data-lenis-prevent="true"
        data-lenis-prevent-touch="true"
        class="fixed inset-0 z-[999999] h-screen w-screen overflow-y-auto overscroll-contain bg-[#0a0214] text-flax-smoke-50 transition-all duration-300 select-text"
        @keydown.esc="closeDetailPage"
        tabindex="0"
      >
        <!-- Top Fixed Navigation Bar -->
        <div class="sticky top-0 z-50 flex items-center justify-between border-b border-flax-smoke-500/20 bg-[#0d031c]/95 px-6 py-4 backdrop-blur-xl">
          <button
            @click="closeDetailPage"
            class="group inline-flex items-center gap-2 rounded-full border border-flax-smoke-400/40 bg-flax-smoke-950/80 px-5 py-2 text-xs font-mono font-bold text-flax-smoke-100 hover:border-flax-smoke-300 hover:bg-flax-smoke-600 hover:text-white transition-all cursor-pointer shadow-lg"
          >
            <svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Selected Works</span>
          </button>

          <div class="flex items-center gap-4">
            <span class="text-xs font-mono text-flax-smoke-400 font-bold">
              Project 0{{ activeProjectIndex + 1 }} of {{ selectedWorksProps.length }}
            </span>

            <!-- Live Preview Option (ONLY for Sagar Distillery, Aadi Design Studio, Naasa Website, and NaasaX Web App) -->
            <a
              v-if="currentProject.hasLivePreview && currentProject.url && currentProject.url !== '#'"
              :href="currentProject.url"
              target="_blank"
              class="inline-flex items-center gap-2 rounded-full border border-emerald-400/80 bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-all shadow-lg animate-pulse"
            >
              <span>🌐 Live Preview</span>
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Project Detail Content Body -->
        <div class="mx-auto max-w-6xl px-6 py-12">
          <!-- Project Header -->
          <div class="flex flex-col border-b border-flax-smoke-500/20 pb-10">
            <div class="flex items-center gap-3">
              <span class="rounded-full border border-flax-smoke-400/40 bg-flax-smoke-950/80 px-3.5 py-1 text-xs font-mono text-flax-smoke-300 font-semibold uppercase">
                {{ currentProject.category }}
              </span>
              <span class="text-flax-smoke-500">&bull;</span>
              <span class="text-xs font-mono text-flax-smoke-300 font-bold">{{ currentProject.year }}</span>
            </div>

            <h1 class="heading-1 font-fancy font-extrabold uppercase mt-4 text-flax-smoke-50">
              {{ currentProject.name }}
            </h1>

            <!-- Project Tags -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="t in currentProject.tags"
                :key="t"
                class="rounded-full border border-flax-smoke-500/30 bg-flax-smoke-900/60 px-4 py-1.5 text-xs font-medium text-flax-smoke-200"
              >
                {{ t }}
              </span>
            </div>
          </div>

          <!-- Project Contribution & Overview Section -->
          <div class="my-10 grid grid-cols-1 gap-8 md:grid-cols-12">
            <!-- % Contribution Card -->
            <div class="md:col-span-5 rounded-3xl border border-flax-smoke-500/30 bg-gradient-to-br from-[#1b0833] via-[#120424] to-[#0a0214] p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <span class="text-xs font-mono text-flax-smoke-400 uppercase tracking-wider font-bold">Contribution Level</span>
                <h3 class="font-fancy text-3xl font-extrabold text-emerald-400 mt-2">
                  {{ currentProject.contribution }}
                </h3>
                <p class="text-xs text-flax-smoke-300/80 mt-2 leading-relaxed">
                  Verified design and development ownership for this client project.
                </p>
              </div>

              <!-- Visual Contribution Bar -->
              <div class="mt-8 space-y-4">
                <div v-if="currentProject.designContrib">
                  <div class="flex justify-between text-xs font-mono text-flax-smoke-200 mb-1">
                    <span>UI/UX Design Contribution</span>
                    <span class="font-bold text-emerald-400">{{ currentProject.designContrib }}%</span>
                  </div>
                  <div class="h-3 w-full rounded-full bg-flax-smoke-950 overflow-hidden border border-flax-smoke-500/20">
                    <div
                      class="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000"
                      :style="{ width: currentProject.designContrib + '%' }"
                    ></div>
                  </div>
                </div>

                <div v-if="currentProject.devContrib">
                  <div class="flex justify-between text-xs font-mono text-flax-smoke-200 mb-1">
                    <span>Frontend / App Development</span>
                    <span class="font-bold text-purple-400">{{ currentProject.devContrib }}%</span>
                  </div>
                  <div class="h-3 w-full rounded-full bg-flax-smoke-950 overflow-hidden border border-flax-smoke-500/20">
                    <div
                      class="h-full bg-gradient-to-r from-purple-500 to-flax-smoke-400 rounded-full transition-all duration-1000"
                      :style="{ width: currentProject.devContrib + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Introduction & Description -->
            <div class="md:col-span-7 rounded-3xl border border-flax-smoke-500/20 bg-flax-smoke-950/60 p-8 flex flex-col justify-between">
              <div>
                <span class="text-xs font-mono text-flax-smoke-400 uppercase tracking-wider font-bold">Project Overview &amp; Introduction</span>
                <p class="heading-4 font-fancy font-medium text-flax-smoke-100 mt-4 leading-relaxed">
                  {{ currentProject.intro }}
                </p>
                <p v-if="currentProject.description" class="text-sm text-flax-smoke-300 mt-4 leading-relaxed border-l-2 border-flax-smoke-400 pl-4">
                  {{ currentProject.description }}
                </p>
              </div>

              <div class="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-flax-smoke-500/15">
                <a
                  v-if="currentProject.hasLivePreview && currentProject.url && currentProject.url !== '#'"
                  :href="currentProject.url"
                  target="_blank"
                  class="inline-flex items-center gap-2 rounded-full border border-emerald-400 bg-emerald-600 px-6 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-all shadow-xl"
                >
                  <span>Launch Live Preview</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span v-else class="text-xs font-mono text-flax-smoke-400">
                  🎨 UI/UX Mockup Portfolio Showcase
                </span>
              </div>
            </div>
          </div>

          <!-- UI Mockups & Screenshots Gallery Grid Section -->
          <div class="mt-16">
            <div class="flex items-center justify-between border-b border-flax-smoke-500/20 pb-6 mb-8">
              <div>
                <h3 class="heading-3 font-fancy font-bold text-flax-smoke-50 uppercase">
                  Project UI Mockups &amp; Screenshots
                </h3>
                <p class="text-xs font-mono text-flax-smoke-300 mt-1">
                  High-resolution design mockups ({{ currentProject.gallery.length }} Screens)
                </p>
              </div>
            </div>

            <!-- Mockups Grid Showcase -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div
                v-for="(screen, sIdx) in currentProject.gallery"
                :key="sIdx"
                class="group relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-flax-smoke-500/30 bg-[#0d0218] p-2 sm:p-3 shadow-2xl transition-all duration-500 hover:border-flax-smoke-400 hover:shadow-[0_15px_35px_rgba(155,107,215,0.3)]"
              >
                <img
                  :src="screen"
                  :alt="currentProject.name + ' mockup ' + (sIdx + 1)"
                  class="size-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute bottom-3 right-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-mono text-flax-smoke-300 border border-flax-smoke-500/20 backdrop-blur-md z-10">
                  Screen 0{{ sIdx + 1 }}
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Bar -->
          <div class="mt-20 flex items-center justify-between border-t border-flax-smoke-500/20 pt-8 pb-12">
            <button
              @click="closeDetailPage"
              class="inline-flex items-center gap-2 rounded-full border border-flax-smoke-400/40 bg-flax-smoke-950 px-6 py-3 text-xs font-mono font-bold text-flax-smoke-100 hover:bg-flax-smoke-600 hover:text-white transition-all shadow-xl cursor-pointer"
            >
              <span>&larr; Back to Selected Works</span>
            </button>

            <div class="flex items-center gap-3">
              <button
                @click="prevProject"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-flax-smoke-400/40 bg-flax-smoke-950 text-flax-smoke-100 hover:bg-flax-smoke-600 hover:text-white transition-all shadow-xl cursor-pointer"
                title="Previous Project"
              >
                &larr;
              </button>
              <button
                @click="nextProject"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-flax-smoke-400/40 bg-flax-smoke-950 text-flax-smoke-100 hover:bg-flax-smoke-600 hover:text-white transition-all shadow-xl cursor-pointer"
                title="Next Project"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref, useTemplateRef } from 'vue';
  import gsap from 'gsap';
  import { useWindowSize } from '@vueuse/core';
  import { lenis } from '@/main';

  const videoRefs = useTemplateRef<HTMLVideoElement[]>('videoRefs');

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('Selected Projects /');

  // Dedicated Detail Page View State
  const isDetailOpen = ref(false);
  const activeProjectIndex = ref(0);

  const currentProject = computed(() => selectedWorksProps[activeProjectIndex.value]);

  const openDetailPage = (i: number) => {
    activeProjectIndex.value = i;
    isDetailOpen.value = true;
    lenis.stop();
    document.body.style.overflow = 'hidden';
  };

  const closeDetailPage = () => {
    isDetailOpen.value = false;
    lenis.start();
    document.body.style.overflow = '';
  };

  const nextProject = () => {
    activeProjectIndex.value = (activeProjectIndex.value + 1) % selectedWorksProps.length;
  };

  const prevProject = () => {
    activeProjectIndex.value =
      (activeProjectIndex.value - 1 + selectedWorksProps.length) % selectedWorksProps.length;
  };

  const tl = gsap
    .timeline({ defaults: { duration: 0.25 } })
    .to(['#cursor', '#inner'], {
      scale: 1,
      opacity: 1,
    })
    .paused(true);

  const showCursor = () => {
    tl.play();
  };
  const hideCursor = () => {
    tl.reverse();
  };

  const selectedWorksProps = [
    {
      name: 'Sagar Distillery',
      category: 'Website, Product Design',
      tags: ['UI/UX Design', 'Website', 'Product Design'],
      videoSrc: '',
      imageBg: '/projects/sagar_distillery_home.png',
      gallery: [
        '/projects/sagar_distillery_home.png',
        '/projects/sagar-portfolio.png',
        '/projects/sagar-journey.png',
      ],
      url: 'https://www.sagardistilleries.com/',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: true,
      contribution: '50% Design',
      designContrib: 50,
      devContrib: 0,
      intro: 'Sagar Distilleries corporate brand website showcasing premium beverage products, heritage story, and brand visual identity.',
      description: 'Contributed 50% of the UI/UX design, visual identity, product showcase layout, and brand journey story for Sagar Distilleries.',
    },
    {
      name: 'Aadi Design Studio',
      category: 'Design Studio, UI/UX',
      tags: ['UI/UX Design', 'Branding', 'Web Design'],
      videoSrc: '',
      imageBg: '/projects/aadi-design.png',
      gallery: [
        '/projects/aadi-design.png',
        '/projects/aadi-how-works.png',
        '/projects/aadi-footer.png',
      ],
      url: 'https://aadii.design/',
      year: '2025',
      isMobileApp: false,
      hasLivePreview: true,
      contribution: '50% Design (Currently Working Here)',
      designContrib: 50,
      devContrib: 0,
      intro: 'Aadi Design Studio official website highlighting agency design services, creative portfolio showcases, and user experience workflows.',
      description: 'Currently working here as UI/UX Designer and contributed 50% on design architecture, service workflow layouts, and agency branding visuals.',
    },
    {
      name: 'Naasa Website',
      category: 'Website, Corporate',
      tags: ['Website', 'Corporate', 'Finance'],
      videoSrc: '',
      imageBg: '/projects/naasawebsite_1.png',
      gallery: [
        '/projects/naasawebsite_1.png',
        '/projects/naasawebsite_2.png',
        '/projects/naasawebsite_3.png',
      ],
      url: 'https://naasasecurities.com.np/',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: true,
      contribution: '70% Design',
      designContrib: 70,
      devContrib: 0,
      intro: 'Official corporate web portal for Naasa Securities featuring stock market analysis tools, brokerage services, research, and client onboarding.',
      description: 'Contributed 70% of UI/UX design, visual hierarchy, layout architecture, and client experience.',
    },
    {
      name: 'Self Service App (SSA)',
      category: 'Mobile App, Self Service',
      tags: ['Mobile App', 'Self Service', 'Onboarding'],
      videoSrc: '',
      imageBg: '/projects/ssa_dashbaord.PNG',
      mobileScreens: [
        '/projects/ssa_login.PNG',
        '/projects/ssa_dashbaord.PNG',
        '/projects/ssa_order.PNG',
      ],
      gallery: [
        '/projects/ssa_dashbaord.PNG',
        '/projects/ssa_login.PNG',
        '/projects/ssa_portfolio.PNG',
        '/projects/ssa_order.PNG',
        '/projects/ssa_details.PNG',
        '/projects/ssa_kyc.PNG',
        '/projects/ssa_profile.PNG',
        '/projects/ssa_settings.PNG',
      ],
      url: 'https://naasasecurities.com.np/',
      year: '2025',
      isMobileApp: true,
      hasLivePreview: false,
      contribution: '70% Design · 10% Development',
      designContrib: 70,
      devContrib: 10,
      intro: 'A comprehensive mobile application designed for self-service client onboarding, KYC document verification, stock trading, and real-time portfolio management.',
      description: 'Led 70% of UI/UX design architecture, wireframing, component design systems, and 10% mobile app development integration.',
    },
    {
      name: 'NaasaX Web App',
      category: 'Web App, Trading',
      tags: ['Web App', 'Trading', 'Portfolio'],
      videoSrc: '',
      imageBg: '/projects/naasax.jpg',
      gallery: [
        '/projects/naasaxweb_dashboard.png',
        '/projects/naasaxweb_login.png',
        '/projects/naasaxweb_market.png',
        '/projects/naasaxweb_order.png',
        '/projects/naasaxweb_report.png',
        '/projects/naasax.jpg',
      ],
      url: 'https://auth.naasasecurities.com.np/',
      year: '2025',
      isMobileApp: false,
      hasLivePreview: true,
      contribution: '80% Design',
      designContrib: 80,
      devContrib: 0,
      intro: 'Next-generation web trading platform offering real-time stock quotes, order book execution, market depth, and portfolio dashboards.',
      description: 'Contributed 80% of UI/UX design systems, complex data table layouts, order execution UI, and portfolio dashboards.',
    },
    {
      name: 'Naasa KYC',
      category: 'Web App, KYC',
      tags: ['Web App', 'KYC', 'Verification'],
      videoSrc: '',
      imageBg: '/projects/kyc.jpg',
      gallery: [
        '/projects/naasakyc_personal.png',
        '/projects/naasakyc_general.png',
        '/projects/naasakyc_family.png',
        '/projects/naasakyc_nominee.png',
        '/projects/kyc.jpg',
      ],
      url: 'https://naasasecurities.com.np/',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '100% Contribution',
      designContrib: 100,
      devContrib: 0,
      intro: 'Digital Know-Your-Customer (KYC) onboarding application streamlining identity verification and family nominee documentation.',
      description: 'End-to-end 100% design ownership of multi-step document verification flows and client onboarding UI.',
    },
    {
      name: 'Connect Infinity Product Page',
      category: 'Website, Product Page',
      tags: ['Website', 'Product Page', 'AI Support'],
      videoSrc: '',
      imageBg: '/projects/ciproductpage_hero.png',
      gallery: [
        '/projects/ciproductpage_hero.png',
        '/projects/ciproductpage_services.png',
        '/projects/ciproductpage_journey.png',
        '/projects/ciproductpage_qn.png',
        '/projects/ciproductpage_2.png',
      ],
      url: 'https://connectinfinity.io/',
      year: '2025',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '85% Design',
      designContrib: 85,
      devContrib: 0,
      intro: 'AI-powered call center product landing page highlighting automated support pipelines and customer engagement.',
      description: 'Contributed 85% of UI/UX design architecture, graphics, and product journey layouts.',
    },
    {
      name: 'Connect Infinity App',
      category: 'Web App, Call Center',
      tags: ['Web App', 'Call Center', 'Support'],
      videoSrc: '',
      imageBg: '/projects/connect-infinity.jpg',
      gallery: [
        '/projects/connect-infinity.jpg',
        '/projects/ci_dashboard.png',
        '/projects/ci_report.png',
        '/projects/ci_summary.png',
        '/projects/ci_settings.png',
        '/projects/ci_revai.png',
      ],
      url: 'https://connectinfinity.io/',
      year: '2025',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '100% Contribution',
      designContrib: 100,
      devContrib: 0,
      intro: 'Call center operations dashboard, real-time agent analytics, speech-to-text intelligence, and customer service portal.',
      description: '100% UI/UX design execution of agent dashboards, call reporting, and system settings interfaces.',
    },
    {
      name: 'Nepal Stock House Website',
      category: 'Website, Finance',
      tags: ['Website', 'Finance', 'Brokerage'],
      videoSrc: '',
      imageBg: '/projects/nsh_1.png',
      gallery: [
        '/projects/nsh_1.png',
        '/projects/nsh_2.png',
        '/projects/nsh_3.png',
        '/projects/nsh_4.png',
        '/projects/nsh_5.png',
        '/projects/nsh_6.png',
        '/projects/nsh_7.png',
      ],
      url: '#',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '70% Design',
      designContrib: 70,
      devContrib: 0,
      intro: 'Financial brokerage website design and client services portal for stock market investors.',
      description: 'Contributed 70% of UI/UX design, broker information architecture, and UI templates.',
    },
    {
      name: 'CRM System',
      category: 'Dashboard, CRM',
      tags: ['Dashboard', 'CRM', 'Operations'],
      videoSrc: '',
      imageBg: '/projects/crm_1.png',
      gallery: [
        '/projects/crm_1.png',
        '/projects/crm_2.png',
        '/projects/crm_3.png',
        '/projects/crm_4.png',
      ],
      url: '#',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '100% Contribution',
      designContrib: 100,
      devContrib: 0,
      intro: 'Enterprise Customer Relationship Management (CRM) dashboard for operations management and client activity tracking.',
      description: '100% UI/UX design of client management tables, lead tracking pipelines, and operational dashboards.',
    },
    {
      name: 'AgriLink Marketplace',
      category: 'Platform, Agriculture',
      tags: ['Platform', 'Agriculture', 'Marketplace'],
      videoSrc: '',
      imageBg: '/projects/agrilink_1.png',
      gallery: [
        '/projects/agrilink_1.png',
        '/projects/agrilink_2.png',
        '/projects/agrilink_3.png',
      ],
      url: '#',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '100% Contribution',
      designContrib: 100,
      devContrib: 0,
      intro: 'Agricultural marketplace & supply chain platform connecting farmers, distributors, and buyers.',
      description: '100% design ownership for agricultural trade catalog, product listings, and order placement flows.',
    },
    {
      name: 'LoyalEdge Rewards',
      category: 'Web App, Reward',
      tags: ['Web App', 'Reward', 'Engagement'],
      videoSrc: '',
      imageBg: '/projects/loyaledge.jpg',
      gallery: [
        '/projects/loyaledge.jpg',
        '/projects/loyaledge_1.png',
        '/projects/loyaledge_2.png',
        '/projects/loyaledge_3.png',
        '/projects/loyaledge_4.png',
      ],
      url: '#',
      year: '2024',
      isMobileApp: false,
      hasLivePreview: false,
      contribution: '100% Contribution',
      designContrib: 100,
      devContrib: 0,
      intro: 'Customer loyalty rewards & engagement web application design for promotional campaigns.',
      description: '100% design execution for reward point dashboards, campaign cards, and user redeem workflows.',
    },
  ];

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (
    index: any,
    i: any,
    selectedWorksProps: any[],
  ) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(i, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any, i: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(i, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        video.play();
        video.classList.remove('blur');
      }
    });
  };

  const stopAllVideos = () => {
    videoRefs.value?.map((video: HTMLVideoElement) => {
      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('Selected Projects / ', true);
  });

  onMounted(() => {
    stopAllVideos();

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75,
    });

    videoRefs.value?.forEach((video) => {
      observer.observe(video);
    });

    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0,
    );

    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any, i: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            start: 'top 25%',
            end: 'bottom 25%',
            scrub: 0.01,
            onLeaveBack: () => {
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index, i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
