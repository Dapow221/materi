<!-- eslint-disable vue/valid-v-for -->
<template>
    <NavBar @changePage="changePage" />
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <GroceryCard v-for="grocery in groceries" :grocery="grocery" @deleteGrocery="deleteGrocery" />
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '../Navbar.vue';
  import GroceryCard from '../GroceryCard.vue';
  
  export default {
    emits: ['changePage', 'deleteGrocery'],
    props: ['groceries'],
    components: {
      NavBar,
      GroceryCard
    },
    methods: {
      changePage(page) {
        this.$emit('changePage', page)
      },
      deleteGrocery(id) {
        this.$emit('deleteGrocery', id)
      }
    }
  }
  </script>
  
  <style scoped></style>