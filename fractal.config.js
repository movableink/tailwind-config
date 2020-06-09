'use strict';

const fractal = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Fluid Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/fractal/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/fractal/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/dist');

module.exports = fractal;
