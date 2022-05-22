export type Videos = {
  id: string
  results: Video[]
}

type VideoType = keyof typeof VideoTypeEnum

export enum VideoTypeEnum {
  'Clip',
  'Featurette',
  'Trailer',
  'Teaser'
}

export type Video = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: 'YouTube' | 'Vimeo'
  size: number
  type: VideoType
  official?: boolean
  published_at: string
}
