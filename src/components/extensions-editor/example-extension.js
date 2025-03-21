class MyExampleExtension_TS_ {
    constructor(
        zigbee,
        mqtt,
        state,
        publishEntityState,
        eventBus,
        enableDisableExtension,
        restartCallback,
        addExtension,
        settings,
        logger,
    ) {
        this.zigbee = zigbee;
        this.mqtt = mqtt;
        this.state = state;
        this.publishEntityState = publishEntityState;
        this.eventBus = eventBus;
        this.enableDisableExtension = enableDisableExtension;
        this.restartCallback = restartCallback;
        this.addExtension = addExtension;
        this.settings = settings;
        this.logger = logger;

        this.logger.info('Loaded  MyExampleExtension_TS_');
        this.mqttBaseTopic = this.settings.get().mqtt.base_topic;
    }

    /**
     * Called when the extension starts (on Zigbee2MQTT startup, or when the extension is saved at runtime)
     */
    start() {
        this.mqtt.publish('example/extension', 'hello from MyExampleExtension_TS_');

        // all possible events can be seen here: https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts

        this.eventBus.onStateChange(this, this.onStateChange.bind(this));
    }

    /**
     * Called when the extension stops (on Zigbee2MQTT shutdown, or when the extension is saved/removed at runtime)
     */
    stop() {
        this.eventBus.removeListeners(this);
    }

    async onStateChange(data) {
        // see typing (properties) here: https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts => namespace eventdata
        const { entity, update } = data;

        // example how to toggle state
        if (entity.ID === '0x00158d000224154d') {
            this.logger.info(`State changed for 0x00158d000224154d: ${JSON.stringify(data)}`);

            // state changed for some device (example: clicked a button)
            if (update.action === 'single') {
                const myLampIeeAddr = '0x00124b001e73227f'; // change this

                this.mqtt.onMessage(`${this.mqttBaseTopic}/${myLampIeeAddr}/set`, JSON.stringify({ state: 'toggle' }));
            }
        }
    }
}

// eslint-disable-next-line no-undef
module.exports = MyExampleExtension_TS_;
