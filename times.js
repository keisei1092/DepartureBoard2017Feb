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
    TimeTableElement({ klassName: 'text-orange bilingual', dataJapanese: '快速', dataEnglish: 'RAPID' }),
    TimeTableElement({ text: '8:28' }),
    TimeTableElement({ klassName: 'text-orange bilingual', dataJapanese: '東京', dataEnglish: 'Tokyo' }),
    TimeTableElement({ klassName: 'bilingual', dataJapanese: '15両', dataEnglish: '15 Cars' })
  ],
  [
    TimeTableElement({ klassName: 'text-orange bilingual', dataJapanese: '快速', dataEnglish: 'RAPID' }),
    TimeTableElement({ text: '8:37' }),
    TimeTableElement({ klassName: 'text-orange bilingual', dataJapanese: '東京', dataEnglish: 'Tokyo' }),
    TimeTableElement({ klassName: 'bilingual', dataJapanese: '15両', dataEnglish: '15 Cars' })
  ]
];
