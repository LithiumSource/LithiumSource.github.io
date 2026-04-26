import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WeSpeakInCursive",
  description: "An organization that offers novel solutions to various problems, keeps the internet free, and promotes creativity in production.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Sidebar',
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'Hiring', link: '/hiring' },
          { text: 'Downloads', link: '/downloads'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lithiumsource' }
    ]
  }
})
