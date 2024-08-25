export const TextFormatting = {
  text: '',

  setText(newText) {
    this.text = newText;
    return this;
  },

  getText() {
    return this.text;
  },

  handlePrepositions() {
    const prepositions = [
      'в', 'без', 'до', 'для', 'за', 'через', 'над', 'по', 'из', 'у',
      'около', 'под', 'о', 'про', 'на', 'к', 'перед', 'при', 'с', 'между',
    ];
    const pattern = new RegExp(`((^|\\s)(${prepositions.join('|')}))\\s`, 'gi');
    this.text = this.text.replace(pattern, '$1&nbsp;');
    return this;
  },

  handleCopyright() {
    this.text = this.text.replace(/©/g, '&copy;');
    return this;
  },

  handleNumberingCharacters() {
    this.text = this.text.replace(/(#|№)/g, '&#8470;');
    return this;
  },

  handleSpacesAroundDashes() {
    this.text = this.text.replace(/(\s[-–—]\s)/g, ' &mdash; ');
    return this;
  },

  handleQuoteMarks() {
    this.text = this.text.replace(/"([^"]*)"/g, '&laquo;$1&raquo;');
    this.text = this.text.replace(/'([^']*)'/g, '&lsquo;$1&rsquo;');
    return this;
  },
};
