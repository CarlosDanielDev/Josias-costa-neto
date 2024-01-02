export function formatPhoneNumber(phoneNumber: string): string {
    const areaCode = phoneNumber.slice(0, 2);
    const prefix = phoneNumber.slice(2, 7);
    const line = phoneNumber.slice(7);
    return `(${areaCode}) ${prefix}-${line}`;
}

