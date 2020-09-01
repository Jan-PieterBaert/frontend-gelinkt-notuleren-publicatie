import Application from 'frontend-gelinkt-notuleren-publicatie/app';
import config from 'frontend-gelinkt-notuleren-publicatie/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
