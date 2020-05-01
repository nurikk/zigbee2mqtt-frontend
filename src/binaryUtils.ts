export const isLeaveReqSend = (flags: number): boolean => {
    return !!(flags & 0x01);
}