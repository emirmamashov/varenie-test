import { User } from "./user";
import { Licence } from "./licence";

export class Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string; // "https://api.github.com/r…/flashtext/keys{/key_id}"
  collaborators_url: string; // "https://api.github.com/r…aborators{/collaborator}"
  teams_url: string;
  hooks_url: string;
  issue_events_url: string; // "https://api.github.com/r…t/issues/events{/number}"
  events_url: string; //"https://api.github.com/repos/vi3k6i5/flashtext/events"
  assignees_url: string; // "https://api.github.com/r…ashtext/assignees{/user}"
  branches_url: string; // 	"https://api.github.com/r…shtext/branches{/branch}"
  tags_url: string; // "https://api.github.com/r…s/vi3k6i5/flashtext/tags"
  blobs_url: string; // "https://api.github.com/r…lashtext/git/blobs{/sha}"
  git_tags_url: string; // "https://api.github.com/r…flashtext/git/tags{/sha}"
  git_refs_url: string; // "https://api.github.com/r…flashtext/git/refs{/sha}"
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string; // "https://api.github.com/r…lashtext/issues{/number}"
  pulls_url: string; // "https://api.github.com/r…flashtext/pulls{/number}"
  milestones_url: string; // "https://api.github.com/r…text/milestones{/number}"
  notifications_url: string; // "https://api.github.com/r…since,all,participating}"
  labels_url: string; // "https://api.github.com/r…/flashtext/labels{/name}"
  releases_url: string; // "https://api.github.com/r…/flashtext/releases{/id}"
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  open_issues_count: number;
  licence: Licence;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
}
