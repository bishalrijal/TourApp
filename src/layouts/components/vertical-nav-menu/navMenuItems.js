/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: "/page2",
    name: "Page 2",
    slug: "page2",
    icon: "FileIcon",
  },
  {
    header: "Apps",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: null,
        name: "User",
        icon: "UserIcon",
        i18n: "User",
        submenu: [
          {
            url: '/apps/user/user-list',
            name: "List",
            slug: "app-user-list",
            i18n: "List",
          },
          {
            url: '/apps/user/user-view/1',
            name: "View",
            slug: "app-user-view",
            i18n: "View",
          },
          {
            url: '/apps/user/user-edit/1',
            name: "Edit",
            slug: "app-user-edit",
            i18n: "Edit",
          },
        ]
      },
      ///partner////
          {
            url: null,
            name: "Partner",
            icon: "UserIcon",
            i18n: "User",
            submenu: [
              {
                url: '/app/partner/create',
                name: "Create",
                slug: "app-partner-create",
                i18n: "List",
              },
              {
                url: '/apps/partner/partner-list',
                name: "List",
                slug: "app-partner-list",
                i18n: "List",
              },
              {
                url: '/apps/partner/partner-view/1',
                name: "View",
                slug: "app-partner-view",
                i18n: "View",
              },
              {
                url: '/apps/partner/partner-edit/1',
                name: "Edit",
                slug: "app-partner-edit",
                i18n: "Edit",
              },
            ]
          },
              ///partner///
              ///bank///
              {
                url: null,
                name: "Bank",
                icon: "UserIcon",
                i18n: "User",
                submenu: [
                  {
                    url: '/app/bank/create',
                    name: "Create",
                    slug: "app-bank-create",
                    i18n: "List",
                  },
                  {
                    url: '/apps/bank/bank-list',
                    name: "List",
                    slug: "app-bank-list",
                    i18n: "List",
                  },
                  {
                    url: '/apps/bank/bank-view/1',
                    name: "View",
                    slug: "app-bank-view",
                    i18n: "View",
                  },
                  {
                    url: '/apps/bank/bank-edit/1',
                    name: "Edit",
                    slug: "app-bank-edit",
                    i18n: "Edit",
                  },
                  ///bank

          
        ]
      },
    ]
  },
  {
    header: "Packages",
    icon: "PackageIcon",
    i18n: "A",
    items: [
      {
        url: null,
        name: "Tour",
        icon: "UserIcon",
        i18n: "User",
        submenu: [
          {
            url: '/packages/tour/create',
            name: "Create",
            slug: "packages-tour-create",
            i18n: "List",
          },
          {
            url: '/packages/tour/tour-list',
            name: "List",
            slug: "packages-tour-list",
            i18n: "List",
          },
          {
            url: '/packages/tour/tour-view/1',
            name: "View",
            slug: "package-tour-view",
            i18n: "View",
          },
          {
            url: '/packages/tour/tour-edit/1',
            name: "Edit",
            slug: "package-tour-edit",
            i18n: "Edit",
          },
        ]
      },
    ]
  },
]
