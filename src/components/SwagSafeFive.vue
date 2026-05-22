<template>
    <div class="SwagSafeFive">
        <div class="flex flex-col gap-2 max-w-xl text-center justify-center items-center">
            <div class="SwagSafeFive_image"><slot name="image">Image</slot></div>
            <div class="SwagSafeFive_title"><slot name="title">Title</slot></div>
            <div class="SwagSafeFive_content"><slot name="content">Content</slot></div>
            <div class="SwagSafeFive_links"><slot name="links">Links</slot></div>
        </div>
    </div>
  </template>
  
  <style lang="scss">
  .SwagSafeFive {
    @apply flex flex-col justify-center items-center;

    &_title {
      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: -0.09rem;
      line-height: 120%;
    }
    &_content {
      font-size: 1rem;
      font-weight: 300;
      line-height: 2rem;
      letter-spacing: 0.0375rem;
    }
    &_links {
      @apply flex items-center;
    }
    &_image {
      @apply w-32 h-auto mb-2;
    }
  }
  </style>