"""
Hello world!
"""
DOMAIN = "z2m_light_admin"


bundle_file_names = ["main.js"]
async def async_setup(hass, config):
    """Set up this integration using yaml."""

    url = f'/api/panel_custom/{DOMAIN}/main.js'
    location = hass.config.path(f'custom_components/{DOMAIN}/main.js')
    hass.http.register_static_path(url, location)
    hass.components.frontend.async_register_built_in_panel(
        component_name="custom",
        sidebar_title="Z2M",
        sidebar_icon="mdi:zigbee",
        frontend_url_path="z2m-la",
        config={
            "_panel_custom": {
                "name": "z2m-light-admin",
                "embed_iframe": True,
                "trust_external": True,
                "js_url": url
            }
        },
        require_admin=True,
    )
    return True