"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* Pour exporter la classe Person vers
 un autre fichier */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Hey there !");
    };
    return Person;
}());
exports.Person = Person;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello world !");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        this.greet();
    };
    Programmer.prototype.greetHapy = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
/* This donne acces seulement aux methodes qui existe
 deja dans la meme classe.*/
var aProgrammer = new Programmer;
aProgrammer.greetLikeNormalPeople();
// Super donne acces directe à la classe mère.
var b = new Programmer;
b.greetHapy();
/* Polymorphysm la calasse c est de type
Person donc elle possede les memes attributs
et methode de Person. mais elle est instancié
comme classe Programmer; donc quand on appel
La methode greet() il va la chercher dans la
classe Programmer et non pas Person.*/
var c = new Programmer;
c.greet();
var d = new Programmer();
d.greet();
/* Premier façon pour affecter une valeur à un
 attribut read only.*/
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = "Saousen";
    }
    return Person1;
}());
var aPerson1 = new Person1();
/* aPerson1.name = "Carla"; on peut pas affecter
un nouveau name comme Carla car name on peut seulement
 le lire.*/
console.log(aPerson1.name);
/* Deuxieme façon pour affecter une valeur à un
 attribut read only.*/
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var aPerson2 = new Person2("Cat");
console.log(aPerson2.name);
/* Declarer les attributs dans le constructeur*/
var Person3 = /** @class */ (function () {
    function Person3() {
        this.name = name;
        this.adress = this.adress;
    }
    return Person3;
}());
/* Les attributs peuvent etre declarer comme suit*/
var Person4 = /** @class */ (function () {
    function Person4(name, adress) {
        this.name = name;
        this.adress = adress;
    }
    return Person4;
}());
