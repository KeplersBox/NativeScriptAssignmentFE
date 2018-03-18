"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(config_1.Config.apiUrl + "signUp", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    UserService.prototype.signIn = function (user) {
        return this.http.post(config_1.Config.apiUrl + "signin", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    UserService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers;
        headers.append("Content-type", "application/json");
        return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUFzRDtBQUN0RCw4Q0FBMkM7QUFDM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0Isb0NBQWlDO0FBSWpDO0lBQ0kscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUUsQ0FBQztJQUNqQyw4QkFBUSxHQUFSLFVBQVMsSUFBUztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxFQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDLEVBQ0YsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FDcEM7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBUztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBQyxRQUFRLEVBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsRUFDRixFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxDQUNwQzthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFuQ1EsV0FBVztRQUZ2QixpQkFBVSxFQUFFO3lDQUdpQixXQUFJO09BRHJCLFdBQVcsQ0FvQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydHtVc2VyfSBmcm9tIFwiLi91c2VyXCJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe31cbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgIENvbmZpZy5hcGlVcmwrXCJzaWduVXBcIixcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0Q29tbW9uSGVhZGVycygpfVxuICAgICAgKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBzaWduSW4odXNlcjpVc2VyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCtcInNpZ25pblwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0Q29tbW9uSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpe1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtdHlwZVwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOlJlc3BvbnNlKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19