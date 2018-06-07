import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/authentication/SignIn'
import SignUp from '@/components/authentication/SignUp'
import Dashboard from '@/components/dashboard/Dashboard'
import Customers from '@/components/customers/Customers'
import AddCustomer from '@/components/customers/AddCustomer'
import EditCustomer from '@/components/customers/EditCustomer'
import ViewCustomer from '@/components/customers/ViewCustomer'
import AddSales from '@/components/sales/AddSales'
import Sales from '@/components/sales/Sales'
import EditSales from '@/components/sales/EditSales'
import AddExpenses from '@/components/expenses/AddExpenses'
import EditExpense from '@/components/expenses/EditExpense'
import Expenses from '@/components/expenses/Expenses'

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
  ]
})
