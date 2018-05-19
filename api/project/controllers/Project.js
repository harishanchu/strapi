'use strict';

/**
 * Project.js controller
 *
 * @description: A set of functions called "actions" for managing `Project`.
 */

module.exports = {

  /**
   * Retrieve project records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.project.fetchAll(ctx.query);
  },

  /**
   * Retrieve a project record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.project.fetch(ctx.params);
  },

  /**
   * Create a/an project record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.project.add(ctx.request.body);
  },

  /**
   * Update a/an project record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.project.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an project record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.project.remove(ctx.params);
  },

  /**
   * Add relation to a/an project record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.project.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an project record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.project.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an project record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.project.removeRelation(ctx.params, ctx.request.body);
  }
};
