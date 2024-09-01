var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Creating an abstract method
var ProjectSpecificMethod = /** @class */ (function () {
    function ProjectSpecificMethod() {
    }
    ProjectSpecificMethod.prototype.constrcutor = function (page) {
        this.page = page;
    };
    ProjectSpecificMethod.prototype.logSession = function () {
        console.log("This is a concrete method");
    };
    return ProjectSpecificMethod;
}());
//Creating a class and extending the abstract method
var ShoppingPage = /** @class */ (function (_super) {
    __extends(ShoppingPage, _super);
    function ShoppingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //    protected page:any;
    ShoppingPage.prototype.navigateTo = function (url) {
        // this.page.goto(url);
        console.log("Navigate to login page ");
    };
    ShoppingPage.prototype.login = function (username, password) {
        this.page.fill("", username);
        this.page.fill("", password);
        console.log("Enter user credentials ");
    };
    return ShoppingPage;
}(ProjectSpecificMethod));
var shop_Page = new ShoppingPage();
shop_Page.navigateTo("URL");
var ProductPage = /** @class */ (function () {
    function ProductPage() {
    }
    ProductPage.prototype.enterUser = function () {
        return "username";
    };
    ProductPage.prototype.enterPassword = function () {
        return "password";
    };
    return ProductPage;
}());
var prod = new ProductPage();
prod.enterPassword();
