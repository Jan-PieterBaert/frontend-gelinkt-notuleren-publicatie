import Route from '@ember/routing/route';

export default Route.extend({
  init() {
    this._super(...arguments);
    this.breadCrumb = this.breadCrumb || { title: 'Notulen' };
  },

  async model() {
    const id = this.modelFor('bestuurseenheid.zitting').get('id');
    return (await this.store.query('notulen', {
      'filter[zitting][id]': id,
      page: {
        size: 1
      }
    })).get('firstObject');
  }
});
