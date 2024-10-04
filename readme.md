# site
A control panel for my sites.  

### front end thoughts:
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

### this project
This is [nextjs](https://nextjs.org/) project.  
With NextJS you can 
[start with an example](https://nextjs.org/docs/app/api-reference/cli/create-next-app#with-an-official-nextjs-example), 
[github-pages example](https://github.com/vercel/next.js/tree/canary/examples/github-pages) supports deploying a statically exported Next.js application to GitHub Pages!    

I went the [manual install](https://nextjs.org/docs/getting-started/installation#manual-installation) route.

Make sure to not add your `out` directory to `.gitignore`. Next uses out for the production build of the app.    

### How I used

`mind@yours a %npm install next@latest react@latest react-dom@latest`

`mind@yours a % npm run dev`
errors, have to creae app folder, `layout.tsx`, and `page.tsx`. 

`npm install -g next` did this for reasons, heard about it somewhere. Basically don't invoke a process to call another process. Just start the process you want started directly. RHEL Node best practices, I think.

`mind@yours a % next dev`
errors, have to creae app folder, `layout.tsx`, and `page.tsx`. 


https://nextjs.org/docs/app/building-your-application/examples


npm run dev, npm run build, npm run start
Error: "next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.


