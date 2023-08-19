import React from "react"
import Link from "next/link"

const Contact = () => {
  const handleSocialMediaClick = (url: string) => {
    window.open(url, "_blank")
  }
  return <>
    <div>
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out to us on any of our social media platforms:
      </p>
      <ul>
        <li>
          <Link href="https://twitter.com" target="_blank">
            Twitter
          </Link>
        </li>
        <li>
          <Link href="https://facebook.com" target="_blank">
            Facebook
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com" target="_blank">
            Instagram
          </Link>
        </li>
      </ul>
    </div>
  </>;
}

export default Contact
