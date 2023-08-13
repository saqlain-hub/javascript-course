// DOM Properties

let output;

output = document.all;
output = document.all[10];
output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;

output = document.URL;

output = document.characterSet;

output = document.contentType;

output = document.forms;
output = document.form[0];
output = document.form[0].id;
output = document.form[0].method;
output = document.form[0].action;

// document.forms[0].id = 'new-id'

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].id = "google-id";
output = document.links[0].className = "google-class";
output = document.links[0].classList = "google-class";

output = document.images;
output = document.images[0];
output = document.images[0].src;

console.log(output);
