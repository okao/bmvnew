"use client"

import React from "react"
import {
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share"

const ShareButton = ({
  type = "facebook",
  url,
  title,
  summary,
}: {
  type: string // facebook, linkedin, pinterest, reddit, whatsapp
  url: string
  title: string
  summary: string
}) => {
  const SButton = ({ style }: { style: React.CSSProperties }) => {
    switch (type) {
      case "facebook":
        return (
          <FacebookShareButton url={url} quote={title} hashtag="#ބީއެމްއެލް">
            <button
              title="އިސްރާއީލުން ސީރިއާއަށް ދިން ހަމަލާތަކުގައި 40 އަށްވުރެ ގިނަ މީހުން ޝަހީދުވެއްޖެ"
              className="react-share__ShareButton"
              // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "5px",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </FacebookShareButton>
        )
      case "linkedin":
        return (
          <LinkedinShareButton url={url} title={title} summary={summary}>
            <LinkedinIcon size={32} style={style} />
          </LinkedinShareButton>
        )
      case "pinterest":
        return (
          <PinterestShareButton url={url} media={url} description={summary}>
            <PinterestIcon size={32} style={style} />
          </PinterestShareButton>
        )
      case "reddit":
        return (
          <RedditShareButton url={url} title={title}>
            <RedditIcon size={32} style={style} />
          </RedditShareButton>
        )
      case "whatsapp":
        return (
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        )
      case "twitter":
        return (
          <TwitterShareButton url={url} title={title}>
            <button
              title="އިސްރާއީލުން ސީރިއާއަށް ދިން ހަމަލާތަކުގައި 40 އަށްވުރެ ގިނަ މީހުން ޝަހީދުވެއްޖެ"
              className="react-share__ShareButton"
              // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "5px",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <TwitterIcon size={32} />
            </button>
          </TwitterShareButton>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <SButton
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: "0px",
          font: "inherit",
          color: "inherit",
          cursor: "pointer",
        }}
      />
    </div>
  )
}

export default ShareButton
