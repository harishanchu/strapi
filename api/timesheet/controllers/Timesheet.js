'use strict';

/**
 * Timesheet.js controller
 *
 * @description: A set of functions called "actions" for managing `Timesheet`.
 */

module.exports = {

  /**
   * Retrieve timesheet records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.timesheet.fetchAll(ctx.query);
  },

  /**
   * Retrieve a timesheet record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.timesheet.fetch(ctx.params);
  },

  /**
   * Create a/an timesheet record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.timesheet.add(ctx.request.body);
  },

  /**
   * Update a/an timesheet record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.timesheet.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an timesheet record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.timesheet.remove(ctx.params);
  },

  /**
   * Add relation to a/an timesheet record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.timesheet.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an timesheet record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.timesheet.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an timesheet record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.timesheet.removeRelation(ctx.params, ctx.request.body);
  }
};
