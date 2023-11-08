<template>
  <div class="SwagCopilot SwagCopilot_container">
    <SwagIcon icon="times" class="SwagCopilot_icon-close"/>

    <SwagIcon icon="sparkles" type="solid" class="SwagCopilot_icon-copilot"/>

    <h3 class="SwagCopilot_heading">AI Copilot</h3>

    <div v-if="!state" class="SwagCopilot_container">
      <p>Instead of searching, you can ask AI Copilot to find what you are looking for.</p>

      <p>Prompt examples:</p>
      <div class="SwagCopilot_examples">
        <div class="SwagCopilot_example c-any-card"
             v-for="example in examples"
             @click.prevent="searchExample(example)"
        >"{{ example }}"</div>
      </div>

      <p>Give it a try!</p>
      <SwagIcon icon="long-arrow-down" class="SwagCopilot_icon-down"/>
    </div>

    <div v-if="state === 'pending'" class="SwagCopilot_container">
      <SwagIcon icon="loader"/>
      <p>Working ...</p>
      <p>"{{ query }}"</p>
      <button type="button" class="btn --subtle --sm">
        <SwagIcon icon="stop"/>
        Stop
      </button>
    </div>

    <div class="SwagCopilot_container c-any-card p-6" v-if="state === 'done'">
      <!--{{ response }}-->
      <!--<p>"What's the admin source code for a normal primary button?"</p>-->
      <p>"{{ query }}"</p>

      {{ response.answer }}
      <!--<p>This VueJS component can be used for a normal sized primary button.</p>
      <div class="c-any-card">
      </div>-->

      <p>Sources</p>
      <ul>
        <li v-for="source in response.sources.split(',')">
          <PageRef :page="`${source.substring('/data/docs'.length).slice(0, -3)}`" />
        </li>
      </ul>
    </div>

    <hr/>

    <div>
      <textarea class="form-control" v-model="query"></textarea>
      <button type="button" class="btn --primary --sm" @click.prevent="requestAnswer">Ask</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {qa} from "../ai/ml";

const {
  query,
  state,
  pending,
  response,
  errorText,
  requestAnswer,
  marked
} = qa();

const examples = [
    'What is the code for adding a primary button?',
    'What icons can I use to represent the shopping cart?',
    'List me the slots of the SW-Card',
];

const searchExample = example => {
  query.value = example;
  requestAnswer();
}
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
    @apply static mx-auto py-4;

    .SwagCopilot {
      &_icon-close {
        @apply hidden;
      }

      &_examples {
        @apply flex flex-col gap-4;
      }

      &_example {
        @apply p-4 font-medium cursor-pointer;
        /*color: var(--sw-c-gray-dark-750);*/
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
}
</style>