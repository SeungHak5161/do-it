'use client'

import Image from 'next/image'
import Link from 'next/link'
import './TodoItem.scss'

type clickEvent = (id: string) => void

export default function TodoItem({
  ClickEvent,
  props,
}: {
  ClickEvent: clickEvent
  props: ITodoSimple
}) {
  const { name, isCompleted, id } = props

  return (
    <>
      <Link href={`/items/${id}`}>
        <div className={`todoItem ${isCompleted ? 'done' : 'undo'}`}>
          <Image
            className="todoItemIcon"
            src={isCompleted ? '/icons/done.svg' : '/icons/undo.svg'}
            alt={isCompleted ? 'done' : 'undo'}
            width={32}
            height={32}
            onClick={(e) => {
              e.preventDefault()
              ClickEvent(id)
            }}
          />
          <span className="elipse">{name}</span>
        </div>
      </Link>
    </>
  )
}
