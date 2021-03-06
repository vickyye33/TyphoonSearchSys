import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ConditionSearch from "./views/member/secondBar/second_bar_condition_search.vue";
import ConditionSearchByStation from "./views/member/searchByStationMenu/searchByStationMenu_main.vue";

import IndexMap from "./views/index/index_map.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // component: Home
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/index/index_map.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/map",
      name: "map",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/content/center_map.vue")
    },
    {
      path: "/vue2map",
      name: "vue2map",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/index/index_map.vue")
    },
    {
      path: "/vue2mapclear",
      name: "vue2mapclear",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/content/center_vue2map_clear.vue")
    },
    {
      path: "/index",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        {
          path: "/search/condition",
          name: "condition",
          component: ConditionSearch
        },
        {
          path: "/search/conditionByStation",
          name: "conditionByStation",
          component: ConditionSearchByStation
        }
      ],

      component: () =>
        import(/* webpackChunkName: "about" */ "./views/index/index_bar.vue")
    },
    {
      path: "/main",
      name: "main_index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/index/index_map.vue")
    }
    // {
    //   path: '/search',
    //   name: 'search',
    //   children: [
    //     {
    //       path: 'condition',
    //       name: 'condition',
    //       component: ConditionSearch
    //     }
    //   ]
    // }
    // {
    //   path: '/search/condition',
    //   name: 'condition',
    //   component: ConditionSearch
    // }
  ]
});
