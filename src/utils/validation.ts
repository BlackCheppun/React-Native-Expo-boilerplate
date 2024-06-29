//util function are function that can be used everywhere and are not specific to a certain component/context
//example of util function is validation function, date formatting function, etc.

export function validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^(05|06|07)\d{8}$/;
    return phoneRegex.test(phoneNumber);
  }

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}