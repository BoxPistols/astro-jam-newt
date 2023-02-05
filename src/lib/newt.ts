import { createClient, Content } from "newt-client-js"
// import { Author } from "./author"
// import { Tag } from "./tag"

export interface Author {
  slug: string
  fullName: string
  profileImage: { src: string } | null
  biography: string
}

export interface Photo {
  title: string | null
  fileName: string | null
  src: string | null | undefined
  postPhoto: string | null
}

export interface Tag {
  name: string
  slug: string
}

export interface Article {
  title: string
  slug: string
  body: string
  meta: {
    title: string
    description: string
    ogImage: { src: string } | null
  }
  coverImage: { src: string } | null
  author: (Content & Author) | null
  tags: (Content & Tag)[]
  photo: (Content & Photo)[]
  articlePhoto: {
    height: string
    fileName: string
  }
}

export interface Gallery {
  name: string
  slug: string
  body: string
  photo: { src: string } | null
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
})
