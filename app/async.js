

exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var d = $.Deferred();

    setTimeout(function () {
      d.resolve(value);
    }, 100);

    return d.promise();
  },

  manipulateRemoteData: function(url) {
    var d = $.Deferred();
    $.get(url, function(data) {
      d.resolve(data.people.map(t => t.name).sort());
    });
    return d.promise();
  }
};
