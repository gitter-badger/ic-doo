/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'People',
    info : 'We are a people driven business – employees, clients and partners are equally vital to our success. We foster respect and trust in everything we do.'
  }, {
    name : 'Passion',
    info : 'We are passionate about shaping the future, we seek new opportunities and we believe in what we do.'
  }, {
    name : 'Performance',
    info : 'We want to be the best in everything we do, we strive to be leaders. We do things right first time and on time.'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    firstname: 'Walid',
    lastname: 'Ghazzo',
    email: 'walidghazzo@gmail.com',
    password: 'ss'
  }, {
    provider: 'local',
    role: 'admin',
    firstname: 'Admin',
    lastname: 'Istrator',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});