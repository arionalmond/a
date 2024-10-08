/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  output: 'export',

  basePath: "/a",
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
}

module.exports = nextConfig