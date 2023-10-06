'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ children, href, prefetch }) {
  const pathname = usePathname()
  if (href === pathname) {
    return (
      <span className="font-bold text-6xl text-blue-600/100">{children}</span>
    )
  }
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="font-bold hover:underline"
    >
      {children}
    </Link>
  )
}
