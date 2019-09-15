import NotFound from '@/views/NotFound';
import Home from '@/views/Home';
import Login from '@/views/Login';
import EditArticles from '@/views/EditArticles';

export default {
    mode: 'history',
    routes: [
        { 
            path: '*', 
            component: NotFound,
            meta: {
                title: '404 Страница не найдена'
            }
        },
        { 
            path: '/', 
            component: Home,
            meta: {
                title: 'Главная'
            }
        },
        { 
            path: '/login', 
            component: Login,
            meta: {
                title: 'Вход'
            }
        },
        { 
            path: '/edit-articles', 
            component: EditArticles,
            meta: {
                title: 'Редактирование',
                requiresAuth: true
            }
        },
    ]
};
