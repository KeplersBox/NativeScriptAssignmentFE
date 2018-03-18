import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { EmailService } from "../shared/email/email.service";
import { ActivatedRoute } from "@angular/router";
import { Email } from "../shared/email/email";

@Component({
    selector: "Inbox",
    moduleId: module.id,
    providers:[EmailService],
    templateUrl: "./inbox.component.html"
})

export class InboxComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    username:string;
    inboxes:Array<Email>
    constructor(private emailService:EmailService, private route:ActivatedRoute){
    }

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.username = params["username"];            
        });
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.emailService.getEmails(this.username)
        .subscribe(
            (res)=>{
               this.inboxes= res.json();           

              
            },
            ()=>{console.log("error")}
        );

    }
    

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
