define(['jquery', 'core/modal_factory'], function($, ModalFactory) {
  //var triggers = $('.activityinstance a'), i =0;
  var triggers = $('h1'), i =0;
  for (i = 0; i < triggers.length; i += 1) {
      triggers[i].click(function() {
          alert(1)
            ModalFactory.create({
              title: 'test title',
              body: '<p>test body content</p>',
              footer: 'test footer content',
            }, trigger)
            .done(function(modal) {

            });
      })
  }
});
