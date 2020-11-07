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
    @apply bg-white  h-screen mx-auto rounded;
    max-width:23vw;
  }
</style>