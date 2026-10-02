import { centre } from '../config.js'

export const telHref = centre.phone ? `tel:${centre.phone}` : null
export const waBase = centre.whatsapp ? `https://wa.me/${centre.whatsapp}` : null

// Used by every "Enquire" button: opens WhatsApp with a ready-to-send message (falls back to the form).
export const waEnquiryText = `Hello ${centre.name}, I would like to enquire about a demo class for my child.`
export const enquireHref = waBase ? `${waBase}?text=${encodeURIComponent(waEnquiryText)}` : '#contact'

export function validate({ name, phone, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter the parent or guardian name.'
  else if (name.trim().length < 2) errors.name = 'Name looks too short.'
  const digits = phone.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '')
  if (!phone.trim()) errors.phone = 'Please enter a contact number.'
  else if (!/^[6-9]\d{9}$/.test(digits)) errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (message.length > 500) errors.message = 'Please keep the message under 500 characters.'
  return errors
}

export function buildMessage({ name, phone, message }) {
  return [
    `Hello ${centre.name}, I would like to enquire about a demo.`,
    `Parent/guardian: ${name.trim()}`,
    `Contact number: ${phone.trim()}`,
    message.trim() ? `Message: ${message.trim()}` : null,
  ].filter(Boolean).join('\n')
}

export const scrollToEnquiry = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
