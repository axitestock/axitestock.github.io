$(document).ready(function() {
  $("#hulk").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
});
