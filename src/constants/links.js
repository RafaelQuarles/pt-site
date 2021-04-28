import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Pricing",
    url: "/",
  },
  {
    id: 3,
    text: "Client Page",
    url: "/page-2",
  },
  {
    id: 4,
    text: "Contact",
    url: "/",
  },
]

/* const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}> {link.text} </Link>
    </li>
  )
})
 */
export default ({ styleClass }) => {
  return (
    <ul className={`nav-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        const { id, url, text } = link

        return (
          <li key={id}>
            <Link to={url}> {text} </Link>
          </li>
        )
      })}
    </ul>
  )
}
