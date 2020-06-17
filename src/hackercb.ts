import { sanitizeGraph } from "./utils";
import { GraphI } from "./components/map/types";

const _graph = {
	nodes: [
		{
			ieeeAddr: "0x00124b00192e81ec",
			friendlyName: "Coordinator",
			type: "Coordinator",
			networkAddress: 0,
			failed: [

			],
			lastSeen: 1591028834151
		},
		{
			ieeeAddr: "0x000d6ffffe023ba8",
			friendlyName: "kitchen_track_lamp_west_01",
			type: "Router",
			networkAddress: 4664,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825373
		},
		{
			ieeeAddr: "0x000d6ffffe463906",
			friendlyName: "kitchen_track_lamp_north_04",
			type: "Router",
			networkAddress: 53299,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390824304
		},
		{
			ieeeAddr: "0x000d6ffffe024441",
			friendlyName: "kitchen_track_lamp_west_03",
			type: "Router",
			networkAddress: 7709,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390823673
		},
		{
			ieeeAddr: "0x000d6ffffe3890fd",
			friendlyName: "kitchen_track_lamp_north_01",
			type: "Router",
			networkAddress: 57575,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390824902
		},
		{
			ieeeAddr: "0x000d6ffffe3244a7",
			friendlyName: "kitchen_track_lamp_west_05",
			type: "Router",
			networkAddress: 50917,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390826252
		},
		{
			ieeeAddr: "0x000d6ffffe389162",
			friendlyName: "kitchen_track_lamp_east_01",
			type: "Router",
			networkAddress: 42299,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390525794
		},
		{
			ieeeAddr: "0x000d6ffffe46a1a3",
			friendlyName: "kitchen_track_lamp_west_02",
			type: "Router",
			networkAddress: 35362,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390826661
		},
		{
			ieeeAddr: "0x000d6ffffe01919c",
			friendlyName: "kitchen_track_lamp_east_10",
			type: "Router",
			networkAddress: 32317,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390824657
		},
		{
			ieeeAddr: "0x000d6ffffe484a0b",
			friendlyName: "kitchen_track_lamp_south_03",
			type: "Router",
			networkAddress: 59114,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [
				"lqi"
			],
			lastSeen: 1589657789073
		},
		{
			ieeeAddr: "0x000d6ffffe023cf6",
			friendlyName: "kitchen_track_lamp_east_09",
			type: "Router",
			networkAddress: 64921,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825662
		},
		{
			ieeeAddr: "0xd0cf5efffefdb48e",
			friendlyName: "kitchen_track_lamp_east_05",
			type: "Router",
			networkAddress: 20445,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825669
		},
		{
			ieeeAddr: "0x000d6ffffe344bcd",
			friendlyName: "kitchen_track_lamp_south_04",
			type: "Router",
			networkAddress: 13539,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825608
		},
		{
			ieeeAddr: "0x000d6ffffe0b2f8d",
			friendlyName: "kitchen_track_lamp_west_06",
			type: "Router",
			networkAddress: 60195,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390826134
		},
		{
			ieeeAddr: "0xd0cf5efffefdb29a",
			friendlyName: "kitchen_track_lamp_east_03",
			type: "Router",
			networkAddress: 11050,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390826146
		},
		{
			ieeeAddr: "0x000d6ffffe46902c",
			friendlyName: "kitchen_track_lamp_south_02",
			type: "Router",
			networkAddress: 49493,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390823992
		},
		{
			ieeeAddr: "0x000d6ffffe42eb09",
			friendlyName: "kitchen_track_lamp_west_04",
			type: "Router",
			networkAddress: 12011,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390826373
		},
		{
			ieeeAddr: "0x000d6ffffe0b2c2e",
			friendlyName: "kitchen_track_lamp_east_07",
			type: "Router",
			networkAddress: 22749,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390824891
		},
		{
			ieeeAddr: "0x000d6ffffe42ee50",
			friendlyName: "kitchen_track_lamp_east_02",
			type: "Router",
			networkAddress: 9697,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390722303
		},
		{
			ieeeAddr: "0x000d6ffffe42f7f2",
			friendlyName: "kitchen_track_lamp_south_01",
			type: "Router",
			networkAddress: 31333,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592390825792
		},
		{
			ieeeAddr: "0x000d6ffffe037680",
			friendlyName: "kitchen_track_lamp_south_05",
			type: "Router",
			networkAddress: 34271,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825867
		},
		{
			ieeeAddr: "0x000d6ffffe019242",
			friendlyName: "kitchen_track_lamp_east_08",
			type: "Router",
			networkAddress: 8033,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390824964
		},
		{
			ieeeAddr: "0x000d6ffffe48f6bb",
			friendlyName: "kitchen_track_lamp_west_09",
			type: "Router",
			networkAddress: 40147,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825655
		},
		{
			ieeeAddr: "0x000d6ffffe42f4b7",
			friendlyName: "kitchen_track_lamp_north_02",
			type: "Router",
			networkAddress: 25735,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825321
		},
		{
			ieeeAddr: "0x000d6ffffe42fb39",
			friendlyName: "kitchen_track_lamp_east_04",
			type: "Router",
			networkAddress: 24081,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390826444
		},
		{
			ieeeAddr: "0x000d6ffffe48f304",
			friendlyName: "kitchen_track_lamp_east_06",
			type: "Router",
			networkAddress: 33020,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390825561
		},
		{
			ieeeAddr: "0x000d6ffffe43eb26",
			friendlyName: "kitchen_track_lamp_west_10",
			type: "Router",
			networkAddress: 60355,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390823886
		},
		{
			ieeeAddr: "0x000d6ffffe42d8f5",
			friendlyName: "kitchen_track_lamp_north_03",
			type: "Router",
			networkAddress: 44450,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390525024
		},
		{
			ieeeAddr: "0x000d6ffffe33d3c5",
			friendlyName: "kitchen_track_lamp_west_07",
			type: "Router",
			networkAddress: 22120,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592323728346
		},
		{
			ieeeAddr: "0x000d6ffffe4699e8",
			friendlyName: "kitchen_track_lamp_west_08",
			type: "Router",
			networkAddress: 57952,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb GU10 WS 400lm",
			failed: [

			],
			lastSeen: 1592390824516
		},
		{
			ieeeAddr: "0x00158d0002afaa1c",
			friendlyName: "button_stairway_down",
			type: "EndDevice",
			networkAddress: 36695,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592387949139
		},
		{
			ieeeAddr: "0x00158d00022b085a",
			friendlyName: "bedroom_curtains",
			type: "Router",
			networkAddress: 56368,
			manufacturerName: "LUMI",
			modelID: "lumi.curtain",
			failed: [
				"lqi"
			],
			lastSeen: 1591831651464
		},
		{
			ieeeAddr: "0x00158d000444573d",
			friendlyName: "button_spalnya_pavel_right",
			type: "EndDevice",
			networkAddress: 19120,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592389841387
		},
		{
			ieeeAddr: "0x00158d000427f5b8",
			friendlyName: "button_spalnya_katya",
			type: "EndDevice",
			networkAddress: 28730,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592390040481
		},
		{
			ieeeAddr: "0x00158d000322510b",
			friendlyName: "bedroom_termometer",
			type: "EndDevice",
			networkAddress: 55306,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592388093761
		},
		{
			ieeeAddr: "0x00158d0002f973d6",
			friendlyName: "cabinet_termometer",
			type: "EndDevice",
			networkAddress: 10339,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592390302426
		},
		{
			ieeeAddr: "0x00158d00034f7ddb",
			friendlyName: "childrens_termometer",
			type: "EndDevice",
			networkAddress: 3174,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592389764380
		},
		{
			ieeeAddr: "0x00158d0002f9719e",
			friendlyName: "guestroom_termometer",
			type: "EndDevice",
			networkAddress: 29706,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592388438672
		},
		{
			ieeeAddr: "0x00158d00010d5a16",
			friendlyName: "outside_termometer",
			type: "EndDevice",
			networkAddress: 12498,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592390816495
		},
		{
			ieeeAddr: "0x00158d0002705d84",
			friendlyName: "dom_livingroom_doubleswitch_right",
			type: "EndDevice",
			networkAddress: 34870,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592389364595
		},
		{
			ieeeAddr: "0x00158d0002705eb9",
			friendlyName: "dom_livingroom_doubleswitch_left",
			type: "EndDevice",
			networkAddress: 10240,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592388938414
		},
		{
			ieeeAddr: "0x00158d0002b052e7",
			friendlyName: "kitchen_button_near_duhovka",
			type: "EndDevice",
			networkAddress: 10105,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592390199765
		},
		{
			ieeeAddr: "0x00124b00061078f6",
			friendlyName: "_router_2538_0x00124b00061078f6",
			type: "Router",
			networkAddress: 38664,
			manufacturerName: "jethome",
			modelID: "cc2538.router.v1",
			failed: [
				"lqi"
			],
			lastSeen: 1591880538785
		},
		{
			ieeeAddr: "0x00158d0002e6e05b",
			friendlyName: "livingroom_termometer",
			type: "EndDevice",
			networkAddress: 37965,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592388377064
		},
		{
			ieeeAddr: "0x000b57fffe48aae7",
			friendlyName: "kitchen_dimmer",
			type: "EndDevice",
			networkAddress: 52888,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI wireless dimmer",
			lastSeen: 1591380499194
		},
		{
			ieeeAddr: "0x00158d0001dee913",
			friendlyName: "_0_heiman_remote",
			type: "EndDevice",
			networkAddress: 53706,
			manufacturerName: "HEIMAN",
			modelID: "RC-N",
			lastSeen: 1592320812087
		},
		{
			ieeeAddr: "0x00124b0018de86a5",
			friendlyName: "_router_2531_usb",
			type: "Router",
			networkAddress: 57210,
			manufacturerName: "LUMI",
			modelID: "lumi.router",
			failed: [
				"lqi"
			],
			lastSeen: 1592166861730
		},
		{
			ieeeAddr: "0x000d6ffffee45d9e",
			friendlyName: "dom_outside_west_04_down",
			type: "Router",
			networkAddress: 36769,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377738568
		},
		{
			ieeeAddr: "0x000b57fffe3007dd",
			friendlyName: "dom_outside_south_03_down",
			type: "Router",
			networkAddress: 27773,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 opal 1000lm",
			failed: [

			],
			lastSeen: 1592377891452
		},
		{
			ieeeAddr: "0x00158d0001deeae7",
			friendlyName: "power_socket_2nd_floor_corridor",
			type: "Router",
			networkAddress: 50367,
			manufacturerName: "HEIMAN",
			modelID: "SmartPlug-N",
			failed: [
				"lqi"
			],
			lastSeen: 1591028825321
		},
		{
			ieeeAddr: "0xd0cf5efffe2fbe1e",
			friendlyName: "dom_outside_east_03_down",
			type: "Router",
			networkAddress: 14141,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377846074
		},
		{
			ieeeAddr: "0x000d6ffffee45eaf",
			friendlyName: "dom_outside_west_02_down",
			type: "Router",
			networkAddress: 25249,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377919712
		},
		{
			ieeeAddr: "0xd0cf5efffed813dc",
			friendlyName: "dom_outside_north_03_up",
			type: "Router",
			networkAddress: 30805,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377837339
		},
		{
			ieeeAddr: "0xd0cf5efffe7d3b5b",
			friendlyName: "dom_outside_east_03_up",
			type: "Router",
			networkAddress: 30449,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377974177
		},
		{
			ieeeAddr: "0x00158d0003d502e2",
			friendlyName: "entrance_door_sensor",
			type: "EndDevice",
			networkAddress: 46523,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592390573809
		},
		{
			ieeeAddr: "0x00158d0002e20c6f",
			friendlyName: "livingroom_ventilation_thermometer",
			type: "EndDevice",
			networkAddress: 43442,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592390607606
		},
		{
			ieeeAddr: "0x00158d00033ecce8",
			friendlyName: "mangal_relay_2",
			type: "Router",
			networkAddress: 35953,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [

			],
			lastSeen: 1592390829919
		},
		{
			ieeeAddr: "0xd0cf5efffe72cfce",
			friendlyName: "dom_outside_north_04_down",
			type: "Router",
			networkAddress: 11192,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377842084
		},
		{
			ieeeAddr: "0x0017880102e1b344",
			friendlyName: "philips_hue_switch",
			type: "EndDevice",
			networkAddress: 52645,
			manufacturerName: "Philips",
			modelID: "RWL021",
			lastSeen: 1592387919308
		},
		{
			ieeeAddr: "0xd0cf5efffe7b516d",
			friendlyName: "dom_outside_east_01_up",
			type: "Router",
			networkAddress: 24318,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377856179
		},
		{
			ieeeAddr: "0x00158d0001da7f67",
			friendlyName: "vorota_sensor",
			type: "EndDevice",
			networkAddress: 58759,
			manufacturerName: "HEIMAN",
			modelID: "DoorSensor-N",
			lastSeen: 1592377930741
		},
		{
			ieeeAddr: "0x00158d0001da7ebf",
			friendlyName: "kalitka_sensor",
			type: "EndDevice",
			networkAddress: 39919,
			manufacturerName: "HEIMAN",
			modelID: "DoorSensor-N",
			lastSeen: 1591695073701
		},
		{
			ieeeAddr: "0x00158d0003553c27",
			friendlyName: "relay_vorota",
			type: "Router",
			networkAddress: 26339,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [

			],
			lastSeen: 1592390816830
		},
		{
			ieeeAddr: "0x90fd9ffffe0fbdb7",
			friendlyName: "dom_outside_north_03_down",
			type: "Router",
			networkAddress: 1749,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377742146
		},
		{
			ieeeAddr: "0x000d6ffffeff60a1",
			friendlyName: "dom_outside_west_02_up",
			type: "Router",
			networkAddress: 58079,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592291508175
		},
		{
			ieeeAddr: "0x000b57fffeec7655",
			friendlyName: "dom_outside_east_02_up",
			type: "Router",
			networkAddress: 56063,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377730813
		},
		{
			ieeeAddr: "0xd0cf5efffe7d2277",
			friendlyName: "dom_outside_south_03_up",
			type: "Router",
			networkAddress: 46797,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377707659
		},
		{
			ieeeAddr: "0x086bd7fffe02155c",
			friendlyName: "dom_outside_west_01_up",
			type: "Router",
			networkAddress: 40599,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377787554
		},
		{
			ieeeAddr: "0x000b57fffeec7c90",
			friendlyName: "dom_outside_south_04_up",
			type: "Router",
			networkAddress: 50671,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592224105962
		},
		{
			ieeeAddr: "0xd0cf5efffeb40048",
			friendlyName: "dom_outside_east_02_down",
			type: "Router",
			networkAddress: 36318,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377886211
		},
		{
			ieeeAddr: "0x90fd9ffffe18ac42",
			friendlyName: "dom_outside_north_05_down",
			type: "Router",
			networkAddress: 14054,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377694594
		},
		{
			ieeeAddr: "0x90fd9ffffe329a52",
			friendlyName: "dom_outside_east_01_down",
			type: "Router",
			networkAddress: 52289,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377699357
		},
		{
			ieeeAddr: "0xd0cf5efffecafff5",
			friendlyName: "dom_outside_north_01_down",
			type: "Router",
			networkAddress: 41247,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377651728
		},
		{
			ieeeAddr: "0xd0cf5efffe72dc0f",
			friendlyName: "dom_outside_north_05_up",
			type: "Router",
			networkAddress: 1116,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377880861
		},
		{
			ieeeAddr: "0x90fd9ffffe15a8c2",
			friendlyName: "dom_outside_east_04_up",
			type: "Router",
			networkAddress: 30072,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592205080720
		},
		{
			ieeeAddr: "0xd0cf5efffe7d3b12",
			friendlyName: "dom_outside_east_04_down",
			type: "Router",
			networkAddress: 27294,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377670134
		},
		{
			ieeeAddr: "0xd0cf5efffe7d241c",
			friendlyName: "dom_outside_north_02_down",
			type: "Router",
			networkAddress: 26390,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592139031497
		},
		{
			ieeeAddr: "0x90fd9ffffe164cd1",
			friendlyName: "dom_outside_south_01_down",
			type: "Router",
			networkAddress: 30339,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377682624
		},
		{
			ieeeAddr: "0x000b3cfffefce26a",
			friendlyName: "dom_outside_west_03_up",
			type: "Router",
			networkAddress: 20164,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377857557
		},
		{
			ieeeAddr: "0xd0cf5efffe6f5da9",
			friendlyName: "dom_outside_south_04_down",
			type: "Router",
			networkAddress: 1829,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377814426
		},
		{
			ieeeAddr: "0x000d6ffffee44d96",
			friendlyName: "dom_outside_west_05_up",
			type: "Router",
			networkAddress: 41886,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377887860
		},
		{
			ieeeAddr: "0x000b3cfffef2058b",
			friendlyName: "dom_outside_north_01_up",
			type: "Router",
			networkAddress: 50634,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377663917
		},
		{
			ieeeAddr: "0x086bd7fffe089cba",
			friendlyName: "dom_outside_north_02_up",
			type: "Router",
			networkAddress: 34461,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377714986
		},
		{
			ieeeAddr: "0x086bd7fffe24b0eb",
			friendlyName: "dom_outside_west_03_down",
			type: "Router",
			networkAddress: 8937,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377842421
		},
		{
			ieeeAddr: "0xd0cf5efffe2fab40",
			friendlyName: "dom_outside_north_04_up",
			type: "Router",
			networkAddress: 2289,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377893458
		},
		{
			ieeeAddr: "0x000d6ffffeff582a",
			friendlyName: "dom_outside_west_01_down",
			type: "Router",
			networkAddress: 39606,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377881399
		},
		{
			ieeeAddr: "0x086bd7fffe020bf9",
			friendlyName: "dom_outside_west_04_up",
			type: "Router",
			networkAddress: 36715,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377805003
		},
		{
			ieeeAddr: "0x90fd9ffffe2a5f94",
			friendlyName: "dom_outside_south_01_up",
			type: "Router",
			networkAddress: 50936,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377890856
		},
		{
			ieeeAddr: "0xd0cf5efffe7b961e",
			friendlyName: "dom_outside_south_02_down",
			type: "Router",
			networkAddress: 48174,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592377864541
		},
		{
			ieeeAddr: "0xd0cf5efffe7d3d17",
			friendlyName: "dom_outside_south_02_up",
			type: "Router",
			networkAddress: 60044,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [
				"lqi"
			],
			lastSeen: 1592377758334
		},
		{
			ieeeAddr: "0x00158d00033f0116",
			friendlyName: "mangal_relay_1",
			type: "Router",
			networkAddress: 63531,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [
				"lqi"
			],
			lastSeen: 1592390848284
		},
		{
			ieeeAddr: "0x00158d000183a5a1",
			friendlyName: "mangal_switch_on_mangal",
			type: "EndDevice",
			networkAddress: 15757,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw1",
			lastSeen: 1592389130363
		},
		{
			ieeeAddr: "0x00158d0001718c0f",
			friendlyName: "mangal_doubleswitch_kitchen",
			type: "EndDevice",
			networkAddress: 8685,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592388678100
		},
		{
			ieeeAddr: "0x00158d0003a5822c",
			friendlyName: "mangal_heater_socket",
			type: "Router",
			networkAddress: 23258,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [

			],
			lastSeen: 1592390809621
		},
		{
			ieeeAddr: "0x00158d0001d57d5c",
			friendlyName: "mangal_button_on_mangal",
			type: "EndDevice",
			networkAddress: 22249,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592389100747
		},
		{
			ieeeAddr: "0x00158d000183bdcd",
			friendlyName: "servernaya_switch",
			type: "EndDevice",
			networkAddress: 49821,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw1",
			lastSeen: 1592390036521
		},
		{
			ieeeAddr: "0x00158d000373c603",
			friendlyName: "servernaya_relay_light",
			type: "Router",
			networkAddress: 10721,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [

			],
			lastSeen: 1592390801807
		},
		{
			ieeeAddr: "0x00158d0003598e97",
			friendlyName: "servernaya_outside_relay_router",
			type: "Router",
			networkAddress: 22309,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [
				"lqi"
			],
			lastSeen: 1591964341541
		},
		{
			ieeeAddr: "0x086bd7fffe020d94",
			friendlyName: "dom_outside_west_05_down",
			type: "Router",
			networkAddress: 14384,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E27 W opal 1000lm",
			failed: [

			],
			lastSeen: 1592311230197
		},
		{
			ieeeAddr: "0xd0cf5efffef97366",
			friendlyName: "cabinet_roof_light_06",
			type: "Router",
			networkAddress: 56773,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E14 WS opal 400lm",
			failed: [

			],
			lastSeen: 1592315026609
		},
		{
			ieeeAddr: "0x90fd9ffffed9db2a",
			friendlyName: "cabinet_roof_light_01",
			type: "Router",
			networkAddress: 55316,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E14 WS opal 400lm",
			failed: [

			],
			lastSeen: 1592321923728
		},
		{
			ieeeAddr: "0xd0cf5efffe092028",
			friendlyName: "cabinet_roof_light_03",
			type: "Router",
			networkAddress: 23183,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E14 WS opal 400lm",
			failed: [

			],
			lastSeen: 1592346859163
		},
		{
			ieeeAddr: "0xd0cf5efffef8b84f",
			friendlyName: "cabinet_roof_light_05",
			type: "Router",
			networkAddress: 46773,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E14 WS opal 400lm",
			failed: [

			],
			lastSeen: 1592346885348
		},
		{
			ieeeAddr: "0xd0cf5efffec6bbdf",
			friendlyName: "cabinet_roof_light_04",
			type: "Router",
			networkAddress: 4125,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E14 WS opal 400lm",
			failed: [

			],
			lastSeen: 1592346882049
		},
		{
			ieeeAddr: "0xd0cf5efffec6ad3b",
			friendlyName: "cabinet_roof_light_02",
			type: "Router",
			networkAddress: 47143,
			manufacturerName: "IKEA of Sweden",
			modelID: "TRADFRI bulb E14 WS opal 400lm",
			failed: [

			],
			lastSeen: 1592314987659
		}
	],
	links: [
		{
			source: {
				ieeeAddr: "0x00158d0001dee913",
				networkAddress: 53706
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 85,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0001dee913",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 53706,
			lqi: 85,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 27773,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 36318,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 36,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 8033,
			lqi: 36,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 75,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 47143,
			lqi: 75,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 27,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 60355,
			lqi: 27,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 91,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 46773,
			lqi: 91,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 45,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 4664,
			lqi: 45,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 40,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 57575,
			lqi: 40,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b0018de86a5",
				networkAddress: 57210
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00124b0018de86a5",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 57210,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 68,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 60195,
			lqi: 68,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 47,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 7709,
			lqi: 47,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 53,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 12011,
			lqi: 53,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 47,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 22749,
			lqi: 47,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 52,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 11050,
			lqi: 52,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 14141,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 69,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 23183,
			lqi: 69,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 46,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 24081,
			lqi: 46,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 63,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 34271,
			lqi: 63,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 40,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 31333,
			lqi: 40,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 22,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 23258,
			lqi: 22,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 10721,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 35953,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00033f0116",
				networkAddress: 63531
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033f0116",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 63531,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 75,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 55316,
			lqi: 75,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 75,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 57952,
			lqi: 75,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 57,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 13539,
			lqi: 57,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 16,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe164cd1",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 30339,
			lqi: 16,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 24,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 33020,
			lqi: 24,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 67,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 4125,
			lqi: 67,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 20,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 64921,
			lqi: 20,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 52,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 35362,
			lqi: 52,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 23,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 32317,
			lqi: 23,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 60,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 9697,
			lqi: 60,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 37,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 53299,
			lqi: 37,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 11,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 25735,
			lqi: 11,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 56063,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 41,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 42299,
			lqi: 41,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 7,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 14384,
			lqi: 7,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 40599,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 27,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 49493,
			lqi: 27,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 20164,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 26390,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 33,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 50917,
			lqi: 33,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 64,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 40147,
			lqi: 64,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 55,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 22120,
			lqi: 55,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 25249,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 30449,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 49,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 56773,
			lqi: 49,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 16,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 60044,
			lqi: 16,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffebc029f",
				networkAddress: 35640
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffebc029f",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 35640,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 47,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 20445,
			lqi: 47,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 31,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 48174,
			lqi: 31,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 13,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe2a5f94",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 50936,
			lqi: 13,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 41886,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 1749,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 11192,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 30805,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 36769,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 41247,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 52289,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 1116,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 58079,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 7,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 8937,
			lqi: 7,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 46797,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 15,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 44450,
			lqi: 15,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 50671,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 26339,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 76,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 56368,
			lqi: 76,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe15a8c2",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 30072,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 43442
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 35,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 43442,
			lqi: 35,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 50634,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 39606,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 34461,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 36715,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 28730
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 28730,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 34870
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 34870,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 12498
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 12498,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 10339
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 10339,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 2289,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 1829,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 10240
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 10240,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 29706
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 29706,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 37965
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 37965,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 55306
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 55306,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 24318,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 27294,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 19120
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 19120,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 1,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 14054,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 8685
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 8685,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 46523
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 46523,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 3174
			},
			target: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00124b00192e81ec",
			sourceNwkAddr: 3174,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 230,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 7709,
			lqi: 230,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 167,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 8033,
			lqi: 167,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 148,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 9697,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 11050,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 13539,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 20445,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 22749,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 24081,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 177,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 25735,
			lqi: 177,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 123,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 31333,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 124,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 40147,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 142,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 42299,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 231,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 53299,
			lqi: 231,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 57952,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 148,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 60195,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe023ba8",
			sourceNwkAddr: 60355,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 234,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 4664,
			lqi: 234,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 96,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 9697,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 133,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 12011,
			lqi: 133,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 22120,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 25249,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 32317,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 33020,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 34271,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 44450,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 115,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 46773,
			lqi: 115,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 157,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 50917,
			lqi: 157,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 56368,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 56773,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 57575,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 60355,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			linkquality: 168,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe463906",
			sourceNwkAddr: 64921,
			lqi: 168,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 230,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 4664,
			lqi: 230,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 122,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 9697,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 202,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 12011,
			lqi: 202,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 150,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 22120,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 86,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 26339,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 124,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 32317,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 162,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 33020,
			lqi: 162,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 228,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 35362,
			lqi: 228,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 44450,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 85,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 46773,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 47143,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 102,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 49493,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 157,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 50917,
			lqi: 157,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 57575,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 60044,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe024441",
			sourceNwkAddr: 64921,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 154,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 7709,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 192,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 8033,
			lqi: 192,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 155,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 11050,
			lqi: 155,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 13539,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 95,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 20445,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 85,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 23183,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 131,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 24081,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 132,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 31333,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 40147,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 42299,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 47143,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 48174,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 53299,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 56773,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 119,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 57952,
			lqi: 119,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			linkquality: 82,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe3890fd",
			sourceNwkAddr: 60195,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 7709,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 8033,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 11050,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 147,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 13539,
			lqi: 147,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 142,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 20445,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 82,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 23183,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 24081,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 70,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 25735,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 31333,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 40147,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 81,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 42299,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 53299,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 106,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 55316,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 57952,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 60195,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			linkquality: 142,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe3244a7",
			sourceNwkAddr: 60355,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 4664,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 223,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 9697,
			lqi: 223,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 109,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 12011,
			lqi: 109,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 14384,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 26339,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 27773,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 32317,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 126,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 33020,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 228,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 34271,
			lqi: 228,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 159,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 35362,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 52,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 36318,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 44450,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 46773,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 177,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 49493,
			lqi: 177,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 50917,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe389162",
			sourceNwkAddr: 60195,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 4125,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 231,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 7709,
			lqi: 231,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 150,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 8033,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 109,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 11050,
			lqi: 109,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 13539,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 20445,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 22749,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 128,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 24081,
			lqi: 128,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 170,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 25735,
			lqi: 170,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 175,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 31333,
			lqi: 175,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 36318,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 163,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 40147,
			lqi: 163,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 160,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 42299,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 160,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 57952,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 111,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 58079,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			linkquality: 163,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe46a1a3",
			sourceNwkAddr: 60195,
			lqi: 163,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 127,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 7709,
			lqi: 127,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 238,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 8033,
			lqi: 238,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 126,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 11050,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 102,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 20445,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 22749,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 24081,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 25735,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 27294,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 109,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 31333,
			lqi: 109,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 40147,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 46773,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 53299,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 99,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 55316,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 56063,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 165,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 57952,
			lqi: 165,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe01919c",
			sourceNwkAddr: 60195,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 59,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 1829,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 7709,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 13539,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 20164,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 150,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 20445,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 191,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 22749,
			lqi: 191,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 119,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 24081,
			lqi: 119,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 171,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 25735,
			lqi: 171,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 132,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 31333,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 134,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 40147,
			lqi: 134,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 191,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 44450,
			lqi: 191,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 164,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 53299,
			lqi: 164,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 56773,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 57952,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 109,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 60195,
			lqi: 109,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 60355,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002afaa1c",
				networkAddress: 36695
			},
			target: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			linkquality: 207,
			depth: 2,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0002afaa1c",
			targetIeeeAddr: "0x000d6ffffe023cf6",
			sourceNwkAddr: 36695,
			lqi: 207,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 155,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 4664,
			lqi: 155,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 134,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 12011,
			lqi: 134,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 22120,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 68,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 24318,
			lqi: 68,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 104,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 25735,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 99,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 32317,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 33020,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 146,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 34271,
			lqi: 146,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 136,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 35362,
			lqi: 136,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 119,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 44450,
			lqi: 119,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 46773,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 115,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 49493,
			lqi: 115,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 50917,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 53299,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 57575,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0xd0cf5efffefdb48e",
			sourceNwkAddr: 64921,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 114,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 4664,
			lqi: 114,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 140,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 9697,
			lqi: 140,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 12011,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 131,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 22120,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 24081,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 131,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 33020,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 34271,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 35362,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 128,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 44450,
			lqi: 128,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 46797,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 130,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 47143,
			lqi: 130,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 147,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 49493,
			lqi: 147,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 50917,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 82,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 55316,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 111,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 57575,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe344bcd",
			sourceNwkAddr: 64921,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 148,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 4664,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 9697,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 207,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 12011,
			lqi: 207,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 160,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 13539,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 168,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 22120,
			lqi: 168,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 32317,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 159,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 33020,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 150,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 34271,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 35362,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 158,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 44450,
			lqi: 158,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 90,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 47143,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 172,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 49493,
			lqi: 172,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 50917,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 82,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe2a5f94",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 50936,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 56368,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe0b2f8d",
			sourceNwkAddr: 64921,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 103,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 4664,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 254,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 9697,
			lqi: 254,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 47,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 11192,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 12011,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 76,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 14141,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 150,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 22120,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 47,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 26339,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 122,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 32317,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 159,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 33020,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 233,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 34271,
			lqi: 233,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 35362,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 44450,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 99,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 46773,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 49493,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 143,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 50917,
			lqi: 143,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffefdb29a",
			sourceNwkAddr: 57575,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 96,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 4125,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 7709,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 8033,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 11050,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 148,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 13539,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 118,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 20445,
			lqi: 118,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 117,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 24081,
			lqi: 117,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 136,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 25735,
			lqi: 136,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 31333,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 178,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 40147,
			lqi: 178,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 178,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 42299,
			lqi: 178,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 50634,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 80,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 57575,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 196,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 57952,
			lqi: 196,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 175,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 60195,
			lqi: 175,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			linkquality: 177,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe46902c",
			sourceNwkAddr: 60355,
			lqi: 177,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 206,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 7709,
			lqi: 206,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 8033,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 109,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 9697,
			lqi: 109,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 109,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 11050,
			lqi: 109,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 128,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 13539,
			lqi: 128,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 137,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 20445,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 176,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 22749,
			lqi: 176,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 102,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 24081,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 25735,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 31333,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 40147,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 42299,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 130,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 53299,
			lqi: 130,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 155,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 57952,
			lqi: 155,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 206,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 60195,
			lqi: 206,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			linkquality: 117,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe42eb09",
			sourceNwkAddr: 60355,
			lqi: 117,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 51,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 1749,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 135,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 4664,
			lqi: 135,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 7709,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 126,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 9697,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 172,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 12011,
			lqi: 172,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 22120,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 85,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 26339,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 62,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 26390,
			lqi: 62,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 32317,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 239,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 33020,
			lqi: 239,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 104,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 34271,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 35362,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 36318,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 42299,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 182,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 44450,
			lqi: 182,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			linkquality: 190,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe0b2c2e",
			sourceNwkAddr: 64921,
			lqi: 190,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 198,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 0,
			lqi: 198,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 123,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 7709,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 137,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 8033,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 254,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 11050,
			lqi: 254,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 13539,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 131,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 22749,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 220,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 24081,
			lqi: 220,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 111,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 25735,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 31333,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 162,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 40147,
			lqi: 162,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 222,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 42299,
			lqi: 222,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 53299,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 55316,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 57952,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 114,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 60195,
			lqi: 114,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe42ee50",
			sourceNwkAddr: 60355,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 69,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 7709,
			lqi: 69,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 8033,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 233,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 11050,
			lqi: 233,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 13539,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 149,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 20445,
			lqi: 149,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 22749,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 200,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 24081,
			lqi: 200,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 24318,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 25735,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 31333,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 122,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 40147,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 229,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 42299,
			lqi: 229,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 137,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 53299,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 88,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 55316,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 143,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 57952,
			lqi: 143,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe037680",
			sourceNwkAddr: 60195,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 1749,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 168,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 4664,
			lqi: 168,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 135,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 9697,
			lqi: 135,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 12011,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 23183,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 237,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 32317,
			lqi: 237,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 158,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 33020,
			lqi: 158,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 103,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 34271,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 150,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 35362,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 176,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 44450,
			lqi: 176,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 143,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 49493,
			lqi: 143,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 50917,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 115,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 56773,
			lqi: 115,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 193,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 57575,
			lqi: 193,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 75,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 58079,
			lqi: 75,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			linkquality: 243,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe019242",
			sourceNwkAddr: 64921,
			lqi: 243,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 127,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 4664,
			lqi: 127,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 165,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 9697,
			lqi: 165,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 12011,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 240,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 22120,
			lqi: 240,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 23183,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 127,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 25735,
			lqi: 127,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 155,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 32317,
			lqi: 155,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 33020,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 124,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 34271,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 165,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 35362,
			lqi: 165,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 44450,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 47143,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 174,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 49493,
			lqi: 174,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 168,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 50917,
			lqi: 168,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 57575,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			linkquality: 137,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe48f6bb",
			sourceNwkAddr: 64921,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 136,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 0,
			lqi: 136,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 180,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 4664,
			lqi: 180,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 9697,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 12011,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 111,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 20445,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 22120,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 26339,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 157,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 32317,
			lqi: 157,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 136,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 33020,
			lqi: 136,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 34271,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 174,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 35362,
			lqi: 174,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 48,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 39606,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 200,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 44450,
			lqi: 200,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 137,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 49493,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			linkquality: 174,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe42f4b7",
			sourceNwkAddr: 64921,
			lqi: 174,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 146,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 4664,
			lqi: 146,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 225,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 9697,
			lqi: 225,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 102,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 12011,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 120,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 22120,
			lqi: 120,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 26339,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 54,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 27294,
			lqi: 54,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 154,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 32317,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 190,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 33020,
			lqi: 190,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 202,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 34271,
			lqi: 202,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 131,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 35362,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 44450,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 118,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 49493,
			lqi: 118,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 50917,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 122,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 56773,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 135,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 57575,
			lqi: 135,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			linkquality: 123,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe42fb39",
			sourceNwkAddr: 64921,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 4125,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 166,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 7709,
			lqi: 166,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 159,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 8033,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 11050,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 133,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 13539,
			lqi: 133,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 20445,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 244,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 22749,
			lqi: 244,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 190,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 24081,
			lqi: 190,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 135,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 25735,
			lqi: 135,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 31333,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 140,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 40147,
			lqi: 140,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 126,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 42299,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 104,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 53299,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 162,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 60195,
			lqi: 162,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			linkquality: 154,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe48f304",
			sourceNwkAddr: 60355,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 83,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 4125,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 4664,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 142,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 9697,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 12011,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 242,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 22120,
			lqi: 242,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 23183,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 26339,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 32317,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 33020,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 44450,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 85,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 47143,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 178,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 49493,
			lqi: 178,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 50917,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 124,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 53299,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 160,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 60195,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			linkquality: 99,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe43eb26",
			sourceNwkAddr: 64921,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 7709,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 176,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 8033,
			lqi: 176,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 148,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 11050,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 132,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 13539,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 124,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 20445,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 187,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 22749,
			lqi: 187,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 24081,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 199,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 25735,
			lqi: 199,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 31333,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 139,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 34271,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 156,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 40147,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 142,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 42299,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 53299,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 57952,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 60195,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 60355,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002b052e7",
				networkAddress: 10105
			},
			target: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			linkquality: 234,
			depth: 2,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0002b052e7",
			targetIeeeAddr: "0x000d6ffffe42d8f5",
			sourceNwkAddr: 10105,
			lqi: 234,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 95,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 4125,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 7709,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 11050,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 132,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 13539,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 128,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 20445,
			lqi: 128,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 22749,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 23183,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 120,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 24081,
			lqi: 120,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 25735,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 121,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 31333,
			lqi: 121,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 240,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 40147,
			lqi: 240,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 53299,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 123,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 55316,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 57952,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 171,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 60195,
			lqi: 171,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			linkquality: 243,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000d6ffffe33d3c5",
			sourceNwkAddr: 60355,
			lqi: 243,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 4664,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 151,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 9697,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 155,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 12011,
			lqi: 155,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 22120,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 145,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 24081,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 167,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 32317,
			lqi: 167,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 33020,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 142,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 34271,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 160,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 35362,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 106,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 44450,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 120,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 46773,
			lqi: 120,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 104,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 47143,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 195,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 49493,
			lqi: 195,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 152,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 50917,
			lqi: 152,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 119,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 57575,
			lqi: 119,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			linkquality: 140,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffe4699e8",
			sourceNwkAddr: 64921,
			lqi: 140,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 12,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 1749,
			lqi: 12,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 62,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 8937,
			lqi: 62,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 10721,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 20164,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 20445,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 35953,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 243,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 36715,
			lqi: 243,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 39606,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 19,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 40599,
			lqi: 19,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 41886,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 23,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 42299,
			lqi: 23,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 44,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 44450,
			lqi: 44,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 40,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 57575,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 25,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 58079,
			lqi: 25,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 21,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 60195,
			lqi: 21,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000d6ffffee45d9e",
			sourceNwkAddr: 64921,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 79,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 0,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 1829,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 47,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 7709,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 33,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 8033,
			lqi: 33,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 22120,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 27294,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 30449,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 33020,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 217,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 46797,
			lqi: 217,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 81,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe2a5f94",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 50936,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 46,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 56063,
			lqi: 46,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 78,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 56368,
			lqi: 78,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 22,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 57952,
			lqi: 22,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 96,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 60044,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000b57fffe3007dd",
			sourceNwkAddr: 64921,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 2289,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 43,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 11192,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 22749,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 24318,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 159,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 26339,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 130,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 27294,
			lqi: 130,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 126,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe15a8c2",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 30072,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 253,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 30449,
			lqi: 253,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 32317,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 34461,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 36318,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 55,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 44450,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 35,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 46797,
			lqi: 35,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 52289,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 56063,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 57952,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001da7f67",
				networkAddress: 58759
			},
			target: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			linkquality: 255,
			depth: 2,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0001da7f67",
			targetIeeeAddr: "0xd0cf5efffe2fbe1e",
			sourceNwkAddr: 58759,
			lqi: 255,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 56,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 1116,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 1749,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 77,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 2289,
			lqi: 77,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 30,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 4664,
			lqi: 30,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 67,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 14141,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 23258,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 35,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 25249,
			lqi: 35,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 26339,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 90,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 26390,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 27294,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 35,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe15a8c2",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 30072,
			lqi: 35,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 33020,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 88,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 34461,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 107,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 41247,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0xd0cf5efffed813dc",
			sourceNwkAddr: 58079,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 40,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 0,
			lqi: 40,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00033f0116",
				networkAddress: 63531
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 192,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033f0116",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 63531,
			lqi: 192,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 58079,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 136,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 23258,
			lqi: 136,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 93,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 10721,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 55,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 14384,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x00158d00033ecce8",
			sourceNwkAddr: 8937,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 131,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 1829,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 15,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 2289,
			lqi: 15,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 25,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 10721,
			lqi: 25,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 56,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 13539,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 102,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 14141,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 20445,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 71,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 22749,
			lqi: 71,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 26390,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 27294,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 89,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 30449,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 81,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 32317,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 41247,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 50671,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 52289,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 56063,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			linkquality: 55,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0xd0cf5efffe7b516d",
			sourceNwkAddr: 64921,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 59,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 0,
			lqi: 59,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 61,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 52289,
			lqi: 61,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 47,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 50634,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 53,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 11192,
			lqi: 53,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 106,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 14141,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 42,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 36318,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 76,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 56368,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 59,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 56063,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 106,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 30449,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 86,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 27294,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 1829,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 56,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 42299,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 42,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 22749,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 67,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe15a8c2",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 30072,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 7709,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 53,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 41247,
			lqi: 53,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 80,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 10721,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 48,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 60355,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 56,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 30805,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 45,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 25735,
			lqi: 45,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			linkquality: 41,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0x00158d0003553c27",
			sourceNwkAddr: 24081,
			lqi: 41,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 56,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 0,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 1116,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 73,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 2289,
			lqi: 73,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 77,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 8937,
			lqi: 77,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 52,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 10721,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 11192,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 20164,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 70,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 26339,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 138,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 26390,
			lqi: 138,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 30805,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 34461,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 51,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 39606,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 40599,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 106,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 41247,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 41886,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x90fd9ffffe0fbdb7",
			sourceNwkAddr: 50634,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 84,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 0,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 4664,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 67,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 8937,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 10721,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 59,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 11192,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 14054,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 25249,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 103,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 25735,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 30805,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 57,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 34461,
			lqi: 57,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 99,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 35362,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 35953,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 39606,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 40599,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 41886,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			linkquality: 41,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffeff60a1",
			sourceNwkAddr: 60195,
			lqi: 41,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 1116,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 17,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 2289,
			lqi: 17,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 48,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 4664,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 137,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 14141,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 24318,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 26339,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 83,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 27294,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 39,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 27773,
			lqi: 39,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 30449,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 210,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 36318,
			lqi: 210,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 68,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 42299,
			lqi: 68,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 26,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 50671,
			lqi: 26,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 89,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 52289,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 71,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 56368,
			lqi: 71,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 48,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 60044,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			linkquality: 70,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0x000b57fffeec7655",
			sourceNwkAddr: 60355,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 1829,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 14141,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 68,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 20445,
			lqi: 68,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 48,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 22120,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 37,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 24318,
			lqi: 37,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 46,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 25735,
			lqi: 46,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 203,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 27773,
			lqi: 203,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 41,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 30449,
			lqi: 41,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 34,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 34271,
			lqi: 34,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 22,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 36318,
			lqi: 22,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 39,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 40147,
			lqi: 39,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 42299,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 95,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 48174,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 50671,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 53299,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0xd0cf5efffe7d2277",
			sourceNwkAddr: 60044,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 1116,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 1749,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 45,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 2289,
			lqi: 45,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 8033,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 10721,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 14054,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 46,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 20164,
			lqi: 46,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 23258,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 26390,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 31333,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 36715,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 14,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 36769,
			lqi: 14,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 188,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 39606,
			lqi: 188,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 40147,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 23,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 41886,
			lqi: 23,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x086bd7fffe02155c",
			sourceNwkAddr: 58079,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 1829,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 7709,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 22,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 10721,
			lqi: 22,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 51,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 11050,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 14141,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 24318,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 30,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 26339,
			lqi: 30,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 26390,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 59,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 32317,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 33020,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 53,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 42299,
			lqi: 53,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 90,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 46797,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 43,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 48174,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 30,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 56063,
			lqi: 30,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 60044,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			linkquality: 38,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x000b57fffeec7c90",
			sourceNwkAddr: 64921,
			lqi: 38,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 47,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 1829,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 4664,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 33,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 7709,
			lqi: 33,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 14141,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 15,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 14384,
			lqi: 15,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 85,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 22749,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 80,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 26339,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 21,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 26390,
			lqi: 21,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 80,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 31333,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 39,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 32317,
			lqi: 39,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 49,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 34271,
			lqi: 49,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 26,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 46797,
			lqi: 26,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 79,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 52289,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 214,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 56063,
			lqi: 214,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 56368,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			linkquality: 61,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffeb40048",
			sourceNwkAddr: 57575,
			lqi: 61,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 60,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 0,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 61,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 1829,
			lqi: 61,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 7709,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 13539,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 103,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 14141,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 24318,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 25735,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 26339,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe15a8c2",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 30072,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 90,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 30449,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 30805,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 37,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 34271,
			lqi: 37,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 76,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 36318,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 56063,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 81,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 56368,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x90fd9ffffe329a52",
			sourceNwkAddr: 64921,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 48,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 0,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 25,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 1749,
			lqi: 25,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 13539,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 132,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 14141,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 111,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 26339,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 63,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 26390,
			lqi: 63,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 27294,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 122,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 30449,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 42,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 30805,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 40147,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 41247,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 35,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 42299,
			lqi: 35,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 88,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 50634,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 17,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 50671,
			lqi: 17,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 60044,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			linkquality: 44,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0x90fd9ffffe15a8c2",
			sourceNwkAddr: 64921,
			lqi: 44,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 82,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 1116,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 1749,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 80,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 14054,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 23,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 22120,
			lqi: 23,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 26339,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 57,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 27294,
			lqi: 57,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe15a8c2",
				networkAddress: 30072
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 63,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe15a8c2",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 30072,
			lqi: 63,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 62,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 30449,
			lqi: 62,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 30805,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 43,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 31333,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 236,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 34461,
			lqi: 236,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 36318,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 41247,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 50634,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 41,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 58079,
			lqi: 41,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0xd0cf5efffe7d241c",
			sourceNwkAddr: 60355,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 115,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 0,
			lqi: 115,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 57,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 1829,
			lqi: 57,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 35,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 4664,
			lqi: 35,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 12,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 10721,
			lqi: 12,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 22749,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 23,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 23183,
			lqi: 23,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 24318,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 56,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 25735,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 122,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 40147,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 46797,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe2a5f94",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 50936,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 55316,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 27,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 56063,
			lqi: 27,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 59,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 56368,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 57952,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x90fd9ffffe164cd1",
			sourceNwkAddr: 60044,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 37,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 1116,
			lqi: 37,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 8937,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 104,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 10721,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 23,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 12011,
			lqi: 23,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 14054,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 14384,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 19,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 22749,
			lqi: 19,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 103,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 23258,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 34461,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 37,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 36769,
			lqi: 37,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 46,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 40599,
			lqi: 46,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 44,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 41886,
			lqi: 44,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 17,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe2a5f94",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 50936,
			lqi: 17,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 17,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 57952,
			lqi: 17,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			linkquality: 72,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x000b3cfffefce26a",
			sourceNwkAddr: 58079,
			lqi: 72,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 96,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 0,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 38,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 8937,
			lqi: 38,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 22749,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b516d",
				networkAddress: 24318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 130,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b516d",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 24318,
			lqi: 130,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 71,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 26339,
			lqi: 71,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b12",
				networkAddress: 27294
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 43,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b12",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 27294,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 27773,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 52,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 33020,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffeb40048",
				networkAddress: 36318
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 44,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffeb40048",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 36318,
			lqi: 44,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 106,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 46797,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 63,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 48174,
			lqi: 63,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 50671,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe329a52",
				networkAddress: 52289
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 57,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe329a52",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 52289,
			lqi: 57,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 68,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 56063,
			lqi: 68,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			linkquality: 46,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0xd0cf5efffe6f5da9",
			sourceNwkAddr: 64921,
			lqi: 46,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 99,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 0,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 55,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 1749,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 98,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 8937,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 10721,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 14384,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 45,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 20164,
			lqi: 45,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 54,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 23258,
			lqi: 54,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 29,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 25249,
			lqi: 29,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 40,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 33020,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 29,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 34461,
			lqi: 29,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 56,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 35953,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 36715,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 80,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 36769,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 25,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 40599,
			lqi: 25,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 34,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 58079,
			lqi: 34,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033f0116",
				networkAddress: 63531
			},
			target: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033f0116",
			targetIeeeAddr: "0x000d6ffffee44d96",
			sourceNwkAddr: 63531,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 123,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 1749,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fab40",
				networkAddress: 2289
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 55,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fab40",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 2289,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 11192,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 58,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 14054,
			lqi: 58,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 67,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 14141,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 20164,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 19,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 23258,
			lqi: 19,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 73,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 26339,
			lqi: 73,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d241c",
				networkAddress: 26390
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 235,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d241c",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 26390,
			lqi: 235,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3b5b",
				networkAddress: 30449
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 59,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3b5b",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 30449,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffed813dc",
				networkAddress: 30805
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffed813dc",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 30805,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 23,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 31333,
			lqi: 23,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffecafff5",
				networkAddress: 41247
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffecafff5",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 41247,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 90,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 50634,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			linkquality: 54,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x086bd7fffe089cba",
			sourceNwkAddr: 58079,
			lqi: 54,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 118,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 0,
			lqi: 118,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 65,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 1116,
			lqi: 65,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe0fbdb7",
				networkAddress: 1749
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 81,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe0fbdb7",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 1749,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 40,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 1829,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 10721,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 19,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 13539,
			lqi: 19,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 64,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 14054,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 14141,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 113,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 14384,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 20164,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 128,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 23258,
			lqi: 128,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 34271,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 36715,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 54,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 36769,
			lqi: 54,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 96,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 41886,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			linkquality: 70,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x086bd7fffe24b0eb",
			sourceNwkAddr: 58079,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72dc0f",
				networkAddress: 1116
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 140,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72dc0f",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 1116,
			lqi: 140,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 52,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 4664,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 90,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 10721,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe18ac42",
				networkAddress: 14054
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 126,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe18ac42",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 14054,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 14384,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 79,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 23258,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 12,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 33020,
			lqi: 12,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 34461,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 35362,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 27,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 36715,
			lqi: 27,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 15,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 36769,
			lqi: 15,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 192,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 40599,
			lqi: 192,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 50917,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 57952,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 58079,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0x000d6ffffeff582a",
			sourceNwkAddr: 60195,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 66,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 0,
			lqi: 66,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 8937,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe72cfce",
				networkAddress: 11192
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe72cfce",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 11192,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 12011,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 14384,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 22749,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 35,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 25249,
			lqi: 35,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 25735,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 24,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 33020,
			lqi: 24,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 12,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 34461,
			lqi: 12,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 241,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 36769,
			lqi: 241,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 27,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 39606,
			lqi: 27,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 34,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 40599,
			lqi: 34,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 76,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 41886,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffef2058b",
				networkAddress: 50634
			},
			target: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffef2058b",
			targetIeeeAddr: "0x086bd7fffe020bf9",
			sourceNwkAddr: 50634,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 40,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 1829,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 43,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 4125,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 40,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 10721,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 13539,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 20,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 20164,
			lqi: 20,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 68,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 25735,
			lqi: 68,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 52,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 26339,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 83,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 27773,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe164cd1",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 30339,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 124,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 31333,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 76,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 34271,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 42299,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 46773,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 48174,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7c90",
				networkAddress: 50671
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7c90",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 50671,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0x90fd9ffffe2a5f94",
			sourceNwkAddr: 60044,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe6f5da9",
				networkAddress: 1829
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 59,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe6f5da9",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 1829,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 4664,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 9697,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 12011,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffe3007dd",
				networkAddress: 27773
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 53,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffe3007dd",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 27773,
			lqi: 53,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe164cd1",
				networkAddress: 30339
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 80,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe164cd1",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 30339,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 44450,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d2277",
				networkAddress: 46797
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d2277",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 46797,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 96,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 50917,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffe2a5f94",
				networkAddress: 50936
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 88,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffe2a5f94",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 50936,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b57fffeec7655",
				networkAddress: 56063
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 48,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000b57fffeec7655",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 56063,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 57575,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 57952,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7d3d17",
				networkAddress: 60044
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7d3d17",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 60044,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			linkquality: 60,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0xd0cf5efffe7b961e",
			sourceNwkAddr: 60195,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 88,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 0,
			lqi: 88,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 132,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 35953,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033f0116",
				networkAddress: 63531
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 97,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033f0116",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 63531,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 62,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 20164,
			lqi: 62,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 79,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 8937,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 43,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 39606,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			linkquality: 99,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x00158d0003a5822c",
			sourceNwkAddr: 10721,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 64,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 0,
			lqi: 64,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000183bdcd",
				networkAddress: 49821
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 87,
			depth: 2,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000183bdcd",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 49821,
			lqi: 87,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000183a5a1",
				networkAddress: 15757
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 101,
			depth: 2,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000183a5a1",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 15757,
			lqi: 101,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 48,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 41886,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033f0116",
				networkAddress: 63531
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 93,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033f0116",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 63531,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45d9e",
				networkAddress: 36769
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45d9e",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 36769,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee45eaf",
				networkAddress: 25249
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee45eaf",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 25249,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003553c27",
				networkAddress: 26339
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 77,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003553c27",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 26339,
			lqi: 77,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 101,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 23258,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 90,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 35953,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 41,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 36715,
			lqi: 41,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000b3cfffefce26a",
				networkAddress: 20164
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 64,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000b3cfffefce26a",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 20164,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe02155c",
				networkAddress: 40599
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 61,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe02155c",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 40599,
			lqi: 61,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 92,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 8937,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe2fbe1e",
				networkAddress: 14141
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 40,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe2fbe1e",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 14141,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff582a",
				networkAddress: 39606
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 51,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff582a",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 39606,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffeff60a1",
				networkAddress: 58079
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 41,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffeff60a1",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 58079,
			lqi: 41,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			target: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			linkquality: 69,
			depth: 1,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020d94",
			targetIeeeAddr: "0x00158d000373c603",
			sourceNwkAddr: 14384,
			lqi: 69,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 112,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 0,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 4664,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe24b0eb",
				networkAddress: 8937
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe24b0eb",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 8937,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 16,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 9697,
			lqi: 16,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 111,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 10721,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 28,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 12011,
			lqi: 28,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2c2e",
				networkAddress: 22749
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 89,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2c2e",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 22749,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 19,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 34271,
			lqi: 19,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe089cba",
				networkAddress: 34461
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 47,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe089cba",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 34461,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033ecce8",
				networkAddress: 35953
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033ecce8",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 35953,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x086bd7fffe020bf9",
				networkAddress: 36715
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x086bd7fffe020bf9",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 36715,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffee44d96",
				networkAddress: 41886
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 255,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffee44d96",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 41886,
			lqi: 255,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 31,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 55316,
			lqi: 31,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 40,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 57952,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00033f0116",
				networkAddress: 63531
			},
			target: {
				ieeeAddr: "0x086bd7fffe020d94",
				networkAddress: 14384
			},
			linkquality: 71,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00033f0116",
			targetIeeeAddr: "0x086bd7fffe020d94",
			sourceNwkAddr: 63531,
			lqi: 71,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b00192e81ec",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 184,
			depth: 0,
			routes: [

			],
			sourceIeeeAddr: "0x00124b00192e81ec",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 0,
			lqi: 184,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 127,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 4125,
			lqi: 127,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 8033,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 89,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 11050,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 24081,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 66,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 31333,
			lqi: 66,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 106,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 33020,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 61,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 34271,
			lqi: 61,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 81,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 40147,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 71,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 42299,
			lqi: 71,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 144,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 46773,
			lqi: 144,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 197,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 47143,
			lqi: 197,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 117,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 55316,
			lqi: 117,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 95,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 56368,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 57575,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0xd0cf5efffef97366",
			sourceNwkAddr: 64921,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 161,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 4125,
			lqi: 161,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023ba8",
				networkAddress: 4664
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 74,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023ba8",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 4664,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 8033,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42ee50",
				networkAddress: 9697
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 88,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42ee50",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 9697,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 99,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 12011,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 62,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 13539,
			lqi: 62,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 22120,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 155,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 23183,
			lqi: 155,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 32317,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 112,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 33020,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 86,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 34271,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 190,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 46773,
			lqi: 190,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 153,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 47143,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 104,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 50917,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 114,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 56773,
			lqi: 114,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			linkquality: 93,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0x90fd9ffffed9db2a",
			sourceNwkAddr: 57952,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 182,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 4125,
			lqi: 182,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe019242",
				networkAddress: 8033
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 66,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe019242",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 8033,
			lqi: 66,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 102,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 13539,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 43,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 20445,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 86,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 22120,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003a5822c",
				networkAddress: 23258
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 51,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d0003a5822c",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 23258,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 24081,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 40147,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 205,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 46773,
			lqi: 205,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 47143,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 55,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 49493,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 50917,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 158,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 55316,
			lqi: 158,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00022b085a",
				networkAddress: 56368
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 32,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d00022b085a",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 56368,
			lqi: 32,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 83,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 57575,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			linkquality: 94,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0xd0cf5efffe092028",
			sourceNwkAddr: 60355,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 179,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 4125,
			lqi: 179,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe024441",
				networkAddress: 7709
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe024441",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 7709,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000373c603",
				networkAddress: 10721
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 36,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x00158d000373c603",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 10721,
			lqi: 36,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb29a",
				networkAddress: 11050
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 103,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb29a",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 11050,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffefdb48e",
				networkAddress: 20445
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 96,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffefdb48e",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 20445,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 205,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 23183,
			lqi: 205,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 89,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 42299,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 176,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 47143,
			lqi: 176,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe7b961e",
				networkAddress: 48174
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 47,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe7b961e",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 48174,
			lqi: 47,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 53,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 49493,
			lqi: 53,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3244a7",
				networkAddress: 50917
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 46,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3244a7",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 50917,
			lqi: 46,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe463906",
				networkAddress: 53299
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 105,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe463906",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 53299,
			lqi: 105,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 192,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 55316,
			lqi: 192,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 141,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 56773,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 116,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 57952,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 66,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 60195,
			lqi: 66,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0017880102e1b344",
				networkAddress: 52645
			},
			target: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			linkquality: 161,
			depth: 2,
			routes: [

			],
			sourceIeeeAddr: "0x0017880102e1b344",
			targetIeeeAddr: "0xd0cf5efffef8b84f",
			sourceNwkAddr: 52645,
			lqi: 161,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 83,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 12011,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 110,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 13539,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe33d3c5",
				networkAddress: 22120
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 91,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe33d3c5",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 22120,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 183,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 23183,
			lqi: 183,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 95,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 24081,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe01919c",
				networkAddress: 32317
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe01919c",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 32317,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f304",
				networkAddress: 33020
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 100,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f304",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 33020,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46a1a3",
				networkAddress: 35362
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 92,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46a1a3",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 35362,
			lqi: 92,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42d8f5",
				networkAddress: 44450
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 84,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42d8f5",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 44450,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 181,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 46773,
			lqi: 181,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 181,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6ad3b",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 47143,
			lqi: 181,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe46902c",
				networkAddress: 49493
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 87,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe46902c",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 49493,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x90fd9ffffed9db2a",
				networkAddress: 55316
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 164,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x90fd9ffffed9db2a",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 55316,
			lqi: 164,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 129,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 56773,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 79,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 60355,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe023cf6",
				networkAddress: 64921
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			linkquality: 51,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe023cf6",
			targetIeeeAddr: "0xd0cf5efffec6bbdf",
			sourceNwkAddr: 64921,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffec6bbdf",
				networkAddress: 4125
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 181,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffec6bbdf",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 4125,
			lqi: 181,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42eb09",
				networkAddress: 12011
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 135,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42eb09",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 12011,
			lqi: 135,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe344bcd",
				networkAddress: 13539
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 134,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe344bcd",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 13539,
			lqi: 134,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffe092028",
				networkAddress: 23183
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 125,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffe092028",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 23183,
			lqi: 125,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42fb39",
				networkAddress: 24081
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 69,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42fb39",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 24081,
			lqi: 69,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f4b7",
				networkAddress: 25735
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 79,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f4b7",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 25735,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe42f7f2",
				networkAddress: 31333
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 108,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe42f7f2",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 31333,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe037680",
				networkAddress: 34271
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 50,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe037680",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 34271,
			lqi: 50,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe48f6bb",
				networkAddress: 40147
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 97,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe48f6bb",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 40147,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe389162",
				networkAddress: 42299
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 66,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe389162",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 42299,
			lqi: 66,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef8b84f",
				networkAddress: 46773
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 176,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef8b84f",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 46773,
			lqi: 176,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0xd0cf5efffef97366",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 198,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0xd0cf5efffef97366",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 56773,
			lqi: 198,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe3890fd",
				networkAddress: 57575
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 83,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe3890fd",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 57575,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe4699e8",
				networkAddress: 57952
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 101,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe4699e8",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 57952,
			lqi: 101,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe0b2f8d",
				networkAddress: 60195
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 93,
			depth: 15,
			routes: [
			],
			sourceIeeeAddr: "0x000d6ffffe0b2f8d",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 60195,
			lqi: 93,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x000d6ffffe43eb26",
				networkAddress: 60355
			},
			target: {
				ieeeAddr: "0xd0cf5efffec6ad3b",
				networkAddress: 47143
			},
			linkquality: 79,
			depth: 15,
			routes: [

			],
			sourceIeeeAddr: "0x000d6ffffe43eb26",
			targetIeeeAddr: "0xd0cf5efffec6ad3b",
			sourceNwkAddr: 60355,
			lqi: 79,
			relationship: 2
		}
	]
};
const graph = sanitizeGraph(_graph as GraphI);
export default graph;