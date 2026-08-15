<template>
  <section
    id="experience-section"
    class="common-padding text-flax-smoke-200 relative z-10 py-16 sm:py-24"
  >
    <div class="md:column-gap grid grid-cols-12 items-start">
      <div class="col-span-full md:col-span-4">
        <p class="heading-6 text-flax-smoke-400 font-bold uppercase tracking-wider">
          ( EXPERIENCE )
        </p>
        <h2 class="heading-2 text-flax-smoke-100 mt-4 font-bold uppercase leading-none">
          Work <br />History
        </h2>
      </div>

      <div class="col-span-full mt-10 md:col-span-8 md:mt-0">
        <div class="space-y-10">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="border-flax-smoke-700/50 border-b pb-8 transition-colors duration-300 hover:border-flax-smoke-400"
          >
            <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <h3 class="heading-4 text-flax-smoke-100 font-bold uppercase">
                {{ exp.role }}
              </h3>
              <span class="heading-6 text-flax-smoke-400 font-mono font-medium">
                {{ exp.period }}
              </span>
            </div>

            <div class="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
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

            <p class="heading-6 text-flax-smoke-300/80 mt-4 max-w-[50ch] font-normal leading-relaxed">
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
      role: 'Senior Product Designer',
      company: 'Aadi Design Studio',
      url: 'https://aadii.design/',
      period: '2023 - Present',
      location: 'Kathmandu, Nepal',
      description:
        'Leading end-to-end product design systems, user experience strategy, and interactive digital interfaces for web and mobile platforms.',
    },
    {
      role: 'Lead UI/UX Designer',
      company: 'Cognix Insights',
      url: 'https://cognixinsights.com/',
      period: '2021 - 2023',
      location: 'Kathmandu, Nepal',
      description:
        'Spearheaded user research, wireframing, interactive prototyping, and visual brand identity for scaling tech startups.',
    },
    {
      role: 'Product Designer',
      company: 'Freelance & Studio',
      period: '2019 - 2021',
      location: 'Remote',
      description:
        'Designed intuitive digital experiences, responsive web applications, and motion design systems for international clients.',
    },
  ];
</script>
