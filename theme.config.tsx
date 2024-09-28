import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tutor-Rin</span>,
  project: {
    link: 'https://github.com/toosakarin1412/tutoRin',
  },
  chat: {
    link: 'https://discord.com/users/560402738459049985',
  },
  docsRepositoryBase: 'https://github.com/toosakarin1412/tutoRin',
  footer: {
    text: 'tutor-rin by Diky Wahyudi <toosakarin1412>',
  },
  sidebar: {
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
  },
}

export default config
