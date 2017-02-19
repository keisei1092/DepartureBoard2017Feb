var TimeTableElement = function(element) {
    if(!(this instanceof TimeTableElement)) {
        return new TimeTableElement(element);
    }

    this.klassName = element.klassName || '';
    this.dataJapanese = element.dataJapanese || '';
    this.dataEnglish = element.dataEnglish || '';
    this.text = element.text || '';
};

TimeTableElement.prototype.domElement = function() {
    $td = $('<td></td>');
    if (this.klassName) {
      $td.addClass(this.klassName);
    }
    if (this.dataJapanese) {
      $td.data('japanese', this.dataJapanese);
    }
    if (this.dataEnglish) {
      $td.data('english', this.dataEnglish);
    }
    if (this.text) {
      $td.html(this.text);
    }
    return $td;
};

module.exports = [
  [
    TimeTableElement({ klassName: 'bilingual', dataJapanese: '山手線', dataEnglish: 'Yamanote Line' }),
    TimeTableElement({ klassName: 'text-orange bilingual', dataJapanese: '新宿・池袋方面', dataEnglish: 'Shinjuku & Ikebukuro' }),
    TimeTableElement({ text: '8:28' })
  ],
  [
    TimeTableElement({ klassName: 'bilingual', dataJapanese: '山手線', dataEnglish: 'Yamanote Line' }),
    TimeTableElement({ klassName: 'text-orange bilingual', dataJapanese: '新宿・池袋方面', dataEnglish: 'Shinjuku & Ikebukuro' }),
    TimeTableElement({ text: '8:37' })
  ]
];
