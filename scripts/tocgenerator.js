document.addEventListener('DOMContentLoaded', function() {
  var headings = document.querySelectorAll('h2.wp-block-heading');
  var idMap = {};
  var tocHeadings = [];
  var stopped = false;

  headings.forEach(function(h) {
    if (stopped) return;
    var headingText = h.textContent.trim();
    if (headingText === 'Support NTGISC') {
      stopped = true;
      return;
    }
    if (!h.id) {
      var baseId = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
      var id = baseId;
      var count = 1;
      while (idMap[id] || document.getElementById(id)) {
        id = baseId + '-' + (count++);
      }
      h.id = id;
      idMap[id] = true;
    }
    tocHeadings.push(h);
  });

  if (tocHeadings.length > 0) {
    var toc = document.createElement('nav');
    toc.setAttribute('aria-label', 'Table of Contents');
    toc.style.margin = '2em 0';
    var list = document.createElement('ul');
    tocHeadings.forEach(function(h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
    toc.appendChild(list);

    var tocDiv = document.getElementById('divTOC');
    if (tocDiv) {
      tocDiv.appendChild(toc);
    }
  }
});