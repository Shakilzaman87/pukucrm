import Vue from 'vue'
import Router from 'vue-router'
//Dashboard
import Dashboard from '@/components/dashboard/Dashboard'
//Auth
import SignIn from '@/components/authentication/SignIn'
import SignUp from '@/components/authentication/SignUp'
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
//Leads
import Leads from '@/components/leads/Leads'
import AddLeads from '@/components/leads/AddLeads'
import EditLeads from '@/components/leads/EditLeads'
import ViewLeads from '@/components/leads/ViewLeads'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/add-customer',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/edit-customer/:id',
      name: 'EditCustomer',
      component: EditCustomer
    },
    {
      path: '/view-customer/:id',
      name: 'ViewCustomer',
      component: ViewCustomer
    },
    {
      path: '/add-sales',
      name: 'AddSales',
      component: AddSales
    },
    {
      path: '/edit-sales/:id',
      name: 'EditSales',
      component: EditSales
    },
    {
      path: '/sales',
      name: 'Sales',
      component:Sales
    },
    {
      path: '/add-expenses',
      name: 'AddExpenses',
      component: AddExpenses
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
    },
    {
      path: '/edit-expenses/:id',
      name: 'EditExpense',
      component: EditExpense
    },
    {
      path: '/add-leads',
      name: 'AddLeads',
      component: AddLeads
    },
    {
      path: '/leads',
      name: 'Leads',
      component: Leads
    },
    {
      path: '/edit-leads/:id',
      name: 'EditLeads',
      component: EditLeads
    },
    {
      path: '/view-leads/:id',
      name: 'ViewLeads',
      component: ViewLeads
    },
  ]
})
