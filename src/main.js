import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import vueMoment from 'vue-moment';
import App from '@/App.vue';
import routes from '@/routes';
import storeData from '@/store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(vueMoment);

// restore app state
try {
  let restoredState = localStorage.getItem('app-state');
  if (restoredState) {
    storeData.state = JSON.parse(restoredState);
  }
} catch(err) { /**/ }

// mock articles
if (!storeData.state.articles.length) {
  for (var i = 1; i < 5; i++) {
    storeData.state.articles.push({
        id: i,
        date: new Date().getTime() - (i * 60000),
        header: 'Lorem ipsum dolor sit amet',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    });
  }
}

const store = new Vuex.Store(storeData);
const router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }

  if (store.getters.user.isAuthorized) {
    (to.path === '/login') ? next('/edit-articles') : next();
  } else {
    (to.meta && to.meta.requiresAuth) ? next('/login') : next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
