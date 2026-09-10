<template>
  <div class="SwagGetToKnow">

    <div class="SwagGetToKnow_guide">
      <!-- Steps Panel -->
      <div class="SwagGetToKnow_steps-panel">
        <span class="h-label">Shopware Setup</span>
        <h2 class="h-homepage">Start Shopware in just minutes</h2>

        <!-- Platform Tabs -->
        <div class="SwagGetToKnow_tabs" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab"
            role="tab"
            :aria-selected="activeTab === tab"
            :class="['SwagGetToKnow_tab', { '--active': activeTab === tab }]"
            @click="switchTab(tab)"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Step List -->
        <ol class="SwagGetToKnow_steps">
          <li v-for="step in currentSteps" :key="step.id" class="SwagGetToKnow_step">
            <span class="SwagGetToKnow_step-number">{{ step.number }}</span>

            <div class="SwagGetToKnow_step-body">
              <strong class="SwagGetToKnow_step-title">{{ step.title }}</strong>
              <p v-if="step.description" class="SwagGetToKnow_step-desc">{{ step.description }}</p>

              <!-- Prerequisite pills + expandable code -->
              <template v-if="step.prereqs">
                <div class="SwagGetToKnow_prereqs">
                  <template v-for="prereq in step.prereqs" :key="prereq.id">
                    <a
                      v-if="prereq.url"
                      :href="prereq.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="SwagGetToKnow_prereq-pill"
                    >{{ prereq.label }}</a>
                    <button
                      v-else
                      :class="['SwagGetToKnow_prereq-pill', { '--expanded': expandedPrereq === prereq.label }]"
                      @click="togglePrereq(prereq.label)"
                    >
                      {{ prereq.label }}
                      <svg class="SwagGetToKnow_prereq-chevron" :class="{ '--open': expandedPrereq === prereq.label }" viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </template>
                </div>

                <!-- Expandable code pane for active prereq -->
                <div v-if="activePrereq" class="border-solid border-1 border-[--sw-c-blue-vivacious] dark: rounded-lg p-4">
                  <p v-if="activePrereq.terminalHint" class="SwagGetToKnow_prereq-hint">{{ activePrereq.terminalHint }}</p>
                  <slot :name="activePrereq.id" />
                  <p class="SwagGetToKnow_manual-text" v-if="activePrereq?.manualNote">
                    {{ activePrereq.manualNote.text }}<a :href="activePrereq.manualNote.url" target="_blank" rel="noopener noreferrer">Shopware CLI Releases</a>
                  </p>
                </div>
              </template>

              <!-- Video reference step -->
              <div v-if="step.videoRef" class="SwagGetToKnow_video-ref">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                <span>Refer to the video on the right for the interactive installation walkthrough.</span>
              </div>

              <!-- Credentials info box -->
              <div v-if="step.credentials" class="SwagGetToKnow_credentials">
                <svg class="SwagGetToKnow_info-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                </svg>
                <div>
                  <strong>Login credentials</strong>
                  <span>Username: <em>admin</em></span>
                  <span>Password: <em>shopware</em></span>
                </div>
              </div>

              <!-- URL blocks (step 5) -->
              <template v-if="step.urls">
                <template v-for="url in step.urls" :key="url.label">
                  <slot :name="url.id" />
                </template>
                <!--<div v-for="url in step.urls" :key="url.label" class="SwagGetToKnow_code SwagGetToKnow_code--url">
                  <span class="SwagGetToKnow_url-label">{{ url.label }}</span>
                  <code class="SwagGetToKnow_command">{{ url.value }}</code>
                  <button
                    class="SwagGetToKnow_copy"
                    :title="copied === url.label ? 'Copied!' : 'Copy'"
                    @click="copyCommand(url.label, url.value)"
                  >
                    <span v-if="copied === url.label" class="SwagGetToKnow_copy-label">Copied!</span>
                    <svg v-else viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                      <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                      <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                    </svg>
                  </button>
                </div>-->
              </template>

              <!-- Single command block -->
              <slot v-if="step.command" :name="step.command" />

            </div>
          </li>
        </ol>
      </div>

      <!-- Video Panel -->
      <div class="SwagGetToKnow_video-panel">
        <a
          href="https://www.youtube.com/watch?v=rDwzr16q_bQ"
          target="_blank"
          rel="noopener noreferrer"
          class="SwagGetToKnow_video"
          aria-label="Watch: How to install Shopware in 2 minutes"
        >
          <img
            src="https://img.youtube.com/vi/rDwzr16q_bQ/hqdefault.jpg"
            class="SwagGetToKnow_video-thumbnail"
            alt=""
            aria-hidden="true"
          />
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
        <span class="h-label">Learn More</span>
        <h2 class="SwagGetToKnow_redirect-title">Continue with the Full CLI Guide</h2>
        <p>Follow the official Shopware documentation for detailed setup steps, configuration options, and advanced usage.</p>
      </div>
      <a href="/docs/products/tools/cli/" class="SwagGetToKnow_redirect-btn btn --primary">
        Open Docs
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Prereq {
  id: string;
  label: string;
  url?: string;
  terminalHint?: string;
  manualNote?: { text: string; url: string };
}

interface UrlEntry {
  label: string;
  id: string;
}

interface Step {
  id: string;
  number: number;
  title: string;
  description?: string;
  prereqs?: Prereq[];
  command?: string;
  videoRef?: boolean;
  credentials?: boolean;
  urls?: UrlEntry[];
}

const DOCKER_PREREQ: Prereq = {
  id: 'docker',
  label: 'Docker',
  url: 'https://docs.docker.com/get-started/introduction/get-docker-desktop/',
};

const CLI_MANUAL_NOTE = {
  text: 'Shopware CLI can be installed manually by downloading the appropriate archive for your system from the ',
  url: 'https://github.com/shopware/shopware-cli/releases',
};

const commonSteps = (prereqs: Prereq[]): Step[] => [
  {
    id: 'prereqs',
    number: 1,
    title: 'Install Prerequisites',
    description: 'Make sure you have these prerequisites installed.',
    prereqs,
  },
  {
    id: 'create',
    number: 2,
    title: 'Create Project',
    description: 'Create a new Shopware project using the CLI.',
    command: 'bash-create',
  },
  {
    id: 'video',
    number: 3,
    title: 'Interactive Installation',
    videoRef: true,
  },
  {
    id: 'start',
    number: 4,
    title: 'Start Environment',
    description: 'Enter your project directory and start the development environment. This starts Docker, runs the installer on first launch, and opens the Development TUI.',
    command: 'bash-start',
  },
  {
    id: 'running',
    number: 5,
    title: 'Access Admin and Storefront',
    description: 'Your Shopware instance is running. Open the URLs below to get started.',
    credentials: true,
    urls: [
      { id: 'url-admin', label: 'Admin' },
      { id: 'url-storefront', label: 'Storefront' },
    ],
  },
];

const windowsSteps: Step[] = commonSteps([
  DOCKER_PREREQ,
  {
    id: 'win-wsl',
    label: 'WSL',
    terminalHint: 'Open your Powershell terminal to execute the below commands:',
  },
  {
    id: 'win-cli',
    label: 'Shopware CLI',
    terminalHint: 'Open your Powershell terminal to execute the below commands:',
    manualNote: CLI_MANUAL_NOTE,
  },
]);

const macSteps: Step[] = commonSteps([
  DOCKER_PREREQ,
  {
    id: 'mac-brew',
    label: 'Homebrew',
    terminalHint: 'Open your terminal to execute the below command',
  },
  {
    id: 'mac-cli',
    label: 'Shopware CLI',
    terminalHint: 'Open your terminal to execute the below command',
    manualNote: CLI_MANUAL_NOTE,
  },
]);

const linuxSteps: Step[] = commonSteps([
  DOCKER_PREREQ,
  {
    id: 'lnx-cli',
    label: 'Shopware CLI',
    terminalHint: 'Open your terminal to execute the below commands',
    manualNote: CLI_MANUAL_NOTE,
  },
]);

const tabs = ['Mac', 'Linux', 'Windows'] as const;
const activeTab = ref<typeof tabs[number]>('Mac');
const expandedPrereq = ref<string | null>(null);

const currentSteps = computed<Step[]>(() => {
  if (activeTab.value === 'Mac')     return macSteps;
  if (activeTab.value === 'Linux')   return linuxSteps;
  return windowsSteps;
});

const activePrereq = computed<Prereq | null>(() => {
  if (!expandedPrereq.value) return null;
  const prereqStep = currentSteps.value.find(s => s.prereqs);
  return prereqStep?.prereqs?.find(p => p.label === expandedPrereq.value) ?? null;
});

function switchTab(tab: typeof tabs[number]) {
  activeTab.value = tab;
  // expandedPrereq.value = null;
}

function togglePrereq(label: string) {
  expandedPrereq.value = expandedPrereq.value === label ? null : label;
}
</script>

<style lang="scss">
.SwagGetToKnow {
  .vp-doc & div[class*='language-'] {
    @apply my-0;
    max-width: 100%;
    overflow-x: auto;
  }

  &_guide {
    @apply grid gap-10;
    align-items: start;

    @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &_steps-panel {
    min-width: 0;
    overflow: hidden;
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
    transition: opacity 0.2s;
  }

  &_step-number {
    @apply flex items-center justify-center rounded-full text-sm font-semibold shrink-0;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--sw-c-blue-vivacious);
    color: var(--sw-c-blue-vivacious);
    background-color: transparent;
    margin-top: 2px;
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

  &_prereq-hint {
    @apply text-sm italic;
    color: var(--c-text-light);
  }

  &_manual-text {
    @apply text-xs;
    color: var(--c-text-light);
    margin: 0;

    a {
      color: var(--sw-c-blue-vivacious);
      text-decoration: underline;

      &:hover { opacity: 0.8; }
    }
  }

  /* ── Prerequisite pills ───────────────── */
  &_prereqs {
    @apply flex flex-wrap gap-2 mt-1;
  }

  &_prereq-pill {
    @apply inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-md transition-all cursor-pointer;
    border: 1px solid var(--sw-c-blue-dark-200);
    color: var(--c-text);
    background-color: transparent;
    text-decoration: none;

    &:hover,
    &.--expanded {
      border-color: var(--sw-c-blue-vivacious);
      color: var(--sw-c-blue-vivacious);
      background-color: var(--sw-c-blue-dark-50);
    }

    .dark & {
      border-color: var(--sw-c-gray-dark-600);
      color: var(--sw-c-gray-200);

      &:hover,
      &.--expanded {
        border-color: var(--sw-c-blue-vivacious);
        color: var(--sw-c-blue-vivacious);
        background-color: transparent;
      }
    }
  }

  &_prereq-chevron {
    @apply transition-transform;

    &.--open {
      transform: rotate(180deg);
    }
  }

  /* ── Prereq expandable code pane ─────── */
  &_code--prereq {
    @apply mt-1 mb-1 items-start;
  }

  &_command--multi {
    @apply text-sm font-mono whitespace-pre;
    color: var(--c-text);
    background: none;
    border: none;
    padding: 0;
    flex: 1;
    min-width: 0;
    overflow-x: auto;

    .dark & {
      color: var(--sw-c-gray-200);
    }
  }

  &_copy--top {
    @apply self-start mt-0.5;
  }

  /* ── Video reference ──────────────────── */
  &_video-ref {
    @apply flex items-center gap-2 text-sm rounded-md px-4 py-2.5;
    background-color: var(--sw-c-blue-dark-50);
    border: 1px solid var(--sw-c-blue-dark-100);
    color: var(--sw-c-blue-vivacious);

    .dark & {
      background-color: var(--sw-c-gray-dark-700);
      border-color: var(--sw-c-gray-dark-600);
      color: var(--sw-c-blue-vivacious);
    }

    svg {
      @apply shrink-0;
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

  /* ── Code block ───────────────────────── */
  &_code {
    @apply flex items-center justify-between rounded-md px-4 py-2.5;
    background-color: var(--sw-c-blue-dark-50);
    border: 1px solid var(--sw-c-blue-dark-100);

    .dark & {
      background-color: var(--sw-c-gray-dark-700);
      border-color: var(--sw-c-gray-dark-600);
    }
  }

  &_code--url {
    @apply gap-3;
  }

  &_url-label {
    @apply text-xs font-semibold shrink-0 px-1.5 py-0.5 rounded;
    background-color: var(--sw-c-blue-dark-100);
    color: var(--sw-c-blue-vivacious);

    .dark & {
      background-color: var(--sw-c-gray-dark-600);
    }
  }

  &_command {
    @apply text-sm font-mono truncate flex-1;
    color: var(--c-text);
    background: none;
    border: none;
    padding: 0;

    .dark & {
      color: var(--sw-c-gray-200);
    }
  }

  &_copy {
    @apply shrink-0 ml-3 cursor-pointer flex items-center;
    background: none;
    border: none;
    padding: 0;
    color: var(--c-text-light);

    &:hover {
      color: var(--sw-c-blue-vivacious);
    }
  }

  &_copy-label {
    @apply text-xs font-medium;
    color: var(--sw-c-blue-vivacious);
  }

  /* ── Video panel ──────────────────────── */
  &_video-panel {
    @media (min-width: 960px) {
      position: sticky;
      top: calc(var(--vp-nav-height) + 1.5rem);
    }
  }

  &_video-thumbnail {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

      p { margin: 0; }
    }
  }

  /* ── Redirect banner ──────────────────── */
  &_redirect {
    @apply flex flex-col md:flex-row items-center justify-between gap-6 mt-8;

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
