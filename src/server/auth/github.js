const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const init = require('./init');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_SECRET_KEY,
  callbackURL: process.env.GITHUB_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(arguments);
  }

));

// serialize user into the session
init();


module.exports = passport;
