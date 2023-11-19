/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { DataOutGetComitstDTO } from "../dtos/dataOutGetComits.dto";

@Injectable()
export class DataTransformService {

    //This method transform the array only with the elements required /////
    transformData(data: any): DataOutGetComitstDTO {
        return data.map((item: any)  => {
            console.log(item);
            const { sha, commit, html_url, } = item;
            const { author, message } = commit;
            const { name, date } = author;

            return {
                sha: sha,
                url: html_url,
                message: message,
                name: name,
                date: date
            };
        })
    }

}