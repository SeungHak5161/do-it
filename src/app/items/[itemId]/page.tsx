'use client'
import { getTodoDetail } from '@/apis/apis'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import './page.scss'

export default function page({ params }: { params: { itemId: string } }) {
  const [todoDetail, setTodoDetail] = useState<ITodoDetail>({
    id: '',
    isCompleted: false,
    name: '',
    imageUrl: '',
    memo: '',
    tenantId: '',
  })
  const { id, isCompleted, name, imageUrl, memo, tenantId } = todoDetail

  const memoRef = useRef<HTMLTextAreaElement>(null)

  const changeTodoState = async () => {
    try {
      console.log(todoDetail)
      // await updateTodo(id, {, isCompleted: !props.isCompleted })
    } catch (err) {
      alert('Todo 상태 변경에 실패했습니다.')
      console.log(err)
    }
  }

  const getDetail = async () => {
    try {
      const res = await getTodoDetail(params.itemId)
      if (memoRef.current) memoRef.current.value = res.data.memo
      setTodoDetail(res.data)
    } catch (err) {
      alert('Todo 상세 조회에 실패했습니다.')
      console.log(err)
    }
  }
  useEffect(() => {
    getDetail()
  }, [])

  return (
    <>
      <div id="pageWrapper">
        <div id="nameWrapper">
          <Image
            className="todoItemIcon"
            src={isCompleted ? '/icons/done.svg' : '/icons/undo.svg'}
            alt={isCompleted ? 'done' : 'undo'}
            width={32}
            height={32}
            onClick={() => changeTodoState}
          />
          <span className="font-bold">{name}</span>
        </div>
        <div id="todoListWrapper">
          <div id="imgWrapper"></div>
          <div id="memoWrapper">
            <div id="titleWrapper">
              <span>Memo</span>
            </div>
            <textarea name="memo" id="memo" ref={memoRef} />
          </div>
        </div>
        <div id="buttonWrapper">
          <Button
            text="수정완료"
            color="#E2E8F0"
            img="/icons/check.svg"
            onClick={() => {
              return null
            }}
          />
          <Button
            text="삭제하기"
            color="#F43F5E"
            textColor="#fff"
            img="/icons/X.svg"
            onClick={() => {
              return null
            }}
          />
        </div>
      </div>
    </>
  )
}
