/*
  JSON plugin
*/

define({
  translate: function(load) {
    if (this.builder)
      return 'export default ' + JSON.stringify(JSON.parse(load.source));
  },
  instantiate: function(load) {
    if (!this.builder)
      return JSON.parse(load.source);
  }
});