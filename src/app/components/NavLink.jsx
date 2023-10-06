'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ children, href, prefetch }) {
  const pathname = usePathname()
  if (href === pathname) {
    return (
      <span className="">{children}</span>
    )
  }
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="hover:underline"
    >
      {children}
    </Link>
  )
}
