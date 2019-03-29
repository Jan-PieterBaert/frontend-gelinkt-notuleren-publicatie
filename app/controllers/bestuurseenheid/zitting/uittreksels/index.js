import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  bvapSort: Object.freeze([
    'behandelingVanAgendapunt.position',
    'behandelingVanAgendapunt.onderwerp.position'
  ]),

  uittreksels: sort('model.uittreksels', 'bvapSort')
});
