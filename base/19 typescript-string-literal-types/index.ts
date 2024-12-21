// https://www.typescripttutorial.net/typescript-tutorial/typescript-string-literal-types

let click: 'click';

click = 'click'; //valid
// click = 'dblclick'; //error

type mouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error
