<!-- Prism.js CSS (choose a theme from https://prismjs.com/) -->
<link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css" rel="stylesheet" />
<!-- Prism.js Core and Python Language support -->
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('pre.wp-block-preformatted').forEach(function(block, i) {
    block.classList.add('language-python');
    // If not already wrapped, wrap content in a <code> tag
    if (!block.querySelector('code')) {
      var code = document.createElement('code');
      code.className = 'language-python';
      // Convert <br> to \n if necessary
      var html = block.innerHTML;
      html = html.replace(/<br\s*\/?>/gi, '\n');
      // Remove any HTML tags (if any remain)
      var text = html.replace(/<[^>]+>/g, '');
      // Now insert as plain text
      code.textContent = text;
      block.innerHTML = '';
      block.appendChild(code);
    }
  });
  Prism.highlightAll();
});
</script>