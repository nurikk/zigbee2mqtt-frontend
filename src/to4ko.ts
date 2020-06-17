import { sanitizeGraph } from "./utils";
import { GraphI } from "./components/map/types";

const _graph = {
	nodes: [
		{
			ieeeAddr: "0x00124b001940c183",
			friendlyName: "Coordinator",
			type: "Coordinator",
			networkAddress: 0,
			failed: [],
			lastSeen: null
		},
		{
			ieeeAddr: "0x00158d000205a835",
			friendlyName: "Plug_Bedside_MB",
			type: "Router",
			networkAddress: 15166,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306685725
		},
		{
			ieeeAddr: "0x00158d00023e5e90",
			friendlyName: "Button_Test_K",
			type: "EndDevice",
			networkAddress: 19924,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq2",
			lastSeen: 1592305009483
		},
		{
			ieeeAddr: "0x00158d0002476ed1",
			friendlyName: "Socket_TV_K",
			type: "Router",
			networkAddress: 56825,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306644197
		},
		{
			ieeeAddr: "0x00158d000366815b",
			friendlyName: "Relay_Valve_B",
			type: "Router",
			networkAddress: 64948,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [],
			lastSeen: 1592306678147
		},
		{
			ieeeAddr: "0x00158d0003262a35",
			friendlyName: "Contact_Washer_Door_B",
			type: "EndDevice",
			networkAddress: 21183,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304404277
		},
		{
			ieeeAddr: "0x00158d0003140824",
			friendlyName: "Motion_W_S",
			type: "EndDevice",
			networkAddress: 3458,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592306170041
		},
		{
			ieeeAddr: "0x00158d0001a248e9",
			friendlyName: "Relay_Fan_B",
			type: "Router",
			networkAddress: 36610,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [],
			lastSeen: 1592306665191
		},
		{
			ieeeAddr: "0x00158d00039258de",
			friendlyName: "Plug_RO_Pump_K",
			type: "Router",
			networkAddress: 49646,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306654795
		},
		{
			ieeeAddr: "0x00158d000246776f",
			friendlyName: "Socket_Entrance_V",
			type: "Router",
			networkAddress: 24375,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [
				"lqi"
			],
			lastSeen: 1592306288255
		},
		{
			ieeeAddr: "0x00158d00019c8afd",
			friendlyName: "Button_Night_Light_S",
			type: "EndDevice",
			networkAddress: 42027,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592303840009
		},
		{
			ieeeAddr: "0x00158d0001e8995a",
			friendlyName: "TempHum_Out",
			type: "EndDevice",
			networkAddress: 33161,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592306535863
		},
		{
			ieeeAddr: "0x00158d0001aea602",
			friendlyName: "Motion_St",
			type: "EndDevice",
			networkAddress: 26660,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion",
			lastSeen: 1592305195884
		},
		{
			ieeeAddr: "0x00158d0002482619",
			friendlyName: "Plug_Fan_Bottom_B",
			type: "Router",
			networkAddress: 19281,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [
				"lqi"
			],
			lastSeen: 1592306693729
		},
		{
			ieeeAddr: "0x00158d000233fb72",
			friendlyName: "TempHumPres_St",
			type: "EndDevice",
			networkAddress: 22973,
			manufacturerName: "LUMI",
			modelID: "lumi.weather",
			lastSeen: 1592304906092
		},
		{
			ieeeAddr: "0x00158d000423f316",
			friendlyName: "Contact_RO_Pump_K",
			type: "EndDevice",
			networkAddress: 41807,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304791937
		},
		{
			ieeeAddr: "0x00158d0002a2412d",
			friendlyName: "Vibro_MB",
			type: "EndDevice",
			networkAddress: 45114,
			manufacturerName: "LUMI",
			modelID: "lumi.vibration.aq1",
			lastSeen: 1592306303616
		},
		{
			ieeeAddr: "0x00158d0002b5fbc1",
			friendlyName: "Vibro_HB",
			type: "EndDevice",
			networkAddress: 38338,
			manufacturerName: "LUMI",
			modelID: "lumi.vibration.aq1",
			lastSeen: 1592305070031
		},
		{
			ieeeAddr: "0x00158d0002b43ad4",
			friendlyName: "Motion_Mirror_HB",
			type: "EndDevice",
			networkAddress: 54936,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592303499559
		},
		{
			ieeeAddr: "0x00158d0001f2630e",
			friendlyName: "Socket_Wadrobe_L_HB",
			type: "Router",
			networkAddress: 26396,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [
				"lqi"
			],
			lastSeen: 1592306641598
		},
		{
			ieeeAddr: "0x00158d0003535ee5",
			friendlyName: "Plug_i5_Mod_MB",
			type: "Router",
			networkAddress: 2818,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306689386
		},
		{
			ieeeAddr: "0x00158d0003600ea4",
			friendlyName: "Plug_Monitor_V",
			type: "Router",
			networkAddress: 37587,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306672863
		},
		{
			ieeeAddr: "0x00158d00035f44a7",
			friendlyName: "Plug_Wadrobe_Top_S",
			type: "Router",
			networkAddress: 60164,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306655412
		},
		{
			ieeeAddr: "0x00158d0002395d58",
			friendlyName: "Socket_Wadrobe_S",
			type: "Router",
			networkAddress: 50282,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306643528
		},
		{
			ieeeAddr: "0x00158d0002451850",
			friendlyName: "Socket_PC_K",
			type: "Router",
			networkAddress: 40846,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306696299
		},
		{
			ieeeAddr: "0x00124b000a9e26af",
			friendlyName: "Lamp_RGB_LifeControl",
			type: "Router",
			networkAddress: 5631,
			manufacturerName: "HaiPaiTech",
			modelID: "vivi ZLight",
			failed: [
				"lqi"
			],
			lastSeen: 1591706640769
		},
		{
			ieeeAddr: "0x00158d000249b25b",
			friendlyName: "Socket_Oven_K",
			type: "Router",
			networkAddress: 16892,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306643459
		},
		{
			ieeeAddr: "0x00158d00028c9875",
			friendlyName: "Plug_Kettle_K",
			type: "Router",
			networkAddress: 65301,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306672317
		},
		{
			ieeeAddr: "0x00158d00028a54e4",
			friendlyName: "Plug_Microwave_K",
			type: "Router",
			networkAddress: 56965,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306675725
		},
		{
			ieeeAddr: "0x00158d000249b26b",
			friendlyName: "Socket_Main_HS",
			type: "Router",
			networkAddress: 33809,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306559112
		},
		{
			ieeeAddr: "0x00158d0002467773",
			friendlyName: "Socket_PC_MB",
			type: "Router",
			networkAddress: 16490,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306662748
		},
		{
			ieeeAddr: "0x00158d000322e30c",
			friendlyName: "Plug_Wadrobe_MB",
			type: "Router",
			networkAddress: 29154,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306653094
		},
		{
			ieeeAddr: "0x00158d00024517fe",
			friendlyName: "Socket_Entrance_HB",
			type: "Router",
			networkAddress: 6204,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [
				"lqi"
			],
			lastSeen: 1592306681268
		},
		{
			ieeeAddr: "0x00158d00023e5812",
			friendlyName: "Socket_Wadrobe_R_HB",
			type: "Router",
			networkAddress: 13992,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [
				"lqi"
			],
			lastSeen: 1592306638535
		},
		{
			ieeeAddr: "0x00158d000239097a",
			friendlyName: "Socket_PC_S",
			type: "Router",
			networkAddress: 1862,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306642502
		},
		{
			ieeeAddr: "0x00158d00035c194f",
			friendlyName: "Plug_Brix_V",
			type: "Router",
			networkAddress: 37290,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306667284
		},
		{
			ieeeAddr: "0x00158d00023a657a",
			friendlyName: "Plug_LED_Color_K",
			type: "Router",
			networkAddress: 36265,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306690646
		},
		{
			ieeeAddr: "0x00158d00036148b9",
			friendlyName: "Plug_Breather_S",
			type: "Router",
			networkAddress: 30088,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306663741
		},
		{
			ieeeAddr: "0x00158d000392623d",
			friendlyName: "Plug_Humidifier2_S",
			type: "Router",
			networkAddress: 10246,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306677956
		},
		{
			ieeeAddr: "0x00158d000224f89f",
			friendlyName: "Motion_S",
			type: "EndDevice",
			networkAddress: 19225,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592303523616
		},
		{
			ieeeAddr: "0x00158d0002395dc9",
			friendlyName: "Socket_TV_V",
			type: "Router",
			networkAddress: 40072,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306642872
		},
		{
			ieeeAddr: "0x00158d000290a0bc",
			friendlyName: "Plug_TV_Box_V",
			type: "Router",
			networkAddress: 1783,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306692642
		},
		{
			ieeeAddr: "0x00158d000290a093",
			friendlyName: "Plug_TV_V",
			type: "Router",
			networkAddress: 48576,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306657735
		},
		{
			ieeeAddr: "0x00158d000344998e",
			friendlyName: "Plug_Breather_V",
			type: "Router",
			networkAddress: 56773,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306672480
		},
		{
			ieeeAddr: "0x00158d00039bd56d",
			friendlyName: "Plug_Bedside_Lamp_MB",
			type: "Router",
			networkAddress: 47104,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306688033
		},
		{
			ieeeAddr: "0x00158d0001e85086",
			friendlyName: "Plug_TV_K",
			type: "Router",
			networkAddress: 42689,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306651237
		},
		{
			ieeeAddr: "0x00158d000216528c",
			friendlyName: "Plug_Night_Light_K",
			type: "Router",
			networkAddress: 34455,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [
				"lqi"
			],
			lastSeen: 1592306684619
		},
		{
			ieeeAddr: "0x00158d000232481a",
			friendlyName: "Plug_AirHood_K",
			type: "Router",
			networkAddress: 41666,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306654423
		},
		{
			ieeeAddr: "0x00158d00025371f6",
			friendlyName: "Contact_Window_K",
			type: "EndDevice",
			networkAddress: 38664,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592305705849
		},
		{
			ieeeAddr: "0x00158d0002a1a47a",
			friendlyName: "Contact_TV_K",
			type: "EndDevice",
			networkAddress: 47941,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592303671211
		},
		{
			ieeeAddr: "0x00158d0001ef609b",
			friendlyName: "Button_Work_Light_R_K",
			type: "EndDevice",
			networkAddress: 18251,
			manufacturerName: "LUMI",
			modelID: "lumi.remote.b1acn01",
			lastSeen: 1592304266550
		},
		{
			ieeeAddr: "0x00158d00023e5f2a",
			friendlyName: "Button_Work_Light_L_K",
			type: "EndDevice",
			networkAddress: 10969,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq2",
			lastSeen: 1592306562737
		},
		{
			ieeeAddr: "0x00158d0002a365df",
			friendlyName: "Switch_Work_K",
			type: "Router",
			networkAddress: 13432,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_neutral2",
			failed: [],
			lastSeen: 1592306694003
		},
		{
			ieeeAddr: "0x00158d00027129ae",
			friendlyName: "Contact_Door_S",
			type: "EndDevice",
			networkAddress: 62588,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304915403
		},
		{
			ieeeAddr: "0x00158d0001e6d85a",
			friendlyName: "TempHum_S",
			type: "EndDevice",
			networkAddress: 19238,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592304914502
		},
		{
			ieeeAddr: "0x00158d00025370d1",
			friendlyName: "Contact_Window_S",
			type: "EndDevice",
			networkAddress: 39489,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592305931666
		},
		{
			ieeeAddr: "0x00158d0001ef61be",
			friendlyName: "Button_Desk_Light_K",
			type: "EndDevice",
			networkAddress: 22286,
			manufacturerName: "LUMI",
			modelID: "lumi.remote.b1acn01",
			lastSeen: 1592304031544
		},
		{
			ieeeAddr: "0x00158d0001f3627d",
			friendlyName: "Button_Desk_Light_S",
			type: "EndDevice",
			networkAddress: 11924,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592304595696
		},
		{
			ieeeAddr: "0x00158d00016bdb4a",
			friendlyName: "Button_Desk_Light_V",
			type: "EndDevice",
			networkAddress: 34663,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592303428200
		},
		{
			ieeeAddr: "0x00158d0001e0784e",
			friendlyName: "Rocker_Hood_K",
			type: "EndDevice",
			networkAddress: 28849,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592306154142
		},
		{
			ieeeAddr: "0x00158d0002b4729d",
			friendlyName: "Motion_K",
			type: "EndDevice",
			networkAddress: 6928,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592305499056
		},
		{
			ieeeAddr: "0x00158d0002b48381",
			friendlyName: "Motion_2_K",
			type: "EndDevice",
			networkAddress: 27702,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592306655937
		},
		{
			ieeeAddr: "0x00158d0001b97111",
			friendlyName: "Button_T",
			type: "EndDevice",
			networkAddress: 56920,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592304208677
		},
		{
			ieeeAddr: "0x00158d0001e58754",
			friendlyName: "TempHum_T",
			type: "EndDevice",
			networkAddress: 19370,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592303768298
		},
		{
			ieeeAddr: "0x00158d0001e54280",
			friendlyName: "Motion_T",
			type: "EndDevice",
			networkAddress: 65248,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592305141159
		},
		{
			ieeeAddr: "0x00158d000239ad5b",
			friendlyName: "TempHum_Box_B",
			type: "EndDevice",
			networkAddress: 58407,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592303734499
		},
		{
			ieeeAddr: "0x00158d0001e586af",
			friendlyName: "TempHum_K",
			type: "EndDevice",
			networkAddress: 919,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592305223690
		},
		{
			ieeeAddr: "0x00158d0002a36f7f",
			friendlyName: "Switch_Main_K",
			type: "Router",
			networkAddress: 52432,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_neutral2",
			failed: [],
			lastSeen: 1592306658230
		},
		{
			ieeeAddr: "0x00158d0002a14c5e",
			friendlyName: "Contact_Door_B",
			type: "EndDevice",
			networkAddress: 60529,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592305167786
		},
		{
			ieeeAddr: "0x00158d00020d7c3a",
			friendlyName: "TempHum_B",
			type: "EndDevice",
			networkAddress: 29346,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592305959536
		},
		{
			ieeeAddr: "0x00158d000236bc6d",
			friendlyName: "Motion_B",
			type: "EndDevice",
			networkAddress: 18531,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592305163077
		},
		{
			ieeeAddr: "0x00158d0001b94abe",
			friendlyName: "Button_B",
			type: "EndDevice",
			networkAddress: 30785,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch.aq3",
			lastSeen: 1592305321213
		},
		{
			ieeeAddr: "0x00124b0009fe0ccd",
			friendlyName: "Plug_LifeControl",
			type: "Router",
			networkAddress: 43864,
			manufacturerName: "TexasInstruments",
			modelID: "RICI01          ",
			failed: [],
			lastSeen: 1592306693619
		},
		{
			ieeeAddr: "0x00158d0001ef2ffc",
			friendlyName: "Contact_Door_T",
			type: "EndDevice",
			networkAddress: 65395,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592306355148
		},
		{
			ieeeAddr: "0x00158d000232ddd6",
			friendlyName: "Contact_Seat_T",
			type: "EndDevice",
			networkAddress: 9324,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592305141187
		},
		{
			ieeeAddr: "0x00158d0001ae9f61",
			friendlyName: "Motion_HS",
			type: "EndDevice",
			networkAddress: 9874,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion",
			lastSeen: 1592305200270
		},
		{
			ieeeAddr: "0x00158d0003539447",
			friendlyName: "Plug_Fridge_HB",
			type: "Router",
			networkAddress: 43598,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306676478
		},
		{
			ieeeAddr: "0x00158d0002468fbd",
			friendlyName: "Plug_Wadrobe_V",
			type: "Router",
			networkAddress: 22154,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306663147
		},
		{
			ieeeAddr: "0x00158d0003fa6077",
			friendlyName: "Rocker_Main_S",
			type: "EndDevice",
			networkAddress: 41773,
			manufacturerName: "LUMI",
			modelID: "lumi.remote.b286acn01",
			lastSeen: 1592305177225
		},
		{
			ieeeAddr: "0x00158d00028b4fc3",
			friendlyName: "Plug_HP8600_V",
			type: "Router",
			networkAddress: 766,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306673786
		},
		{
			ieeeAddr: "0x00158d00025315e9",
			friendlyName: "Contact_Door_MB",
			type: "EndDevice",
			networkAddress: 25692,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592303808382
		},
		{
			ieeeAddr: "0x00158d000222c746",
			friendlyName: "TempHum_MB",
			type: "EndDevice",
			networkAddress: 50729,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592305397293
		},
		{
			ieeeAddr: "0x00158d0001e53cda",
			friendlyName: "Motion_MB",
			type: "EndDevice",
			networkAddress: 54669,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592306261662
		},
		{
			ieeeAddr: "0x00158d000200ad58",
			friendlyName: "Contact_Window_MB",
			type: "EndDevice",
			networkAddress: 14166,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592303920590
		},
		{
			ieeeAddr: "0x00158d000345119e",
			friendlyName: "Plug_Breather_MB",
			type: "EndDevice",
			networkAddress: 1096,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			lastSeen: 1592306655788
		},
		{
			ieeeAddr: "0x00158d00013e6aa5",
			friendlyName: "Rocker_Main_MB",
			type: "EndDevice",
			networkAddress: 47430,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592305063949
		},
		{
			ieeeAddr: "0x00158d00023d3116",
			friendlyName: "Button_Desk_Light_MB",
			type: "EndDevice",
			networkAddress: 45725,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592304973160
		},
		{
			ieeeAddr: "0x00158d0002a36e26",
			friendlyName: "Switch_Main_HS",
			type: "Router",
			networkAddress: 49488,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_neutral2",
			failed: [],
			lastSeen: 1592306670608
		},
		{
			ieeeAddr: "0x00158d0001f5501f",
			friendlyName: "Plug_Night_Light_HS",
			type: "Router",
			networkAddress: 27435,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306671707
		},
		{
			ieeeAddr: "0x00158d0002924790",
			friendlyName: "Plug_Utils_HS",
			type: "Router",
			networkAddress: 10654,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306652221
		},
		{
			ieeeAddr: "0x00158d00023d0b86",
			friendlyName: "Button_Night_St",
			type: "EndDevice",
			networkAddress: 54311,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592304616586
		},
		{
			ieeeAddr: "0x00158d0002b482e9",
			friendlyName: "Motion_Fridge_HB",
			type: "EndDevice",
			networkAddress: 4963,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592306362590
		},
		{
			ieeeAddr: "0x00158d000253722b",
			friendlyName: "Contact_Fridge_HB",
			type: "EndDevice",
			networkAddress: 63772,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592303710992
		},
		{
			ieeeAddr: "0x00158d000252acba",
			friendlyName: "Contact_Freezer_HB",
			type: "EndDevice",
			networkAddress: 20140,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592306516352
		},
		{
			ieeeAddr: "0x00158d0002464ec0",
			friendlyName: "TempHum_HB",
			type: "EndDevice",
			networkAddress: 29431,
			manufacturerName: "LUMI",
			modelID: "lumi.sens",
			lastSeen: 1592305900031
		},
		{
			ieeeAddr: "0x00158d000237167c",
			friendlyName: "TempHumPres_Frizeer_HB",
			type: "EndDevice",
			networkAddress: 50675,
			manufacturerName: "LUMI",
			modelID: "lumi.weather",
			lastSeen: 1592306580350
		},
		{
			ieeeAddr: "0x00158d0002461e5b",
			friendlyName: "TempHum_Fridge_HB",
			type: "EndDevice",
			networkAddress: 55756,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592306214267
		},
		{
			ieeeAddr: "0x00158d0002fa99a8",
			friendlyName: "Button_Sasha_HB",
			type: "EndDevice",
			networkAddress: 51241,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592306520641
		},
		{
			ieeeAddr: "0x00158d0002f8dd54",
			friendlyName: "Button_Domofon_HB",
			type: "EndDevice",
			networkAddress: 14776,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592305832585
		},
		{
			ieeeAddr: "0x00158d0001e05856",
			friendlyName: "Motion_Entrance_HB",
			type: "EndDevice",
			networkAddress: 8588,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592305095661
		},
		{
			ieeeAddr: "0x00158d000322e1d9",
			friendlyName: "Plug_Door_Cam_HB",
			type: "Router",
			networkAddress: 3391,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306680303
		},
		{
			ieeeAddr: "0x00158d000358c773",
			friendlyName: "Plug_Digma_Cam_HB",
			type: "Router",
			networkAddress: 34576,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306692329
		},
		{
			ieeeAddr: "0x00158d0002a1a4b2",
			friendlyName: "Contact_Bottom_Lock_HB",
			type: "EndDevice",
			networkAddress: 25847,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304421997
		},
		{
			ieeeAddr: "0x00158d0002b7c2c8",
			friendlyName: "Contact_Top_Lock_HB",
			type: "EndDevice",
			networkAddress: 11803,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304451761
		},
		{
			ieeeAddr: "0x00158d0002531749",
			friendlyName: "Contact_Secondary_Door_HB",
			type: "EndDevice",
			networkAddress: 36333,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592305067758
		},
		{
			ieeeAddr: "0x00158d0001d5995e",
			friendlyName: "Motion_Mid_Door_HB",
			type: "EndDevice",
			networkAddress: 7431,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion",
			lastSeen: 1592305026778
		},
		{
			ieeeAddr: "0x00158d0001e5d6be",
			friendlyName: "Contact_Main_Door_HB",
			type: "EndDevice",
			networkAddress: 56333,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592305041272
		},
		{
			ieeeAddr: "0x00158d0003262ba8",
			friendlyName: "Contact_Doorbell_HB",
			type: "EndDevice",
			networkAddress: 52172,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304081231
		},
		{
			ieeeAddr: "0x00158d0002529b9c",
			friendlyName: "Contact_Door_V",
			type: "EndDevice",
			networkAddress: 683,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592303878819
		},
		{
			ieeeAddr: "0x00158d000236fdc9",
			friendlyName: "Contact_TV_V",
			type: "EndDevice",
			networkAddress: 21629,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592303747309
		},
		{
			ieeeAddr: "0x00158d000236bb94",
			friendlyName: "Motion_V",
			type: "EndDevice",
			networkAddress: 61460,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_motion.aq2",
			lastSeen: 1592305829991
		},
		{
			ieeeAddr: "0x00158d0001e58714",
			friendlyName: "TempHum_V",
			type: "EndDevice",
			networkAddress: 42658,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_ht",
			lastSeen: 1592305267163
		},
		{
			ieeeAddr: "0x00158d00022ccffe",
			friendlyName: "Contact_Window_V",
			type: "EndDevice",
			networkAddress: 11909,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304896036
		},
		{
			ieeeAddr: "0x00158d0001712d55",
			friendlyName: "Rocker_Main_V",
			type: "EndDevice",
			networkAddress: 1232,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592304520656
		},
		{
			ieeeAddr: "0x00158d00023d3206",
			friendlyName: "Button_Left_Home_HB",
			type: "EndDevice",
			networkAddress: 53614,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_switch",
			lastSeen: 1592306037260
		},
		{
			ieeeAddr: "0x00158d000223921b",
			friendlyName: "Switch_Entrance_HB",
			type: "Router",
			networkAddress: 31214,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_neutral2",
			failed: [],
			lastSeen: 1592306651302
		},
		{
			ieeeAddr: "0x00158d000253f04a",
			friendlyName: "Switch_Fridge_HB",
			type: "Router",
			networkAddress: 53587,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_neutral2",
			failed: [],
			lastSeen: 1592306638519
		},
		{
			ieeeAddr: "0x00158d00026ea94e",
			friendlyName: "Rocker_Water_HS",
			type: "EndDevice",
			networkAddress: 4057,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592306336241
		},
		{
			ieeeAddr: "0x00158d0001e0a622",
			friendlyName: "Rocker_Bath_Toilet_HS",
			type: "EndDevice",
			networkAddress: 52041,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592305545597
		},
		{
			ieeeAddr: "0x00158d00026eb820",
			friendlyName: "Rocker_Bed_Switch_V",
			type: "EndDevice",
			networkAddress: 23412,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_86sw2",
			lastSeen: 1592306476722
		},
		{
			ieeeAddr: "0x00158d0001a248e3",
			friendlyName: "Relay_Aux_B",
			type: "Router",
			networkAddress: 35248,
			manufacturerName: "LUMI",
			modelID: "lumi.relay.c2acn01",
			failed: [],
			lastSeen: 1592306696086
		},
		{
			ieeeAddr: "0x00158d000236fcd5",
			friendlyName: "Contact_Water_Hot_B",
			type: "EndDevice",
			networkAddress: 38270,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592306622413
		},
		{
			ieeeAddr: "0x00158d000232de79",
			friendlyName: "Contact_Water_Cold_T",
			type: "EndDevice",
			networkAddress: 38718,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet.aq2",
			lastSeen: 1592305163066
		},
		{
			ieeeAddr: "0x04cf8cdf3c79546c",
			friendlyName: "Rocker_Opple_2",
			type: "EndDevice",
			networkAddress: 19545,
			manufacturerName: "LUMI",
			modelID: "lumi.remote.b286opcn01",
			lastSeen: 1592304081300
		},
		{
			ieeeAddr: "0x00158d000353a2e3",
			friendlyName: "Plug_Top_K",
			type: "Router",
			networkAddress: 49598,
			manufacturerName: "LUMI",
			modelID: "lumi.plug",
			failed: [],
			lastSeen: 1592306659724
		},
		{
			ieeeAddr: "0x00158d0002a36433",
			friendlyName: "Switch_Main_St",
			type: "Router",
			networkAddress: 18510,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_neutral2",
			failed: [],
			lastSeen: 1592306676715
		},
		{
			ieeeAddr: "0x00124b0018e85fa5",
			friendlyName: "Router_CC2531_HB",
			type: "Router",
			networkAddress: 27441,
			manufacturerName: "LUMI",
			modelID: "lumi.router",
			failed: [],
			lastSeen: 1592306661899
		},
		{
			ieeeAddr: "0x00124b001f3d62d8",
			friendlyName: "Keypad_v1",
			type: "EndDevice",
			networkAddress: 42351,
			manufacturerName: "modkam.ru",
			modelID: "DIYRuZ_FreePad",
			lastSeen: 1592290484415
		},
		{
			ieeeAddr: "0x00124b000e896f89",
			friendlyName: "Router_CC2531_S",
			type: "Router",
			networkAddress: 61330,
			manufacturerName: "LUMI",
			modelID: "lumi.router",
			failed: [],
			lastSeen: 1592306342202
		},
		{
			ieeeAddr: "0x04cf8cdf3c77271d",
			friendlyName: "Illuminance_S",
			type: "EndDevice",
			networkAddress: 3508,
			manufacturerName: "LUMI",
			modelID: "lumi.sen_ill.mgl01",
			lastSeen: 1592306695386
		},
		{
			ieeeAddr: "0x04cf8cdf3c7754a8",
			friendlyName: "Illuminance_MB",
			type: "EndDevice",
			networkAddress: 23324,
			manufacturerName: "LUMI",
			modelID: "lumi.sen_ill.mgl01",
			lastSeen: 1592306694406
		},
		{
			ieeeAddr: "0x00158d00035c6905",
			friendlyName: "Contact_Rain_Sensor_MB",
			type: "EndDevice",
			networkAddress: 27363,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_magnet",
			lastSeen: 1592304163586
		},
		{
			ieeeAddr: "0x00158d0002349f5b",
			friendlyName: "Leak_Rain_MB",
			type: "EndDevice",
			networkAddress: 23903,
			manufacturerName: "LUMI",
			modelID: "lumi.sensor_wleak.aq1",
			lastSeen: 1592304094437
		},
		{
			ieeeAddr: "0x00158d000230fc52",
			friendlyName: "Socket_Fridge_HB",
			type: "Router",
			networkAddress: 59186,
			manufacturerName: "LUMI",
			modelID: "lumi.ctrl_86plug.aq1",
			failed: [],
			lastSeen: 1592306679290
		}
	],
	links: [
		{
			source: {
				ieeeAddr: "0x00158d0002529b9c",
				networkAddress: 683
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 94,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002529b9c",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 683,
			lqi: 94,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002a36f7f",
				networkAddress: 52432
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 78,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002a36f7f",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 52432,
			lqi: 78,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000116b03f",
				networkAddress: 54778
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 170,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000116b03f",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 54778,
			lqi: 170,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000345119e",
				networkAddress: 1096
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 41,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000345119e",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 1096,
			lqi: 41,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0003262a35",
				networkAddress: 21183
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 71,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003262a35",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 21183,
			lqi: 71,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0003140824",
				networkAddress: 3458
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 170,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003140824",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 3458,
			lqi: 170,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 78,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 59186,
			lqi: 78,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00019c8afd",
				networkAddress: 42027
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 69,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00019c8afd",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 42027,
			lqi: 69,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5f2a",
				networkAddress: 10969
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 68,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5f2a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 10969,
			lqi: 68,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002a8ac3c",
				networkAddress: 30514
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 170,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002a8ac3c",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 30514,
			lqi: 170,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001aea602",
				networkAddress: 26660
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 87,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001aea602",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 26660,
			lqi: 87,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 86,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 49598,
			lqi: 86,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000233fb72",
				networkAddress: 22973
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 97,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000233fb72",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 22973,
			lqi: 97,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000423f316",
				networkAddress: 41807
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 32,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000423f316",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 41807,
			lqi: 32,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002461e5b",
				networkAddress: 55756
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 36,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002461e5b",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 55756,
			lqi: 36,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 88,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 13992,
			lqi: 88,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 31,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 30088,
			lqi: 31,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 109,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 24375,
			lqi: 109,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 94,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 56825,
			lqi: 94,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000239ad5b",
				networkAddress: 58407
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 85,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239ad5b",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 58407,
			lqi: 85,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 15,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 27441,
			lqi: 15,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 96,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 33809,
			lqi: 96,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002464ec0",
				networkAddress: 29431
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 50,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002464ec0",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 29431,
			lqi: 50,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00025315e9",
				networkAddress: 25692
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 12,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00025315e9",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 25692,
			lqi: 12,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 80,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 43864,
			lqi: 80,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 60,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 37290,
			lqi: 60,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00025371f6",
				networkAddress: 38664
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 105,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00025371f6",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 38664,
			lqi: 105,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002a1a47a",
				networkAddress: 47941
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 83,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002a1a47a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 47941,
			lqi: 83,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e6d85a",
				networkAddress: 19238
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 58,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e6d85a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 19238,
			lqi: 58,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f3627d",
				networkAddress: 11924
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 85,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f3627d",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 11924,
			lqi: 85,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00016bdb4a",
				networkAddress: 34663
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 57,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00016bdb4a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 34663,
			lqi: 57,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002b4729d",
				networkAddress: 6928
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 83,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002b4729d",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 6928,
			lqi: 83,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002b48381",
				networkAddress: 27702
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 170,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002b48381",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 27702,
			lqi: 170,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e54280",
				networkAddress: 65248
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 82,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e54280",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 65248,
			lqi: 82,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e0784e",
				networkAddress: 28849
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 97,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e0784e",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 28849,
			lqi: 97,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002a14c5e",
				networkAddress: 60529
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 84,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002a14c5e",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 60529,
			lqi: 84,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00020d7c3a",
				networkAddress: 29346
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 128,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00020d7c3a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 29346,
			lqi: 128,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000236bc6d",
				networkAddress: 18531
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 170,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000236bc6d",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 18531,
			lqi: 170,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001b94abe",
				networkAddress: 30785
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 118,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001b94abe",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 30785,
			lqi: 118,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001ef2ffc",
				networkAddress: 65395
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 122,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001ef2ffc",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 65395,
			lqi: 122,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000232ddd6",
				networkAddress: 9324
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 65,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000232ddd6",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 9324,
			lqi: 65,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001ae9f61",
				networkAddress: 9874
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 89,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001ae9f61",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 9874,
			lqi: 89,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e586af",
				networkAddress: 919
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 102,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e586af",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 919,
			lqi: 102,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00023d0b86",
				networkAddress: 54311
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 83,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023d0b86",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 54311,
			lqi: 83,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002f8dd54",
				networkAddress: 14776
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 40,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002f8dd54",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 14776,
			lqi: 40,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002531749",
				networkAddress: 36333
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 49,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002531749",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 36333,
			lqi: 49,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000236bb94",
				networkAddress: 61460
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 87,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000236bb94",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 61460,
			lqi: 87,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e58714",
				networkAddress: 42658
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e58714",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 42658,
			lqi: 104,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00022ccffe",
				networkAddress: 11909
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 103,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00022ccffe",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 11909,
			lqi: 103,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e0a622",
				networkAddress: 52041
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 87,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e0a622",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 52041,
			lqi: 87,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 106,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 56965,
			lqi: 106,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 87,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 56773,
			lqi: 87,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 83,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 65301,
			lqi: 83,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 115,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 36610,
			lqi: 115,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 49,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 47104,
			lqi: 49,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 114,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 40846,
			lqi: 114,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 64,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 49646,
			lqi: 64,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 68,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 37587,
			lqi: 68,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 30,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 766,
			lqi: 30,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 52,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 1862,
			lqi: 52,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 63,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 60164,
			lqi: 63,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002482619",
				networkAddress: 19281
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 68,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002482619",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 19281,
			lqi: 68,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 102,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 27435,
			lqi: 102,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 39,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 43598,
			lqi: 39,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 7,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 48576,
			lqi: 7,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 117,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 10654,
			lqi: 117,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 55,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 1783,
			lqi: 55,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 83,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 41666,
			lqi: 83,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 84,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 34455,
			lqi: 84,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 82,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 42689,
			lqi: 82,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 119,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 16892,
			lqi: 119,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 70,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 22154,
			lqi: 70,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 109,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 40072,
			lqi: 109,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 84,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 26396,
			lqi: 84,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 83,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 6204,
			lqi: 83,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b000a9e26af",
				networkAddress: 5631
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00124b000a9e26af",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 5631,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 46,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002467773",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 16490,
			lqi: 46,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 5,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 3391,
			lqi: 5,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 8,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000358c773",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 34576,
			lqi: 8,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 21,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000392623d",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 10246,
			lqi: 21,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 125,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 35248,
			lqi: 125,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 39,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e30c",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 29154,
			lqi: 39,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 33,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 36265,
			lqi: 33,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 21,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000205a835",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 15166,
			lqi: 21,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 69,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 50282,
			lqi: 69,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 13,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 2818,
			lqi: 13,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 0,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00124b000e896f89",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 61330,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			linkquality: 54,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00124b001940c183",
			sourceNwkAddr: 64948,
			lqi: 54,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 86,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 0,
			lqi: 86,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00023d3116",
				networkAddress: 45725
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 131,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00023d3116",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 45725,
			lqi: 131,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000222c746",
				networkAddress: 50729
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 144,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000222c746",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 50729,
			lqi: 144,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 115,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 43598,
			lqi: 115,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 766,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 112,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002467773",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 16490,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			linkquality: 76,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d000205a835",
			sourceNwkAddr: 3391,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 164,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 0,
			lqi: 164,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000232de79",
				networkAddress: 38718
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 155,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000232de79",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 38718,
			lqi: 155,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 177,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 40846,
			lqi: 177,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 173,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 22154,
			lqi: 173,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 167,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 49598,
			lqi: 167,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 175,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 42689,
			lqi: 175,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 165,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 65301,
			lqi: 165,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 180,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 43864,
			lqi: 180,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			linkquality: 210,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d0002476ed1",
			sourceNwkAddr: 16892,
			lqi: 210,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 124,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 0,
			lqi: 124,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e58754",
				networkAddress: 19370
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 82,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e58754",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 19370,
			lqi: 82,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00124b001f831436",
				networkAddress: 43468
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 72,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b001f831436",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 43468,
			lqi: 72,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 52,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 40072,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 64,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 42689,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 192,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 35248,
			lqi: 192,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 219,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 36610,
			lqi: 219,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 40,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 47104,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 49,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 41666,
			lqi: 49,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			linkquality: 64,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d000366815b",
			sourceNwkAddr: 40846,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 190,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 0,
			lqi: 190,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 246,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 35248,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 84,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 43864,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 82,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 24375,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 111,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 27435,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 88,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 40072,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 103,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 42689,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 103,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 10654,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 66,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 49646,
			lqi: 66,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 213,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 64948,
			lqi: 213,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002482619",
				networkAddress: 19281
			},
			target: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			linkquality: 65,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002482619",
			targetIeeeAddr: "0x00158d0001a248e9",
			sourceNwkAddr: 19281,
			lqi: 65,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 130,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 0,
			lqi: 130,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 90,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 34455,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 126,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 49598,
			lqi: 126,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 208,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 56965,
			lqi: 208,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 147,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 43864,
			lqi: 147,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 80,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 35248,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 65,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 36610,
			lqi: 65,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 110,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 47104,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 110,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 41666,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			linkquality: 214,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00158d00039258de",
			sourceNwkAddr: 65301,
			lqi: 214,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 75,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 0,
			lqi: 75,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 51,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 35248,
			lqi: 51,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000345119e",
				networkAddress: 1096
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 114,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000345119e",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 1096,
			lqi: 114,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 108,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 766,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 102,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 59186,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 108,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e30c",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 29154,
			lqi: 108,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 59,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 43598,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			target: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			linkquality: 154,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002467773",
			targetIeeeAddr: "0x00158d0003535ee5",
			sourceNwkAddr: 16490,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 135,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 0,
			lqi: 135,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 69,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 10654,
			lqi: 69,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 48,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 27441,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 114,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 48576,
			lqi: 114,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 60164,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 99,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 1783,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 96,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 40846,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 110,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 6204,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 69,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 56965,
			lqi: 69,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 48,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 27435,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			linkquality: 247,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d0003600ea4",
			sourceNwkAddr: 37290,
			lqi: 247,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 124,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 0,
			lqi: 124,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00023d3206",
				networkAddress: 53614
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 75,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00023d3206",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 53614,
			lqi: 75,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 96,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 30088,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 97,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 48576,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 137,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 1862,
			lqi: 137,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 97,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 37290,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 121,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 37587,
			lqi: 121,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 43,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 27435,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00158d00035f44a7",
			sourceNwkAddr: 36265,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 133,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 0,
			lqi: 133,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00027129ae",
				networkAddress: 62588
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 109,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00027129ae",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 62588,
			lqi: 109,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001ef61be",
				networkAddress: 22286
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 147,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001ef61be",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 22286,
			lqi: 147,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002fa99a8",
				networkAddress: 51241
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 135,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002fa99a8",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 51241,
			lqi: 135,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e05856",
				networkAddress: 8588
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 116,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e05856",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 8588,
			lqi: 116,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002b5fbc1",
				networkAddress: 38338
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 103,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002b5fbc1",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 38338,
			lqi: 103,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002b7c2c8",
				networkAddress: 11803
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 122,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002b7c2c8",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 11803,
			lqi: 122,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0003262ba8",
				networkAddress: 52172
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 81,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0003262ba8",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 52172,
			lqi: 81,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x04cf8cdf3c77271d",
				networkAddress: 3508
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 148,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x04cf8cdf3c77271d",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 3508,
			lqi: 148,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 127,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 37290,
			lqi: 127,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 166,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 24375,
			lqi: 166,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 94,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 30088,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 88,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 3391,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 89,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 36265,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 70,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 27435,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 189,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 1862,
			lqi: 189,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 154,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 40072,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			linkquality: 67,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d0002395d58",
			sourceNwkAddr: 35248,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 58,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 64948,
			lqi: 58,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x04cf8cdf3c79546c",
				networkAddress: 19545
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 128,
			depth: 3,
			routes: [],
			sourceIeeeAddr: "0x04cf8cdf3c79546c",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 19545,
			lqi: 128,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 169,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 34455,
			lqi: 169,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 147,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 10654,
			lqi: 147,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 172,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 43864,
			lqi: 172,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 190,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 16892,
			lqi: 190,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 123,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 6204,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 94,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 37587,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 193,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 56773,
			lqi: 193,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 131,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 48576,
			lqi: 131,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 168,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 22154,
			lqi: 168,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			linkquality: 193,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00158d0002451850",
			sourceNwkAddr: 56825,
			lqi: 193,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 186,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 0,
			lqi: 186,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000224f89f",
				networkAddress: 19225
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 103,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000224f89f",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 19225,
			lqi: 103,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 77,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 37290,
			lqi: 77,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 145,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 49598,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 191,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 43864,
			lqi: 191,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 207,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 56825,
			lqi: 207,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 159,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 40072,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 204,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 56965,
			lqi: 204,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 184,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 65301,
			lqi: 184,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 184,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 41666,
			lqi: 184,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			linkquality: 196,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d000249b25b",
			sourceNwkAddr: 40846,
			lqi: 196,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 152,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 0,
			lqi: 152,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 246,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 56965,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 191,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 16892,
			lqi: 191,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 42689,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 81,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 6204,
			lqi: 81,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 165,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 56825,
			lqi: 165,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 215,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 49646,
			lqi: 215,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 100,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 34455,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			linkquality: 45,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00158d00028c9875",
			sourceNwkAddr: 36265,
			lqi: 45,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 175,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 0,
			lqi: 175,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001ef609b",
				networkAddress: 18251
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 139,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001ef609b",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 18251,
			lqi: 139,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001b97111",
				networkAddress: 56920
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 149,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001b97111",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 56920,
			lqi: 149,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 48,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 26396,
			lqi: 48,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 246,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 65301,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 89,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 1783,
			lqi: 89,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 111,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 56773,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 116,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 42689,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 207,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 16892,
			lqi: 207,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 210,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 49646,
			lqi: 210,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 122,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 49598,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 136,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 43864,
			lqi: 136,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			linkquality: 68,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d00028a54e4",
			sourceNwkAddr: 37587,
			lqi: 68,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 160,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 0,
			lqi: 160,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000236fcd5",
				networkAddress: 38270
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 183,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000236fcd5",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 38270,
			lqi: 183,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 153,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 42689,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 156,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 26396,
			lqi: 156,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 129,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 37290,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 162,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 59186,
			lqi: 162,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 139,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 49598,
			lqi: 139,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002482619",
				networkAddress: 19281
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 175,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002482619",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 19281,
			lqi: 175,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 171,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 24375,
			lqi: 171,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 159,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 27435,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 130,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 34455,
			lqi: 130,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			linkquality: 159,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00158d000249b26b",
			sourceNwkAddr: 10654,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 103,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 0,
			lqi: 103,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0002a2412d",
				networkAddress: 45114
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 171,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002a2412d",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 45114,
			lqi: 171,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x04cf8cdf3c7754a8",
				networkAddress: 23324
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 100,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x04cf8cdf3c7754a8",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 23324,
			lqi: 100,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 145,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 2818,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 55,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 27435,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 54,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 3391,
			lqi: 54,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000205a835",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 15166,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000345119e",
				networkAddress: 1096
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 166,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000345119e",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 1096,
			lqi: 166,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			linkquality: 169,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00158d0002467773",
			sourceNwkAddr: 766,
			lqi: 169,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			linkquality: 108,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00158d000322e30c",
			sourceNwkAddr: 2818,
			lqi: 108,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			linkquality: 128,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d000322e30c",
			sourceNwkAddr: 59186,
			lqi: 128,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000345119e",
				networkAddress: 1096
			},
			target: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			linkquality: 116,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000345119e",
			targetIeeeAddr: "0x00158d000322e30c",
			sourceNwkAddr: 1096,
			lqi: 116,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			linkquality: 77,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00158d000322e30c",
			sourceNwkAddr: 766,
			lqi: 77,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 112,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 0,
			lqi: 112,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00025370d1",
				networkAddress: 39489
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 121,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00025370d1",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 39489,
			lqi: 121,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 133,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 60164,
			lqi: 133,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 151,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 36265,
			lqi: 151,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 162,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 30088,
			lqi: 162,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 190,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 50282,
			lqi: 190,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 100,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 43864,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 171,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000392623d",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 10246,
			lqi: 171,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			linkquality: 100,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d000239097a",
			sourceNwkAddr: 1783,
			lqi: 100,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 126,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 0,
			lqi: 126,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 60,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 42689,
			lqi: 60,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 246,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 37587,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 106,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 48576,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 77,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 16892,
			lqi: 77,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 132,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 33809,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 102,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 60164,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 63,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 3391,
			lqi: 63,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			linkquality: 133,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d00035c194f",
			sourceNwkAddr: 50282,
			lqi: 133,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 96,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 0,
			lqi: 96,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 205,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000392623d",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 10246,
			lqi: 205,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 154,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 1862,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 67,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 59186,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 60164,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 238,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 30088,
			lqi: 238,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 53,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000358c773",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 34576,
			lqi: 53,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			linkquality: 40,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00158d00023a657a",
			sourceNwkAddr: 65301,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 102,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 0,
			lqi: 102,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 239,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000392623d",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 10246,
			lqi: 239,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 241,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 36265,
			lqi: 241,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 172,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 1862,
			lqi: 172,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 102,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 50282,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 103,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 60164,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			linkquality: 87,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d00036148b9",
			sourceNwkAddr: 43864,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			linkquality: 179,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00158d000392623d",
			sourceNwkAddr: 1862,
			lqi: 179,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			linkquality: 209,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00158d000392623d",
			sourceNwkAddr: 36265,
			lqi: 209,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			linkquality: 238,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00158d000392623d",
			sourceNwkAddr: 30088,
			lqi: 238,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			target: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			linkquality: 44,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b000e896f89",
			targetIeeeAddr: "0x00158d000392623d",
			sourceNwkAddr: 61330,
			lqi: 44,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			linkquality: 112,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d000392623d",
			sourceNwkAddr: 24375,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 202,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 24375,
			lqi: 202,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 184,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 48576,
			lqi: 184,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 154,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 16892,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 97,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 3391,
			lqi: 97,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 113,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 35248,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 175,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 1783,
			lqi: 175,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 45,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 64948,
			lqi: 45,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 170,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 26396,
			lqi: 170,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 169,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 47104,
			lqi: 169,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 84,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 36610,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			linkquality: 154,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d0002395dc9",
			sourceNwkAddr: 50282,
			lqi: 154,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 117,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 0,
			lqi: 117,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001d5995e",
				networkAddress: 7431
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 84,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001d5995e",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 7431,
			lqi: 84,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000236fdc9",
				networkAddress: 21629
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 201,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000236fdc9",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 21629,
			lqi: 201,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 26396,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 106,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 1862,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 85,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 27435,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 174,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 40072,
			lqi: 174,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 95,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 37587,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 91,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 22154,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 129,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 24375,
			lqi: 129,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 98,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 56773,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 90,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 56965,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			linkquality: 246,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d000290a0bc",
			sourceNwkAddr: 48576,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 80,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 0,
			lqi: 80,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 186,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 40072,
			lqi: 186,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 130,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 40846,
			lqi: 130,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 40,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b000e896f89",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 61330,
			lqi: 40,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 245,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 1783,
			lqi: 245,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 153,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 24375,
			lqi: 153,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 115,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 37587,
			lqi: 115,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 54,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 35248,
			lqi: 54,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 80,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 3391,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d000290a093",
			sourceNwkAddr: 37290,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 158,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 0,
			lqi: 158,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 113,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 56965,
			lqi: 113,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 99,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 1783,
			lqi: 99,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 124,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 47104,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002482619",
				networkAddress: 19281
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 94,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002482619",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 19281,
			lqi: 94,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 110,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 49598,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 191,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 40846,
			lqi: 191,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 83,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 41666,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 106,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 13992,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			linkquality: 205,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d000344998e",
			sourceNwkAddr: 22154,
			lqi: 205,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 120,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 0,
			lqi: 120,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001712d55",
				networkAddress: 1232
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 124,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001712d55",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 1232,
			lqi: 124,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00026eb820",
				networkAddress: 23412
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 154,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00026eb820",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 23412,
			lqi: 154,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00124b001f3d62d8",
				networkAddress: 42351
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 137,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b001f3d62d8",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 42351,
			lqi: 137,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 150,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 22154,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 56773,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 112,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 49646,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 173,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 40072,
			lqi: 173,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			linkquality: 91,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d00039bd56d",
			sourceNwkAddr: 35248,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 151,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 0,
			lqi: 151,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 103,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 36610,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 65301,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 61,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 37290,
			lqi: 61,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 158,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 33809,
			lqi: 158,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 177,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 56825,
			lqi: 177,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 58,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 64948,
			lqi: 58,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 127,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 41666,
			lqi: 127,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 120,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 34455,
			lqi: 120,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 120,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 56965,
			lqi: 120,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			linkquality: 124,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d0001e85086",
			sourceNwkAddr: 49598,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 151,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 0,
			lqi: 151,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 111,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 49646,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 84,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 56773,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 42,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 64948,
			lqi: 42,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 74,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 13992,
			lqi: 74,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 189,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 16892,
			lqi: 189,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 124,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 42689,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			linkquality: 141,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d000232481a",
			sourceNwkAddr: 43864,
			lqi: 141,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d0002a365df",
				networkAddress: 13432
			},
			linkquality: 171,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d0002a365df",
			sourceNwkAddr: 34455,
			lqi: 171,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0002a36f7f",
				networkAddress: 52432
			},
			linkquality: 142,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0002a36f7f",
			sourceNwkAddr: 0,
			lqi: 142,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 82,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 0,
			lqi: 82,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c6905",
				networkAddress: 27363
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 22,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c6905",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 27363,
			lqi: 22,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000239097a",
				networkAddress: 1862
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 42,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000239097a",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 1862,
			lqi: 42,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 79,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 49646,
			lqi: 79,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 22,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 30088,
			lqi: 22,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 33,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 35248,
			lqi: 33,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 72,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 34455,
			lqi: 72,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000232481a",
				networkAddress: 41666
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 75,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000232481a",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 41666,
			lqi: 75,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 19,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 36610,
			lqi: 19,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 84,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 22154,
			lqi: 84,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 51,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 27435,
			lqi: 51,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 21,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 27441,
			lqi: 21,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 103,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 40846,
			lqi: 103,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 75,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 56965,
			lqi: 75,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 124,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 16892,
			lqi: 124,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 109,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 56825,
			lqi: 109,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 70,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 10654,
			lqi: 70,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			linkquality: 83,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00124b0009fe0ccd",
			sourceNwkAddr: 49598,
			lqi: 83,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 145,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 59186,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 58,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 2818,
			lqi: 58,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 133,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 24375,
			lqi: 133,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 84,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 766,
			lqi: 84,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 59,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 22154,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 112,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000205a835",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 15166,
			lqi: 112,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 143,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 27441,
			lqi: 143,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 86,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000358c773",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 34576,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			linkquality: 159,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00158d0003539447",
			sourceNwkAddr: 13992,
			lqi: 159,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 137,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 0,
			lqi: 137,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 150,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 43864,
			lqi: 150,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 82,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 59186,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 160,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 40846,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 91,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 1783,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 145,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 47104,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 205,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 56773,
			lqi: 205,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 169,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 56825,
			lqi: 169,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			linkquality: 59,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00158d0002468fbd",
			sourceNwkAddr: 43598,
			lqi: 59,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 101,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 0,
			lqi: 101,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 59186,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 90,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 13992,
			lqi: 90,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 70,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e30c",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 29154,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 177,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002467773",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 16490,
			lqi: 177,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000345119e",
				networkAddress: 1096
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 246,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000345119e",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 1096,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 87,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 43598,
			lqi: 87,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 124,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000205a835",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 15166,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			linkquality: 106,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00158d00028b4fc3",
			sourceNwkAddr: 2818,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002482619",
				networkAddress: 19281
			},
			target: {
				ieeeAddr: "0x00158d0002a36e26",
				networkAddress: 49488
			},
			linkquality: 157,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002482619",
			targetIeeeAddr: "0x00158d0002a36e26",
			sourceNwkAddr: 19281,
			lqi: 157,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 48,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 37587,
			lqi: 48,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 106,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 36610,
			lqi: 106,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 86,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 1783,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 98,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 35248,
			lqi: 98,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 110,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 43864,
			lqi: 110,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 172,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 10654,
			lqi: 172,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 160,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 33809,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 76,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 50282,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 65,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 48576,
			lqi: 65,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 64,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 27441,
			lqi: 64,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			linkquality: 80,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d0001f5501f",
			sourceNwkAddr: 34455,
			lqi: 80,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 67,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 37587,
			lqi: 67,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 124,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 26396,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 133,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 43864,
			lqi: 133,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 175,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 27435,
			lqi: 175,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 102,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 36610,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 104,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 35248,
			lqi: 104,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 86,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 6204,
			lqi: 86,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 160,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 33809,
			lqi: 160,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002482619",
				networkAddress: 19281
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 111,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002482619",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 19281,
			lqi: 111,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 67,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 27441,
			lqi: 67,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002451850",
				networkAddress: 40846
			},
			target: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			linkquality: 143,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002451850",
			targetIeeeAddr: "0x00158d0002924790",
			sourceNwkAddr: 40846,
			lqi: 143,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 65,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 37290,
			lqi: 65,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e5d6be",
				networkAddress: 56333
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 124,
			depth: 3,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e5d6be",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 56333,
			lqi: 124,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 145,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 6204,
			lqi: 145,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 183,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000358c773",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 34576,
			lqi: 183,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 96,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 40072,
			lqi: 96,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 79,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 48576,
			lqi: 79,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 76,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000205a835",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 15166,
			lqi: 76,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			linkquality: 91,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d000322e1d9",
			sourceNwkAddr: 50282,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			linkquality: 73,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000358c773",
			sourceNwkAddr: 0,
			lqi: 73,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			linkquality: 52,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00158d000358c773",
			sourceNwkAddr: 36265,
			lqi: 52,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e1d9",
				networkAddress: 3391
			},
			target: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			linkquality: 186,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e1d9",
			targetIeeeAddr: "0x00158d000358c773",
			sourceNwkAddr: 3391,
			lqi: 186,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			linkquality: 132,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d000358c773",
			sourceNwkAddr: 6204,
			lqi: 132,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			linkquality: 88,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00158d000358c773",
			sourceNwkAddr: 43598,
			lqi: 88,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d000223921b",
				networkAddress: 31214
			},
			linkquality: 179,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d000223921b",
			sourceNwkAddr: 6204,
			lqi: 179,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00158d000253f04a",
				networkAddress: 53587
			},
			linkquality: 150,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00158d000253f04a",
			sourceNwkAddr: 13992,
			lqi: 150,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395d58",
				networkAddress: 50282
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 70,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395d58",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 50282,
			lqi: 70,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 199,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 0,
			lqi: 199,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 103,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 10654,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 102,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 27435,
			lqi: 102,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 91,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 47104,
			lqi: 91,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 82,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 56965,
			lqi: 82,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 56,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 2818,
			lqi: 56,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 123,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000353a2e3",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 49598,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 55,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 48576,
			lqi: 55,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 103,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 34455,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 83,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 49646,
			lqi: 83,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e9",
				networkAddress: 36610
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 246,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e9",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 36610,
			lqi: 246,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x0000000000000000",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 103,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x0000000000000000",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 24375,
			lqi: 103,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000366815b",
				networkAddress: 64948
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 184,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000366815b",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 64948,
			lqi: 184,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 43,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0018e85fa5",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 27441,
			lqi: 43,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 114,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 40072,
			lqi: 114,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			linkquality: 95,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d0001a248e3",
			sourceNwkAddr: 43864,
			lqi: 95,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 153,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 0,
			lqi: 153,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d00013e6aa5",
				networkAddress: 47430
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 52,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d00013e6aa5",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 47430,
			lqi: 52,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d0001e85086",
				networkAddress: 42689
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001e85086",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 42689,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000216528c",
				networkAddress: 34455
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 171,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000216528c",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 34455,
			lqi: 171,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b25b",
				networkAddress: 16892
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 148,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b25b",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 16892,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 148,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 43864,
			lqi: 148,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028a54e4",
				networkAddress: 56965
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028a54e4",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 56965,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 118,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 35248,
			lqi: 118,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 124,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 49646,
			lqi: 124,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 163,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 56825,
			lqi: 163,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000344998e",
				networkAddress: 56773
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 107,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000344998e",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 56773,
			lqi: 107,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00158d000353a2e3",
				networkAddress: 49598
			},
			linkquality: 142,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00158d000353a2e3",
			sourceNwkAddr: 33809,
			lqi: 142,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f2630e",
				networkAddress: 26396
			},
			target: {
				ieeeAddr: "0x00158d0002a36433",
				networkAddress: 18510
			},
			linkquality: 127,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f2630e",
			targetIeeeAddr: "0x00158d0002a36433",
			sourceNwkAddr: 26396,
			lqi: 127,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 75,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 0,
			lqi: 75,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000205a835",
				networkAddress: 15166
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 77,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000205a835",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 15166,
			lqi: 77,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 54,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e30c",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 29154,
			lqi: 54,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00039bd56d",
				networkAddress: 47104
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 49,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00039bd56d",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 47104,
			lqi: 49,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000345119e",
				networkAddress: 1096
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 63,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000345119e",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 1096,
			lqi: 63,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 114,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 6204,
			lqi: 114,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001a248e3",
				networkAddress: 35248
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 35,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001a248e3",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 35248,
			lqi: 35,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 54,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000358c773",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 34576,
			lqi: 54,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 73,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 43864,
			lqi: 73,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 114,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000230fc52",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 59186,
			lqi: 114,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 41,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 37587,
			lqi: 41,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00035c194f",
				networkAddress: 37290
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 36,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00035c194f",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 37290,
			lqi: 36,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 55,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 27435,
			lqi: 55,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002924790",
				networkAddress: 10654
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 58,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002924790",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 10654,
			lqi: 58,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002476ed1",
				networkAddress: 56825
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 73,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002476ed1",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 56825,
			lqi: 73,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 114,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 13992,
			lqi: 114,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00124b0018e85fa5",
				networkAddress: 27441
			},
			linkquality: 127,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00124b0018e85fa5",
			sourceNwkAddr: 43598,
			lqi: 127,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 2,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 24375,
			lqi: 2,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a093",
				networkAddress: 48576
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 33,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a093",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 48576,
			lqi: 33,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000392623d",
				networkAddress: 10246
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 35,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000392623d",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 10246,
			lqi: 35,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 33,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 6204,
			lqi: 33,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0001f5501f",
				networkAddress: 27435
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 1,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0001f5501f",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 27435,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000358c773",
				networkAddress: 34576
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 1,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000358c773",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 34576,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d000290a0bc",
				networkAddress: 1783
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 26,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d000290a0bc",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 1783,
			lqi: 26,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 42,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 13992,
			lqi: 42,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002467773",
				networkAddress: 16490
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 0,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002467773",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 16490,
			lqi: 0,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0003600ea4",
				networkAddress: 37587
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 20,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0003600ea4",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 37587,
			lqi: 20,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00023a657a",
				networkAddress: 36265
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 44,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00023a657a",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 36265,
			lqi: 44,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00035f44a7",
				networkAddress: 60164
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 96,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00035f44a7",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 60164,
			lqi: 96,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b0009fe0ccd",
				networkAddress: 43864
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 41,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00124b0009fe0ccd",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 43864,
			lqi: 41,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00036148b9",
				networkAddress: 30088
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 70,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00036148b9",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 30088,
			lqi: 70,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00028c9875",
				networkAddress: 65301
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 1,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00028c9875",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 65301,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d0002395dc9",
				networkAddress: 40072
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 40,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d0002395dc9",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 40072,
			lqi: 40,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00158d00039258de",
				networkAddress: 49646
			},
			target: {
				ieeeAddr: "0x00124b000e896f89",
				networkAddress: 61330
			},
			linkquality: 1,
			depth: 255,
			routes: [],
			sourceIeeeAddr: "0x00158d00039258de",
			targetIeeeAddr: "0x00124b000e896f89",
			sourceNwkAddr: 49646,
			lqi: 1,
			relationship: 3
		},
		{
			source: {
				ieeeAddr: "0x00124b001940c183",
				networkAddress: 0
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 145,
			depth: 0,
			routes: [],
			sourceIeeeAddr: "0x00124b001940c183",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 0,
			lqi: 145,
			relationship: 0
		},
		{
			source: {
				ieeeAddr: "0x00158d0002b43ad4",
				networkAddress: 54936
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 157,
			depth: 2,
			routes: [],
			sourceIeeeAddr: "0x00158d0002b43ad4",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 54936,
			lqi: 157,
			relationship: 1
		},
		{
			source: {
				ieeeAddr: "0x00158d000246776f",
				networkAddress: 24375
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 169,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000246776f",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 24375,
			lqi: 169,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0002468fbd",
				networkAddress: 22154
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 85,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0002468fbd",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 22154,
			lqi: 85,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003539447",
				networkAddress: 43598
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 146,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003539447",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 43598,
			lqi: 146,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000249b26b",
				networkAddress: 33809
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 166,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000249b26b",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 33809,
			lqi: 166,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00028b4fc3",
				networkAddress: 766
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 123,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00028b4fc3",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 766,
			lqi: 123,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d000322e30c",
				networkAddress: 29154
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 122,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d000322e30c",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 29154,
			lqi: 122,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00024517fe",
				networkAddress: 6204
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 168,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00024517fe",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 6204,
			lqi: 168,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d00023e5812",
				networkAddress: 13992
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 171,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d00023e5812",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 13992,
			lqi: 171,
			relationship: 2
		},
		{
			source: {
				ieeeAddr: "0x00158d0003535ee5",
				networkAddress: 2818
			},
			target: {
				ieeeAddr: "0x00158d000230fc52",
				networkAddress: 59186
			},
			linkquality: 104,
			depth: 1,
			routes: [],
			sourceIeeeAddr: "0x00158d0003535ee5",
			targetIeeeAddr: "0x00158d000230fc52",
			sourceNwkAddr: 2818,
			lqi: 104,
			relationship: 2
		}
	]
}
const graph = sanitizeGraph(_graph as GraphI);
export default graph;