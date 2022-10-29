import { Component, OnInit } from '@angular/core';
import { GetCommitsService } from '../../services/get-commits.service';
import { commit } from 'src/app/models/model.commit';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [GetCommitsService],
})
export class ContentComponent implements OnInit {
  public info = commit;
  public commits: Array<any> = [];
  constructor(private _getCommitService: GetCommitsService) {}
  ngOnInit() {
    this._getCommitService.getCommits().subscribe((response) => {
      if (response) {
        this.commits = response;
      }
    });
  }

  leerMas(data: {
    sha: string;
    node_id: string;
    commit: {
      author: { name: string; email: string; date: string };
      committer: { name: string; email: string; date: string };
      message: string;
      tree: { sha: string; url: string };
      url: string;
      comment_count: number;
      verification: {
        verified: string;
        reason: string;
        signature: string;
        payload: string;
      };
    };
    url: string;
    html_url: string;
    comments_url: string;
    author: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gist_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    committer: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    parents: [
      {
        sha: string;
        url: string;
        html_url: string;
      }
    ];
  }) {
    this.info.sha = data.sha;
    this.info.node_id = data.node_id;
    this.info.commit.author.name = data.commit.author.name;
    this.info.commit.author.email = data.commit.author.email;
    this.info.commit.author.date = data.commit.author.date;
    this.info.commit.committer.name = data.commit.committer.name;
    this.info.commit.committer.email = data.commit.committer.email;
    this.info.commit.committer.date = data.commit.committer.date;
    this.info.commit.message = data.commit.message;
    this.info.commit.tree.sha = data.commit.tree.sha;
    this.info.commit.tree.url = data.commit.tree.url;
    this.info.commit.url = data.url;
    this.info.commit.comment_count = String(data.commit.comment_count);
    this.info.commit.verification.verified = data.commit.verification.verified;
    this.info.commit.verification.reason = data.commit.verification.reason;
    this.info.commit.verification.signature = data.commit.verification.signature;
    this.info.commit.verification.payload = data.commit.verification.payload;
    this.info.url = data.url;
    this.info.html_url = data.html_url
    this.info.author.login = data.author.login;
    this.info.author.id = String(data.author.id);
    this.info.author.node_id = data.author.node_id;
    this.info.author.avatar_url = data.author.avatar_url;
    this.info.author.html_url = data.author.html_url;

  }
}
