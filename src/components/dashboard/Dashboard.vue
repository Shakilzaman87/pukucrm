<template>
  <v-app>
    <Navbar/>


    <v-content>
      <h1>Dashboard</h1>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
  export default {
    name:'Dashboard',
    components:{
      Navbar
    },
    data(){
      return{
          dialog:null
      }
    }
  }
</script>

<style>
</style>
