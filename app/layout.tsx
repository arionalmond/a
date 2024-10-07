/*
Good to know: 
  You should not manually add <head> tags such as <title> and <meta> to root layouts. 
  Instead, use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements.
*/

import Link from 'next/link'

// These styles apply to every route in the application
import './global.css'

// external css
// import 'bootstrap/dist/css/bootstrap.css'
// https://nextjs.org/docs/app/building-your-application/styling/css#external-stylesheets

export default function RootLayout({

  children,

}: {

  children: React.ReactNode

}) {

  return (
    <html lang="en">
      {/* Layout UI */}
      <body>
        {/* <h1>Navigation</h1> */}
        {/* <ol> */}
        {/* <p><Link href="/">Home</Link></p> */}
        {/* </ol> */}
        {children}
      </body>
    </html>
  )

}