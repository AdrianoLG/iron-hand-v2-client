import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Button({ href, screen, title }) {
  const router = useRouter()

  return (
    <Link
      className={`submenuButton ${router.pathname == screen ? 'active' : ''}`}
      href={href}
    >
      {title}
    </Link>
  )
}
