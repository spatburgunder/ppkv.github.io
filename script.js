(function () {
    "use strict";

    if (window.block_showy_all_ready) return;
    window.block_showy_all_ready = true;

    // 1. Блокируем сбор фингерпринта, сессии, попапы с оплатой,
    //    подгрузку marketing-runtime.js и т.д.
    window.ShowyMarketingRuntime = {
        start: function () {},
        context: function () {},
        createWtchInvoice: function () {},
        registerSourceAdapter: function () {},
        // прозрачный passthrough — источники видео работают как обычно
        sourceBase: function (originalBase) { return originalBase; },
        rewriteSourceUrl: function (url) { return url; },
        ensureInlinePro: function () {},
        isInlineProActive: function () { return false; }
    };

    // 2. Блокируем сам виджет-баннер с предложением PRO
    window.ShowyProEntryBanner = {
        attach: function () {
            return {
                mount: function () {},
                destroy: function () {},
                ensure: function () {}
            };
        },
        version: 'blocked'
    };
})();
