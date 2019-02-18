'use strict';

/**
 * Tecnologies.js controller
 *
 * @description: A set of functions called "actions" for managing `Tecnologies`.
 */

module.exports = {

  /**
   * Retrieve tecnologies records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tecnologies.search(ctx.query);
    } else {
      return strapi.services.tecnologies.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tecnologies record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tecnologies.fetch(ctx.params);
  },

  /**
   * Count tecnologies records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tecnologies.count(ctx.query);
  },

  /**
   * Create a/an tecnologies record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tecnologies.add(ctx.request.body);
  },

  /**
   * Update a/an tecnologies record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tecnologies.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tecnologies record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tecnologies.remove(ctx.params);
  }
};
