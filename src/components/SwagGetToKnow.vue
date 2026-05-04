<template>
  <div class="SwagGetToKnow">

    <!-- Guide: Steps (left) + Video (right) -->
    <div class="SwagGetToKnow_guide">

      <!-- Steps Panel -->
      <div class="SwagGetToKnow_steps-panel">
        <span class="h-label">Installation guide</span>
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
          <li v-for="step in currentSteps" :key="step.id" class="SwagGetToKnow_step">
            <div class="SwagGetToKnow_step-header">
              <span class="SwagGetToKnow_step-number">{{ step.number }}</span>
              <strong class="SwagGetToKnow_step-title">{{ step.title }}</strong>
            </div>
            <p v-if="step.description" class="SwagGetToKnow_step-desc">{{ step.description }}</p>

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
        <span class="h-label">Installation guide</span>
        <h2 class="SwagGetToKnow_redirect-title">Explore the full installation guide</h2>
        <p>Dive deeper into setup options, advanced configurations, Docker alternatives, and system requirements for every environment.</p>
      </div>
      <a href="/docs/guides/installation/" class="SwagGetToKnow_redirect-btn btn --primary">
        Get started
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
  command?: string;
  credentials?: boolean;
}

const tabs = ['Windows', 'Linux', 'Mac'] as const;
const activeTab = ref<typeof tabs[number]>('Windows');
const copied = ref<string | null>(null);

const windowsSteps: Step[] = [
  {
    id: 'win-1',
    number: 1,
    title: 'Enable WSL2',
    description: 'Open PowerShell as Administrator and enable the Windows Subsystem for Linux.',
    command: 'wsl --install',
  },
  {
    id: 'win-2',
    number: 2,
    title: 'Install Docker Desktop',
    description: 'Download Docker Desktop for Windows, install it, and make sure it is running.',
    command: 'winget install --id Docker.DockerDesktop',
  },
  {
    id: 'win-3',
    number: 3,
    title: 'Install Shopware CLI',
    description: 'Inside your WSL2 terminal, install the Shopware CLI via the package repository.',
    command: 'curl -1sLf https://dl.cloudsmith.io/public/shopware/shopware-cli/setup.deb.sh | sudo bash && sudo apt install -y shopware-cli',
  },
  {
    id: 'win-create',
    number: 4,
    title: 'Create project',
    description: 'To create a new project, run this command in the terminal.',
    command: 'shopware-cli project create my-shop',
  },
  {
    id: 'win-start',
    number: 5,
    title: 'Start environment',
    description: 'Run this command to enter your project and start the local environment.',
    command: 'cd my-shop && make up',
  },
  {
    id: 'win-setup',
    number: 6,
    title: 'Set up Shopware',
    description: 'Install Shopware and set up the database for your local environment.',
    command: 'make setup',
  },
  {
    id: 'win-running',
    number: 7,
    title: 'Your Shopware instance is running',
    description: 'Open the admin panel to start managing your store.',
    credentials: true,
    command: 'http://localhost:8080/admin',
  },
];

const linuxSteps: Step[] = [
  {
    id: 'lnx-1',
    number: 1,
    title: 'Install Shopware CLI',
    description: 'Install the Shopware CLI via the official package repository.',
    command: 'curl -1sLf https://dl.cloudsmith.io/public/shopware/shopware-cli/setup.deb.sh | sudo bash && sudo apt install -y shopware-cli',
  },
  {
    id: 'lnx-create',
    number: 2,
    title: 'Create project',
    description: 'To create a new project, run this command in the terminal.',
    command: 'shopware-cli project create my-shop',
  },
  {
    id: 'lnx-start',
    number: 3,
    title: 'Start environment',
    description: 'Run this command to enter your project and start the local environment.',
    command: 'cd my-shop && make up',
  },
  {
    id: 'lnx-setup',
    number: 4,
    title: 'Set up Shopware',
    description: 'Install Shopware and set up the database for your local environment.',
    command: 'make setup',
  },
  {
    id: 'lnx-running',
    number: 5,
    title: 'Your Shopware instance is running',
    description: 'Open the admin panel to start managing your store.',
    credentials: true,
    command: 'http://localhost:8080/admin',
  },
];

const macSteps: Step[] = [
  {
    id: 'mac-1',
    number: 1,
    title: 'Install Shopware CLI',
    description: 'Install the Shopware CLI via Homebrew.',
    command: 'brew install shopware-ag/tap/shopware-cli',
  },
  {
    id: 'mac-create',
    number: 2,
    title: 'Create project',
    description: 'To create a new project, run this command in the terminal.',
    command: 'shopware-cli project create my-shop',
  },
  {
    id: 'mac-start',
    number: 3,
    title: 'Start environment',
    description: 'Run this command to enter your project and start the local environment.',
    command: 'cd my-shop && make up',
  },
  {
    id: 'mac-setup',
    number: 4,
    title: 'Set up Shopware',
    description: 'Install Shopware and set up the database for your local environment.',
    command: 'make setup',
  },
  {
    id: 'mac-running',
    number: 5,
    title: 'Your Shopware instance is running',
    description: 'Open the admin panel to start managing your store.',
    credentials: true,
    command: 'http://localhost:8080/admin',
  },
];

const currentSteps = computed<Step[]>(() => {
  if (activeTab.value === 'Windows') return windowsSteps;
  if (activeTab.value === 'Linux') return linuxSteps;
  return macSteps;
});

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
    @apply flex flex-col gap-3 list-none p-0 m-0;
  }

  &_step {
    @apply rounded-lg p-4;
    border: 1px solid var(--sw-c-blue-dark-100);
    background-color: var(--sw-c-blue-dark-50);

    .dark & {
      border-color: var(--sw-c-gray-dark-700);
      background-color: var(--sw-c-gray-dark-600);
    }

    &-header {
      @apply flex items-center gap-3 mb-1;
    }

    &-number {
      @apply flex items-center justify-center rounded-full text-xs font-bold shrink-0;
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sw-c-blue-vivacious);
      color: #fff;
    }

    &-title {
      @apply text-sm font-semibold;
      color: var(--c-text);
    }

    &-desc {
      @apply text-xs ml-9 mb-2;
      color: var(--c-text-light);
      margin-top: 0.25rem;
    }
  }

  /* ── Credentials box ──────────────────── */
  &_credentials {
    @apply flex gap-2 items-start rounded-md px-3 py-2 ml-9 mb-2;
    background-color: var(--sw-c-blue-dark-100);

    .dark & {
      background-color: var(--sw-c-gray-dark-700);
    }

    strong {
      @apply block text-xs font-semibold mb-0.5;
      color: var(--c-text);
    }

    span {
      @apply block text-xs;
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
    @apply flex items-center justify-between rounded-md px-3 py-2 ml-9;
    background-color: #1e2330;

    .dark & {
      background-color: #111827;
    }
  }

  &_command {
    @apply text-xs font-mono truncate;
    color: #e2e8f0;
    background: none;
    border: none;
    padding: 0;
  }

  &_copy {
    @apply shrink-0 ml-3 cursor-pointer flex items-center;
    background: none;
    border: none;
    padding: 0;
    color: var(--sw-c-blue-vivacious);

    &:hover {
      opacity: 0.75;
    }
  }

  &_copy-label {
    @apply text-xs font-medium;
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
      @apply text-xl font-semibold m-0;
      color: var(--c-text);
    }

    &-btn {
      @apply shrink-0;
    }
  }
}
</style>
