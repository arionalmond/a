// http://localhost:3000/a

/*
Good to know:

The .js, .jsx, or .tsx file extensions can be used for Pages.
A page is always the leaf of the route subtree.
A page.js file is required to make a route segment publicly accessible.
Pages are Server Components by default, but can be set to a Client Component.
Pages can fetch data. View the Data Fetching section for more information. 
*/


import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'home',
}

export default function Page() {
  return <div>
    <br></br>
    <br></br>
    
    <a href='https://arionalmond.github.io/blog/' target="_blank">Blog</a>
    <br></br>
    <br></br>
    <a href='https://arion.serveuser.com/' target="_blank">User Server</a>
    <br></br>
    <br></br>
    <a href='https://arion.moneyhome.biz/' target="_blank">Business Server</a>
  </div>
}

