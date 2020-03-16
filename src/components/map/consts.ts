import { Device } from "../../types";


export const GATEWAY: Device = {
	nwkAddr: 'coordinator',
	// eslint-disable-next-line @typescript-eslint/camelcase
	friendly_name: 'Coordinator node',
	// eslint-disable-next-line @typescript-eslint/camelcase
	last_seen: (Date.now() / 1000).toString(),
	type: "Coordinator",
	ManufName: 'SLS gateway'
};
