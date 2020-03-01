import { GATEWAY } from "./consts";
import { Device, GraphI, NodeI, LinkType, DeviceType } from "./types";

export const convert2graph = (file: { [k: string]: Device }): GraphI => {
    const coordinator: NodeI = {
        id: "SLS GW",
        device: GATEWAY
    };

    const graph: GraphI = {
        nodes: [coordinator],
        links: []
    };
    const getLinkType = (source: DeviceType, dest: DeviceType): LinkType => {
        return `${source}2${dest}` as LinkType;
    };

    Object.entries(file).forEach(([deviceKey, deviceData]) => {
        graph.nodes.push({
            id: deviceKey,
            device: deviceData
        });
        if (Array.isArray(deviceData.Rtg) && deviceData.Rtg.length) {
            deviceData.Rtg.forEach(route => {
                graph.links.push({
                    source: deviceKey,
                    target: route.toString(),
                    linkQuality: deviceData?.st?.linkquality,
                    type: getLinkType(
                        deviceData.type as DeviceType,
                        file[route.toString()].type as DeviceType
                    )
                });
            });
        } else {
            graph.links.push({
                source: deviceKey,
                target: coordinator.id,
                linkQuality: deviceData?.st?.linkquality,
                type: getLinkType(deviceData.type, DeviceType.Coordinator)
            });
        }
    });
    return graph;
};
