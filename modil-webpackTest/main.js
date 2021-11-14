window.addEventListener('DOMContentLoaded', function() {
  "use strict";
  let tabs = require('./parts/calc.js'),
  form = require('./parts/form.js');
  
  tabs();
  form();
});