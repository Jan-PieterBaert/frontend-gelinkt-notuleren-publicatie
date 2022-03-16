import Route from '@ember/routing/route';

export default class BestuurseenheidZittingUittrekselsDetailIndexRoute extends Route {
  async model() {
    const uittreksel = this.modelFor(
      'bestuurseenheid.zitting.uittreksels.detail'
    );
    const publication = uittreksel.get('publication');
    const zitting = this.modelFor('bestuurseenheid.zitting');
    return {
      uittreksel,
      publication,
      zitting,
    };
  }
}
