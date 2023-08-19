import React from "react"
import Link from "next/link"

const Contact = () => {
  const handleSocialMediaClick = (url: string) => {
    window.open(url, "_blank")
  }
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us on any of our social media platforms:
        </p>
        <ul>
          <li>
            <Link href="https://twitter.com">
              <a target="_blank">Twitter</a>
            </Link>
          </li>
          <li>
            <Link href="https://facebook.com">
              <a target="_blank">Facebook</a>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com">
              <a target="_blank">Instagram</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact
