const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');

const filePattern = './translations/messages/**/*.json';
const outputDir = './translations/';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = glob
  .sync(filePattern)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce(
    (collection, descriptors) => {
      descriptors.forEach(({ id, defaultMessage }) => {
        if (collection.hasOwnProperty(id)) {
          throw new Error(`Duplicate message id: ${id}`);
        }
        collection[id] = defaultMessage;
      });

      return collection;
    },
    {}
  );

// Create a new directory that we want to write the aggregate messages to
mkdirp.sync(outputDir);

// Write the messages to this directory
fs.writeFileSync(
  `${outputDir}translations.json`,
  JSON.stringify({ pl: defaultMessages }, null, 2)
);
