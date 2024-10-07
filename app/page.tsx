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

    <section id="banner">
      <h1>/a</h1>
      {/* <h3> todo: buttons to change the color scheme </h3> */}
    </section>

    <section id="gpps">
      <h1>gpps: (global page positioning system)</h1>

      <ul>
        <li>
          <h3><a href='https://github.com/arionalmond/a' target="_blank">site source code</a></h3>
        </li>
        <ul>
          <li>
            <h3><a href='https://github.com/arionalmond/arionalmond' target="_blank">github profile</a></h3>
          </li>
        </ul>
        <li>
          <h3>servers</h3>
          <p>note: not always on</p>
          <ul>
            <li>
              <a href='https://arion.serveuser.com/' target="_blank">User Server</a>
            </li>
            <li>
              <a href='https://arion.moneyhome.biz/' target="_blank">Business Server</a>
            </li>
          </ul>
        </li>

        <li>
          <h3><a href='https://arionalmond.github.io/blog/' target="_blank">blog</a></h3>
        </li>
      </ul>
    </section>

  </div>
}

