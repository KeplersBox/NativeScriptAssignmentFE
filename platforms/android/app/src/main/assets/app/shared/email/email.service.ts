import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import{Email} from "./email"
import {Config} from "../config";

@Injectable()

export class EmailService {
    constructor(private http: Http){}
    send(email:Email){
      return this.http.post(
          Config.apiUrl+"sendMail",
          JSON.stringify({
              sender: email.sender,
              reciever: email.reciver,
              subject:email.subject,
              email:email.email
          }),
          {headers:this.getCommonHeaders()}
      )
      .catch(this.handleErrors);
    }

    getEmails(id){   
        
        return this.http.get(
            Config.apiUrl+"email/"+id,
           
        )
        .catch(this.handleErrors);
    }

    // signIn(user:User){
    //     return this.http.post(
    //         Config.apiUrl+"signin",
    //         JSON.stringify({
    //             username: user.email,
    //             password: user.password
    //         }),
    //         {headers:this.getCommonHeaders()}
    //     )
    //     .catch(this.handleErrors);
    // }

    getCommonHeaders(){
        let headers = new Headers;
        headers.append("Content-type","application/json");
        return headers;
    }

    handleErrors(error:Response){
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}