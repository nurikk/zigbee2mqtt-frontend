
import { convertRawDevices } from './convert';
import { Device, Dictionary } from '../types';
import { TimeInfo } from './time';

const encodeData = (data: Dictionary<string | number>): string => Object.keys(data).map((key) => [key, data[key]].map(encodeURIComponent).join("=")).join("&")

type CallbackHandler<T> = (err: unknown, res: T) => void;

export const fetchZibeeDevicesList = (callback: CallbackHandler<Device[]>): void => {
    fetch('/api/zigbee/devices').then((res) => res.json()).then(data => callback(false, convertRawDevices(data)));
};

export const fetchTimeInfo = (callback: CallbackHandler<TimeInfo>): void => {
    fetch('/api/time').then((res) => res.json()).then(data => callback(false, data));
};

export const renameDevice = (address: string, newName: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/zigbee?rename=${address}&new=${encodeURIComponent(newName)}`).then((res) => res.blob()).then(data => callback(false, data));
};

export const removeDevice = (address: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/zigbee?remove=${address}`).then((res) => res.blob()).then(data => callback(false, data));
};

export const startInterview = (address: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/zigbee?intstart=${address}`).then((res) => res.blob()).then(data => callback(false, data));
};

export const enableJoin = (duration = 255, target = "", callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/join?${encodeData({ duration, target })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};