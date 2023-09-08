export type ArticlePath = `/${string}/${string}`
export type ProfileImage = `/uploads/user/profile_image/${number}/${string}`
export type HexColorCode = `#${string}`

export type User = {
  name: string,
  username: string,
  twitter_username: string,
  github_username: string,
  user_id: number,
  website_url: null | URL,
  profile_image: ProfileImage,
  profile_image_90: ProfileImage
}

export type Organization = {
  name: string,
  username: string,
  slug: number,
  profile_image: ProfileImage,
  profile_image_90: ProfileImage
}

export type FlareTag = {
  name: string,
  bg_color_hex: HexColorCode,
  text_color_hex: HexColorCode
}

export type Article = {
  type_of: string,
  id: number,
  title: string,
  description: string,
  readable_publish_date: string,
  slug: string,
  path: ArticlePath,
  url: URL,
  comments_count: number,
  public_reactions_count: number,
  collection_id: null | number,
  published_timestamp: Date,
  positive_reactions_count: number,
  cover_image: URL | null,
  social_image: URL | null,
  canonical_url: URL,
  created_at: Date,
  edited_at: null | Date,
  crossposted_at: null,
  published_at: Date | null,
  last_comment_at: Date | null,
  reading_time_minutes: 1,
  tag_list: Array<string>,
  tags: string,
  user: User,
  organization: Organization | null,
  flare_tag: FlareTag | null,
}