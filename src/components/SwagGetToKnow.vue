<template>
  <div class="SwagGetToKnow">

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
                      v-if="prereq.url && !prereq.codeBlocks"
                      :href="prereq.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="SwagGetToKnow_prereq-pill"
                    >{{ prereq.label }}</a>
                    <button
                      v-else
                      :class="['SwagGetToKnow_prereq-pill', { '--expanded': expandedPrereq === prereq.id }]"
                      @click="togglePrereq(prereq.id)"
                    >
                      {{ prereq.label }}
                      <svg class="SwagGetToKnow_prereq-chevron" :class="{ '--open': expandedPrereq === prereq.id }" viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </template>
                </div>

                <!-- Expandable code pane for active prereq -->
                <template v-if="activePrereq">
                  <div
                    v-for="(block, i) in activePrereq.codeBlocks"
                    :key="i"
                    class="SwagGetToKnow_code SwagGetToKnow_code--prereq"
                  >
                    <pre class="SwagGetToKnow_command SwagGetToKnow_command--multi">{{ block }}</pre>
                    <button
                      class="SwagGetToKnow_copy SwagGetToKnow_copy--top"
                      :title="copied === `${activePrereq.id}-${i}` ? 'Copied!' : 'Copy'"
                      @click="copyCommand(`${activePrereq.id}-${i}`, block)"
                    >
                      <span v-if="copied === `${activePrereq.id}-${i}`" class="SwagGetToKnow_copy-label">Copied!</span>
                      <svg v-else viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                        <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                        <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                      </svg>
                    </button>
                  </div>
                </template>
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
                  <span>Username: admin</span>
                  <span>Password: password</span>
                </div>
              </div>

              <!-- URL blocks (step 6) -->
              <template v-if="step.urls">
                <div v-for="url in step.urls" :key="url.label" class="SwagGetToKnow_code SwagGetToKnow_code--url">
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
                </div>
              </template>

              <!-- Single command block -->
              <div v-if="step.command" class="SwagGetToKnow_code">
                <code class="SwagGetToKnow_command">{{ step.command }}</code>
                <button
                  class="SwagGetToKnow_copy"
                  :title="copied === step.id ? 'Copied!' : 'Copy'"
                  @click="copyCommand(step.id, step.command)"
                >
                  <span v-if="copied === step.id" class="SwagGetToKnow_copy-label">Copied!</span>
                  <svg v-else viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                    <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                  </svg>
                </button>
              </div>

            </div>
          </li>
        </ol>
      </div>

      <!-- Video Panel -->
      <div class="SwagGetToKnow_video-panel">
        <a
          href="https://shopwareag-my.sharepoint.com/:v:/r/personal/s_gupta_shopware_com/Documents/shopware-cli.mov?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ZYOm5t"
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
        <span class="h-label">Learn More</span>
        <h2 class="SwagGetToKnow_redirect-title">Continue with the Full CLI Guide</h2>
        <p>Follow the official Shopware documentation for detailed setup steps, configuration options, and advanced usage.</p>
      </div>
      <a href="https://developer.shopware.com/docs/products/cli/" class="SwagGetToKnow_redirect-btn btn --primary">
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
  codeBlocks?: string[];
}

interface UrlEntry {
  label: string;
  value: string;
}

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
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

const commonSteps = (prereqs: Prereq[]): Step[] => [
  {
    id: 'prereqs',
    number: 1,
    title: 'Install pre-requisites',
    description: 'Make sure you have these pre-requisites installed',
    prereqs,
  },
  {
    id: 'create',
    number: 2,
    title: 'Create project',
    description: 'Create a new Shopware project using the CLI',
    command: 'shopware-cli project create myshop',
  },
  {
    id: 'video',
    number: 3,
    title: 'Interactive installation',
    description: 'Follow the video guide for the interactive Shopware installation setup.',
    videoRef: true,
  },
  {
    id: 'start',
    number: 4,
    title: 'Start Environment',
    description: 'Enter your project directory and start the local environment',
    command: 'cd myshop && make up',
  },
  {
    id: 'setup',
    number: 5,
    title: 'Set-up Shopware',
    description: 'Install Shopware and set up the database for your local environment',
    command: 'bash-3',
  },
  {
    id: 'running',
    number: 6,
    title: 'Access admin & storefront',
    description: 'Your Shopware instance is running. Open the URLs below to get started.',
    credentials: true,
    urls: [
      { label: 'Admin', value: 'http://localhost:8080/admin' },
      { label: 'Storefront', value: 'http://localhost:8080' },
    ],
  },
];

const windowsSteps: Step[] = commonSteps([
  DOCKER_PREREQ,
  {
    id: 'win-cli',
    label: 'Shopware CLI',
    codeBlocks: [
      'wsl\ncd ~\nmkdir project && cd project\nsudo apt update\nsudo apt install -y curl ca-certificates bash',
      'curl -s https://shopware-cli.shopware.com/install.sh | bash',
    ],
  },
]);

const macSteps: Step[] = commonSteps([
  DOCKER_PREREQ,
  {
    id: 'mac-brew',
    label: 'Homebrew',
    codeBlocks: [
      '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    ],
  },
  {
    id: 'mac-cli',
    label: 'Shopware CLI',
    codeBlocks: [
      'brew install --cask shopware/tap/shopware-cli',
    ],
  },
]);

const linuxSteps: Step[] = commonSteps([
  DOCKER_PREREQ,
  {
    id: 'lnx-cli',
    label: 'Shopware CLI',
    codeBlocks: [
      'brew install --cask shopware/tap/shopware-cli',
    ],
  },
]);

const tabs = ['Windows', 'Linux', 'Mac'] as const;
const activeTab = ref<typeof tabs[number]>('Windows');
const expandedPrereq = ref<string | null>(null);
const copied = ref<string | null>(null);

const currentSteps = computed<Step[]>(() => {
  if (activeTab.value === 'Windows') return windowsSteps;
  if (activeTab.value === 'Linux')   return linuxSteps;
  return macSteps;
});

const activePrereq = computed<Prereq | null>(() => {
  if (!expandedPrereq.value) return null;
  const prereqStep = currentSteps.value.find(s => s.prereqs);
  return prereqStep?.prereqs?.find(p => p.id === expandedPrereq.value) ?? null;
});

function switchTab(tab: typeof tabs[number]) {
  activeTab.value = tab;
  expandedPrereq.value = null;
  copied.value = null;
}

function togglePrereq(id: string) {
  expandedPrereq.value = expandedPrereq.value === id ? null : id;
}

async function copyCommand(id: string, command: string) {
  try {
    await navigator.clipboard.writeText(command);
    copied.value = id;
    setTimeout(() => { copied.value = null; }, 2000);
  } catch {
    // clipboard API unavailable
  }
}
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
