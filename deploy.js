/*eslint-disable*/
'use strict';

const ghpages = require('gh-pages');
const readline = require('readline');
const { exec } = require('child_process');
const { promisify } = require('util');
const pkg = require('./package.json');

const execAsync = promisify(exec);

async function publish (message) {
  await createReleaseTag(message);
  return ghpages.publish(
    'build',
    {
      repo: 'https://github.com/gkampitakis/small-react-projects',
      message: message === '' ? 'Update' : `🚀 ${message}`,
      branch: 'release',
    },
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Github pages updated');
    }
  );
}

async function createReleaseTag (message) {
  const version = `v${pkg.version}`;

  const publishedTags = (await execAsync('git tag')).stdout.split("\n");
  if (publishedTags.includes(version)) throw Error('Version already published');

  await execAsync(`git tag ${version} -m "📦 ${message}"`);

  console.log(`Tagged current release as ${version} and pushing ...`);

  await execAsync('git push --tags');

  console.log('Successfully tagged');
}

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question('Provide a commit message: ', (message) => {
  publish(message);
  prompt.close();
});