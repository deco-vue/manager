<template>
  <div class="container">
    <nav class="flex items-center justify-between border-b border-gray p-4">
      <NuxtLink to="/">
        <a href="#" class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Manager
        </a>
      </NuxtLink>
      <div class="menu flex items-center gap-6 txt-16">
        <UToggle on-icon="i-heroicons-sun-20-solid" off-icon="i-heroicons-moon-20-solid" v-model="mode" />
        <NuxtLink to="login">
          <div class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
              class="shadow-xl rounded-full bg-white">
              <path
                d="M16.0001 15.6472C14.9213 15.6472 13.9998 15.255 13.2355 14.4705C12.4712 13.6861 12.089 12.7403 12.089 11.6332C12.089 10.526 12.4712 9.5802 13.2355 8.79578C13.9998 8.01135 14.9213 7.61914 16.0001 7.61914C17.0789 7.61914 18.0004 8.01135 18.7647 8.79578C19.529 9.5802 19.9112 10.526 19.9112 11.6332C19.9112 12.7403 19.529 13.6861 18.7647 14.4705C18.0004 15.255 17.0789 15.6472 16.0001 15.6472ZM7.61914 22.6387V21.8315C7.61914 21.2698 7.76778 20.7497 8.06506 20.2711C8.36233 19.7925 8.75952 19.4246 9.25664 19.1672C10.3612 18.6114 11.4755 18.1946 12.5994 17.9167C13.7233 17.6388 14.8569 17.4999 16.0001 17.4999C17.1433 17.4999 18.2769 17.6388 19.4008 17.9167C20.5247 18.1946 21.639 18.6114 22.7435 19.1672C23.2407 19.4246 23.6379 19.7925 23.9351 20.2711C24.2324 20.7497 24.381 21.2698 24.381 21.8315V22.6387C24.381 23.1224 24.2159 23.5338 23.8857 23.8727C23.5555 24.2116 23.1547 24.381 22.6834 24.381H9.31679C8.84546 24.381 8.44469 24.2116 8.11448 23.8727C7.78425 23.5338 7.61914 23.1224 7.61914 22.6387Z"
                fill="#0162A7"></path>
            </svg>
            <p class="text-xl">Deco</p>
          </div>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="js">
const colorMode = useColorMode()
const mode = ref(colorMode.preference === "dark" ? true : false)
watch(mode, (newValue) => {
  if (newValue) {
    colorMode.preference = "dark"
  } else {
    colorMode.preference = "light"
  }
})
</script>