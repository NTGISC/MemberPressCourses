Prism.languages.arcade = Prism.languages.extend('javascript', {
  // Add support for ESRI Arcade special variables like $feature
  'arcade-variable': {
    pattern: /\$[a-zA-Z_]\w*/g,
    alias: 'variable'
  },
  // Add built-in functions specific to Arcade
  'arcade-builtin': {
    pattern: /\b(Upper|Lower|Trim|Concatenate|Round|Abs|Ceil|Floor|Pow|Now|DateDiff|Year|Month|Day|Area|Length|Centroid|Count|Push|Get|HasKey)\b/g,
    alias: 'function'
  }
});

// Insert the new tokens before function for Arcade
Prism.languages.insertBefore('arcade', 'function', {
  'arcade-variable': Prism.languages.arcade['arcade-variable'],
  'arcade-builtin': Prism.languages.arcade['arcade-builtin']
});

document.addEventListener('DOMContentLoaded', function() {
  // Handle wp-block-preformatted (may not have <code>)
  document.querySelectorAll('pre.wp-block-preformatted').forEach(function(block, i) {
    if (!block.querySelector('code')) {
      var code = document.createElement('code');
      code.className = 'language-arccade';
      var html = block.innerHTML.replace(/<br\s*\/?>/gi, '\n');
			var temp = document.createElement('div');
			temp.innerHTML = html;
			var text = temp.textContent;
			code.textContent = text;
      block.innerHTML = '';
      block.appendChild(code);
    }
  });

  // Handle wp-block-code (already has <code>)
  document.querySelectorAll('pre.wp-block-code > code').forEach(function(code, i) {
    code.classList.add('language-arcade');
  });

  Prism.highlightAll();
});