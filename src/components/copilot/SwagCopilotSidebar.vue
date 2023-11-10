<template>
  <div class="SwagCopilot SwagCopilot_container">
    <SwagIcon icon="times" class="SwagCopilot_icon-close"/>

    <SwagIcon icon="sparkles" type="solid" class="SwagCopilot_icon-copilot --animation-up"/>

    <h3 class="SwagCopilot_heading --animation-up">AI Copilot</h3>

    <div v-if="!state" class="SwagCopilot_container">
      <p class="--animation-down --animation-delay-1">Instead of searching, you can ask AI Copilot to find what you are
        looking for.</p>

      <p class="--animation-down --animation-delay-1">Example prompts:</p>
      <div class="SwagCopilot_examples --animation-down --animation-delay-1">
        <div class="SwagCopilot_example c-any-card"
             v-for="example in examples"
             @click.prevent="searchExample(example)"
        >"{{ example }}"
        </div>
      </div>

      <p class="--animation-up --animation-delay-2">Give it a try!</p>
      <SwagIcon icon="long-arrow-down" class="SwagCopilot_icon-down --animation-up --animation-delay-2"/>
    </div>

    <div v-if="state === 'pending'" class="SwagCopilot_container --animation-down">
      <span class="--custom-spinner --animation-spin"/>
      <!--<SwagIcon icon="spinner-star" type="solid" class="--animation-spin"/>-->
      <p>Working ...</p>
      <p class="SwagCopilot_example">"{{ query }}"</p>
      <button type="button" class="btn --subtle --sm" @click.prevent="stop">
        <SwagIcon icon="square" type="solid"/>
        Stop
      </button>
    </div>

    <div class="SwagCopilot_container c-any-card p-6 --animation-down" v-if="state === 'done'">
      <p>"{{ query }}"</p>

      <div>{{ response.answer }}</div>

      <p v-if="response.sources.length">Sources</p>
      <ul v-if="response.sources.length">
        <li v-for="source in response.sources">
          <PageRef :page="`${source.slice(0, -2)}html`"/>
        </li>
      </ul>
    </div>

    <div class="SwagCopilot_searchbox-wrapper --animation-down"
         :class="`--animation-delay-${state === 'done' ? '1' : '3'}`"
         v-if="state !== 'pending'"
         :key="`searchbox-${step}`">
      <textarea class="form-control"
                v-model="query"
                :ref="el => queryRef = el"
                @keydown.enter="requestAnswer"
                placeholder="Enter the question"></textarea>
      <button type="button" class="btn --primary --xs" @click.prevent="requestAnswer">Ask</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {watch, ref, computed} from "vue";
import {qa} from "../ai/ml";

const {
  query,
  state,
  pending,
  response,
  errorText,
  requestAnswer,
  marked,
  stop,
} = qa('shopware--developer-portal--main');

const examples = [
  'What is the code for adding a primary button?',
  'What icons can I use to represent the shopping cart?',
  'List me the slots of the SW-Card',
];

const searchExample = example => {
  query.value = example;
  requestAnswer();
}

const resize = (element, minHeight = 46) => {
  if (!element) {
    return;
  }
  element.style.height = `${minHeight}px`;
  element.style.height = (element.scrollHeight > minHeight ? element.scrollHeight : minHeight) + "px";
}

const queryRef = ref(null);
watch(
    queryRef,
    () => resize(queryRef.value),
);
watch(
    query,
    () => resize(queryRef.value),
);
</script>

<style lang="scss">
.SwagCopilot {
  @apply fixed right-0 bottom-0;
  top: var(--vp-nav-height);
  width: 480px;

  &_container {
    @apply flex gap-8 flex-col content-center text-center items-center;
  }

  &.--inline {
    @apply static mx-auto py-4 max-w-[22rem];

    .SwagCopilot {
      &_icon-close {
        @apply hidden;
      }

      &_examples {
        @apply flex flex-col gap-4 w-full text-left;
      }

      &_example {
        @apply p-4 font-medium cursor-pointer font-italic;
      }
    }
  }

  &_icon {
    &-copilot {
      color: var(--sw-c-blue-brand);
      --icon-size: 3rem;
    }

    &-down {
      --icon-size: 1.5rem;
    }
  }

  &_heading {
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.625rem; /* 150% */
    letter-spacing: 0.00625rem;
  }

  &_searchbox-wrapper {
    @apply w-full relative;
    .form-control {
      @apply flex w-full px-[.5rem] py-[.666rem] pr-[4.5rem];
      resize: none;
      overflow: hidden;
    }

    .btn {
      @apply absolute right-[.5rem] bottom-[.5rem];
    }
  }
}

.--animation-delay-0 {
  --animation-delay: 0s;
}

.--animation-delay-1 {
  --animation-delay: 1s;
}

.--animation-delay-2 {
  --animation-delay: 2s;
}

.--animation-delay-3 {
  --animation-delay: 3s;
}

// delay is used as a duration in first animation and delay for the second animation
.--animation-up {
  animation: var(--animation-delay, 0s) ease-out 0s 1 disappear, 1s ease-out var(--animation-delay, 0s) 1 slideInFromBottom;
}

.--animation-down {
  animation: var(--animation-delay, 0s) ease-out 0s 1 disappear, 1s ease-out var(--animation-delay, 0s) 1 slideInFromTop;
}

.--animation-spin {
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  // fix the border bug
  border: 1px solid var(--vp-c-bg);
}

.--custom-spinner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 5px solid transparent;
  background: linear-gradient(var(--vp-c-bg), var(--vp-c-bg)), conic-gradient(from 0.15turn, var(--vp-c-bg), var(--sw-c-blue-brand));
  background-origin: border-box;
  background-clip: content-box, border-box;
}

@keyframes disappear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>