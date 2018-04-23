webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/SignIn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignIn; });
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    return SignIn;
}());



/***/ }),

/***/ "./src/app/SignUp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUp; });
var SignUp = /** @class */ (function () {
    function SignUp() {
    }
    return SignUp;
}());



/***/ }),

/***/ "./src/app/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/addpet/addpet.component.css":
/***/ (function(module, exports) {

module.exports = ".form-horizontal{\r\n  width: 340px;\r\n  margin: 10px auto;\r\n}\r\n.form-horizontal form {\r\n  margin-bottom: 15px;\r\n  background: #f7f7f7;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  padding: 30px;\r\n}\r\n.form-control, .btn {\r\n  min-height: 38px;\r\n  border-radius: 2px;\r\n}\r\n.form-control{\r\n  width: 200px;\r\n}\r\n.btn {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/addpet/addpet.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==\" crossorigin=\"anonymous\">\n<!-- Bootstrap Core CSS -->\n<!--     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==\" crossorigin=\"anonymous\">\n\n<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n<!--[if lt IE 9]>\n<script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n<script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n<![endif]-->\n\n<div class=\"col-md-10 profile-form\" style=\"width: 35%\">\n    <form class=\"form-horizontal\"(ngSubmit)=\"submitDoggie()\" #petForm=\"ngForm\">\n      <!-- Form Name -->\n      <legend>Add Pet</legend>\n      <!--Name input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"petname\">Dog's Name</label>\n        <div class=\"col-md-4\">\n            <input type=\"text\" class=\"form-control input-md\" id=\"petname\" required\n                   [(ngModel)]=\"doggiesForm.name\" name=\"name\"\n                   #name=\"ngModel\">\n          </div>\n        </div>\n      <!-- Desc input -->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"petdesc\">Description (max 200 words)</label>\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" id=\"petdesc\" required\n                 [(ngModel)]=\"doggiesForm.desc\" name=\"desc\"\n                 #desc=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"petage\">Dog's Age</label>\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" id=\"petage\" required\n                 [(ngModel)]=\"doggiesForm.age\" name=\"age\"\n                 #age=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"petbreed\">Dog's Breed</label>\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" id=\"petbreed\" required\n                 [(ngModel)]=\"doggiesForm.breed\" name=\"breed\"\n                 #breed=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"petgender\">Dog's Gender</label>\n        <div class=\"col-md-4\">\n          <select name=\"gender\" id=\"petgender\" [(ngModel)]=\"doggiesForm.gender\">\n            <option value=\"female\">Female</option>\n            <option value=\"male\">Male</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group\">\n      <file-drop headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n        <span></span>\n      </file-drop>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-3\" style=\"padding-right: 0px\">\n          <button type=\"submit\" class=\"btn btn-success\" routerLink=\"/profile/{{this.currid}}\">Submit </button>\n        </div>\n      </div>\n    </form>\n  <div class=\"col-md-4\" style=\"display: inline\">\n    <button class=\"btn btn-danger\" (click)=\"clear()\"> Clear</button>\n  </div>\n  </div>\n  <div class=\"col-md-2 hidden-xs\">\n  </div>\n"

/***/ }),

/***/ "./src/app/addpet/addpet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doggies__ = __webpack_require__("./src/app/doggies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddpetComponent = /** @class */ (function () {
    function AddpetComponent(router, pet, dialogRef, data) {
        this.router = router;
        this.pet = pet;
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
    }
    AddpetComponent.prototype.submitDoggie = function () {
        var _this = this;
        this.formData.append('name', this.doggiesForm.name);
        this.formData.append('age', this.doggiesForm.age);
        this.formData.append('desc', this.doggiesForm.desc);
        this.formData.append('breed', this.doggiesForm.breed);
        this.formData.append('gender', this.doggiesForm.gender);
        console.log(this.data['userID']);
        this.pet.addDoggie(this.formData).subscribe(function () { return console.log('doggiesForm is filled'); }, function (err) { console.error(err); alert('Add Doggie Unsuccesful'); }, function () {
            console.log('Add Successful');
            alert('Succesfully added doggie');
            _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                return _this.router.navigateByUrl('/profile/' + _this.data['userID']);
            });
            _this.dialogRef.close();
        });
    };
    AddpetComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    _this.formData.append('displaypic', file);
                    console.log(_this.formData.getAll('displaypic'));
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    AddpetComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    AddpetComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    AddpetComponent.prototype.profile = function () {
        var _this = this;
        this.pet.getLoginId().subscribe(function (resp) {
            _this.currid = resp['id'];
        });
    };
    AddpetComponent.prototype.clear = function () {
        this.doggiesForm = new __WEBPACK_IMPORTED_MODULE_1__doggies__["a" /* Doggies */]();
    };
    AddpetComponent.prototype.ngOnInit = function () {
        this.profile();
        this.formData = new FormData();
        this.doggiesForm = new __WEBPACK_IMPORTED_MODULE_1__doggies__["a" /* Doggies */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__doggies__["a" /* Doggies */])
    ], AddpetComponent.prototype, "doggiesForm", void 0);
    AddpetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addpet',
            template: __webpack_require__("./src/app/addpet/addpet.component.html"),
            styles: [__webpack_require__("./src/app/addpet/addpet.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */], Object])
    ], AddpetComponent);
    return AddpetComponent;
}());



/***/ }),

/***/ "./src/app/addpost/addpost.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addpost/addpost.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==\" crossorigin=\"anonymous\">\r\n<!-- Bootstrap Core CSS -->\r\n<!--     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==\" crossorigin=\"anonymous\">\r\n\r\n<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\r\n<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\r\n<!--[if lt IE 9]>\r\n<script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n<script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\r\n<![endif]-->\r\n\r\n<div class=\"col-md-10 profile-form\" style=\"width: 100%\">\r\n  <form class=\"form-horizontal\"(ngSubmit)=\"addPost()\" #petForm=\"ngForm\">\r\n    <!-- Form Name -->\r\n    <legend>Post</legend>\r\n    <!--Name input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"petname\">Caption</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" class=\"form-control input-md\" id=\"petname\" required\r\n               [(ngModel)]=\"post.caption\" name=\"name\"\r\n               #name=\"ngModel\">\r\n      </div>\r\n    </div>\r\n    <!-- Desc input -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"petdesc\">Location</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" class=\"form-control\" id=\"petdesc\" required\r\n               [(ngModel)]=\"post.location\" name=\"desc\"\r\n               #desc=\"ngModel\">\r\n      </div>\r\n    </div>\r\n    <!-- File Button -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\">Upload photo</label>\r\n      <div class=\"col-md-4\">\r\n        <!-- <input id=\"UploadPhoto\" name=\"UploadPhoto\" class=\"input-file\" type=\"file\" (change)=\"onFileUpload($event.target.files)\"> -->\r\n        <file-drop headertext=\"Drop files here\" style=\"align-content: center\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n          <span></span>\r\n        </file-drop>\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody class=\"upload-name-style\">\r\n          <tr *ngFor=\"let item of files; let i=index\">\r\n            <td><strong>{{ item.relativePath }}</strong></td>\r\n            <!--<td><img src=\"{{ item.fileEntry. }}\"></td>-->\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-3\" style=\"padding-right: 0px\">\r\n        <button type=\"submit\" class=\"btn btn-success\">POST </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"col-md-2 hidden-xs\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/addpost/addpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post__ = __webpack_require__("./src/app/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddpostComponent = /** @class */ (function () {
    function AddpostComponent(pet, route, router, dialog, dialogRef, data) {
        this.pet = pet;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
    }
    AddpostComponent.prototype.addPost = function () {
        var _this = this;
        this.formData.append('caption', this.post.caption);
        this.formData.append('location', this.post.location);
        this.pet.dogPost(this.data['dogID'], this.formData).subscribe(function () { return console.log('postForm is filled'); }, function (err) { console.error(err); alert('Posting Unsuccesful'); }, function () {
            console.log('Post Successful');
            alert('Succesfully Post');
            _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                return _this.router.navigateByUrl('/dogprofile/' + _this.data['dogID']);
            });
            _this.dialog.closeAll();
        });
    };
    AddpostComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    _this.formData.append('pic', file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    AddpostComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    AddpostComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    AddpostComponent.prototype.ngOnInit = function () {
        this.post = new __WEBPACK_IMPORTED_MODULE_4__post__["a" /* Post */]();
        this.formData = new FormData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__post__["a" /* Post */])
    ], AddpostComponent.prototype, "post", void 0);
    AddpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addpost',
            template: __webpack_require__("./src/app/addpost/addpost.component.html"),
            styles: [__webpack_require__("./src/app/addpost/addpost.component.css")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\" style=\"background-color: white;\">\r\n  <div>\r\n    <app-navigation-bar></app-navigation-bar>\r\n  </div>\r\n  <br>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('My Pet Republic');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_route_routing_module__ = __webpack_require__("./src/app/route/route-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_bar_navigation_bar_component__ = __webpack_require__("./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_file_drop__ = __webpack_require__("./node_modules/ngx-file-drop/ngx-file-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__addpet_addpet_component__ = __webpack_require__("./src/app/addpet/addpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dogprofile_dogprofile_component__ = __webpack_require__("./src/app/dogprofile/dogprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__editpet_editpet_component__ = __webpack_require__("./src/app/editpet/editpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__addpost_addpost_component__ = __webpack_require__("./src/app/addpost/addpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__edituser_edituser_component__ = __webpack_require__("./src/app/edituser/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__viewpost_viewpost_component__ = __webpack_require__("./src/app/viewpost/viewpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__followers_followers_component__ = __webpack_require__("./src/app/followers/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__followings_followings_component__ = __webpack_require__("./src/app/followings/followings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__notif_notif_component__ = __webpack_require__("./src/app/notif/notif.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__addpet_addpet_component__["a" /* AddpetComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dogprofile_dogprofile_component__["a" /* DogprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__editpet_editpet_component__["a" /* EditpetComponent */],
                __WEBPACK_IMPORTED_MODULE_20__addpost_addpost_component__["a" /* AddpostComponent */],
                __WEBPACK_IMPORTED_MODULE_21__edituser_edituser_component__["a" /* EdituserComponent */],
                __WEBPACK_IMPORTED_MODULE_22__viewpost_viewpost_component__["a" /* ViewpostComponent */],
                __WEBPACK_IMPORTED_MODULE_23__followers_followers_component__["a" /* FollowersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__followings_followings_component__["a" /* FollowingsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__notif_notif_component__["a" /* NotifComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__route_route_routing_module__["a" /* RouteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_file_drop__["a" /* FileDropModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__editpet_editpet_component__["a" /* EditpetComponent */], __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_21__edituser_edituser_component__["a" /* EdituserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__addpost_addpost_component__["a" /* AddpostComponent */], __WEBPACK_IMPORTED_MODULE_22__viewpost_viewpost_component__["a" /* ViewpostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__addpet_addpet_component__["a" /* AddpetComponent */], __WEBPACK_IMPORTED_MODULE_23__followers_followers_component__["a" /* FollowersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__followings_followings_component__["a" /* FollowingsComponent */], __WEBPACK_IMPORTED_MODULE_25__notif_notif_component__["a" /* NotifComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__services_pet_service__["a" /* PetService */],],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('response')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/doggies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doggies; });
var Doggies = /** @class */ (function () {
    function Doggies() {
    }
    return Doggies;
}());



/***/ }),

/***/ "./src/app/dogprofile/dogprofile.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  max-width: 300px;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nbody {\r\n  padding-top: 1px;\r\n  /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */\r\n}\r\n\r\n.othertop{margin-top:10px;}\r\n\r\n/*rekt */\r\n\r\nbody {background:#f2f2f2;}\r\n\r\ni {font-size:12px; color:#dd0000;}\r\n\r\n.site-title {margin-top: 40px;margin-bottom: 20px; font-weight: 300;}\r\n\r\n.panel {\r\n  -webkit-box-shadow: 0 2px 6px rgba(0,0,0,.08);\r\n  box-shadow: 0 2px 6px rgba(0,0,0,.08);\r\n  background-color: #fff;\r\n  margin-bottom:15px;\r\n}\r\n\r\n.outerdiv{\r\n  background-color: antiquewhite;\r\n  padding-top: 20px;\r\n}\r\n\r\n.middle {\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.container:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n.container:hover .middle {\r\n  opacity: 1;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n.image {\r\n  opacity: 1;\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dogprofile/dogprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n  <!--new -->\n  <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n  <script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <!------ Include the above in your HEAD tag ---------->\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <style>\n    body,h1,h2,h3,h4,h5,h6 {font-family: \"Raleway\", sans-serif}\n  </style>\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"w3-light-grey w3-content\" style=\"max-width:1600px\">\n<br>\n<div class=\"w3-main\" style=\"margin-left:80px\">\n        <div class=\"container\">\n          <h3 class=\"site-title\">Dog's Profile</h3>\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div class=\"panel\">\n                <button style=\"width: 150px\" routerLink=\"/profile/{{this.owner}}\">{{this.userForm.username}}'s Profile</button>\n                <div class=\" panel-body \">\n                  <div class=\"col-md-5\" style=\"margin-bottom: 30px\">\n                    <img class=\"img-responsive\" src=\"http://localhost/gg/storage/app/public/images/{{this.dogDisplay}}\" style=\"width:50%;\">\n                    <i class=\"fa fa-wrench\" (click)=\"openDialog()\" *ngIf=\"edit\"> Edit Profile</i>\n                    <div class=\" clearfix\">\n                      <h1>{{this.dogName}}</h1>\n                      <h4 style=\"font-style: italic;\">\"{{this.dogDesc}}\"</h4>\n                      <h5><strong>Age: </strong>{{this.dogAge}}</h5>\n                      <h5><strong>Gender: </strong>{{this.dogGender}}</h5>\n                      <h5><strong>Breed: </strong>{{this.dogBreed}}</h5>\n                      <button class=\"btn btn-success btn-md pull-center\" type=\"submit\" *ngIf=\"edit\" (click)=\"openDialog2()\">Add Post</button>\n                      <button class=\"btn btn-danger btn-md pull-center\" type=\"submit\" *ngIf=\"edit\" (click)=\"deleteDog()\">Delete</button>\n                    </div>\n                  </div>\n                  <div class=\"col-md-5\" style=\"margin-bottom: 30px\">\n                    <button style=\"width: 400px; height: 400px; background-color: #333333;\" *ngIf=\"edit\" (click)=\"deleteDog()\">Meet Request</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      <!-- First Photo Grid-->\n      <div class=\"w3-row-padding\" [hidden]=\"this.noPost\">\n        <div class=\"w3-third w3-container w3-margin-bottom container\" *ngFor=\"let p of post\">\n          <img src=\"http://localhost/gg/storage/app/public/images/{{p.pic}}\" alt=\"Picture\" style=\"width:100%\" class=\"w3-hover-opacity\" (click)=\"openDialog3(p.id)\">\n        </div>\n      </div>\n    </div>\n  </body>\n"

/***/ }),

/***/ "./src/app/dogprofile/dogprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doggies__ = __webpack_require__("./src/app/doggies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editpet_editpet_component__ = __webpack_require__("./src/app/editpet/editpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__User__ = __webpack_require__("./src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addpost_addpost_component__ = __webpack_require__("./src/app/addpost/addpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viewpost_viewpost_component__ = __webpack_require__("./src/app/viewpost/viewpost.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DogprofileComponent = /** @class */ (function () {
    function DogprofileComponent(pet, route, router, dialog) {
        this.pet = pet;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
    }
    DogprofileComponent.prototype.profile = function () {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.pet.getLoginId().subscribe(function (resp) {
                _this.currid = resp['id'];
            });
        }
        this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
        this.pet.getDoggie(this.uid).subscribe(function (resp) {
            _this.dogName = resp['name'];
            _this.dogID = resp['id'];
            _this.dogGender = resp['gender'];
            _this.dogAge = resp['age'];
            _this.dogBreed = resp['breed'];
            _this.dogDesc = resp['desc'];
            _this.dogDisplay = resp['displaypic'];
            _this.owner = resp['owner_id'];
            _this.pet.getProfile(_this.owner).subscribe(function (res) {
                _this.userForm.username = res['username'];
                if (_this.owner !== _this.currid) {
                    _this.edit = false;
                }
                else {
                    _this.edit = true;
                }
                _this.pet.getProfile(_this.owner).subscribe(function (doggies) {
                    _this.doggies = doggies['doggies'];
                    if (_this.doggies.length === 0) {
                        _this.noDog = true;
                    }
                    else {
                        _this.noDog = false;
                    }
                });
            });
        });
    };
    DogprofileComponent.prototype.viewAllPost = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
        this.pet.viewAllPosts(this.uid).subscribe(function (post) {
            _this.post = post;
            if (_this.post.length === 0) {
                _this.noPost = true;
            }
            else {
                _this.noPost = false;
            }
        });
    };
    DogprofileComponent.prototype.openDialog = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__editpet_editpet_component__["a" /* EditpetComponent */], {
            data: {
                dogID: this.uid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    DogprofileComponent.prototype.openDialog2 = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__addpost_addpost_component__["a" /* AddpostComponent */], {
            data: {
                dogID: this.uid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    DogprofileComponent.prototype.openDialog3 = function (id) {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__viewpost_viewpost_component__["a" /* ViewpostComponent */], {
            data: {
                postID: id,
                dogID: this.uid,
                dogName: this.dogName,
                ownerName: this.userForm.username,
                ownerID: this.owner,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    DogprofileComponent.prototype.deleteDog = function () {
        var _this = this;
        this.pet.deleteDoggie(this.uid).subscribe(function () { return console.log('Deleting'); }, function (err) { console.error(err); alert('Delete Doggie Unsuccesful'); }, function () {
            console.log('Update Successful');
            alert('Succesfully delete doggie');
            _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                return _this.router.navigateByUrl('/profile/' + _this.currid);
            });
        });
    };
    DogprofileComponent.prototype.ngOnInit = function () {
        this.userForm = new __WEBPACK_IMPORTED_MODULE_5__User__["a" /* User */];
        this.profile();
        this.viewAllPost();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__doggies__["a" /* Doggies */])
    ], DogprofileComponent.prototype, "doggie", void 0);
    DogprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dogprofile',
            template: __webpack_require__("./src/app/dogprofile/dogprofile.component.html"),
            styles: [__webpack_require__("./src/app/dogprofile/dogprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */]])
    ], DogprofileComponent);
    return DogprofileComponent;
}());



/***/ }),

/***/ "./src/app/editpet/editpet.component.css":
/***/ (function(module, exports) {

module.exports = ".form-horizontal{\r\n  width: 340px;\r\n  margin: 10px auto;\r\n}\r\n.form-horizontal form {\r\n  margin-bottom: 15px;\r\n  background: #f7f7f7;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  padding: 30px;\r\n}\r\n.form-control, .btn {\r\n  min-height: 38px;\r\n  border-radius: 2px;\r\n}\r\n.form-control{\r\n  width: 200px;\r\n}\r\n.btn {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/editpet/editpet.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==\" crossorigin=\"anonymous\">\n<!-- Bootstrap Core CSS -->\n<!--     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==\" crossorigin=\"anonymous\">\n\n<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n<!--[if lt IE 9]>\n<script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n<script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n<![endif]-->\n\n<div class=\"col-md-10 profile-form\" style=\"width: 35%\">\n  <form class=\"form-horizontal\"(ngSubmit)=\"updateDoggie()\" #petForm=\"ngForm\">\n    <!-- Form Name -->\n    <legend>Edit Pet</legend>\n    <!--Name input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"petname\">Dog's Name</label>\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control input-md\" id=\"petname\" required\n               [(ngModel)]=\"doggiesForm.name\" name=\"name\"\n               #name=\"ngModel\" value=\"{{doggiesForm.name}}\">\n      </div>\n    </div>\n    <!-- Desc input -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"petdesc\">Description (max 200 words)</label>\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control\" id=\"petdesc\" required\n               [(ngModel)]=\"doggiesForm.desc\" name=\"desc\"\n               #desc=\"ngModel\" value=\"{{doggiesForm.desc}}\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"petage\">Dog's Age</label>\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control\" id=\"petage\" required\n               [(ngModel)]=\"doggiesForm.age\" name=\"age\"\n               #age=\"ngModel\" value=\"{{doggiesForm.age}}\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"petbreed\">Dog's Breed</label>\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control\" id=\"petbreed\" required\n               [(ngModel)]=\"doggiesForm.breed\" name=\"breed\"\n               #breed=\"ngModel\" value=\"{{doggiesForm.breed}}\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"petgender\">Dog's Gender</label>\n      <div class=\"col-md-4\">\n        <!--<select name=\"gender\" id=\"petgender\" [(ngModel)]=\"doggiesForm.gender\">-->\n          <!--<option value=\"female\">Female</option>-->\n          <!--<option value=\"male\">Male</option>-->\n        <!--</select>-->\n        <select name=\"gender\" id=\"petgender\" [(ngModel)]=\"doggiesForm.gender\">\n          <option value=\"female\">Female</option>\n          <option value=\"male\">Male</option>\n        </select>\n      </div>\n    </div>\n    <!-- File Button -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Upload photo</label>\n      <div class=\"col-md-4\">\n        <!-- <input id=\"UploadPhoto\" name=\"UploadPhoto\" class=\"input-file\" type=\"file\" (change)=\"onFileUpload($event.target.files)\"> -->\n        <file-drop headertext=\"Drop files here\" style=\"align-content: center\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n          <span></span>\n        </file-drop>\n        <table class=\"table\">\n          <thead>\n          <tr>\n            <th>File Name</th>\n          </tr>\n          </thead>\n          <tbody class=\"upload-name-style\">\n          <tr *ngFor=\"let item of files; let i=index\">\n            <td><strong>{{ item.relativePath }}</strong></td>\n            <!--<td><img src=\"{{ item.fileEntry. }}\"></td>-->\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-3\" style=\"padding-right: 0px\">\n        <button type=\"submit\" class=\"btn btn-success\">Submit </button>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"col-md-2 hidden-xs\">\n</div>\n"

/***/ }),

/***/ "./src/app/editpet/editpet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doggies__ = __webpack_require__("./src/app/doggies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditpetComponent = /** @class */ (function () {
    function EditpetComponent(pet, route, router, dialogRef, data) {
        this.pet = pet;
        this.route = route;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
    }
    EditpetComponent.prototype.updateDoggie = function () {
        var _this = this;
        this.formData.append('name', this.doggiesForm.name);
        this.formData.append('desc', this.doggiesForm.desc);
        this.formData.append('age', this.doggiesForm.age);
        this.formData.append('gender', this.doggiesForm.gender);
        this.formData.append('breed', this.doggiesForm.breed);
        this.pet.updateDoggie(this.data['dogID'], this.formData).subscribe(function () { return console.log('doggiesForm is filled'); }, function (err) { console.error(err); alert('Update Doggie Unsuccesful'); }, function () {
            console.log('Update Successful');
            alert('Succesfully update doggie');
            _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                return _this.router.navigateByUrl('/dogprofile/' + _this.data['dogID']);
            });
            _this.dialogRef.close();
        });
    };
    EditpetComponent.prototype.profile = function () {
        var _this = this;
        this.pet.getDoggie(this.data['dogID']).subscribe(function (resp) {
            _this.doggiesForm.name = resp['name'];
            _this.doggiesForm.gender = resp['gender'];
            _this.doggiesForm.age = resp['age'];
            _this.doggiesForm.breed = resp['breed'];
            _this.doggiesForm.desc = resp['desc'];
            _this.doggiesForm.displaypic = resp['displaypic'];
            _this.doggiesForm.id = resp['owner_id'];
        });
    };
    EditpetComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    // You could upload it like this:
                    _this.formData = new FormData();
                    _this.formData.append('displaypic', file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
            }
        }
    };
    EditpetComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    EditpetComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    EditpetComponent.prototype.ngOnInit = function () {
        this.profile();
        this.formData = new FormData();
        this.doggiesForm = new __WEBPACK_IMPORTED_MODULE_1__doggies__["a" /* Doggies */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__doggies__["a" /* Doggies */])
    ], EditpetComponent.prototype, "doggiesForm", void 0);
    EditpetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editpet',
            template: __webpack_require__("./src/app/editpet/editpet.component.html"),
            styles: [__webpack_require__("./src/app/editpet/editpet.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], Object])
    ], EditpetComponent);
    return EditpetComponent;
}());



/***/ }),

/***/ "./src/app/edituser/edituser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edituser/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 profile-form\">\n    <form class=\"form-horizontal\" (ngSubmit)=\"submitUpdate()\" #profileForm=\"ngForm\">\n      <!-- Form Name -->\n      <legend>Edit Profile</legend>\n      <!-- Name input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"name\">Name (Full name)</label>\n        <div class=\"col-md-4\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-user\">\n              </i>\n            </div>\n            <input type=\"text\" class=\"form-control input-md\" id=\"name\" required\n                   [(ngModel)]=\"user.name\" name=\"name\"\n                   #name=\"ngModel\" >\n          </div>\n        </div>\n      </div>\n      <!-- File Button -->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Upload photo</label>\n        <div class=\"col-md-4\">\n          <!-- <input id=\"UploadPhoto\" name=\"UploadPhoto\" class=\"input-file\" type=\"file\" (change)=\"onFileUpload($event.target.files)\"> -->\n          <file-drop headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n            <span></span>\n          </file-drop>\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Name</th>\n            </tr>\n            </thead>\n            <tbody class=\"upload-name-style\">\n            <tr *ngFor=\"let item of files; let i=index\">\n              <td><strong>{{ item.relativePath }}</strong></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <!-- Bio input -->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"bio\">BIO (max 200 words)</label>\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" id=\"bio\" required\n                 [(ngModel)]=\"user.bio\" name=\"bio\"\n                 #bio=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" ></label>\n        <div class=\"col-md-4\">\n          <button type=\"submit\" class=\"btn btn-success\" >Submit</button>\n          <button class=\"btn btn-danger\"> Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/edituser/edituser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("./src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(router, pet, userService, dialogRef, data) {
        this.router = router;
        this.pet = pet;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
    }
    EdituserComponent.prototype.profile = function () {
        var _this = this;
        console.log(this.data['userID']);
        this.pet.getProfile(this.data['userID']).subscribe(function (resp) {
            _this.user.name = resp['name'];
            _this.user.bio = resp['bio'];
            _this.user.email = resp['email'];
        });
    };
    EdituserComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    EdituserComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    EdituserComponent.prototype.submitUpdate = function () {
        var _this = this;
        this.formData.append('bio', this.user.bio);
        this.formData.append('name', this.user.name);
        this.userService.postUpdate(this.formData).subscribe(function () { return console.log('Updating'); }, function (err) { console.error(err); alert('Update User Unsuccesful'); }, function () {
            console.log('Update Successful');
            alert('Succesfully update user');
            console.log('/profile/' + _this.data['userID']);
            _this.router.navigateByUrl('/profile', { skipLocationChange: true }).then(function () {
                return _this.router.navigateByUrl('profile/' + _this.data['userID']);
            });
            _this.dialogRef.close();
        });
    };
    EdituserComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    _this.formData.append('displaypic', file);
                    console.log(_this.formData.getAll('displaypic'));
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    EdituserComponent.prototype.ngOnInit = function () {
        this.profile();
        this.formData = new FormData();
        this.user = new __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */])
    ], EdituserComponent.prototype, "user", void 0);
    EdituserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edituser',
            template: __webpack_require__("./src/app/edituser/edituser.component.html"),
            styles: [__webpack_require__("./src/app/edituser/edituser.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialogRef */], Object])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "./src/app/followers/followers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/followers/followers.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n  .accordion {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n  }\n\n  .active, .accordion:hover {\n    background-color: #ccc;\n  }\n\n  .panel {\n    padding: 0 18px;\n    display: none;\n    background-color: white;\n    overflow: hidden;\n  }\n</style>\n<h3><strong> Followers </strong></h3>\n<br>\n<div *ngFor=\"let u of user\" style=\"display: inline\">\n  <div style=\"display:inline;\">\n    <img src=\"http://localhost/gg/storage/app/public/images/{{u.displaypic}}\" style=\"width: 50px; height: 50px\">\n  </div>\n  <div class=\"panel\" style=\"display: inline\">\n    <button class=\"accordion\" style=\"display: inline; width: 350px; align-content: center\" (click)=\"reDirect(u.id)\"><strong>{{u.username}}</strong></button>\n  </div>\n  <hr>\n</div>\n<script>\n  var acc = document.getElementsByClassName(\"accordion\");\n  var i;\n\n  for (i = 0; i < acc.length; i++) {\n    acc[i].addEventListener(\"click\", function() {\n      this.classList.toggle(\"active\");\n      var panel = this.nextElementSibling;\n      if (panel.style.display === \"block\") {\n        panel.style.display = \"none\";\n      } else {\n        panel.style.display = \"block\";\n      }\n    });\n  }\n</script>\n"

/***/ }),

/***/ "./src/app/followers/followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(router, userService, petService, dialogRef, data) {
        this.router = router;
        this.userService = userService;
        this.petService = petService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FollowersComponent.prototype.viewFollower = function () {
        var _this = this;
        this.userService.viewFollowers(this.data['userID']).subscribe(function (user) {
            _this.user = user;
        });
    };
    FollowersComponent.prototype.reDirect = function (id) {
        var _this = this;
        console.log(id);
        this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
            return _this.router.navigateByUrl('/profile/' + id);
        });
    };
    FollowersComponent.prototype.ngOnInit = function () {
        this.viewFollower();
    };
    FollowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-followers',
            template: __webpack_require__("./src/app/followers/followers.component.html"),
            styles: [__webpack_require__("./src/app/followers/followers.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */], Object])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/followings/followings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/followings/followings.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n  .accordion {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n  }\n  .active, .accordion:hover {\n    background-color: #ccc;\n  }\n  .panel {\n    padding: 0 18px;\n    display: none;\n    background-color: white;\n    overflow: hidden;\n  }\n</style>\n<h3><strong> Followings </strong></h3>\n<br>\n<div *ngFor=\"let u of user\" style=\"display: inline\">\n  <div style=\"display:inline;\">\n    <img src=\"http://localhost/gg/storage/app/public/images/{{u.displaypic}}\" style=\"width: 50px; height: 50px\">\n  </div>\n  <div class=\"panel\" style=\"display: inline\">\n    <button class=\"accordion\" style=\"display: inline; width: 350px; align-content: center\" (click)=\"reDirect(u.id)\"><strong>{{u.username}}</strong></button>\n  </div>\n  <hr>\n</div>\n<script>\n  var acc = document.getElementsByClassName(\"accordion\");\n  var i;\n\n  for (i = 0; i < acc.length; i++) {\n    acc[i].addEventListener(\"click\", function() {\n      this.classList.toggle(\"active\");\n      var panel = this.nextElementSibling;\n      if (panel.style.display === \"block\") {\n        panel.style.display = \"none\";\n      } else {\n        panel.style.display = \"block\";\n      }\n    });\n  }\n</script>\n"

/***/ }),

/***/ "./src/app/followings/followings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FollowingsComponent = /** @class */ (function () {
    function FollowingsComponent(router, userService, petService, dialogRef, data) {
        this.router = router;
        this.userService = userService;
        this.petService = petService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FollowingsComponent.prototype.viewFollowings = function () {
        var _this = this;
        this.userService.viewFollowings(this.data['userID']).subscribe(function (user) {
            _this.user = user;
        });
    };
    FollowingsComponent.prototype.reDirect = function (id) {
        var _this = this;
        console.log(id);
        this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
            return _this.router.navigateByUrl('/profile/' + id);
        });
    };
    FollowingsComponent.prototype.ngOnInit = function () {
        this.viewFollowings();
    };
    FollowingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-followings',
            template: __webpack_require__("./src/app/followings/followings.component.html"),
            styles: [__webpack_require__("./src/app/followings/followings.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], FollowingsComponent);
    return FollowingsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer >\n  <div >\n    <h1>Fuuter</h1>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<style>\r\n  body,h1,h2,h3,h4,h5,h6 {font-family: \"Raleway\", sans-serif}\r\n</style>\r\n  <body class=\"w3-light-grey\" style=\"max-width:1600px\">\r\n      <a href=\"#\"><img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" style=\"width:65px;\" class=\"w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity\"></a>\r\n      <span class=\"w3-button w3-hide-large w3-xxlarge w3-hover-text-grey\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></span>\r\n      <div class=\"w3-container\">\r\n        <h1><b>My Pet Republic</b></h1>\r\n        <div class=\"w3-section w3-bottombar w3-padding-16\">\r\n          <span class=\"w3-margin-right\">Filter:</span>\r\n          <button class=\"w3-button w3-black\">ALL</button>\r\n          <button class=\"w3-button w3-white\"><i class=\"fa fa-diamond w3-margin-right\"></i>User</button>\r\n          <button class=\"w3-button w3-white w3-hide-small\"><i class=\"fa fa-photo w3-margin-right\"></i>Pet</button>\r\n          <button class=\"w3-button w3-white w3-hide-small\"><i class=\"fa fa-map-pin w3-margin-right\"></i>Like</button>\r\n        </div>\r\n      </div>\r\n\r\n     First Photo Grid\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-third w3-container w3-margin-bottom\">\r\n        <img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\r\n        <div class=\"w3-container w3-white\">\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-third w3-container w3-margin-bottom\">\r\n        <img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\r\n        <div class=\"w3-container w3-white\">\r\n          <p><b>Lorem Ipsum</b></p>\r\n          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-third w3-container\">\r\n        <img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\r\n        <div class=\"w3-container w3-white\">\r\n          <p><b>Lorem Ipsum</b></p>\r\n          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Second Photo Grid-->\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-third w3-container w3-margin-bottom\">\r\n        <img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\r\n        <div class=\"w3-container w3-white\">\r\n          <p><b>Lorem Ipsum</b></p>\r\n          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-third w3-container w3-margin-bottom\">\r\n        <img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\r\n        <div class=\"w3-container w3-white\">\r\n          <p><b>Lorem Ipsum</b></p>\r\n          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-third w3-container\">\r\n        <img src=\"http://localhost/gg/storage/app/public/images/default.jpg\" alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\r\n        <div class=\"w3-container w3-white\">\r\n          <p><b>Lorem Ipsum</b></p>\r\n          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Pagination -->\r\n    <div class=\"w3-center w3-padding-32\">\r\n      <div class=\"w3-bar\">\r\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">«</a>\r\n        <a href=\"#\" class=\"w3-bar-item w3-black w3-button\">1</a>\r\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">2</a>\r\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">3</a>\r\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">4</a>\r\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">»</a>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(user) {
        this.user = user;
    }
    HomeComponent.prototype.postYouMightLike = function () {
        var _this = this;
        if (localStorage.getItem('token')) {
            this.user.postYouMightLike().subscribe(function (post) {
                _this.post = post;
                console.log(post);
            });
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.postYouMightLike();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n  width: 340px;\r\n  margin: 50px auto;\r\n}\r\n.login-form form {\r\n  margin-bottom: 15px;\r\n  background: #f7f7f7;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  padding: 30px;\r\n}\r\n.login-form h2 {\r\n  margin: 0 0 15px;\r\n}\r\n.form-control, .btn {\r\n  min-height: 38px;\r\n  border-radius: 2px;\r\n}\r\n.btn {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <div>\n    <div class=\"login-form\">\n      <h2 class=\"text-center\">Log in</h2>\n      <br>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"signing.email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"signing.password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"submitLogin()\" (click)=\"clear()\">Log in</button>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SignIn__ = __webpack_require__("./src/app/SignIn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router, data) {
        this.dataService = dataService;
        this.router = router;
        this.data = data;
    }
    LoginComponent.prototype.clear = function () {
        this.signing = new __WEBPACK_IMPORTED_MODULE_2__SignIn__["a" /* SignIn */]();
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        this.dataService.postSignIn(this.signing).subscribe(function () { console.log('Login Completed'); }, function (err) { console.error(err); alert('Login Unsuccesful'); }, function () {
            console.log('Login Succesful');
            alert('Login Sucessful');
            _this.router.navigateByUrl(_this.data['page'] + _this.data['now']);
            location.reload();
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.signing = new __WEBPACK_IMPORTED_MODULE_2__SignIn__["a" /* SignIn */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__SignIn__["a" /* SignIn */])
    ], LoginComponent.prototype, "signing", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], Object])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">My Pet Republic</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href onclick=\"return false\" *ngIf=\"!loggedOut\" (click)=\"openDialog()\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href onclick=\"return false\" *ngIf=\"!loggedOut\" (click)=\"openDialogg()\">Create</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" onclick=\"return false\" *ngIf=\"loggedIn\" >\r\n          {{this.data}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" >\r\n          <a class=\"dropdown-item\" href onclick=\"return false\" (click)=\"goProfile()\">Profile</a>\r\n          <a class=\"dropdown-item\" href onclick=\"return false\" (click)=\"getNotification()\">Notifications</a>\r\n          <a class=\"dropdown-item\" href onclick=\"return false\" (click)=\"openFollowings()\">Following</a>\r\n          <a class=\"dropdown-item\" href onclick=\"return false\" (click)=\"openFollowers()\">Followers</a>\r\n          <a class=\"dropdown-item\" href=\"/home\" (click)=\"logout()\" >Logout</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <div class=\"nav-link\" id=\"search-box\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width:700px !important; color:black !important;\"></div>\r\n        <div class=\"dropdown-menu\" id=\"hits\" aria-labelledby=\"navbarDropdownMenuLink\" style=\"width:300px !important; padding:0px;\" >\r\n          </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_instantsearch_js_dist_es5_module_src_lib_main__ = __webpack_require__("./node_modules/instantsearch.js/dist-es5-module/src/lib/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_instantsearch_js_dist_es5_module_src_lib_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_instantsearch_js_dist_es5_module_src_lib_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notif_notif_component__ = __webpack_require__("./src/app/notif/notif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__followings_followings_component__ = __webpack_require__("./src/app/followings/followings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__followers_followers_component__ = __webpack_require__("./src/app/followers/followers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(user, pet, router, dialog) {
        this.user = user;
        this.pet = pet;
        this.router = router;
        this.dialog = dialog;
    }
    NavigationBarComponent.prototype.openDialog = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], {
            height: '500px',
            width: '500px',
            data: {
                now: '',
                page: '/home/'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavigationBarComponent.prototype.openDialogg = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], {
            height: '500px',
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavigationBarComponent.prototype.welcome = function () {
        var _this = this;
        if (this.user.token) {
            this.user.getUser().subscribe(function (resp) {
                _this.data = resp['name'];
                _this.pet.getLoginId().subscribe(function (res) {
                    _this.id = res['id'];
                });
            });
        }
        else {
            this.data = 'Guest';
        }
    };
    NavigationBarComponent.prototype.checkAuth = function () {
        // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localStorage.getItem('token')) {
            this.loggedIn = true;
            this.loggedOut = true;
        }
        else {
            this.loggedIn = false;
            this.loggedOut = false;
        }
    };
    NavigationBarComponent.prototype.goProfile = function () {
        var _this = this;
        this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
            return _this.router.navigateByUrl('/profile/' + _this.id);
        });
    };
    NavigationBarComponent.prototype.logout = function () {
        this.user.logout();
    };
    NavigationBarComponent.prototype.search1 = function () {
        var options = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].algolia;
        this.search = __WEBPACK_IMPORTED_MODULE_6_instantsearch_js_dist_es5_module_src_lib_main___default()(options);
        this.search.addWidget(__WEBPACK_IMPORTED_MODULE_6_instantsearch_js_dist_es5_module_src_lib_main___default.a.widgets.searchBox({
            container: '#search-box',
            autofocus: false,
            placeholder: 'Search for users',
            poweredBy: false
        }));
        this.search.start();
    };
    NavigationBarComponent.prototype.search2 = function () {
        this.search.addWidget(__WEBPACK_IMPORTED_MODULE_6_instantsearch_js_dist_es5_module_src_lib_main___default.a.widgets.hits({
            container: '#hits',
            templates: {
                empty: 'No results',
                item: "<div class=\"hit\">\n                      <div class=\"hit-image\"><a href=\"/profile/{{{objectID}}}\"><img src=http://localhost/gg/storage/app/public/images/{{displaypic}} width=\"70px\" height=\"70px\"></a></div>\n                      <div class=\"hit-content\">\n                        <div class=\"hitcontentitems\"><strong>{{{_highlightResult.username.value}}}</strong> </div>\n                        <div class=\"hitcontentitems\"><font size='1'>{{{followers}}} followers</font> </div>\n                        <div class=\"hitcontentitems\">\n                          <div class='doggies'><img class=\"dog_img\" src=http://localhost/gg/storage/app/public/images/dog_icon.png width=\"30px\" height=\"30px\"></div>\n                          <div class='doggies'><font size='2'> {{#dog}} <a href=\"/dogprofile/{{{dog-id}}}\" class=\"dogbutton dogs\" style=\"text-decoration: none;\">{{{dogname}}}</a> {{/dog}}</font></div>\n                        </div>\n                      </div>\n                  </div>\n                  ",
            },
            // ganti css buat item di styles.css
            // href="/profile/{{{objectID}}}"
            escapeHits: true
        }));
    };
    NavigationBarComponent.prototype.getNotification = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__notif_notif_component__["a" /* NotifComponent */], {
            height: '500px',
            width: '500px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavigationBarComponent.prototype.openFollowers = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__followers_followers_component__["a" /* FollowersComponent */], {
            height: '600px',
            width: '800x',
            data: {
                userID: this.id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavigationBarComponent.prototype.openFollowings = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__followings_followings_component__["a" /* FollowingsComponent */], {
            height: '600px',
            width: '800x',
            data: {
                userID: this.id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.welcome();
        this.checkAuth();
        this.search1();
        this.search2();
    };
    NavigationBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation-bar',
            template: __webpack_require__("./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__("./src/app/navigation-bar/navigation-bar.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/notif/notif.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notif/notif.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div><h1> Notifications</h1></div>\n  <div style=\"float:right;\"> <a href onclick=\"return false;\" (click)=\"clearAll();\">Clear All</a> </div>\n  <hr>\n  <hr>\n  <div class=\"notifs\">\n    <div class=\"items\" *ngFor=\"let i of notifications\" style=\" display: inline;\">\n      <div style=\"display: inline; width:350px;\" >\n        <div style=\"display: inline;\"><strong *ngIf=\"!i.bool\"><a href onclick=\"return false\" (click)=\"redirect1(i.data.follower_id)\">{{i.data.follower_username}} </a></strong>     </div>\n        <div style=\"display: inline;\"><div *ngIf=\"i.bool\"><a href onclick=\"return false\" (click)=\"redirect1(i.data.follower_id)\">{{i.data.follower_username}} </a></div> </div>\n\n        <div style=\"display: inline;\"><strong *ngIf=\"!i.bool\"><a href onclick=\"return false\" (click)=\"redirect3(i.data.post,i.notifiable_id); readNotifications(i.id)\">{{i.data.comment_response}}  </a> </strong></div>\n        <div style=\"display: inline;\"><div *ngIf=\"i.bool\"><a href onclick=\"return false\" (click)=\"redirect3(i.data.post,i.notifiable_id)\">{{i.data.comment_response}}  </a></div></div>\n\n        <div style=\"display: inline;\"><strong *ngIf=\"!i.bool\"><a href onclick=\"return false\" (click)=\"redirect3(i.data.post,i.notifiable_id)\">{{i.data.like_response}}  </a>  </strong>  </div>\n        <div style=\"display: inline;\"><div *ngIf=\"i.bool\"><a href onclick=\"return false\" (click)=\"redirect3(i.data.post,i.notifiable_id)\">{{i.data.like_response}}  </a> </div> </div>\n      </div>\n      <div style=\"float: right;\"> {{i.created_at}}</div>\n      <div style=\"float: right; margin:5px;\" [hidden]=\"i.bool\" class=\"fa fa-inbox\">  </div>\n      <div [hidden]=\"!i.hasPic\" class=\"notifimg\" style=\" display: inline;\">\n        <div> <img style=\"width: 50px; height: 50px;\" src=\"http://localhost/gg/storage/app/public/images/{{i.pic}}\"> </div>\n      </div>\n      <hr>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notif/notif.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewpost_viewpost_component__ = __webpack_require__("./src/app/viewpost/viewpost.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotifComponent = /** @class */ (function () {
    function NotifComponent(dialog, user, pet, router) {
        this.dialog = dialog;
        this.user = user;
        this.pet = pet;
        this.router = router;
    }
    NotifComponent.prototype.getNotification = function () {
        var _this = this;
        var i = 0;
        this.user.readNotif().subscribe(function (res) {
            console.log('read');
        });
        this.user.getNotification().subscribe(function (notifications) {
            for (i; i < notifications.length; i++) {
                _this.notifications[i] = notifications[i];
                _this.date1 = new Date(notifications[i]['created_at']);
                _this.now = new Date();
                var diff = (_this.now - _this.date1) / 1000;
                if (diff < 60) {
                    notifications[i]['created_at'] = Math.floor(diff) + 's ago';
                }
                if (diff > 60 && diff <= 5040) {
                    notifications[i]['created_at'] = Math.floor(diff / 60) + ' min ago';
                }
                if (diff > 5040 && diff < 86400) {
                    notifications[i]['created_at'] = Math.floor(diff / 60 / 60) + ' hrs ago';
                }
                if (diff > 86400 && diff < 604800) {
                    notifications[i]['created_at'] = Math.floor(diff / 60 / 60 / 24) + ' days ago';
                }
                if (diff > 604800 && (diff / 60 / 60 / 24 / 7) < 5) {
                    notifications[i]['created_at'] = Math.floor(diff / 60 / 60 / 24 / 7) + ' weeks ago';
                }
                if ((diff / 60 / 60 / 24 / 7) >= 5) {
                    notifications[i]['created_at'] = _this.date1.getDate() + '/' + (1 + _this.date1.getMonth()) + '/' + _this.date1.getFullYear();
                }
                if (notifications[i]['read_at'] != null) {
                    _this.notifications[i]['bool'] = true;
                }
                if (notifications[i]['read_at'] == null) {
                    _this.notifications[i]['bool'] = false;
                }
                if (_this.notifications[i]['type'] === 'App\\Notifications\\PostLiked') {
                    console.log('hello');
                    _this.subscribe1(i);
                }
                else if (_this.notifications[i]['type'] === 'App\\Notifications\\PostCommented') {
                    _this.subscribe1(i);
                }
                else if (_this.notifications[i]['type'] === 'App\\Notifications\\UserFollowed') {
                    _this.subscribe2(i);
                }
                else {
                    _this.pics[i] = 'empty';
                    _this.notifications[i]['hasPic'] = false;
                }
                console.log(_this.notifications[i]);
            }
        });
    };
    NotifComponent.prototype.clearAll = function () {
        this.user.clearAll().subscribe(function (re) {
            console.log(re);
            alert('Notifications cleared. ');
        });
        this.dialog.closeAll();
    };
    NotifComponent.prototype.readNotifications = function (id) {
        this.user.readNotification(id).subscribe(function (re) {
            console.log(re);
        });
    };
    NotifComponent.prototype.subscribe1 = function (i) {
        var _this = this;
        this.pet.viewPost(this.notifications[i]['data']['post']).subscribe(function (re) {
            _this.notifications[i]['pic'] = re[0]['pic'];
            _this.notifications[i]['hasPic'] = true;
        });
    };
    NotifComponent.prototype.subscribe2 = function (i) {
        var _this = this;
        this.pet.getProfile(this.notifications[i]['data']['follower_id']).subscribe(function (re) {
            _this.notifications[i]['pic'] = re['displaypic'];
            _this.notifications[i]['hasPic'] = true;
        });
    };
    NotifComponent.prototype.redirect3 = function (id, ownerID) {
        var _this = this;
        this.user.getUser().subscribe(function (res) {
            _this.currid = res['name'];
        });
        this.pet.getDogID(id).subscribe(function (res) {
            _this.num = res;
            _this.pet.getDoggie(_this.num).subscribe(function (resp) {
                _this.dialog.closeAll();
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__viewpost_viewpost_component__["a" /* ViewpostComponent */], {
                    data: {
                        postID: id,
                        ownerID: ownerID,
                        dogID: res,
                        dogName: resp['name'],
                        ownerName: _this.currid,
                    }
                });
            });
        });
    };
    NotifComponent.prototype.redirect1 = function (id) {
        var _this = this;
        this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
            return _this.router.navigateByUrl('/profile/' + id);
        });
        this.dialog.closeAll();
    };
    NotifComponent.prototype.ngOnInit = function () {
        this.getNotification();
        this.notifications = [];
        this.type = [];
        this.pics = [];
    };
    NotifComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notif',
            template: __webpack_require__("./src/app/notif/notif.component.html"),
            styles: [__webpack_require__("./src/app/notif/notif.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotifComponent);
    return NotifComponent;
}());



/***/ }),

/***/ "./src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  max-width: 300px;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nbody {\r\n  padding-top: 1px;\r\n  /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */\r\n}\r\n\r\n.othertop{margin-top:10px;}\r\n\r\n/*rekt */\r\n\r\nbody {background:#f2f2f2;}\r\n\r\ni {font-size:12px; color:#dd0000;}\r\n\r\n.site-title {margin-top: 40px;margin-bottom: 20px; font-weight: 300;}\r\n\r\n.panel {\r\n  -webkit-box-shadow: 0 2px 6px rgba(0,0,0,.08);\r\n  box-shadow: 0 2px 6px rgba(0,0,0,.08);\r\n  background-color: #fff;\r\n  margin-bottom:15px;\r\n}\r\n\r\n.outerdiv{\r\n  background-color: antiquewhite;\r\n  padding-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n\r\n<!--new -->\r\n  <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n  <!------ Include the above in your HEAD tag ---------->\r\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <h3 class=\"site-title\" *ngIf=\"edit\">My Profile</h3>\r\n    <h3 class=\"site-title\" *ngIf=\"!edit\">{{this.updateForm.username}}'s Profile</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n          <div class=\"panel\">\r\n                <div class=\" panel-body \">\r\n                  <div class=\"col-md-5\" style=\"margin-bottom: 30px\">\r\n                    <h2>{{this.updateForm.username}}</h2>\r\n                    <img class=\"img-responsive\" src=\"http://localhost/gg/storage/app/public/images/{{this.display}}\" style=\"width:50%;\">\r\n                    <i class=\"fa fa-wrench\" (click)=\"openDialog2()\" *ngIf=\"edit\"> Edit Profile</i>\r\n                    <div class=\" clearfix\">\r\n                      <h2>{{this.updateForm.name}}</h2>\r\n                      <h4>{{this.updateForm.email}}</h4>\r\n                      <h5>{{this.updateForm.bio}}</h5>\r\n                      <button class=\"btn btn-success btn-md pull-center\" type=\"submit\" (click)=\"openDialog()\" *ngIf=\"edit\">Add Pet</button>\r\n                      <button class=\"btn btn-success btn-md pull-center\" (click)=\"doFollow()\" *ngIf=\"(!isFollowed) && (!edit)\"  >Follow</button>\r\n                      <button class=\"btn btn-success btn-md pull-center\" (click)=\"doUnfollow()\" *ngIf=\"(isFollowed) && (!edit)\" >Unfollow</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-7\">\r\n                    <div class=\"profile-block\">\r\n                      <ul class=\"list-group\">\r\n                        <li class=\"list-group-item\" (click)=\"openDialog3()\">Followers <span class=\"badge\">{{updateForm.followers}}</span></li>\r\n                        <li class=\"list-group-item\" (click)=\"openDialog4()\">Following<span class=\"badge\">{{updateForm.followings}}</span></li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                  <div [hidden]=\"this.noDog\">\r\n                    <div class=\"col-md-12 outerdiv\" *ngFor=\"let dog of doggies\">\r\n                      <div style=\"float: left;\">\r\n                        <img src=\"http://localhost/gg/storage/app/public/images/{{dog.displaypic}}\" style=\"width: 150px;\">\r\n                      </div>\r\n                      <ul class=\"list-inline\" style=\"height: 220px; margin-left: 200px;\">\r\n                        <li><h3><strong>Name: </strong>{{dog.name}}  <a href onclick=\"return false\" routerLink=\"/dogprofile/{{dog.id}}\"><i class=\"fa fa-wrench\">View Profile</i></a></h3></li><br>\r\n                        <li><h4><strong>Desc: </strong>{{dog.desc}}</h4></li><br>\r\n                        <li><h4><strong>Gender: </strong>{{dog.gender}}</h4></li><br>\r\n                        <li><h4><strong>Age: </strong>{{dog.age}}</h4></li>\r\n                        <li><h4><strong>Breed: </strong>{{dog.breed}}</h4></li>\r\n                      </ul>\r\n                      <hr >\r\n                    </div>\r\n                  <div [hidden]=\"!this.noDog\">\r\n                    <p>Please tell {{updateForm.name}} to adopt a doggie :((</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- jQuery Version 1.11.1 -->\r\n<script src=\"js/jquery.js\"></script>\r\n\r\n<!-- Bootstrap Core JavaScript -->\r\n<script src=\"js/bootstrap.min.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User__ = __webpack_require__("./src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addpet_addpet_component__ = __webpack_require__("./src/app/addpet/addpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edituser_edituser_component__ = __webpack_require__("./src/app/edituser/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__followers_followers_component__ = __webpack_require__("./src/app/followers/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__followings_followings_component__ = __webpack_require__("./src/app/followings/followings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(user, pet, route, router, dialog) {
        this.user = user;
        this.pet = pet;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
    }
    ProfileComponent.prototype.profile = function () {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.pet.getLoginId().subscribe(function (resp) {
                _this.currid = resp['id'];
            });
        }
        this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
        this.pet.getProfile(this.uid).subscribe(function (resp) {
            _this.updateForm.name = resp['name'];
            _this.updateForm.username = resp['username'];
            _this.updateForm.bio = resp['bio'];
            _this.updateForm.email = resp['email'];
            _this.tarid = resp['id'];
            console.log(_this.tarid);
            _this.display = resp['displaypic'];
            if (_this.tarid !== _this.currid) {
                _this.edit = false;
            }
            else {
                _this.edit = true;
            }
        });
    };
    ProfileComponent.prototype.checkk = function () {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.isFollowed = false;
            this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
            this.user.checkFollow(this.uid).subscribe(function (response) {
                _this.fol = response['is_followed'];
                if (_this.fol === 'true') {
                    _this.isFollowed = true;
                }
                else {
                    _this.isFollowed = false;
                }
            });
        }
    };
    ProfileComponent.prototype.doggieProfile = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
        this.pet.getProfile(this.uid).subscribe(function (doggies) {
            _this.doggies = doggies['doggies'];
            console.log(doggies['doggies']);
            if (_this.doggies.length === 0) {
                _this.noDog = true;
            }
            else {
                _this.noDog = false;
            }
        });
    };
    ProfileComponent.prototype.following = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
        this.user.following(this.uid).subscribe(function (res) {
            _this.updateForm.followings = res;
        });
    };
    ProfileComponent.prototype.follower = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.uid = params['id']; });
        this.user.follower(this.uid).subscribe(function (res) {
            _this.updateForm.followers = res;
        });
    };
    ProfileComponent.prototype.doFollow = function () {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.user.goFollow(this.tarid, this.updateForm).subscribe(function (res) {
                _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                    return _this.router.navigateByUrl('/profile/' + _this.tarid);
                });
            });
        }
        else {
            this.loginFirst();
        }
    };
    ProfileComponent.prototype.doUnfollow = function () {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.user.goUnfollow(this.tarid, this.updateForm).subscribe(function (res) {
                _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                    return _this.router.navigateByUrl('/profile/' + _this.tarid);
                });
            });
        }
        else {
            this.loginFirst();
        }
    };
    ProfileComponent.prototype.addPet = function () {
        this.online2 = true;
        this.online = false;
    };
    ProfileComponent.prototype.loginFirst = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */], {
            height: '500px',
            width: '500x',
            data: {
                now: this.uid,
                page: '/profile/'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.openDialog = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__addpet_addpet_component__["a" /* AddpetComponent */], {
            height: '600px',
            width: '800x',
            data: {
                userID: this.uid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.openDialog2 = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__edituser_edituser_component__["a" /* EdituserComponent */], {
            height: '500px',
            width: '900px',
            data: {
                userID: this.uid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.openDialog3 = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__followers_followers_component__["a" /* FollowersComponent */], {
            height: '500px',
            width: '500px',
            data: {
                userID: this.uid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.openDialog4 = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__followings_followings_component__["a" /* FollowingsComponent */], {
            height: '500px',
            width: '500px',
            data: {
                userID: this.uid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.checkk();
        this.follower();
        this.following();
        this.doggieProfile();
        this.profile();
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */])
    ], ProfileComponent.prototype, "updateForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n  width: 340px;\r\n  margin: 50px auto;\r\n}\r\n.login-form form {\r\n  margin-bottom: 15px;\r\n  background: #f7f7f7;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  padding: 30px;\r\n}\r\n.login-form h2 {\r\n  margin: 0 0 15px;\r\n}\r\n.form-control, .btn {\r\n  min-height: 38px;\r\n  border-radius: 2px;\r\n}\r\n.btn {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n  <div [hidden]=\"online\">\n  <div class=\"login-form\">\n    <form (ngSubmit)=\"submitRegister()\" #signupForm=\"ngForm\">\n      <h2 class=\"text-center\">Sign Up</h2>\n        <div class=\"form-group\">\n            <!--<label for=\"name\">Name</label>-->\n            <input type=\"text\" class=\"form-control\" id=\"name\" required\n                   [(ngModel)]=\"sighup.name\" name=\"name\" placeholder=\"Name\"\n                   #name=\"ngModel\">\n            <div [hidden]=\"name.valid || name.pristine\"\n                 class=\"alert alert-danger\">\n              Please Enter your Name\n            </div>\n        </div>\n      <div class=\"form-group\">\n        <!--<label for=\"userName\">UserName</label>-->\n        <input type=\"text\" class=\"form-control\" id=\"username\" required\n               [(ngModel)]=\"sighup.username\" name=\"username\" placeholder=\"Username\"\n               #username = \"ngModel\">\n        <div [hidden]=\"username.valid || username.pristine\"\n             class=\"alert alert-danger\">\n          Please Enter your UserName\n        </div>\n      </div>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"email\" required\n                   [(ngModel)]=\"sighup.email\" name=\"email\" placeholder=\"Email\"\n                   #email=\"ngModel\">\n            <div [hidden]=\"email.valid || email.pristine\"\n                 class=\"alert alert-danger\">\n              Please Enter Your Email\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" id=\"password\" required\n                   [(ngModel)]=\"sighup.password\" name=\"password\" placeholder=\"Password\"\n                   #password=\"ngModel\">\n          <small [hidden]=\"password.valid || password.pristine && !signupForm.submitted\">\n            Password is required\n          </small>\n        </div>\n        <div>\n            <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-primary btn-block\">Submit</button>\n        </div>\n        <p  class=\"text-center\" ><a href onclick=\"return false\" (click)=\"openDialog()\">Have an Account ? Login</a></p>\n    </form>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SignUp__ = __webpack_require__("./src/app/SignUp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dataService, router, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.dialog = dialog;
        this.online = false;
    }
    RegisterComponent.prototype.submitRegister = function () {
        var _this = this;
        this.dataService.postRegister(this.sighup).subscribe(function () { return console.log('Registation is filled'); }, function (err) { console.error(err); alert('Registation Unsuccesful'); _this.ngOnInit(); }, function () {
            console.log('Email verification');
            alert('Verify your email');
            _this.router.navigateByUrl('/home');
            _this.online = true;
            _this.dialog.closeAll();
        });
    };
    RegisterComponent.prototype.openDialog = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], {
            height: '500px',
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.sighup = new __WEBPACK_IMPORTED_MODULE_2__SignUp__["a" /* SignUp */]();
        this.sighup.name = '';
        this.sighup.username = '';
        this.sighup.password = '';
        this.sighup.email = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__SignUp__["a" /* SignUp */])
    ], RegisterComponent.prototype, "sighup", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/route/route-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addpet_addpet_component__ = __webpack_require__("./src/app/addpet/addpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dogprofile_dogprofile_component__ = __webpack_require__("./src/app/dogprofile/dogprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewpost_viewpost_component__ = __webpack_require__("./src/app/viewpost/viewpost.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'addPet', component: __WEBPACK_IMPORTED_MODULE_5__addpet_addpet_component__["a" /* AddpetComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'dogprofile/:id', component: __WEBPACK_IMPORTED_MODULE_6__dogprofile_dogprofile_component__["a" /* DogprofileComponent */] },
    { path: 'dogprofile/post/:id', component: __WEBPACK_IMPORTED_MODULE_7__viewpost_viewpost_component__["a" /* ViewpostComponent */] },
    { path: '**', redirectTo: '' },
];
var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]],
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/pet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.token
    }),
};
var httpOptions2 = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Authorization': "Bearer " + localStorage.token
    }),
};
var PetService = /** @class */ (function () {
    function PetService(http) {
        this.http = http;
        this.url = 'https://api.mypetrepublic.me/';
    }
    PetService.prototype.addDoggie = function (doggieForm) {
        return this.http.post(this.url + 'addDoggie/', doggieForm, httpOptions2).map(function (res) {
        });
    };
    PetService.prototype.deleteDoggie = function (id) {
        // const url = 'http://localhost:8000/api/delete/' + id;
        return this.http.delete(this.url + 'delete/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.updateDoggie = function (id, doggieForm) {
        // const url = 'http://localhost:8000/api/update/' + id;
        return this.http.post(this.url + 'update/' + id, doggieForm, httpOptions2).map(function (res) {
            return res;
        });
    };
    PetService.prototype.getDoggie = function (id) {
        // const url = 'http://localhost:8000/api/getDogProfile/' + id;
        return this.http.get(this.url + 'getDogProfile/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.getLoginId = function () {
        // const url = 'http://localhost:8000/api/user';
        return this.http.get(this.url + 'user', httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.getProfile = function (id) {
        // const url = 'http://localhost:8000/api/profile/' + id;
        return this.http.get(this.url + 'profile/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.dogPost = function (id, postForm) {
        // const url = 'http://localhost:8000/api/post/' + id;
        return this.http.post(this.url + 'post/' + id, postForm, httpOptions2).map(function (res) {
        });
    };
    PetService.prototype.viewAllPosts = function (id) {
        // const url = 'http://localhost:8000/api/viewAllPosts/' + id;
        return this.http.get(this.url + 'viewAllPosts/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.deletePost = function (id) {
        // const url = 'http://localhost:8000/api/deletePost/' + id;
        return this.http.delete(this.url + 'deletePost/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.viewPost = function (id) {
        // const url = 'http://localhost:8000/api/viewPost/' + id;
        return this.http.get(this.url + 'viewPost/' + id, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    PetService.prototype.updatePost = function (id, postForm) {
        // const url = 'http://localhost:8000/api/updatePost/' + id;
        return this.http.post(this.url + 'updatePost/' + id, postForm, httpOptions2).map(function (res) {
        });
    };
    PetService.prototype.likePost = function (id) {
        // const url = 'http://localhost:8000/api/likePost/' + id;
        return this.http.get(this.url + 'likePost/' + id, httpOptions2).map(function (res) {
        });
    };
    PetService.prototype.unlikePost = function (id) {
        // const url = 'http://localhost:8000/api/unlikePost/' + id;
        return this.http.get(this.url + 'unlikePost/' + id, httpOptions2).map(function (res) {
        });
    };
    PetService.prototype.isPostLiked = function (id) {
        // const url = 'http://localhost:8000/api/is_post_liked/' + id;
        return this.http.get(this.url + 'is_post_liked/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.likeCount = function (id) {
        // const url = 'http://localhost:8000/api/likeCount/' + id;
        return this.http.get(this.url + 'likeCount/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.commentPost = function (id, postForm) {
        // const url = 'http://localhost:8000/api/comment_post/' + id;
        return this.http.post(this.url + 'comment_post/' + id, postForm, httpOptions).map(function (res) {
        });
    };
    PetService.prototype.deleteComment = function (id) {
        // const url = 'http://localhost:8000/api/delete_comment/' + id;
        return this.http.delete(this.url + 'delete_comment/' + id, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    PetService.prototype.commentCount = function (id) {
        // const url = 'http://localhost:8000/api/commentCount/' + id;
        return this.http.get(this.url + 'commentCount/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.getComment = function (id) {
        // const url = 'http://localhost:8000/api/getComment/' + id;
        return this.http.get(this.url + 'getComment/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService.prototype.getDogID = function (id) {
        // const url = 'http://localhost:8000/api/getDogID/' + id;
        return this.http.get(this.url + 'getDogID/' + id, httpOptions).map(function (res) {
            return res;
        });
    };
    PetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.token
    }),
};
var httpOptions2 = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Authorization': "Bearer " + localStorage.token
    }),
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.token = localStorage.token;
    }
    UserService.prototype.postSignIn = function (signing) {
        var response = {};
        var url = 'https://api.mypetrepublic.me/login';
        return this.http.post(url, signing, httpOptions).map(function (res) {
            response = res;
            if (res && res.data.token) {
                localStorage.setItem('token', response['data']['token']);
                return res;
            }
        });
    };
    UserService.prototype.postRegister = function (registerForm) {
        var url = 'https://api.mypetrepublic.me/register';
        return this.http.post(url, registerForm, httpOptions).map(function (res) {
        });
    };
    UserService.prototype.postUpdate = function (updateForm) {
        var url = 'https://api.mypetrepublic.me/update';
        return this.http.post(url, updateForm, httpOptions2).map(function (res) {
        });
    };
    UserService.prototype.getUser = function () {
        var url = 'https://api.mypetrepublic.me/getName';
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.following = function (id) {
        var url = 'https://api.mypetrepublic.me/countFollowings/' + id;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.follower = function (id) {
        var url = 'https://api.mypetrepublic.me/countFollowers/' + id;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.goFollow = function (id, updateForm) {
        var url = 'https://api.mypetrepublic.me/profile/' + id + '/follow';
        return this.http.post(url, updateForm, httpOptions).map(function (res) {
        });
    };
    UserService.prototype.goUnfollow = function (id, updateForm) {
        var url = 'https://api.mypetrepublic.me/profile/' + id + '/unfollow';
        return this.http.post(url, updateForm, httpOptions).map(function (res) {
        });
    };
    UserService.prototype.checkFollow = function (id) {
        var url = 'https://api.mypetrepublic.me/profile/is_followed/' + id;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.viewFollowers = function (id) {
        var url = 'https://api.mypetrepublic.me/viewFollowers/' + id;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.viewFollowings = function (id) {
        var url = 'https://api.mypetrepublic.me/viewFollowings/' + id;
        return this.http.get(url, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    UserService.prototype.getNotification = function () {
        var url = 'https://api.mypetrepublic.me/notifications';
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.logout = function () {
        var url = 'https://api.mypetrepublic.me/logout';
        localStorage.removeItem('token');
        return this.http.get(url, httpOptions);
    };
    UserService.prototype.postYouMightLike = function () {
        var url = 'https://api.mypetrepublic.me/postYouMightLike';
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.readNotif = function () {
        var url = 'https://api.mypetrepublic.me/readNotif';
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.readNotification = function (id) {
        var url = 'https://api.mypetrepublic.me/readNotifications/' + id;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService.prototype.clearAll = function () {
        var url = 'https://api.mypetrepublic.me/clearAllNotif';
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/viewpost/viewpost.component.css":
/***/ (function(module, exports) {

module.exports = "div.ex3 {\r\n  background-color: white;\r\n  width: 402px;\r\n  height: 110px;\r\n  overflow: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/viewpost/viewpost.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n  <!--new -->\n  <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n  <script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <!------ Include the above in your HEAD tag ---------->\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <style>\n    body,h1,h2,h3,h4,h5,h6 {font-family: \"Raleway\", sans-serif}\n  </style>\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n    <div class=\"w3-third\" *ngFor=\"let p of post\">\n      <div style=\"width: 402px\" (ngSubmit)=\"commentPost(this.data['postID'])\">\n        <h4><strong>\n          <a (click)=\"close()\" href onclick=\"return false \">{{this.data['ownerName']}} 's</a>\n          <p (click)=\"close()\">{{this.data['dogName']}}</p>\n        </strong>\n          <i class=\"fa fa-trash\" style=\"float: right; padding-left:15px\" (click)=\"deletePost(this.data['postID'])\" *ngIf=\"edit\"></i>\n          <i class=\"fa fa-wrench\" style=\"float: right;\" (click)=\"doEdit()\" *ngIf=\"edit\"></i>\n        </h4>\n        <img src=\"http://localhost/gg/storage/app/public/images/{{p.pic}}\">\n        <div class=\"w3-container w3-white\">\n          <h4><strong>{{p.caption}}</strong>\n            <a href onclick=\"return false\" style=\"float: right\"><i class=\"fa fa-heart-o\" *ngIf=\"!isLiked\" style=\"margin-left: 200px\" (click)=\"likePost(this.data['postID'])\"><strong>{{this.countLike}}</strong></i></a>\n            <a href onclick=\"return false\" style=\"float: right\"><i class=\"fa fa-heart\" *ngIf=\"isLiked\" style=\"margin-left: 200px\" (click)=\"unlikePost(this.data['postID'])\"><strong>{{this.countLike}}</strong></i></a>\n          </h4>\n          <h5><i class=\"fa fa-location-arrow\"></i> &nbsp; {{p.location}}</h5><p style=\"margin-top: 10px\">{{p.created_at}}</p>\n              <input type=\"text\" id=\"comment\" [(ngModel)]=\"postForm.comment\" *ngIf=\"edit3\">\n                <button type=\"submit\" (click)=\"commentPost(p.id)\" *ngIf=\"edit3\">Comment</button>\n                <button type=\"submit\" (click)=\"getComment(p.id)\" *ngIf=\"!isClose\">View Comment</button>\n          <button type=\"submit\" (click)=\"hide()\" *ngIf=\"isClose\">Close Comment</button>\n\n        </div>\n      </div>\n      <div class=\"w3-third\" [hidden]=\"!edit2\">\n        <p><strong>Edit</strong></p>\n        <p>Location</p><input type=\"text\" id=\"location\" [(ngModel)]=\"postForm.location\" placeholder=\"{{p.location}}\" value=\"{{p.location}}\">\n        <p>Caption</p><input type=\"text\" id=\"caption\" [(ngModel)]=\"postForm.caption\" placeholder=\"{{p.caption}}\" value=\"{{p.caption}}\">\n        <button type=\"submit\" (click)=\"editPost(this.data['postID'])\" >Edit</button>\n      </div>\n      <div class=\"ex3\" [hidden]=\"!edit4\">\n        <div *ngFor=\"let c of comment\" [hidden]=\"!edit4\" style=\"margin-bottom: 10px\">\n          <div style=\"display: inline\"><strong>{{c.username}}</strong></div>\n          <div style=\"display: inline\">{{c.comment}}</div>\n          <div style=\"float:right\" fontsize=\"1\">{{c.created_at}}</div>\n          <i class=\" fa fa-trash\" (click)=\"deleteComment(c.id)\" style=\"float: right\" *ngIf=\"edit\"></i>\n        </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/viewpost/viewpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__("./src/app/services/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post__ = __webpack_require__("./src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ViewpostComponent = /** @class */ (function () {
    function ViewpostComponent(pet, route, router, dialog, dialogRef, data) {
        this.pet = pet;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ViewpostComponent.prototype.profile = function () {
        var _this = this;
        this.postID = this.data['postID'];
        this.dogID = this.data['dogID'];
        this.dogName = this.data['dogName'];
        this.ownerName = this.data['ownerName'];
        this.ownerID = this.data['ownerID'];
        if (localStorage.getItem('token') !== null) {
            this.edit3 = true;
            this.pet.getLoginId().subscribe(function (resp) {
                _this.currid = resp['id'];
                if (_this.data['ownerID'] !== _this.currid) {
                    _this.edit = false;
                }
                else {
                    _this.edit = true;
                }
            });
        }
        else {
            this.edit3 = false;
        }
        this.pet.viewPost(this.data['postID']).subscribe(function (post) {
            _this.post = post;
            var i;
            // var start = Date.now();
            for (i = 0; i < post.length; i++) {
                _this.date1 = new Date(post[i]['created_at']);
                _this.now = new Date();
                var diff = (_this.now - _this.date1) / 1000;
                if (diff < 60) {
                    post[i]['created_at'] = Math.floor(diff) + 's ago';
                }
                if (diff > 60 && diff <= 5040) {
                    post[i]['created_at'] = Math.floor(diff / 60) + ' min ago';
                }
                if (diff > 5040 && diff < 86400) {
                    post[i]['created_at'] = Math.floor(diff / 60 / 60) + ' hrs ago';
                }
                if (diff > 86400 && diff < 604800) {
                    post[i]['created_at'] = Math.floor(diff / 60 / 60 / 24) + ' days ago';
                }
                if (diff > 604800 && (diff / 60 / 60 / 24 / 7) < 5) {
                    post[i]['created_at'] = Math.floor(diff / 60 / 60 / 24 / 7) + ' weeks ago';
                }
                if ((diff / 60 / 60 / 24 / 7) >= 5) {
                    post[i]['created_at'] = _this.date1.getDate() + '/' + (1 + _this.date1.getMonth()) + '/' + _this.date1.getFullYear();
                }
            }
            if (_this.post.length === 0) {
                _this.noPost = true;
            }
            else {
                _this.noPost = false;
            }
        });
    };
    ViewpostComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.pet.deletePost(id).subscribe(function () { return console.log('Deleting'); }, function (err) { console.error(err); alert('Delete Post Unsuccesful'); }, function () {
            console.log('Update Successful');
            alert('Succesfully delete post');
            _this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
                return _this.router.navigateByUrl('/dogprofile/' + _this.data['dogID']);
            });
            _this.dialog.closeAll();
        });
    };
    ViewpostComponent.prototype.editPost = function (id) {
        if (localStorage.getItem('token') !== null) {
            this.pet.updatePost(id, this.postForm).subscribe(function () { return console.log('Updating'); }, function (err) {
                alert('Update Post Unsuccesful');
            }, function () {
                alert('Succesfully update post');
            });
        }
        this.edit2 = false;
        this.profile();
    };
    ViewpostComponent.prototype.doEdit = function () {
        this.edit2 = true;
    };
    ViewpostComponent.prototype.likePost = function (id) {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.pet.likePost(id).subscribe(function (res) {
                _this.isPostLiked();
            });
        }
        else {
            this.loginFirst();
        }
    };
    ViewpostComponent.prototype.unlikePost = function (id) {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.pet.unlikePost(id).subscribe(function (res) {
                _this.isPostLiked();
            });
        }
        else {
            this.loginFirst();
        }
    };
    ViewpostComponent.prototype.isPostLiked = function () {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.pet.isPostLiked(this.data['postID']).subscribe(function (res) {
                _this.like = res['is_post_liked'];
                if (_this.like === 'yes') {
                    _this.isLiked = true;
                }
                else {
                    _this.isLiked = false;
                }
            });
            this.pet.commentCount(this.data['postID']).subscribe();
            this.pet.likeCount(this.data['postID']).subscribe(function (res) {
                _this.countLike = res['likes'];
            });
        }
    };
    ViewpostComponent.prototype.getComment = function (id) {
        var _this = this;
        this.pet.getComment(id).subscribe(function (comment) {
            _this.comment = comment;
            var i;
            // var start = Date.now();
            for (i = 0; i < comment.length; i++) {
                _this.date1 = new Date(comment[i]['created_at']);
                _this.now = new Date();
                var diff = (_this.now - _this.date1) / 1000;
                if (diff < 60) {
                    comment[i]['created_at'] = Math.floor(diff) + 's ago';
                }
                if (diff > 60 && diff <= 5040) {
                    comment[i]['created_at'] = Math.floor(diff / 60) + ' min ago';
                }
                if (diff > 5040 && diff < 86400) {
                    comment[i]['created_at'] = Math.floor(diff / 60 / 60) + ' hrs ago';
                }
                if (diff > 86400 && diff < 604800) {
                    comment[i]['created_at'] = Math.floor(diff / 60 / 60 / 24) + ' days ago';
                }
                if (diff > 604800 && (diff / 60 / 60 / 24 / 7) < 5) {
                    comment[i]['created_at'] = Math.floor(diff / 60 / 60 / 24 / 7) + ' weeks ago';
                }
                if ((diff / 60 / 60 / 24 / 7) >= 5) {
                    comment[i]['created_at'] = _this.date1.getDate() + '/' + (1 + _this.date1.getMonth()) + '/' + _this.date1.getFullYear();
                }
            }
            _this.edit4 = true;
            _this.isClose = true;
        });
    };
    ViewpostComponent.prototype.hide = function () {
        this.isClose = false;
        this.edit4 = false;
    };
    ViewpostComponent.prototype.loginFirst = function () {
        this.dialog.closeAll();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], {
            data: {
                now: this.data['dogID'],
                page: '/dogprofile/'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ViewpostComponent.prototype.commentPost = function (id) {
        this.pet.commentPost(id, this.postForm).subscribe();
        this.getComment(id);
    };
    ViewpostComponent.prototype.deleteComment = function (id) {
        this.pet.deleteComment(id).subscribe();
        this.edit4 = false;
    };
    ViewpostComponent.prototype.close = function () {
        var _this = this;
        this.router.navigateByUrl('/clementwashere', { skipLocationChange: true }).then(function () {
            return _this.router.navigateByUrl('/profile/' + _this.data['ownerID']);
        });
        this.dialog.closeAll();
    };
    ViewpostComponent.prototype.ngOnInit = function () {
        this.isPostLiked();
        this.profile();
        this.postForm = new __WEBPACK_IMPORTED_MODULE_4__post__["a" /* Post */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__post__["a" /* Post */])
    ], ViewpostComponent.prototype, "postForm", void 0);
    ViewpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viewpost',
            template: __webpack_require__("./src/app/viewpost/viewpost.component.html"),
            styles: [__webpack_require__("./src/app/viewpost/viewpost.component.css")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], ViewpostComponent);
    return ViewpostComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    algolia: {
        appId: '3N38TXDFWZ',
        apiKey: '6367e9f6081c4830375ebd2e005dbe05',
        indexName: 'users',
    },
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map