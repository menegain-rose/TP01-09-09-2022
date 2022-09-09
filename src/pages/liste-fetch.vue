<template>
    {{ posts }}
  </template>

<script setup lang="ts">
    const res = await fetch(...)
    const posts = await res.json()

    export default {
  async setup() {
    const res = await fetch(...)
    const posts = await res.json()
    return {
      posts
    }
  }
}

</script>
