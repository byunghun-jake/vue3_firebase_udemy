import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import NotFound from "../views/NotFound.vue"
import Jobs from "../views/jobs/Jobs.vue"
import JobDetails from "../views/jobs/JobDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Note: Lazy Loading Routes
  // https://next.router.vuejs.org/guide/advanced/lazy-loading.html#lazy-loading-routes
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
    children: [
      {
        path: "/jobs/:jobId",
        name: "JobDetails",
        component: JobDetails,
        props: true,
      },
    ],
  },
  {
    path: "/all-jobs",
    redirect: { name: "Jobs" },
  },
  // Note: 404 NotFound 페이지 구현 시 참고할 사항
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
