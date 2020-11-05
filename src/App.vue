<template>
   <div class="frame">

    <router-view />
   </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="css" scoped>

  .frame{
    @apply bg-white  max-w-sm my-2 h-full mx-auto rounded;
  }
</style>