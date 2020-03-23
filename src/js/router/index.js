import Vue from 'vue';
import Router from 'vue-router';
import Anagram from '../components/Anagram';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Anagram',
      component: Anagram,
    },
  ],
});
