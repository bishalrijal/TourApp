/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        rule: 'admin'
                    }

                },
                //===============app routes =============
                //=====user

                {
                    path: '/apps/user/user-list',
                    name: 'app-user-list',
                    component: () => import('@/views/apps/user/user-list/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'List', active: true },
                        ],
                        pageTitle: 'User List',
                        rule: 'admin'
                    },
                },
                {
                    path: '/apps/user/user-view/:userId',
                    name: 'app-user-view',
                    component: () => import('@/views/apps/user/UserView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'View', active: true },
                        ],
                        pageTitle: 'User View',
                        rule: 'editor'
                    },
                },
                {
                    path: '/apps/user/user-edit/:userId',
                    name: 'app-user-edit',
                    component: () => import('@/views/apps/user/user-edit/UserEdit.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'Edit', active: true },
                        ],
                        pageTitle: 'User Edit',
                        rule: 'editor'
                    },
                },
                //>>>>>>>>>>app-user >>>>>>

                //=======app-partner========
                {
                    path: '/app/partner/create',
                    name: 'app-partner-create',
                    component: () => import('@/views/apps/partner/PartnerCreate.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'App' },
                            { title: 'Package' },
                            { title: 'Create', active: true },
                        ],
                        pageTitle: 'Packages',
                        rule: 'admin'
                    },
                },

                {
                    path: '/apps/partner/partner-list',
                    name: 'app-partner-list',
                    component: () => import('@/views/apps/partner/partner-list/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'List', active: true },
                        ],
                        pageTitle: 'User List',
                        rule: 'admin'
                    },
                },
                {
                    path: '/apps/partner/partner-view/:partnerId',
                    name: 'app-partner-view',
                    component: () => import('@/views/apps/partner/PartnerView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'View', active: true },
                        ],
                        pageTitle: 'User View',
                        rule: 'editor'
                    },
                },
                {
                    path: '/apps/partner/partner-edit/:partnerId',
                    name: 'app-partner-edit',
                    component: () => import('@/views/apps/partner/partner-edit/UserEdit.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'Edit', active: true },
                        ],
                        pageTitle: 'User Edit',
                        rule: 'editor'
                    },
                },
                //>>>>>>> app-partner>>>>>

                //======== app-bank====

                {
                    path: '/app/bank/create',
                    name: 'app-bank-create',
                    component: () => import('@/views/apps/bank/BankCreate.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'App' },
                            { title: 'Package' },
                            { title: 'Create', active: true },
                        ],
                        pageTitle: 'Packages',
                        rule: 'admin'
                    },
                },

                {
                    path: '/apps/bank/bank-list',
                    name: 'app-bank-list',
                    component: () => import('@/views/apps/bank/bank-list/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'List', active: true },
                        ],
                        pageTitle: 'User List',
                        rule: 'admin'
                    },
                },
                {
                    path: '/apps/bank/bank-view/:bankId',
                    name: 'app-bank-view',
                    component: () => import('@/views/apps/bank/BankView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'View', active: true },
                        ],
                        pageTitle: 'User View',
                        rule: 'editor'
                    },
                },
                {
                    path: '/apps/bank/bank-edit/:bankId',
                    name: 'app-bank-edit',
                    component: () => import('@/views/apps/bank/bank-edit/UserEdit.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'Edit', active: true },
                        ],
                        pageTitle: 'User Edit',
                        rule: 'editor'
                    },
                },
                //<<<<<<<app- bank=====

                {
                    path: '/packages/tour/create',
                    name: 'package-tour-create',
                    component: () => import('@/views/packages/tours/TourCreate.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Packages' },
                            { title: 'Tour' },
                            { title: 'Create', active: true },
                        ],
                        pageTitle: 'Packages',
                        rule: 'admin'
                    },
                },
                {
                    path: '/packages/tour/tour-list',
                    name: 'package-tour-list',
                    component: () => import('@/views/packages/tours/tour-list/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Packages' },
                            { title: 'Tour' },
                            { title: 'List', active: true },
                        ],
                        pageTitle: 'Packages',
                        rule: 'admin'
                    },
                },
                {
                    path: '/packages/tour/tour-view/:userId',
                    name: 'package-tour-view',
                    component: () => import('@/views/packages/tours/TourView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Packages' },
                            { title: 'Tour' },
                            { title: 'View', active: true },
                        ],
                        pageTitle: 'Packages',
                        rule: 'editor'
                    },
                },
                {
                    path: '/packages/tour/tour-edit/:userId',
                    name: 'app-user-edit',
                    component: () => import('@/views/packages/tours/tour-edit/UserEdit.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'Edit', active: true },
                        ],
                        pageTitle: 'User Edit',
                        rule: 'editor'
                    },
                },
            ],
        },

        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/pages/Login.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/register',
                    name: 'page-register',
                    component: () => import('@/views/pages/register/Register.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found

        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
