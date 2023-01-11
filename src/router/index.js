// Composables
import VueRouter from 'vue-router'
import VergleichView from "@/views/VergleichView.vue";
import BucketUebersichtView from "@/views/BucketUebersichtView.vue";
import PaketUebersichtView from "@/views/PaketUebersichtView.vue";
import ProjektkalkulationView from "@/views/ProjektkalkulationView.vue";
import ProjektUebersichtView from "@/views/ProjektUebersichtView.vue";

const routes = [
  {
    path: '/',
    redirect: '/projekt'
  },
  {
    path: '/projekt',
    name: 'projekt',
    component: ProjektUebersichtView,
  },
  {
    path: '/vergleich',
    name: 'vergleich',
    component: VergleichView
  },
  {
    path: '/buckets',
    name: 'buckets',
    component: BucketUebersichtView
  },
  {
    path: '/pakete',
    name: 'pakete',
    component: PaketUebersichtView
  },
  {
    path: '/kalkulation',
    name: 'kalkulation',
    component: ProjektkalkulationView
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router