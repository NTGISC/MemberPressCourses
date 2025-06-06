document.addEventListener('DOMContentLoaded', function() {
  // Handle wp-block-preformatted (may not have <code>)
  document.querySelectorAll('pre.wp-block-preformatted').forEach(function(block, i) {
    if (!block.querySelector('code')) {
      var code = document.createElement('code');
      code.className = 'language-python';
      var html = block.innerHTML;
      html = html.replace(/<br\s*\/?>/gi, '\n');
      var text = html.replace(/<[^>]+>/g, '');
      code.textContent = text;
      block.innerHTML = '';
      block.appendChild(code);
    }
  });

  // Handle wp-block-code (already has <code>)
  document.querySelectorAll('pre.wp-block-code > code').forEach(function(code, i) {
    code.classList.add('language-python');
  });

  Prism.highlightAll();
});
