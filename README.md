# Railway's `Express.js` + `Passport.js` starter

This template deploys a simple service with fundamental components setup, built-in authentication/authorisation, and a fairly organised codebase.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/7VIvXX?referralCode=h4Sp39)

# In this codebase

> Although important notes will be presented here, it is recommended to explore and emerge yourself in a `dfs` way, starting [here](https://github.com/edmondwinston/railway-nodejs/blob/main/src/index.js), as there exists plenty comments that may help you.

## Tech stack

`Express.js` application with [`Passport.js`](https://github.com/jaredhanson/passport) to protect your precious todos, as well as [`chai`](https://github.com/chaijs/chai) on [`mocha`](https://github.com/mochajs/mocha) for testing. Also, the other branch implements basic `ejs`.

## Using this starter

This service has the following endpoints:

- _`/`_: the index. Useful to healthcheck.
- _`/api/v1/account`_: protected resource. Will give you user data if authenticated.
- _`/api/v1/account/authenticate`_: where you would log in. Any email+password would work.

Besides, in case you are almost there understanding, after having successfully logged in, the below cookie will be attached to every request to the service, and it is this cookie that acts as a key to open `Passport.js` door to the protected resources sitting behind it.

![image](https://github.com/edmondwinston/railway-nodejs/assets/132081506/e13af1a8-038c-46d9-8f64-34c6c7e168ec)

## Architecture notes

- Requests to your service flow pass your middlewares to your routes. Both of them are attached to the main application separately, and you can always add more in either [`src/core/attach-routes.js`](https://github.com/edmondwinston/railway-nodejs/blob/main/src/core/attach-routes.js) or [`src/core/attach-middlewares.js`](https://github.com/edmondwinston/railway-nodejs/blob/main/src/core/attach-middlewares.js).
- All the middlewares attached in [`src/core/attach-middlewares.js`](https://github.com/edmondwinston/railway-nodejs/blob/main/src/core/attach-middlewares.js) are application-level middlewares. They could all be categorised into the following types (1) **chore middlewares**, i.e. `cors`, `csrf`, etc. (2) **business middlewares**, which play some parts in the logic of your service.
- If a route-level middleware is what you need, [`src/modules/account/account.controller.js`](https://github.com/edmondwinston/railway-nodejs/blob/4bd82218e273149e9b7a56c077fd6fd034300570/src/modules/account/account.controller.js#L11) is an example implementation. _But remember_, `ensureAuthenticated` is placed in the common [`src/middlewares/index.js`](https://github.com/edmondwinston/railway-nodejs/blob/main/src/middlewares/index.js) because it will also be used in other routes and modules; if what you have is local to, say the `account` module, please put it there. (`account.middleware.js` is not a bad name)
- This codebase does not implement any logging mechanism, because only God knows what library you love. It also does not have `dotenv` built-in, because `Railway` injects environment variables at runtime. Do install if you are using this starter, not just reading it as a way to procrastinate your life (but thank you!).
- Other implementation details will be documented somewhere near the code.

## Testing

This is separated from the above section because I have actually tried a few testing frameworks, and `chai`'s interface is by far the most convenient to work with. Most of the time, you would want to test route handlers' business logic (TDD), or a fragment of the service flow (BDD), and `chai`'s `should` APIs or the normal `expect`s are really sweet. Anyway, just organise your test files as per the existing structure, but technically any file in the `__test__` directory that has the `.test.js` extension will be included if you run the predefined `test` script.

## Development

- The predefined `dev` script uses `Node.js` v18 experimental _--watch_ flag. If you cannot handle it, please implement `nodemon` or `pm2` yourself.
- Some JSDoc tags used are official ones, but rather a way of notating. They are the only personal thing in this starter, and please feel free to modify them to your team's specs, or your own liking.
- Have a glance at [this ESM guide](https://nodejs.org/api/esm.html) with a cup of coffee, there is a high chance you might learn something new.
