import Vue from 'vue'
import Router from 'vue-router'
//Dashboard
import Dashboard from '@/components/dashboard/Dashboard'
//Auth
import Setup from '@/components/authentication/Setup'
//Customers
import Customers from '@/components/customers/Customers'
import AddCustomer from '@/components/customers/AddCustomer'
import EditCustomer from '@/components/customers/EditCustomer'
import ViewCustomer from '@/components/customers/ViewCustomer'
//Sales
import AddSales from '@/components/sales/AddSales'
import Sales from '@/components/sales/Sales'
import EditSales from '@/components/sales/EditSales'
// Expenses
import AddExpenses from '@/components/expenses/AddExpenses'
import EditExpense from '@/components/expenses/EditExpense'
import Expenses from '@/components/expenses/Expenses'
//Graph
import Graph from '@/components/graph/Graph'
//Leads
import Leads from '@/components/leads/Leads'
import AddLeads from '@/components/leads/AddLeads'
import EditLeads from '@/components/leads/EditLeads'
import ViewLeads from '@/components/leads/ViewLeads'
//Support Guest
import Welcome from '@/components/support/Welcome'
import Message from '@/components/support/Message'
import Expired from '@/components/support/Expired'
import AdminSupportList from '@/components/support/AdminSupportList'
import AdminSupportMessage from '@/components/support/AdminSupportMessage'

import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Setup',
      component: Setup
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-customer',
      name: 'AddCustomer',
      component: AddCustomer,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-customer/:id',
      name: 'EditCustomer',
      component: EditCustomer,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/view-customer/:id',
      name: 'ViewCustomer',
      component: ViewCustomer,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-sales',
      name: 'AddSales',
      component: AddSales,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-sales/:id',
      name: 'EditSales',
      component: EditSales,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/sales',
      name: 'Sales',
      component:Sales,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-expenses',
      name: 'AddExpenses',
      component: AddExpenses,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-expenses/:id',
      name: 'EditExpense',
      component: EditExpense,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-leads',
      name: 'AddLeads',
      component: AddLeads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/leads',
      name: 'Leads',
      component: Leads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-leads/:id',
      name: 'EditLeads',
      component: EditLeads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/view-leads/:id',
      name: 'ViewLeads',
      component: ViewLeads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/message/:id',
      name: 'Message',
      component: Message,
      props:true,
      beforeEnter: (to, from, next) => {
        if(to.params.pr_name){
          next()
        }else{
          next({ name:'Expired'})
        }
      }
    },
    {
      path: '/expired',
      name: 'Expired',
      component: Expired
    },
    {
      path: '/support-list',
      name: 'AdminSupportList',
      component: AdminSupportList,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/support-message/:id',
      name: 'AdminSupportMessage',
      component: AdminSupportMessage,
      meta:{
        requiresAuth:true
      },
      beforeEnter: (to, from, next) => {
        if(to.params.id){
          next( )
        }else{
          next({ name:'AdminSupportList'})
        }
      }
    },
  ]
})


router.beforeEach((to,from,next) => {
  let currentUser=firebase.auth().currentUser;
  let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
});

export default router
