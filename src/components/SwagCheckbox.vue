<template>
  <div class="SwagCheckbox">
    <input id="cb" type="checkbox" />
    <label for="cb" class="flex flex-row gap-2 items-center">
      <span class="form-checkbox"></span>
      <slot /></label>
  </div>
</template>

<style lang="scss">
.SwagCheckbox {
  input {
    @apply hidden;
  }
}
</style>
<script setup>
</script>