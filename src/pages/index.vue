<template>
  <div class="home-page">
    <nav class="navbar" >
      <img src="menu.svg" alt="menu" />
      <span class="spacer" />
      <img src="logo.svg" alt="logo" />
      <span class="font-bold ml-1">Audio</span>
      <span class="spacer" />
      <img src="avatar.png" alt="avatar" />
    </nav>

    <div class="text flex flex-col mt-6 px-4 pb-5">
      <span class="name font-medium text-md">Hi, Andrea</span>
      <span class="font-extrabold text-xl my-3">
        What are you looking for today?
      </span>
      <div class="search flex items-center rounded-md px-2 ">
        <img src="search.svg" alt="search-icon" />
        <input
          type="search"
          v-model="searchQuery"
          placeholder="Search product"
          class="focus:outline-none font-medium py-2 w-full ml-1"
        />
      </div>
    </div>

    <div class="items py-2" >
      <div
        class="categories pl-10 pr-2 text-sm flex items-center justify-between"
      >
        <span
          class="category"
          v-for="(category, categoryIndex) in categories"
          v-text="category"
          :key="`category-${categoryIndex}`"
        />
      </div>
      <div
        class="product shadow rounded-md bg-white flex items-center w-4/5 my-4 mx-auto px-2 justify-between"
      >
        <div
          class="product-text flex flex-col h-full self-start py-2 justify-between"
        >
          <span class="text-xl w-20 pt-3 font-extrabold leading-6"
            >TMA-2 Modular Headphone</span
          >
          <span class="text-sm flex text-green-400 font-bold">
            Shop now
            <img src="arrow.svg" class="ml-3" alt="front-arrow" />
          </span>
        </div>
        <img src="headset.png" class="w-25 h-25" alt="" />
      </div>
      <div class="products pl-10 flex overflow-x-hidden">
        <div
          class="product  shadow rounded-md flex flex-col items-center justify-between bg-white"
          v-for="({ productSrc, productName }, productIndex) in products"
          :key="`product-${productIndex}`"
        >
          <img :src="productSrc" class="w-25 h-25 my-3" alt="productSrc" />
          <span class="name text-sm mx-2" v-text="productName" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name:'index',
    components:{},
    data: () =>({
        categories:['Headphone','Headband','Earpads','Cable'],
        products:[

            { productSrc:'headset.png', productName:'TMA-2 HD Wireless USD 350'},
                { productSrc:'aux.png', productName:'C02 - Cable USD 25'},
                { productSrc:'headset.png', productName:'TMA-2 HD Wireless USD 350'}   
        ],
        searchQuery: ''
    }),
    computed: {
        isSearching() {
            return this.searchQuery.length > 0
        }
    }
}
</script>

<style lang="css" scoped>
.navbar {
  @apply flex px-4 pt-4 items-center justify-between;
}
.spacer {
  @apply flex-grow;
}
.search{
    border: 1px solid #BABABA;
    width:95%;
}
.search input {
  font-size: 0.8rem;
  
}
.items {
  background: #f3f3f3;
}
.category:first-child {
  background: #0acf83;
  border-radius: 25px;
  color: white;
  padding: 0.25rem 0.5rem;
}

</style>