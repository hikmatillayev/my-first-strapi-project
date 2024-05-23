'use strict';

/**
 * display-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::display-name.display-name');
