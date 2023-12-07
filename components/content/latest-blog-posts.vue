<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
      <ul class="grid grid-cols-1 gap-4 list-none pl-0">
        <li
        v-for="post in posts" :key="post.id"
          class="border border-gray-200 dark:bg-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
        >
          <NuxtLink :to="post._path" class="no-underline">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ post.title }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
  </BlogPosts>
</template>

<script setup>
defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>