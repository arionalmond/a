
manual install errors before creating app folder, `layout.tsx`, and `page.tsx`. 
would like to follow these paths to see the internals, figure out execution order and flow of next/react.
 
```
> dev
> next dev

  ▲ Next.js 14.2.14
  - Local:        http://localhost:3000

 ✓ Starting...
Error: > Couldn't find any `pages` or `app` directory. Please create one under the project root
    at findPagesDir (/Users/arionalmond/github.com/arionalmond/a/node_modules/next/dist/lib/find-pages-dir.js:42:15)
    at initialize (/Users/arionalmond/github.com/arionalmond/a/node_modules/next/dist/server/lib/router-server.js:76:69)
    at async Server.<anonymous> (/Users/arionalmond/github.com/arionalmond/a/node_modules/next/dist/server/lib/start-server.js:249:36)
```
