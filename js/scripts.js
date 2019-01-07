var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {

  $('.search').each(function() {
    var self = $(this);
    var div = self.children('div');
    var placeholder = div.children('input').attr('placeholder');
    var placeholderArr = placeholder.split(/ +/);
    if (placeholderArr.length) {
      var spans = $('<div />');
      $.each(placeholderArr, function(index, value) {
        spans.append($('<span />').html(value + '&nbsp;'));
      });
      div.append(spans);
    }
    self.click(function() {
      self.addClass('open');
      setTimeout(function() {
        self.find('input').focus();
      }, 750);
    });
    $(document).click(function(e) {
      if (!$(e.target).is(self) && !jQuery.contains(self[0], e.target)) {
        self.removeClass('open');
      }
    });
  });

});
