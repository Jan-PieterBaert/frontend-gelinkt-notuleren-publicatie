import Controller from '@ember/controller';
import ENV from 'frontend-gelinkt-notuleren-publicatie/config/environment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('footer', ENV['vo-webuniversum']['footer']);
  }
});
