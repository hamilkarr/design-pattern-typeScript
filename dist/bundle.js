/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
console.log('Hello, new world2!');
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.words = {};
    }
    Dictionary.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.definition;
        }
    };
    Dictionary.prototype.get = function (term) {
        return this.words[term];
    };
    Dictionary.prototype.delete = function (term) {
        delete this.words[term];
    };
    return Dictionary;
}());
var Word = /** @class */ (function () {
    function Word(term, definition) {
        this.term = term;
        this.definition = definition;
    }
    return Word;
}());
var dic = new Dictionary();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBTWxDO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQUcsR0FBSCxVQUFJLElBQVU7UUFDVixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3QkFBRyxHQUFILFVBQUksSUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLElBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQUVEO0lBQ0ksY0FBbUIsSUFBWSxFQUFTLFVBQWtCO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQUcsQ0FBQztJQUNsRSxXQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIZWxsbywgbmV3IHdvcmxkMiEnKTtcclxuXHJcbnR5cGUgV29yZHMgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jbGFzcyBEaWN0aW9uYXJ5IHtcclxuICAgIHByaXZhdGUgd29yZHM6IFdvcmRzO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy53b3JkcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh3b3JkOiBXb3JkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud29yZHNbd29yZC50ZXJtXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud29yZHNbd29yZC50ZXJtXSA9IHdvcmQuZGVmaW5pdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHRlcm06IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29yZHNbdGVybV07XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKHRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndvcmRzW3Rlcm1dO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBXb3JkIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXJtOiBzdHJpbmcsIHB1YmxpYyBkZWZpbml0aW9uOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmNvbnN0IGRpYyA9IG5ldyBEaWN0aW9uYXJ5KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==