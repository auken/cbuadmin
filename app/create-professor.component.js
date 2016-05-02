System.register(['angular2/core', 'angular2/common', 'angular2/router', './professor.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, professor_service_1;
    var CreateProfessorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (professor_service_1_1) {
                professor_service_1 = professor_service_1_1;
            }],
        execute: function() {
            CreateProfessorComponent = (function () {
                function CreateProfessorComponent(fb, router, routeParams, service) {
                    this.router = router;
                    this.service = service;
                    this.professor = new professor_service_1.Professor();
                    var id = routeParams.get('id');
                    if (id == 'new') {
                        this.professor = service.buildProfessor();
                    }
                    else {
                        service.getProfessor(id, function (professor) {
                            this.professor = professor;
                        }.bind(this));
                    }
                    this.createProfessorForm = fb.group({
                        name: ["", common_1.Validators.required]
                    });
                }
                CreateProfessorComponent.prototype.submit = function (event) {
                    this.service.setProfessor(this.professor);
                    this.router.navigate(['Professors']);
                };
                Object.defineProperty(CreateProfessorComponent.prototype, "message", {
                    get: function () { return JSON.stringify(this.professor); },
                    enumerable: true,
                    configurable: true
                });
                CreateProfessorComponent = __decorate([
                    core_1.Component({
                        selector: 'create-professor',
                        templateUrl: 'create-professor.html',
                        providers: [professor_service_1.ProfessorService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, professor_service_1.ProfessorService])
                ], CreateProfessorComponent);
                return CreateProfessorComponent;
            }());
            exports_1("CreateProfessorComponent", CreateProfessorComponent);
        }
    }
});
//# sourceMappingURL=create-professor.component.js.map