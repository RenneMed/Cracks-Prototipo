(function(window, undefined) {
var dictionary = {
"9e50453c-2637-414c-b6a0-ef4cdbcd1cbf": "Mi cuenta",
"478cd210-661e-4fc6-ba91-40bdc90630ff": "Quiniela",
"36ad3e38-c23b-4d82-9714-6e91b1c28637": "Crear cuenta",
"6e2700c7-ed37-4bed-bdde-c8f61942d332": "Participantes",
"a88c7507-0e17-48c8-96d8-4e8ee274c4a9": "Dinamica",
"f5d90aa5-56d2-4219-9f9c-65af97da736b": "Precios",
"1a822270-b16b-41e0-be21-c8fe254d8e8a": "Log in",
"bc047555-6f06-409b-932b-2b7d101cbce6": "Contacto",
"3d00d35c-2682-47d5-8433-63a3a805bad4": "Sobre nosotros",
"43e98fe4-02fa-4229-8600-38821ad39c84": "Soporte",
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
"bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
};

var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);