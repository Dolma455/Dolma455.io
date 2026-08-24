<template>
  <section
    id="experience-section"
    class="common-padding text-flax-smoke-200 relative z-10 py-16 sm:py-24"
  >
    <div class="md:column-gap grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
      <!-- Left: heading -->
      <div class="md:col-span-4">
        <p class="heading-6 text-flax-smoke-400 font-bold uppercase tracking-wider">
          ( EXPERIENCE )
        </p>
        <h2 class="heading-2 text-flax-smoke-100 mt-4 font-bold uppercase leading-none">
          Work <br class="hidden sm:block" />History
        </h2>
      </div>

      <!-- Right: experience list -->
      <div class="md:col-span-8">
        <div class="space-y-8 sm:space-y-10">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="border-flax-smoke-700/50 border-b pb-8 transition-colors duration-300 hover:border-flax-smoke-400"
          >
            <!-- Role + Period -->
            <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
              <h3 class="heading-4 text-flax-smoke-100 font-bold uppercase">
                {{ exp.role }}
              </h3>
              <span class="heading-6 text-flax-smoke-400 font-mono font-medium shrink-0">
                {{ exp.period }}
              </span>
            </div>

            <!-- Company + Location -->
            <div class="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p class="heading-5 text-flax-smoke-300 font-semibold">
                <a
                  v-if="exp.url"
                  :href="exp.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-flax-smoke-100 transition-colors underline underline-offset-4 decoration-flax-smoke-500/50 hover:decoration-flax-smoke-300"
                >
                  {{ exp.company }} ↗
                </a>
                <span v-else>{{ exp.company }}</span>
              </p>
              <p class="text-flax-smoke-400 text-sm uppercase tracking-wider">
                {{ exp.location }}
              </p>
            </div>

            <!-- Description -->
            <p class="heading-6 text-flax-smoke-300/80 mt-4 max-w-[55ch] font-normal leading-relaxed">
              {{ exp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const experiences = [
    {
      role: 'Product Designer',
      company: 'Aadi Design Studio',
      url: 'https://aadii.design/',
      period: '2025 - Present',
      location: 'Kathmandu, Nepal',
      description:
        'Leading end-to-end product design systems, user experience strategy, and interactive digital interfaces for web and mobile platforms.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Cognix Insights',
      url: 'https://cognixinsights.com/',
      period: '2023 - 2026',
      location: 'Kathmandu, Nepal',
      description:
        'Spearheaded user research, wireframing, interactive prototyping, and visual brand identity for scaling tech startups.',
    },
  ];
</script>
