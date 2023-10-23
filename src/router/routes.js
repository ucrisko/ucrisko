const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: 'home', component: () => import("pages/IndexPage.vue") },
      { path: "team", name:'team', component: () => import("pages/TeamPage.vue") },
      { path: "clients", name:'clients', component: () => import("pages/ClientsPage.vue") },
      { path: "contact", name:'contact', component: () => import("pages/ContactPage.vue") },
      { path: "privacy", name:'privacy', component: () => import("pages/PrivacyPage.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  }
];

export default routes;
