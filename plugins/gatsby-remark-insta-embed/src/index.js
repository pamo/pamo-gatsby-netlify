const visit = require('unist-util-visit');

function instagramEmbed() {
  return transformer;
}
function embedCode(code) {
  return `<div><iframe src="https://instagram.com/p/${code}/embed" frameborder="0" allowfullscreen scrolling="no" allowtransparency width="320" height="320"></iframe></div>`;
}

function transformer(tree) {
  visit(tree, 'image', visitor);
}

function visitor(node) {
  const { alt = '', url = '', position = {} } = node;

  if (alt === 'instagram') {
    node.type = 'html';
    node.value = embedCode(url);
  }
}

module.exports = ({ markdownAST }) => {
  instagramEmbed()(markdownAST);

  return markdownAST;
};
