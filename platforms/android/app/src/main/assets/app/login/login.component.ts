import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as dialogs from "ui/dialogs";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import {User} from "../shared/user/user";
import { UserService } from "../shared/user/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    providers:[UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
    
})
export class LoginComponent {
    isLoggingIn = true;
    confirmPasswords:string;
    public isBusy:boolean;

   
    user: User;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
    
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
      
        this.isBusy = true;
        if (!this.user.email || !this.user.password) {
           this.alert("Please provide both an email address and password.");
           this.isBusy = false;
            return;
            
        }

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }


    login() {
        
        this.userService.signIn(this.user)
        .subscribe(
            (res)=>{
                this.isBusy=false;
                // console.log(res.json()._id);
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        "id": res.json()._id,
                        "username":res.json().username
                    }
                };
               this.router.navigate(["/inbox"],navigationExtras);
              

            },
            ()=>{
                this.alert("Unable to login");
                this.isBusy=false;
            }
        );
    }

    register() {
        if (this.user.password != this.confirmPasswords) {
            this.alert("Your passwords do not match.");
            return;
        }
        this.userService.register(this.user)
                .subscribe(
                    ()=>{
                       this.alert("successfully created account");
                       this.isLoggingIn = true;
                       this.isBusy=false;
                    },
                    ()=>{
                        this.isBusy=false;
                        this.alert("Unable to create accounte")
                        ;}
                );

        }
    

    forgotPassword() {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for MyInbox to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

     alert(message: string) {
         return alert({
             title: "MyInbox",
            okButtonText: "OK",
             message: message
         });
    }
}
