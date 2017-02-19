// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
(function() {
  function bilingualLabels() {
    $('.bilingual').each(function(index, element) {
      $element = $(element);

      // 空なら日本語出す
      var blank = $element.text() === '';
      if (blank) {
        var japanese = $element.data('japanese');
        $element.html(japanese);
        return;
      }

      // 日本語を出してたら英語出す
      var displayingJapanese = $element.text() === $element.data('japanese');
      if (displayingJapanese) {
        var english = $element.data('english');
        $element.html(english);
        return;
      }

      // 日本語出す
      var text = $element.data('japanese');
      $element.html(text);
    });
  }

  function repaint() {
    console.log('hoge');
    bilingualLabels();
  }

  repaint();
  setInterval(repaint, 5000);
}());

