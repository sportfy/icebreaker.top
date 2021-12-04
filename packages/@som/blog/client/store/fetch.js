let query
if (process.client) {
  query = require('@/cloudbase/db/query/index.js')
}

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getComments(
    { state },
    {
      id,
      opt = {
        page: 1,
        perPage: 10,
      },
    }
  ) {
    return await query.getCommentPagedListByArticleId(id, opt)
  },
  getArticleReadCount(ctx, { id }) {
    return query.getArticleReadCount(id)
  },
}
