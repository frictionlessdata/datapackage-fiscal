import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

// https://astro.build/config
export default defineConfig({
  site: "https://fiscal.datapackage.org",
  srcDir: ".",
  outDir: "build",
  integrations: [
    starlight({
      title: "Fiscal Data Package Standard",
      logo: {
        light: "/assets/logo-light.svg",
        dark: "/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/frictionlessdata/datapackage-fiscal",
      },
      favicon: "favicon.ico",
      editLink: {
        baseUrl: "https://github.com/frictionlessdata/datapackage/edit/main/",
      },
      lastUpdated: true,
      customCss: ["typeface-hk-grotesk/index.css", "/assets/styles.css"],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
      sidebar: [
        {
          label: "Specifications",
          autogenerate: { directory: "specifications" },
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.js",
            "data-domain": "fiscal.datapackage.org",
            defer: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon-16x16.png",
            sizes: "16x16",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon-32x32.png",
            sizes: "32x32",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/android-chrome-192x192.png",
            sizes: "192x192",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/android-chrome-512x512.png",
            sizes: "512x512",
          },
        },
      ],
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          // Wrap the heading text in a link.
          behavior: "wrap",
        },
      ],
    ],
  },
})
