import {defineQuery} from 'next-sanity'

const projectFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  challenge,
  "date": coalesce(date, _updatedAt),
  role,
  tools,
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`

export const allProjectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${projectFields}
  }
`)

export const projectQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug] [0] {
    productThinking {
      headline,
      content[]{
        ..., 
        markDefs[]{..., ${linkReference}}
      },
      gallery[]{..., "alt": coalesce(alt, "")}
    },
    process {
      headline,
      content[]{
        ..., 
        markDefs[]{..., ${linkReference}}
      },
      gallery[]{..., "alt": coalesce(alt, "")}
    },
    impact,
    prototypeUrl,
    externalUrl,
    ${projectFields}
  }
`)

export const projectPagesSlugs = defineQuery(`
  *[_type == "project" && defined(slug.current)]
  {"slug": slug.current}
`)
