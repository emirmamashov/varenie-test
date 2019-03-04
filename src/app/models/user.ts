export class User {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: any;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string; // https://api.github.com/u…5/following{/other_user}
    gists_url: string; // "https://api.github.com/u…5/following{/other_user}"
    starred_url: string; //"https://api.github.com/u…5/starred{/owner}{/repo}"
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string; //https://api.github.com/users/vi3k6i5/events{/privacy}
    received_events_url: string;
    type: string; // 'User'
    site_admin: boolean;
  }
  