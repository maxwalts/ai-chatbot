'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type Chat } from '@/lib/types'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { IconMessage } from '@/components/ui/icons'
import { SidebarActions } from '@/components/sidebar-actions'

interface SidebarItemProps {
  chat: Chat
  children: React.ReactNode
}

export function SidebarItem({ chat, children }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === chat.path

  if (!chat?.id) return null

  return (
    <>
      <Link
        href={chat.path || `/chat/${chat.id}`}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'group w-full px-2',
          isActive && 'bg-accent'
        )}
      >
        <IconMessage className="mr-2" />
        <div
          className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
          title={chat.title}
        >
          <span className="whitespace-nowrap">{chat.title}</span>
        </div>
        {children}
      </Link>
    </>
  )
}
