"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.isHiddenSubMenu = [false, false, false, false, false, false];
        this.messages = [
            { title: 'Element blocked' },
            { title: 'Pressure warning' },
            { title: 'Message from admin' },
            { title: 'Monthly review' }
        ];
        this.isMenuHidden = false;
        this.isMenuShrunken = false;
    }
    ;
    AppComponent.prototype.hideElements = function () {
        this.isHiddenSubMenu = this.isHiddenSubMenu.map(function (v) { return v = false; });
    };
    AppComponent.prototype.checkScreenWidth = function () {
        if (window.innerWidth < 1200 && window.innerWidth > 499) {
            this.isMenuShrunken = true;
            this.isMenuHidden = false;
            this.hideElements();
        }
        else if (window.innerWidth < 500) {
            this.isMenuShrunken = false;
            this.isMenuHidden = true;
            this.hideElements();
        }
        else {
            this.isMenuHidden = false;
            this.isMenuShrunken = false;
        }
    };
    AppComponent.prototype.toggleMenu = function () {
        if (window.innerWidth < 1200 && window.innerWidth > 499) {
            this.isMenuHidden = false;
            this.isMenuShrunken = !this.isMenuShrunken;
        }
        else if (window.innerWidth < 500) {
            this.isMenuHidden = !this.isMenuHidden;
        }
        else {
            this.isMenuShrunken = !this.isMenuShrunken;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.checkScreenWidth();
        $(".subMenuItemContainer").find('.subMenuLink').click(function () {
            $('.subMenuLink').removeClass('selectedSection');
            $(this).addClass('selectedSection');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.component.js.map