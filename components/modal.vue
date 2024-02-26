<template>
  <base-modal>
    <main class="w-full max-w-md mx-auto p-6">
      <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Please enter your codepen link
            </p>
          </div>

          <div class="mt-5">
            <div class="grid gap-y-4">
              <div>
                <label for="text" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Enter Link</label>
                <div class="relative">
                  <input type="text" id="text" name="text"
                    class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    required aria-describedby="text-error">
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="text-error">Please include a valid text address so we
                  can get back to you</p>
              </div>
              <button
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset
                password</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </base-modal>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>