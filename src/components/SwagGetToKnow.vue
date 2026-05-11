<template>
  <div class="SwagGetToKnow">

    <!-- Guide: Steps (left) + Video (right) -->
    <div class="SwagGetToKnow_guide">
      <!-- Steps Panel -->
      <div class="SwagGetToKnow_steps-panel">
        <span class="h-label">Shopware Setup</span>
        <h2 class="h-homepage">Start Shopware in 2 minutes</h2>

        <!-- Platform Tabs -->
        <div class="SwagGetToKnow_tabs" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab"
            role="tab"
            :aria-selected="activeTab === tab"
            :class="['SwagGetToKnow_tab', { '--active': activeTab === tab }]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Step List -->
        <ol class="SwagGetToKnow_steps">
          <li v-for="step in steps" :key="step.id" class="SwagGetToKnow_step">
            <span class="SwagGetToKnow_step-number">{{ step.number }}</span>

            <div class="SwagGetToKnow_step-body">
              <strong class="SwagGetToKnow_step-title">{{ step.title }}</strong>
              <p v-if="step.description" class="SwagGetToKnow_step-desc">{{ step.description }}</p>

              <!-- Prerequisite pills -->
              <div v-if="step.prereqs" class="SwagGetToKnow_prereqs">
                <component
                  :is="prereq.url ? 'a' : 'span'"
                  v-for="prereq in currentPrereqs"
                  :key="prereq.label"
                  :href="prereq.url ?? undefined"
                  :target="prereq.url ? '_blank' : undefined"
                  :rel="prereq.url ? 'noopener noreferrer' : undefined"
                  class="SwagGetToKnow_prereq-pill"
                >{{ prereq.label }}</component>
              </div>

              <!-- Credentials info box -->
              <div v-if="step.credentials" class="SwagGetToKnow_credentials">
                <svg class="SwagGetToKnow_info-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                </svg>
                <div>
                  <strong>Login credentials</strong>
                  <span>Username: admin</span>
                  <span>Password: password</span>
                </div>
              </div>

              <!-- Command block -->
              <slot v-if="step.command" :name="step.command" />
            </div>
          </li>
        </ol>
      </div>

      <!-- Video Panel -->
      <div class="SwagGetToKnow_video-panel">
        <a
          href="https://www.youtube.com/watch?v=dg1eRkJFpFo"
          target="_blank"
          rel="noopener noreferrer"
          class="SwagGetToKnow_video"
          aria-label="Watch: How to install Shopware in 2 minutes"
        >
          <div class="SwagGetToKnow_video-play">
            <svg viewBox="0 0 24 24" fill="currentColor" width="52" height="52" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div class="SwagGetToKnow_video-caption">
            <p>How to install</p>
            <p>Shopware in 2 minutes</p>
          </div>
        </a>
      </div>

    </div>

    <!-- Redirect Banner -->
    <div class="SwagGetToKnow_redirect HomepageCard_item">
      <div class="SwagGetToKnow_redirect-content">
        <span class="h-label">Tag or topic</span>
        <h2 class="SwagGetToKnow_redirect-title">Redirect headline</h2>
        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
      </div>
      <a href="/docs/guides/installation/" class="SwagGetToKnow_redirect-btn btn --primary">
        Button
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  prereqs?: boolean;
  command?: string;
  credentials?: boolean;
}

const tabs = ['Windows', 'Linux', 'Mac'] as const;
const activeTab = ref<typeof tabs[number]>('Windows');
const copied = ref<string | null>(null);

interface Prereq {
  label: string;
  url?: string;
}

const dockerPrereq: Prereq[] = [{ label: 'Docker', url: 'https://docs.docker.com/get-started/introduction/get-docker-desktop/' }];

const windowsPrereqs = dockerPrereq;
const linuxPrereqs   = dockerPrereq;
const macPrereqs     = dockerPrereq;

const currentPrereqs = computed(() => {
  if (activeTab.value === 'Windows') return windowsPrereqs;
  if (activeTab.value === 'Linux')   return linuxPrereqs;
  return macPrereqs;
});

const steps: Step[] = [
  {
    id: 'prereqs',
    number: 1,
    title: 'Install pre-requisites',
    description: 'Make sure you have these pre-requisites installed',
    prereqs: true,
  },
  {
    id: 'create',
    number: 2,
    title: 'Create project',
    description: 'To create a new project, run this command in the terminal',
    command: 'bash-1',
  },
  {
    id: 'start',
    number: 3,
    title: 'Start Environment',
    description: 'Run this command to enter your project and start the local environment',
    command: 'bash-2',
  },
  {
    id: 'setup',
    number: 4,
    title: 'Set-up Shopware',
    description: 'Install Shopware and set up the database for your local environment',
    command: 'bash-3',
  },
  {
    id: 'running',
    number: 5,
    title: 'Your Shopware instance is running',
    description: 'Open the admin panel to start managing your store.',
    credentials: true,
    command: 'bash-4',
  },
];
</script>

<style lang="scss">
.SwagGetToKnow {
  .vp-doc & div[class*='language-'] {
    @apply my-0;
  }

  &_guide {
    @apply grid gap-10;
    align-items: start;

    @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* ── Tabs ─────────────────────────────── */
  &_tabs {
    @apply flex gap-1 rounded-lg p-1 mb-6 w-fit;
    background-color: var(--sw-c-blue-dark-50);

    .dark & {
      background-color: var(--sw-c-gray-dark-700);
    }
  }

  &_tab {
    @apply px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer;
    color: var(--c-text);
    border: none;
    background: transparent;

    &.--active {
      @apply bg-white shadow-sm;
      color: var(--sw-c-blue-vivacious);

      .dark & {
        background-color: var(--sw-c-gray-dark-500);
      }
    }

    &:not(.--active):hover {
      background-color: var(--sw-c-blue-dark-100);

      .dark & {
        background-color: var(--sw-c-gray-dark-600);
      }
    }
  }

  /* ── Steps ────────────────────────────── */
  &_steps {
    @apply flex flex-col gap-6 list-none p-0 m-0;
  }

  &_step {
    @apply flex gap-4 items-start;
  }

  &_step-number {
    @apply flex items-center justify-center rounded-full text-sm font-semibold shrink-0;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--sw-c-blue-vivacious);
    color: var(--sw-c-blue-vivacious);
    background-color: transparent;

    .dark & {
      background-color: transparent;
    }
  }

  &_step-body {
    @apply flex flex-col gap-2 flex-1 min-w-0;
    padding-top: 0.2rem;
  }

  &_step-title {
    @apply text-base font-bold leading-tight;
    color: var(--c-text);
  }

  &_step-desc {
    @apply text-sm;
    color: var(--c-text-light);
    margin: 0;
  }

  /* ── Prerequisite pills ───────────────── */
  &_prereqs {
    @apply flex flex-wrap gap-2 mt-1;
  }

  &_prereq-pill {
    @apply text-sm px-3 py-1 rounded-md transition-colors;
    border: 1px solid var(--sw-c-blue-dark-200);
    color: var(--c-text);
    background-color: transparent;
    text-decoration: none;

    &[href]:hover {
      border-color: var(--sw-c-blue-vivacious);
      color: var(--sw-c-blue-vivacious);
      background-color: var(--sw-c-blue-dark-50);
    }

    .dark & {
      border-color: var(--sw-c-gray-dark-600);
      color: var(--sw-c-gray-200);

      &[href]:hover {
        border-color: var(--sw-c-blue-vivacious);
        color: var(--sw-c-blue-vivacious);
        background-color: transparent;
      }
    }
  }

  /* ── Credentials box ──────────────────── */
  &_credentials {
    @apply flex gap-2 items-start rounded-md px-3 py-2;
    background-color: var(--sw-c-blue-dark-100);
    border: 1px solid var(--sw-c-blue-dark-200);

    .dark & {
      background-color: var(--sw-c-gray-dark-700);
      border-color: var(--sw-c-gray-dark-600);
    }

    strong {
      @apply block text-sm font-semibold mb-0.5;
      color: var(--c-text);
    }

    span {
      @apply block text-sm;
      color: var(--c-text-light);
    }
  }

  &_info-icon {
    @apply shrink-0 mt-0.5;
    width: 1rem;
    height: 1rem;
    color: var(--sw-c-blue-vivacious);
  }

  /* ── Video panel ──────────────────────── */
  &_video-panel {
    @media (min-width: 960px) {
      position: sticky;
      top: calc(var(--vp-nav-height) + 1.5rem);
    }
  }

  &_video {
    @apply block rounded-xl overflow-hidden relative no-underline;
    aspect-ratio: 16 / 9;
    background: linear-gradient(135deg, #cce7ff 0%, #e8f4ff 100%);
    border: 1px solid var(--sw-c-blue-dark-200);

    .dark & {
      background: linear-gradient(135deg, #1a2840 0%, #0d1a2e 100%);
      border-color: var(--sw-c-gray-dark-600);
    }

    &-play {
      @apply absolute inset-0 flex items-center justify-center transition-opacity;
      color: var(--sw-c-blue-vivacious);
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:hover &-play {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &-caption {
      @apply absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10 font-semibold text-lg leading-tight;
      color: var(--sw-c-blue-vivacious);
      background: linear-gradient(to top, rgba(255, 255, 255, 0.85) 60%, transparent);

      .dark & {
        background: linear-gradient(to top, rgba(10, 15, 30, 0.85) 60%, transparent);
      }

      p {
        margin: 0;
      }
    }
  }

  /* ── Redirect banner ──────────────────── */
  &_redirect {
    @apply flex flex-wrap items-center justify-between gap-6 mt-8;

    &-content {
      @apply flex flex-col gap-1 flex-1 min-w-0;

      p {
        @apply text-sm mt-1 mb-0;
        color: var(--c-text-light);
      }
    }

    &-title {
      @apply text-2xl font-bold m-0;
      color: var(--c-text);
    }

    &-btn {
      @apply shrink-0;
    }
  }
}
</style>
