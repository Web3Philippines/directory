export interface Project {
  id: string;
  name: string;
  verified: boolean;
  description: string;
  tags: Array<string>;
  links: {
    facebook: {
      id: string;
      url: string;
    };
    discord: {
      id: string;
      url: string;
    };
    twitter?: {
      id: string;
      url: string;
    };
  };
}

export const projects: Array<Project> = [
  {
    id: "web3ph",
    name: "Web3 PHL",
    verified: true,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ipsam qui excepturi quam eius, ratione nulla, nesciunt quo autem consequatur rem debitis, atque adipisci saepe est sed porro? Illum, incidunt.",
    tags: ["nft", "defi", "gaming"],
    links: {
      facebook: {
        id: "fb",
        url: "https://web.facebook.com/groups/web3philippines",
      },
      discord: {
        id: "discord",
        url: "https://discord.com/invite/4xbJEBKWKc",
      },
    },
  },
];
