import Image from "next/image"
import type { TwitterComponents } from "react-tweet"

export const TwitterComponent: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}
