<template>
  <section id="skills" class="padding-x my-20 lg:my-32">
    <!-- Header Section -->
    <div class="flex w-full flex-col">
      <div class="flex items-center gap-3">
        <span class="bg-flax-smoke-400 animate-pulse h-2.5 w-2.5 rounded-full"></span>
        <span class="text-flax-smoke-300/80 font-mono text-xs tracking-widest uppercase">Technical Ecosystem</span>
      </div>

      <h3
        id="skills-title"
        v-html="skillsTitle"
        class="heading-1 font-extrabold uppercase mt-2"
      ></h3>

      <div
        id="skills-text"
        class="grid-gap text-flax-smoke-300 mt-6 grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 col-start-0 text-center text-nowrap md:col-start-4"
        >
          ( EXPERTISE )
        </p>
        <div class="col-span-8 w-full md:col-span-6">
          <p class="heading-4 font-fancy font-bold bg-gradient-to-r from-flax-smoke-50 via-flax-smoke-200 to-flax-smoke-400 bg-clip-text text-transparent">
            UI/UX Designer + Full-Stack Developer
          </p>
          <p class="text-flax-smoke-200/80 mt-2 text-base font-normal leading-relaxed">
            Combining user-first interface design with scalable cross-platform mobile apps, cloud systems, AI workflows, and knowledge representation.
          </p>
        </div>
      </div>
    </div>

    <!-- Filter Category Bar (Modern Interactive Tabs) -->
    <div class="mt-12 flex flex-wrap items-center gap-2.5 border-b border-flax-smoke-500/20 pb-6">
      <button
        v-for="tab in filterTabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          activeTab === tab.id
            ? 'bg-flax-smoke-500 text-flax-smoke-50 border-flax-smoke-400 shadow-[0_0_20px_rgba(155,107,215,0.4)]'
            : 'bg-flax-smoke-950/60 text-flax-smoke-300/80 border-flax-smoke-500/20 hover:border-flax-smoke-400/50 hover:text-flax-smoke-100 hover:bg-flax-smoke-900/60',
          'group relative flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none'
        ]"
      >
        <span class="text-sm">{{ tab.icon }}</span>
        <span>{{ tab.label }}</span>
        <span
          v-if="tab.count"
          :class="[
            activeTab === tab.id ? 'bg-flax-smoke-950/60 text-flax-smoke-100' : 'bg-flax-smoke-900 text-flax-smoke-400',
            'ml-1 rounded-full px-2 py-0.5 text-[10px] font-mono font-bold'
          ]"
        >
          {{ tab.count }}
        </span>
      </button>
    </div>

    <!-- Featured Identity Hero Bento Card -->
    <div class="mt-8 overflow-hidden rounded-3xl border border-flax-smoke-500/30 bg-gradient-to-br from-[#2a0e4a]/80 via-[#1b0731] to-[#120422] p-8 md:p-10 shadow-2xl relative">
      <!-- Glow background decoration -->
      <div class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-flax-smoke-500/20 blur-3xl"></div>
      <div class="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-flax-smoke-700/20 blur-3xl"></div>

      <div class="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 rounded-full border border-flax-smoke-400/40 bg-flax-smoke-900/80 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-flax-smoke-200">
            <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            Primary Discipline & Capabilities
          </div>
          <h4 class="mt-4 font-fancy text-3xl font-extrabold text-flax-smoke-50 md:text-4xl leading-tight">
            Designing Intuitive UIs, Building High-Performance Apps & AI Systems
          </h4>
          <p class="mt-3 text-flax-smoke-200/90 text-sm md:text-base leading-relaxed max-w-2xl">
            Specializing in end-to-end product engineering — from high-fidelity Figma design systems and responsive web/mobile UIs (Flutter, React, Next.js) to cloud APIs (ASP.NET Core, Azure), AI integrations, and Big Data knowledge pipelines.
          </p>
        </div>

        <div class="lg:col-span-5 flex flex-wrap gap-2.5 lg:justify-end">
          <div
            v-for="core in topHighlights"
            :key="core.title"
            class="flex items-center gap-2.5 rounded-xl border border-flax-smoke-400/30 bg-flax-smoke-950/70 px-4 py-2.5 text-xs font-semibold text-flax-smoke-100 backdrop-blur-md transition-all duration-300 hover:border-flax-smoke-300 hover:scale-105 hover:bg-flax-smoke-800/80 shadow-md"
          >
            <span class="text-base">{{ core.icon }}</span>
            <div class="flex flex-col">
              <span class="font-bold text-flax-smoke-50">{{ core.title }}</span>
              <span class="text-[10px] text-flax-smoke-300/80 font-mono">{{ core.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bento Grid Category Cards -->
    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="cat in filteredCategories"
        :key="cat.id"
        class="group relative flex flex-col justify-between rounded-3xl border border-flax-smoke-500/25 bg-gradient-to-b from-[#230a40]/70 via-[#1b0731]/80 to-[#140526]/90 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-flax-smoke-400/50 hover:shadow-[0_12px_35px_rgba(129,69,200,0.25)]"
      >
        <!-- Card Top Bar -->
        <div>
          <div class="flex items-center justify-between border-b border-flax-smoke-500/20 pb-4">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-flax-smoke-800/60 text-lg border border-flax-smoke-500/30 group-hover:border-flax-smoke-400 group-hover:bg-flax-smoke-600 transition-colors duration-300">
                {{ cat.icon }}
              </div>
              <div>
                <h5 class="font-fancy text-lg font-bold text-flax-smoke-50 group-hover:text-flax-smoke-200 transition-colors">
                  {{ cat.name }}
                </h5>
                <span class="text-[11px] font-mono text-flax-smoke-300/60 uppercase tracking-wider">
                  {{ cat.subtitle }}
                </span>
              </div>
            </div>
            <span class="font-mono text-xs font-bold text-flax-smoke-400/70 bg-flax-smoke-950/80 px-2.5 py-1 rounded-full border border-flax-smoke-500/20">
              0{{ cat.id }}
            </span>
          </div>

          <!-- Skills Badges List -->
          <div class="mt-6 flex flex-wrap gap-2">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              :class="[
                skill.highlight
                  ? 'border-flax-smoke-400/60 bg-flax-smoke-800/90 text-flax-smoke-50 shadow-[0_0_12px_rgba(155,107,215,0.3)]'
                  : 'border-flax-smoke-500/20 bg-flax-smoke-950/70 text-flax-smoke-200 hover:border-flax-smoke-400/60 hover:text-flax-smoke-50 hover:bg-flax-smoke-900',
                'group/item flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-200 hover:scale-[1.03]'
              ]"
            >
              <span
                :class="[
                  skill.highlight ? 'bg-flax-smoke-200' : 'bg-flax-smoke-400/50 group-hover/item:bg-flax-smoke-300',
                  'h-1.5 w-1.5 rounded-full transition-colors'
                ]"
              ></span>
              <span>{{ skill.name }}</span>
              <span
                v-if="skill.highlight"
                class="ml-0.5 rounded-full bg-flax-smoke-500 px-1.5 py-0.2 text-[9px] font-extrabold uppercase text-flax-smoke-50"
              >
                CORE
              </span>
            </div>
          </div>
        </div>

        <!-- Footer indicator -->
        <div class="mt-8 flex items-center justify-between border-t border-flax-smoke-500/15 pt-4 text-[11px] font-mono text-flax-smoke-300/60">
          <span>{{ cat.skills.length }} Technologies</span>
          <span class="group-hover:text-flax-smoke-300 transition-colors">Verified Capability &rarr;</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref } from 'vue';

  const skillsTitle = ref('Skills & Expertise /');
  const activeTab = ref('all');

  const filterTabs = [
    { id: 'all', label: 'All Stack', icon: '✨', count: 48 },
    { id: 'design', label: 'UI/UX Design', icon: '🎨', count: 7 },
    { id: 'frontend', label: 'Frontend & Mobile', icon: '⚡', count: 7 },
    { id: 'backend', label: 'Backend & DB', icon: '⚙️', count: 11 },
    { id: 'cloud', label: 'Cloud & AI', icon: '☁️', count: 9 },
    { id: 'data', label: 'Data & Knowledge', icon: '🧠', count: 12 },
    { id: 'tools', label: 'Tools', icon: '🛠️', count: 6 },
  ];

  const topHighlights = [
    { title: 'UI/UX Design', subtitle: 'Figma & Design Systems', icon: '🎨' },
    { title: 'Flutter / Dart', subtitle: 'Cross-Platform Mobile', icon: '📱' },
    { title: 'React / TypeScript', subtitle: 'Modern Web Apps', icon: '⚛️' },
    { title: 'C# / .NET Core', subtitle: 'REST APIs & Backend', icon: '⚙️' },
    { title: 'Microsoft Azure', subtitle: 'Cloud & App Services', icon: '☁️' },
    { title: 'AI & Machine Learning', subtitle: 'Azure OpenAI & APIs', icon: '🤖' },
  ];

  const categories = [
    {
      id: 1,
      tabId: 'design',
      name: 'UI/UX Design',
      subtitle: 'User Experience & Visual Interface',
      icon: '🎨',
      skills: [
        { name: 'UI/UX Design', highlight: true },
        { name: 'Figma', highlight: true },
        { name: 'Wireframing', highlight: false },
        { name: 'Prototyping', highlight: false },
        { name: 'Design Systems', highlight: true },
        { name: 'User Flows', highlight: false },
        { name: 'Responsive Design', highlight: false },
      ],
    },
    {
      id: 2,
      tabId: 'frontend',
      name: 'Frontend & Mobile',
      subtitle: 'Cross-Platform & Web Interfaces',
      icon: '⚡',
      skills: [
        { name: 'Flutter', highlight: true },
        { name: 'Dart', highlight: true },
        { name: 'Riverpod', highlight: false },
        { name: 'React', highlight: true },
        { name: 'Next.js', highlight: false },
        { name: 'TypeScript', highlight: true },
        { name: 'Tailwind CSS', highlight: false },
      ],
    },
    {
      id: 3,
      tabId: 'backend',
      name: 'Backend & Databases',
      subtitle: 'APIs, Auth & Data Persistence',
      icon: '⚙️',
      skills: [
        { name: 'C#', highlight: true },
        { name: 'ASP.NET Core', highlight: true },
        { name: '.NET Web API', highlight: false },
        { name: 'REST APIs', highlight: false },
        { name: 'JWT Auth', highlight: false },
        { name: 'Role-Based Auth', highlight: false },
        { name: 'Entity Framework Core', highlight: false },
        { name: 'Swagger / OpenAPI', highlight: false },
        { name: 'PostgreSQL', highlight: false },
        { name: 'MySQL', highlight: false },
        { name: 'Azure SQL', highlight: false },
      ],
    },
    {
      id: 4,
      tabId: 'cloud',
      name: 'Cloud & AI Engineering',
      subtitle: 'Azure Infrastructure & OpenAI',
      icon: '☁️',
      skills: [
        { name: 'Microsoft Azure', highlight: true },
        { name: 'Azure App Service', highlight: false },
        { name: 'Azure Blob Storage', highlight: false },
        { name: 'Azure Key Vault', highlight: false },
        { name: 'Azure Managed Redis', highlight: false },
        { name: 'Azure AI', highlight: false },
        { name: 'Azure OpenAI', highlight: true },
        { name: 'Machine Learning', highlight: true },
        { name: 'AI API Integration', highlight: false },
      ],
    },
    {
      id: 5,
      tabId: 'data',
      name: 'Data & Knowledge Engineering',
      subtitle: 'Big Data & Knowledge Graphs',
      icon: '🧠',
      skills: [
        { name: 'Python', highlight: true },
        { name: 'Hadoop', highlight: false },
        { name: 'HDFS', highlight: false },
        { name: 'Hive', highlight: false },
        { name: 'Apache Spark', highlight: false },
        { name: 'Zeppelin', highlight: false },
        { name: 'Protégé', highlight: false },
        { name: 'OWL', highlight: false },
        { name: 'SWRL', highlight: false },
        { name: 'SPARQL', highlight: false },
        { name: 'Knowledge Representation', highlight: false },
        { name: 'Ontology Engineering', highlight: false },
      ],
    },
    {
      id: 6,
      tabId: 'tools',
      name: 'Tools & Ecosystem',
      subtitle: 'Developer Workflow & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', highlight: true },
        { name: 'GitHub', highlight: false },
        { name: 'Docker', highlight: true },
        { name: 'Postman', highlight: false },
        { name: 'VS Code', highlight: false },
        { name: 'Swagger', highlight: false },
      ],
    },
  ];

  const filteredCategories = computed(() => {
    if (activeTab.value === 'all') return categories;
    return categories.filter((cat) => cat.tabId === activeTab.value);
  });

  onBeforeMount(() => {
    skillsTitle.value = textSplitterIntoChar('Skills & Expertise /', true);
  });

  onMounted(() => {
    animateSplitText('#skills-title .letters', '#skills-text', 0.7, 0.01, 0);
  });
</script>
