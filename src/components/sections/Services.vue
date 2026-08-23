<template>
  <section id="services" class="padding-x mb-20">
    <div class="flex w-full flex-col">
      <h3
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold uppercase"
      ></h3>

      <div
        id="services-text"
        class="text-flax-smoke-300 mt-[5%] grid grid-cols-1 gap-4 opacity-0 sm:grid-cols-12"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 text-center text-nowrap sm:col-span-4 sm:col-start-4"
        >
          ( SERVICES )
        </p>
        <p
          class="heading-4 font-fancy w-full text-balance sm:col-span-8 sm:font-semibold md:col-span-5"
        >
          User-friendly interfaces don't happen by chance, they are built with
          intention. I design and code intuitive, high-performance solutions that make your users'
          journey effortless.
        </p>
      </div>
    </div>

    <!-- Services Cards — disable sticky stacking on mobile -->
    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="flex flex-col justify-between gap-y-0">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="border-flax-smoke-500/50 border-t bg-[#1b0731]"
          :class="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  const whatIDo = ref('My services /');

  const servicesCardProps = [
    {
      title: 'UI/UX Design',
      body: 'I design intuitive, user-centered digital experiences through research, wireframes, prototypes, and scalable design systems. Every interface is crafted to balance usability with modern visual aesthetics.',
      headings: [
        'User Research & User Flows',
        'Wireframing & Interactive Prototypes',
        'Design Systems & Responsive UI',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
    },
    {
      title: 'Flutter App Development',
      body: 'I build high-performance cross-platform mobile applications using Flutter, delivering smooth experiences on both iOS and Android with clean, maintainable architecture.',
      headings: [
        'Cross-Platform Apps',
        'REST API Integration',
        'Scalable Flutter Architecture',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
  </svg>
  `,
    },
    {
      title: 'Backend & Cloud Development',
      body: 'I develop secure backend systems and cloud-based APIs with ASP.NET Core and Azure, ensuring reliable performance, authentication, and scalable data management.',
      headings: [
        'RESTful API Development',
        'JWT Authentication & Databases',
        'Azure Deployment & Cloud Services',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
  </svg>
  `,
    },
  ];

  onBeforeMount(() => {
    whatIDo.value = textSplitterIntoChar('What I do /', true);
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
  });

  const getStyle = (index: number) => {
    // On mobile, no sticky stacking — just regular flow with gap
    // On lg+, use sticky stacking layout
    if (index === 0) {
      return 'lg:sticky lg:top-[calc(20vh_+_0em)] lg:mb-[17.25em] mb-0';
    }
    if (index === 1) {
      return 'lg:sticky lg:top-[calc(20vh_+_5.75em)] lg:mb-[11.5em] mb-0';
    }
    if (index === 2) {
      return 'lg:sticky lg:top-[calc(20vh_+_11.5em)] lg:mb-[5.75em] mb-0';
    }
  };
</script>
