'use strict';

/**
 * Task.js controller
 *
 * @description: A set of functions called "actions" for managing `Task`.
 */

module.exports = {

  /**
   * Retrieve task records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.task.fetchAll(ctx.query);
  },

  /**
   * Retrieve a task record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.task.fetch(ctx.params);
  },

  /**
   * Create a/an task record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.task.add(ctx.request.body);
  },

  /**
   * Update a/an task record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.task.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an task record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.task.remove(ctx.params);
  },

  /**
   * Add relation to a/an task record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.task.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an task record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.task.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an task record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.task.removeRelation(ctx.params, ctx.request.body);
  }
};
