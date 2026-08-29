(function () {
  "use strict";

  function startPlugin() {
    window.plugin = true;
    

  Lampa.Listener.follow("app", (e) => {
    if (e.type == "ready") {
    $("[class=showy-pro-entry-banner]").eq(0).remove(); 
    }
  });
 }
  if (!window.plugin) startPlugin();
})();

