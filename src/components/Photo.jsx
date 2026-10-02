/** Responsive photo from the gallery config: loads `<src>-600.webp` / `<src>-1200.webp`. */
export default function Photo({ item, className = '', sizes = '(min-width: 768px) 33vw, 50vw', eager = false }) {
  return (
    <img
      src={`${item.src}-1200.webp`}
      srcSet={`${item.src}-600.webp 600w, ${item.src}-1200.webp 1200w`}
      sizes={sizes}
      alt={item.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  )
}
