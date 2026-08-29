(function () {
  "use strict";

//лишнее в боковом меню
  Lampa.Listener.follow("app", (e) => {
    if (e.type == "ready") {
    $("[data-action=anime]").eq(0).remove(); //Аниме
    }
  });
 }
  if (!window.plugin) startPlugin();
})();

