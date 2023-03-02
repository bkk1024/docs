import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/docs/',
  lang: 'zh-CN',
  title: '二师弟的学习笔记',
  description: '二师弟的学习笔记',
  head: [
    [
      'link', { rel: 'icon', href: '/icon.png' }
    ]
  ],
  theme: defaultTheme({
    logo: '/icon.png',
    navbar: [
      {
        text: '首页',
        link: '/readme.md',
      },
      {
        text: 'JavaScript',
        link: '/js/js方法.md'
      },
      {
        text: 'TypeScript',
        link: '/ts/ts基本内容.md',
      },
      {
        text: '打包工具',
        children: [
          {
            text: 'vite3',
            link: '/build-tools/vite3.md'
          },
          {
            text: 'webpack5',
            link: '/build-tools/webpack5.md'
          }
        ]
      },
      {
        text: 'Node',
        // link: '/node/nodejs.md',
        children: [
          {
            text: 'NodeJS',
            children: [
              {
                text: 'nvm',
                link: '/node/nvm.md'
              },
              {
                text: 'nodejs',
                link: '/node/nodejs.md'
              },
              {
                text: 'pm2',
                link: '/node/pm2.md'
              },
            ]
          },
          {
            text: 'NestJS',
            children: [
              {
                text: 'nestjs',
                link: '/node/nestjs8.md'
              },
              {
                text: 'nestjs案例',
                link: '/node/nestjs博客接口案例.md'
              },
            ]
          }
        ]
      },
      {
        text: 'Vue',
        children: [
          {
            text: 'Vue3',
            children: [
              {
                text: 'vue3学习笔记',
                link: '/vue3/vue3学习笔记.md'
              },
              {
                text: 'vue3其他笔记',
                link: '/vue3/vue3其他笔记.md'
              },
              {
                text: '优化',
                link: '/vue3/vue常见优化手段.md'
              }
            ]
          },
          {
            text: 'VueRouter',
            children: [
              {
                text: 'vue-router',
                link: '/vue3/vue-router.md'
              }
            ]
          },
          {
            text: '状态管理',
            children: [
              {
                text: 'pinia',
                link: '/vue3/pinia.md'
              }
            ]
          },
          {
            text: '其他',
            children: [
              {
                text: 'axios',
                link: '/vue3/axios.md'
              },
              {
                text: 'electron桌面应用',
                link: '/vue3/vue3-vite-electron.md'
              }
            ]
          }
        ]
      },
      {
        text: 'LeetCode',
        link: '/leetcode/leetcode算法.md'
      },
      {
        text: '游戏',
        link: '/games/phaser3.md'
      },
      {
        text: '其他',
        link: '/others/项目笔记.md'
      }
    ],
    sidebar: {
      '/js/': [
        {
          text: 'javascript',
          collapsible: true,
          children: ['js方法', 'js知识要点', '浏览器渲染原理', '事件循环', '属性描述符',],
        }
      ],
      '/ts/': [
        {
          text: 'typescript',
          collapsible: true,
          children: ['ts基本内容', 'DOM和BOM内置对象', 'interface接口', 'Object和object', 'ts使用Promise',],
        }
      ],
      '/build-tools/': [
        {
          text: 'vite',
          collapsible: true,
          children: ['vite3']
        },
        {
          text: 'webpack',
          collapsible: true,
          children: ['webpack5']
        },
      ],
      '/node/': [
        {
          text: 'nodejs',
          collapsible: true,
          children: ['nvm', 'nodejs', 'pm2'],
        },
        {
          text: 'nestjs',
          collapsible: true,
          children: ['nestjs8', 'nestjs博客接口案例'],
        }
      ],
      '/vue3/': [
        {
          text: 'Vue3',
          collapsible: true,
          children: ['vue3学习笔记', 'vue3其他笔记', 'vue常见优化手段']
        },
        {
          text: 'VueRouter',
          collapsible: true,
          children: ['vue-router']
        },
        {
          text: '状态管理',
          collapsible: true,
          children: ['pinia']
        },
        {
          text: '其他',
          collapsible: true,
          children: ['axios', 'vue3-vite-electron']
        }
      ],
      '/leetcode/': [
        {
          text: 'leetcode',
          collapsible: true,
          children: ['leetcode算法']
        }
      ],
      '/games/': [
        {
          text: 'phaser3-js游戏库',
          collapsible: true,
          children: ['phaser3']
        }
      ],
      '/others/': [
        {
          text: '其他笔记',
          collapsible: true,
          children: ['项目笔记']
        }
      ]
    },
    sidebarDepth: 4
  })
})