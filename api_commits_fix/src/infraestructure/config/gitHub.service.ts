/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { Octokit } from "octokit";

@Injectable()
export class GitHubService {
    private readonly logger = new Logger(GitHubService.name);
    constructor(private readonly octokit: Octokit) { }
    
    async getCommits(owner: string, repo: string) {
        try {
            const response = await this.octokit.request(`GET /repos/${owner}/${repo}/commits`)
            return response;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
        
    }
}