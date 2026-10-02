import { centre } from '../config.js'

export const telHref = centre.phone ? `tel:${centre.phone}` : null
export const waBase = centre.whatsapp ? `https://wa.me/${centre.whatsapp}` : null

// Used by every "Enquire" button: opens WhatsApp with a ready-to-send message (falls back to the form).
export function getEnquireHref(language) {
  if (!waBase) return '#contact'
  const message = language === 'as'
    ? 'নমস্কাৰ SIP Abacus, মোৰ শিশুৰ বাবে ডেমো ক্লাছৰ বিষয়ে সুধিব বিচাৰোঁ।'
    : `Hello ${centre.name}, I would like to enquire about a demo class for my child.`
  return `${waBase}?text=${encodeURIComponent(message)}`
}

export function validate({ name, phone, message }, t) {
  const errors = {}
  if (!name.trim()) errors.name = t('contact.errorNameRequired')
  else if (name.trim().length < 2) errors.name = t('contact.errorNameShort')
  const digits = phone.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '')
  if (!phone.trim()) errors.phone = t('contact.errorPhoneRequired')
  else if (!/^[6-9]\d{9}$/.test(digits)) errors.phone = t('contact.errorPhoneInvalid')
  if (message.length > 500) errors.message = t('contact.errorMessageLong')
  return errors
}

export function buildMessage({ name, phone, message }, t) {
  return [
    t('contact.messageGreeting'),
    t('contact.messageParent', { name: name.trim() }),
    t('contact.messagePhone', { phone: phone.trim() }),
    message.trim() ? t('contact.messageBody', { message: message.trim() }) : null,
  ].filter(Boolean).join('\n')
}

export const scrollToEnquiry = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
