import app from './app';
import {ports} from './settings';
// import your logic files/modules below to be included in the bundle
import './article';
import './noncypher';

const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
   })))

const appListening = new Promise(resolve => app.listen(ports.app, resolve))
    .then(() => console.log(`App listening on port ${ports.app}.`))
    .then(() => app);

export {appListening};
