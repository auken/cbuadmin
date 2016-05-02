System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Professor, ProfessorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Professor = (function () {
                function Professor() {
                    console.log('Creating a Professor!');
                }
                return Professor;
            }());
            exports_1("Professor", Professor);
            ProfessorService = (function () {
                function ProfessorService() {
                    this.professors = [];
                    this.firebase = new Firebase('https://shining-inferno-2018.firebaseio.com/professors');
                }
                ProfessorService.prototype.getProfessors = function () {
                    if (this.professors.length == 0) {
                        this.firebase.once('value').then(function (snapshot) {
                            snapshot.forEach(function (snap) {
                                var professor = snap.val();
                                this.professors.push({ id: snap.key(), professor: snap.val() });
                            }.bind(this));
                        }.bind(this));
                    }
                    return this.professors;
                };
                ProfessorService.prototype.getProfessor = function (id, callback) {
                    this.firebase.child(id).once('value').then(function (snapshot) {
                        var val = snapshot.val();
                        callback(val);
                    });
                };
                ProfessorService.prototype.setProfessor = function (professor) {
                    this.firebase.child(professor.id).set(professor);
                };
                ProfessorService.prototype.buildProfessor = function () {
                    var professor = new Professor();
                    var professorRef = this.firebase.push(professor);
                    professor.id = professorRef.key();
                    return professor;
                };
                ProfessorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProfessorService);
                return ProfessorService;
            }());
            exports_1("ProfessorService", ProfessorService);
        }
    }
});
//# sourceMappingURL=professor.service.js.map