'use client'

import Image from 'next/image'
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
      {/* <Link href={`/item/${id}`}>
      </Link> */}
      <div className={`todoItem ${isCompleted ? 'done' : 'undo'}`}>
        <Image
          className="todoItemIcon"
          src={isCompleted ? '/icons/done.svg' : '/icons/undo.svg'}
          alt={isCompleted ? 'done' : 'undo'}
          width={32}
          height={32}
          onClick={(e) => {
            e.stopPropagation()
            ClickEvent(id)
          }}
        />
        <span>{name}</span>
      </div>
    </>
  )
}
