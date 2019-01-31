const prompt = require('prompt');
const mkdirp = require('mkdirp');
const moment = require('moment');
const _ = require('underscore.string');
const yaml = require('js-yaml');
const fs = require('fs');

prompt.start();

prompt.get(['title', 'category'], (err, result) => {
  const dir = `./blog/${moment().format('YYYY-MM-DD')}-${_.slugify(result.title)}`;
  mkdirp.sync(dir);

  const frontmatter = {
    category: `${result.category}`,
    date: moment().toJSON(),
    draft: true,
    title: `${result.title}`,
    path: `${_.slugify(result.title)}`,
  };
  const postFileStr = `---
${yaml.safeDump(frontmatter)}---`;

  fs.writeFileSync(`${dir}/index.md`, postFileStr, {
    encoding: 'utf-8',
  });

  return console.log(dir);
});
