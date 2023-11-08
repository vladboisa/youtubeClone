export interface SearchItem {
  kind: Kind;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export enum Kind {
  YoutubeVideo = 'youtube#video',
}

export interface Snippet {
  publishedAt: Date;
  channelID: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryID: string;
  liveBroadcastContent: LiveBroadcastContent;
  localized: Localized;
  defaultAudioLanguage: DefaultLanguage;
  defaultLanguage?: DefaultLanguage;
}

export interface Thumbnails {
  default:ThumbnailsParams;
  medium:ThumbnailsParams;
  high:ThumbnailsParams;
  standard: ThumbnailsParams;
  maxres: ThumbnailsParams;
}

export interface ThumbnailsParams {
  url: string;
  width: number;
  height: number;
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Localized {
  title: string;
  description: string;
}

export enum DefaultLanguage {
  En = 'en',
  EnUS = 'en-US',
  Ru = 'ru',
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
