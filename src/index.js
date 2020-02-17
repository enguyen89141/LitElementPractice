import './styles.css';
import './views/todo-view.js';
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
})

function initRouter() { //basically React's BrowserRouter
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      component: 'todo-view'
    },
    {
      path: '/stats',
      component: 'stats-view',
      action: () => 
        import(/* webpackChunkName: "stats" */ './views/stats-view')
    },
    {
      path: '.*', // just like the React router switch catch all to a 404 if no matched path is found
      component: 'not-found-view',
      action: () => 
        import(/* webpackChunkName: "not-found-view" */ './views/not-found-view')
    },
  ])
}