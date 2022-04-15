import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html",{"title":"contributing.md"},["/contributing","/contributing.md"]],
  ["v-8daa1a0e","/",{"title":"页面标题"},["/index.html","/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"guide/getting-started.md"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-fffb8e28","/guide/",{"title":"guide"},["/guide/index.html","/guide/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
