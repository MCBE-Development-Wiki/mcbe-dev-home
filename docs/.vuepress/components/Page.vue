<script setup>
import DefaultPage from '@vuepress/theme-default/components/Page.vue'
import Footer from './Footer.vue'
</script>

<template>
  <DefaultPage>
    <template #top>
      <slot name="top" />
    </template>
    <template #content-top>
      <slot name="content-top" />
    </template>
    <template #content-bottom>
      <slot name="content-bottom" />
    </template>
    <template #bottom>
      <slot name="bottom" />
      <Footer />
    </template>
  </DefaultPage>
</template>