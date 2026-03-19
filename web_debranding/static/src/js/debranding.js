/** @odoo-module **/
// Copyright 2026 bring.out doo Sarajevo
// License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl)

import { patch } from "@web/core/utils/patch";
import { WebClient } from "@web/webclient/webclient";

patch(WebClient.prototype, "web_debranding.WebClient", {
    setup() {
        this._super(...arguments);
        // Replace Odoo branding text in the DOM after render
        const observer = new MutationObserver(() => {
            document.querySelectorAll('a[href*="odoo.com"]').forEach((el) => {
                if (el.textContent.includes("Powered by") || el.textContent.includes("Odoo")) {
                    el.href = "https://github.com/OCA/OCB";
                    el.textContent = "Powered by Odoo open-source platform";
                    el.target = "_blank";
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    },
});
