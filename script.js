(function () {
    "use strict";

    if (window.block_showy_banner_ready) return;
    window.block_showy_banner_ready = true;
  
    // Заглушка должна появиться ДО того, как выполнится online.js
    window.ShowyProEntryBanner = {
        attach: function () {
            // возвращаем "пустой" контроллер на случай,
            // если код online.js всё же попытается вызвать .mount()/.destroy()
            return {
                mount: function () {},
                destroy: function () {},
                ensure: function () {}
            };
        },
        version: 'blocked'
    };
})();
