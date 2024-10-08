import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: _routes => [
    {
      name: 'BlockPendingList',
      path: '/blockPendingList',
      component: () => import('@/pages/BlockPendingList.vue'),
    },
  ],
}