 var iframe = document.getElementById('v_s1');
 var player = new Vimeo.Player(iframe);

 player.on('play', function() {
     console.log('played the video!');
 });

 player.getVideoTitle().then(function(title) {
     console.log('title:', title);
 });
 $(document).ready(function() {
     $('.vm-modal').click(function() {
         checkVideoModal();
     })

     $('.close').click(function() {
         checkVideoModal();
     })

     function checkVideoModal() {
         if ($('#add-modal').hasClass("modal")) {
             $('#modal-switcher').removeClass('modaloverlay');
             $('#add-modal').removeClass('modal');
             $('.close').hide();
         } else {
             $('#modal-switcher').addClass('modaloverlay');
             $('#add-modal').addClass('modal');
             $('.close').show();
         }
     }

     $('#pause').click(function() {
         player.pause();
         console.log('pause the video!');

     })
     $('#play').click(function() {
         player.play();
         console.log('Play the video!');

     })
 })