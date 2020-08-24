import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const Share = ({ twitterHandle, url, title, tags }) => {
  const fillColor = "rgba(0, 0, 0, 0)"

  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon bgStyle={{ fill: fillColor }} iconFillColor={"#3b5998"} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon bgStyle={{ fill: fillColor }} iconFillColor={"#1da1f2"} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon bgStyle={{ fill: fillColor }} iconFillColor={"#0077b5"} />
      </LinkedinShareButton>
    </div>
  )
}

export default Share
