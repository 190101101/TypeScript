"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
axios_1.default.get(url).then(function (response) {
    var _a = response.data, id = _a.id, title = _a.title, completed = _a.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The todo with ID: ".concat(id, "\n  Has a title of: ").concat(title, "\n  Is it finished? ").concat(completed, "\n"));
};
