"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.send = function (email) {
        return this.http.post(config_1.Config.apiUrl + "sendMail", JSON.stringify({
            sender: email.sender,
            reciever: email.reciver,
            subject: email.subject,
            email: email.email
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    EmailService.prototype.getEmails = function (id) {
        return this.http.get(config_1.Config.apiUrl + "email/" + id)
            .catch(this.handleErrors);
    };
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
    EmailService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers;
        headers.append("Content-type", "application/json");
        return headers;
    };
    EmailService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    EmailService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmailService);
    return EmailService;
}());
exports.EmailService = EmailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtYWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQXNEO0FBQ3RELDhDQUEyQztBQUMzQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBaUM7QUFJakM7SUFDSSxzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRSxDQUFDO0lBQ2pDLDJCQUFJLEdBQUosVUFBSyxLQUFXO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFDLFVBQVUsRUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdkIsT0FBTyxFQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBQyxLQUFLLENBQUMsS0FBSztTQUNwQixDQUFDLEVBQ0YsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FDcEM7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsRUFBRTtRQUVSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxRQUFRLEdBQUMsRUFBRSxDQUU1QjthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxJQUFJO0lBRUosdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7UUFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsS0FBYztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlDUSxZQUFZO1FBRnhCLGlCQUFVLEVBQUU7eUNBR2lCLFdBQUk7T0FEckIsWUFBWSxDQStDeEI7SUFBRCxtQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0e0VtYWlsfSBmcm9tIFwiLi9lbWFpbFwiXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBFbWFpbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7fVxuICAgIHNlbmQoZW1haWw6RW1haWwpe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgIENvbmZpZy5hcGlVcmwrXCJzZW5kTWFpbFwiLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgc2VuZGVyOiBlbWFpbC5zZW5kZXIsXG4gICAgICAgICAgICAgIHJlY2lldmVyOiBlbWFpbC5yZWNpdmVyLFxuICAgICAgICAgICAgICBzdWJqZWN0OmVtYWlsLnN1YmplY3QsXG4gICAgICAgICAgICAgIGVtYWlsOmVtYWlsLmVtYWlsXG4gICAgICAgICAgfSksXG4gICAgICAgICAge2hlYWRlcnM6dGhpcy5nZXRDb21tb25IZWFkZXJzKCl9XG4gICAgICApXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxuICAgIGdldEVtYWlscyhpZCl7ICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwrXCJlbWFpbC9cIitpZCxcbiAgICAgICAgICAgXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICAvLyBzaWduSW4odXNlcjpVc2VyKXtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgIC8vICAgICAgICAgQ29uZmlnLmFwaVVybCtcInNpZ25pblwiLFxuICAgIC8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgIC8vICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgLy8gICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0Q29tbW9uSGVhZGVycygpfVxuICAgIC8vICAgICApXG4gICAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgLy8gfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpe1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtdHlwZVwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOlJlc3BvbnNlKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19