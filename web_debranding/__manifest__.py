# Copyright 2026 bring.out doo Sarajevo
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl)
{
    "name": "Web Debranding",
    "version": "16.0.1.0.0",
    "summary": "Replace Odoo branding with OCA OCB references",
    "description": "Changes 'Powered by Odoo' to 'Powered by Odoo open-source platform' with link to OCA OCB.",
    "author": "bring.out doo Sarajevo",
    "website": "https://bring.out.ba",
    "license": "AGPL-3",
    "depends": ["web"],
    "data": [
        "views/webclient_templates.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "web_debranding/static/src/js/debranding.js",
        ],
    },
    "installable": True,
    "application": False,
}
