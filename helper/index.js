export function maskPhoneNumber(phoneNumber) {
  // Check if the input is a valid phone number
  if (typeof phoneNumber !== 'string' || phoneNumber.length < 3) {
    return 'Invalid phone number';
  }

  // Mask the last 3 digits
  const numDigits = phoneNumber.slice(0, -3);
  const maskedThreeDigits = phoneNumber.slice(-3).replace(/\d/g, '*');

  // Combine the masked and unmasked parts
  const maskedPhoneNumber = numDigits + maskedThreeDigits;

  return maskedPhoneNumber;
}

export const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 2,
});
