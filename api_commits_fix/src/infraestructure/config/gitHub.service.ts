/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { Octokit } from "octokit";

@Injectable()
export class GitHubService {
    private readonly logger = new Logger(GitHubService.name);
    constructor(private readonly octokit: Octokit) { }

    async getCommits(owner: string, repo: string) {

        //We send the commits record and photo profile by each commiter
        const response = await this.octokit.request(`GET /repos/${owner}/${repo}/commits`);
        const responseModified = await Promise.all(response.data.map(async item => {
            const { sha, commit, html_url, } = item;
            const { author, message } = commit;
            const { name, date } = author;
            return {
                sha: sha,
                url: html_url,
                message: message,
                name: name,
                date: date.split("T").shift(),
                photoProfile: (await this.octokit.request(`GET /users/${html_url.split("//github.com/").pop().split("/").shift()}`)).data.avatar_url
            };
        }));
        this.logger.log('Data extracted for gitHub API successfully');
        return responseModified;
    }
}