"""
Hello world!
"""
DOMAIN = "z2m_light_admin"


bundle_file_names = ["main.js", "main.css"]
async def async_setup(hass, config):
    """Set up this integration using yaml."""
    for bundle_file_name in bundle_file_names:
        url = f'/api/panel_custom/${DOMAIN}/${bundle_file_name}'
        location = hass.config.path(f'custom_components/${DOMAIN}/${bundle_file_name}')
        hass.http.register_static_path(url, location)
    hass.components.frontend.async_register_built_in_panel(
        component_name="custom",
        sidebar_title="Z2M",
        sidebar_icon="mdi:math-log",
        frontend_url_path="z2m-la",
        config={
            "_panel_custom": {
                "name": "z2m-light-admin",
                "embed_iframe": False,
                "trust_external": True,
                "js_url": url,
            }
        },
        require_admin=True,
    )
    return True