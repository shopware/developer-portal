<template>
  <div class="SwagCopilot">
    <SwagIcon icon="close"/>

    <SwagIcon icon="copilot"/>
    <h3>AI Copilot</h3>
    <p>Instead of searching, you can ask AI Copilot to find what you are looking for.</p>

    <p>Prompt examples:</p>
    <div>
      <div class="as-flat-card">
        "What is the code for adding a primary button?"
      </div>
      <div class="as-flat-card">
        "What icons can I use to represent the shopping cart?"
      </div>
      <div class="as-flat-card">
        "List me the slots of the SW-Card"
      </div>
    </div>

    <p>Give it a try!</p>
    <SwagIcon icon="arrow-long-down"/>

    <hr/>

    <SwagIcon icon="loader"/>
    <p>Working ...</p>
    <p>What's the admin source code for a normal primary button?</p>
    <button type="button" class="btn --subtle --sm">
      <SwagIcon icon="stop"/>
      Stop
    </button>

    <hr/>

    <div class="as-flat-card">
      <p>"What's the admin source code for a normal primary button?"</p>

      <p>This VueJS component can be used for a normal sized primary button.</p>
      <div class="as-flat-card">
      </div>

      <p>Sources</p>
      <ul>
        <li><a href="#">Component library / buttons</a></li>
        <li><a href="#">Link to a documentation page</a></li>
        <li><a href="#">Another link to a documentation page</a></li>
      </ul>
    </div>

    <hr/>

    <div>
      <textarea class="form-control"></textarea>
      <button type="button" class="btn --primary --sm">Ask</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.SwagCopilot {
  @apply fixed right-0 bottom-0;
  top: var(--vp-nav-height);
  width: 480px;
}
</style>