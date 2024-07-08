const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/Pages/Home.vue'),
    },
    {
        path: '/active',
        name: 'activos',
        component: () => import('@/Pages/ActiveProjects/index.vue'),
    },
    {
        path: '/active/:id',
        name: 'activos.show',
        component: () => import('@/Pages/ActiveProjects/Show.vue'),
    },
]

export default routes;