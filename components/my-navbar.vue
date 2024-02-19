<template>
  <div class="container">
    <nav class="flex items-center justify-between">
      <NuxtLink to="/">
        <p class="txt-50 cursor-pointer">Logo</p>
      </NuxtLink>
      <div class="menu flex items-center gap-6 txt-16">
        <ul class="flex items-center gap-4 txt-16">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
        <UToggle on-icon="i-heroicons-sun-20-solid" off-icon="i-heroicons-moon-20-solid" v-model="mode" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const mode = ref(colorMode.preference === "dark" ? true : false)
watch(mode, (newValue: boolean) => {
  if (newValue) {
    colorMode.preference = "dark"
  } else {
    colorMode.preference = "light"
  }
})

</script>