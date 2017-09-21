import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bags from '@/components/Bags'
import Belts from '@/components/Belts'
import Claims from '@/components/Claims'
import Contacts from '@/components/Contacts'
import Designers from '@/components/Designers'
import Lookbook from '@/components/Lookbook'
import Sale from '@/components/Sale'
import SpecialOffers from '@/components/SpecialOffers'
import Wallets from '@/components/Wallets'
import Watches from '@/components/Watches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bags',
      name: 'Bags',
      component: Bags
    },
    {
      path: '/belts',
      name: 'Belts',
      component: Belts
    },
    {
      path: '/claims',
      name: 'Claims',
      component: Claims
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/designers',
      name: 'Designers',
      component: Designers
    },
    {
      path: '/lookbook',
      name: 'Lookbook',
      component: Lookbook
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/special-offers',
      name: 'SpecialOffers',
      component: SpecialOffers
    },
    {
      path: '/wallets',
      name: 'Wallets',
      component: Wallets
    },
    {
      path: '/watches',
      name: 'Watches',
      component: Watches
    }
  ]
})
