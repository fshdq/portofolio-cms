import {format, parseISO} from 'date-fns'

export function formatDate(iso?: string | null, dateFormat = 'LLL d, yyyy') {
  if (!iso) return ''
  try {
    return format(parseISO(iso), dateFormat)
  } catch (err) {
    // fallback: return the raw string if parsing fails
    return String(iso)
  }
}

export default formatDate
