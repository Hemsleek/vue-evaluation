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
        <div class="text flex flex-col mt-6 pb-5">
            <span class="name font-medium text-md">Hi, Andrea</span>
            <span class="font-extrabold text-2xl my-3">What are you looking for today?</span>
            <div class="search flex items-center  rounded-md px-2 border-2">
                <img src="search.svg" alt="search-icon" >
                <input type="search" placeholder="Search product" class="focus:outline-none font-medium py-2 w-full ml-1">
            </div>
        </div>
        <div class="items py-2 ">
            <div class="product-list flex items-center justify-between ">
                <span v-for="(product,productIndex) in products"  v-text="product" :key="productIndex" />

            </div>
            <div class="product rounded-md bg-white flex items-center w-4/5 my-4 mx-auto px-2">
                <span class="product-text font-extrabold">TMA-2 Modular Headphone</span>
                <img src="headset.png" alt="">
            </div>
            <div class="more-products flex justify-end">
                <div class="more-product flex flex-col items-center justify-between bg-white" v-for="({productSrc,productName},productIndex) in moreProducts" :key="productIndex" >
                    <img :src="productSrc" alt="productSrc">
                    <span class="name" v-text="productName">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
   data(){
        return{
            products:['Headphone','Headband','Earpads','Cable'],
            moreProducts:[

                { productSrc:'headset.png', productName:'TMA-2 HD Wireless,USD 350'},
                 { productSrc:'headset.png', productName:'TMA-2 HD Wireless,USD 350'}, 
                { productSrc:'headset.png', productName:'TMA-2 HD Wireless,USD 350'},

            ]
        } 
    }
}
</script>

<style lang="css" scoped>
    .home-page{
        @apply p-4 pb-0;
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
    .items{
        background:#f3f3f3;
    }
</style>