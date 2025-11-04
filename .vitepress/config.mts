import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WeSpeakInCursive",
  description: "A VitePress Site",
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
          { text: 'Hiring', link: '/hiring' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lithiumsource' }
    ]
  }
})
