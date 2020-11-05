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
    @apply bg-white  max-w-sm  max-h-screen mx-auto rounded;
  }
</style>