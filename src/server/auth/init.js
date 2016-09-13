const passport = require('passport');
const knex = require('../db/knex');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    return knex('users')
    .select('*')
    .where('id', id)
    .then((user) => {
      done(null, user[0]);
    })
    .catch((error) => {
      done(error);
    });
  });
}
