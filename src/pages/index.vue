<template>
    <div class="home-page">
        <nav class="navbar">
            <img src="menu.svg" alt="menu">
            <span class="spacer" />
            <img src="logo.svg" alt="logo">
            <span class="font-bold ml-1">Audio</span>
            <span class="spacer" />
            <img src="avatar.png" alt="avatar">
        
        </nav>
        <div class="text flex flex-col mt-6">
            <span class="name font-medium text-md">Hi, Andrea</span>
            <span class="font-extrabold text-2xl my-3">What are you looking for today?</span>
            <div class="search flex items-center  rounded-md px-2 border-2">
                <img src="search.svg" alt="search-icon" >
                <input type="search" placeholder="Search product" class="focus:outline-none font-medium py-2 w-full ml-1">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
    .home-page{
        @apply p-4;
    }
    .navbar{
        @apply flex items-center justify-between;
    }
    .spacer{
        @apply flex-grow;
    }
    .search input{
        font-size:.8rem;
    }
</style>