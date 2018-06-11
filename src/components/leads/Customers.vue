<template>
  <v-app>

      <Navbar/>
    <div>
      <ShowCustomers/>
    </div>
  </v-app>
</template>

<script>
import ShowCustomers from '@/components/customers/ShowCustomers'
import AddCustomer from '@/components/customers/AddCustomer'
import Navbar from '@/components/navbar/Navbar'

export default {
  name:'Customers',
  components:{
    Navbar,ShowCustomers,AddCustomer
  },
  data(){
    return{

    }
  },

}
</script>

<style>
tbody tr{
  text-align: center;
}
.input-group__input placeholder{
  color: red;
}
</style>
