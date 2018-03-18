"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var user_1 = require("../shared/user/user");
var user_service_1 = require("../shared/user/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        this.isBusy = true;
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            this.isBusy = false;
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.signIn(this.user)
            .subscribe(function (res) {
            _this.isBusy = false;
            // console.log(res.json()._id);
            var navigationExtras = {
                queryParams: {
                    "id": res.json()._id,
                    "username": res.json().username
                }
            };
            _this.router.navigate(["/inbox"], navigationExtras);
        }, function () {
            _this.alert("Unable to login");
            _this.isBusy = false;
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.user.password != this.confirmPasswords) {
            this.alert("Your passwords do not match.");
            return;
        }
        this.userService.register(this.user)
            .subscribe(function () {
            _this.alert("successfully created account");
            _this.isLoggingIn = true;
            _this.isBusy = false;
        }, function () {
            _this.isBusy = false;
            _this.alert("Unable to create accounte");
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for MyInbox to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        });
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    LoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "confirmPassword", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            providers: [user_service_1.UserService],
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.scss"]
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLDBDQUEyRDtBQUUzRCx1REFBNEQ7QUFDNUQsaURBQWdEO0FBRWhELDRDQUF5QztBQUN6Qyw0REFBMEQ7QUFVMUQ7SUFVSSx3QkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsTUFBYztRQUFwRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVHhGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBVWYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsTUFBTSxDQUFDO1FBRVgsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENB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O1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FFeEMsQ0FBQzt5Q0FXNEIsV0FBSSxFQUF1QiwwQkFBVyxFQUFrQixlQUFNO09BVi9FLGNBQWMsQ0E4RzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlHRCxJQThHQztBQTlHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuc2Nzc1wiXVxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICBjb25maXJtUGFzc3dvcmRzOnN0cmluZztcclxuICAgIHB1YmxpYyBpc0J1c3k6Ym9vbGVhbjtcclxuXHJcbiAgIFxyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIikgY29uZmlybVBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLmlzQnVzeSA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2lnbkluKHRoaXMudXNlcilcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuanNvbigpLl9pZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJlcy5qc29uKCkuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6cmVzLmpzb24oKS51c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmJveFwiXSxuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5hYmxlIHRvIGxvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy5jb25maXJtUGFzc3dvcmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJzdWNjZXNzZnVsbHkgY3JlYXRlZCBhY2NvdW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCdXN5PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmFibGUgdG8gY3JlYXRlIGFjY291bnRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDt9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgTXlJbmJveCB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=