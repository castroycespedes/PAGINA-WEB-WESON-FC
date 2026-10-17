export const whatsappNumber = '573045420742';
export const instagramUrl = 'https://www.instagram.com/atwexon/';

export function createWhatsappUrl(message?: string) {
  const baseUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  if (!message) return baseUrl;

  return `${baseUrl}&text=${encodeURIComponent(message)}`;
}
