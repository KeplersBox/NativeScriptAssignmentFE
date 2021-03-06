import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import{User} from "./user"
import {Config} from "../config";

@Injectable()

export class UserService {
    constructor(private http: Http){}
    register(user:User){
      return this.http.post(
          Config.apiUrl+"signUp",
          JSON.stringify({
              username: user.email,
              password: user.password
          }),
          {headers:this.getCommonHeaders()}
      )
      .catch(this.handleErrors);
    }

    signIn(user:User){
        return this.http.post(
            Config.apiUrl+"signin",
            JSON.stringify({
                username: user.email,
                password: user.password
            }),
            {headers:this.getCommonHeaders()}
        )
        .catch(this.handleErrors);
    }

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