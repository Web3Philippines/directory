/**
 * use interface as much as possible to make it extendable for future purposes if any
 * use type alias if type form is expected to not change at any time during the development
 * Type Aliases vs Intefaces
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 *
 * use single type arrays (i.e., string[]) for common arrays that doesnt accept multiple types
 * otherwise, use mixed type arrays (i.e, Array<string, Project, boolean>)
 * https://mattferderer.com/difference-between-array-types-in-typescript
 */

export interface SocialMedia {
  id: string;
  url: string;
}

export interface Directory {
  id: string;
  name: string;
  verified: boolean;
  image: string;
  description: string;
  tags: string[];
  links: {
    website: SocialMedia;
    facebook: SocialMedia;
    discord: SocialMedia;
    twitter: SocialMedia;
    linkedin: SocialMedia;
    telegram: SocialMedia;
    tiktok: SocialMedia;
    medium: SocialMedia;
  };
}

export interface DirectoryQuery {
  name?: string;
  tags?: string[];
  page: number;
  size: number;
}
