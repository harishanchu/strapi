'use strict';

/**
 * Client.js controller
 *
 * @description: A set of functions called "actions" for managing `Client`.
 */

module.exports = {

  /**
   * Retrieve client records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.client.fetchAll(ctx.query);
  },

  /**
   * Retrieve a client record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.client.fetch(ctx.params);
  },

  /**
   * Create a/an client record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.client.add(ctx.request.body);
  },

  /**
   * Update a/an client record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.client.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an client record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.client.remove(ctx.params);
  },

  /**
   * Add relation to a/an client record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.client.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an client record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.client.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an client record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.client.removeRelation(ctx.params, ctx.request.body);
  }
};
