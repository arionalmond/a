# a
status panel for my servers  

## this project
This is [nextjs](https://nextjs.org/) project.  
With NextJS you can 
[start with an example](https://nextjs.org/docs/app/api-reference/cli/create-next-app#with-an-official-nextjs-example). The 
[github-pages example](https://github.com/vercel/next.js/tree/canary/examples/github-pages) supports deploying a statically exported Next.js application to GitHub Pages.  

I went the [manual install](https://nextjs.org/docs/getting-started/installation#manual-installation) route.

Make sure to not add your `out/` directory to `.gitignore`. Next uses `out/` for the production build of the app.    

## setup
mainly folowing the [manual install](https://nextjs.org/docs/getting-started/installation#manual-installation)  

`mind@yours a %npm install next@latest react@latest react-dom@latest`

`mind@yours a % npm run dev`
errors, have to create app folder, `layout.tsx`, and `page.tsx`. 

`npm install -g next` did this for reasons, heard about it somewhere. Basically don't invoke a process to call another process. Just start the process you want started directly. RHEL Node best practices, I think.

`mind@yours a % next dev`
errors, have to create app folder, `layout.tsx`, and `page.tsx`. 

after creating app folder, `layout.tsx`, and `page.tsx` git commit. push to repo.
enable github pages which will give you the `.github/workflows/deploy.yml`.  
Commit the `.github/workflows/deploy.yml` and it's deployed.  

## What next for my next project?  
ping servers. display results. [extend.](https://nextjs.org/docs/app/building-your-application/examples)  



## front end thoughts:
* no framework, templates, I have thoughts ... but I'm told my thoughts are blasphemy.
* develop the core parts a frameworks really helps with  

OR    
* [hugo](https://gohugo.io/)
    * [examples](https://themes.gohugo.io/)
* [expressjs](https://expressjs.com/)
    * [examples](https://expressjs.com/en/starter/examples.html)
* [react](https://react.dev/)
    * [nextjs](https://nextjs.org/) suggested by react for new projects
* [astro](https://astro.build/) seems cool, but first attempt was not a great experience  




<br>

### notes
<br>
npm run dev, npm run build, npm run start
Error: "next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.
<br>
manual install errors before creating app folder, `layout.tsx`, and `page.tsx`. 
would like to follow these error paths to see the internals, figure out execution order and flow of next/react.
 
`mind@yours a % npm run dev`
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
