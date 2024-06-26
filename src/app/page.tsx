'use client'
import { getTodoList, postTodo } from '@/apis/apis'
import Button from '@/components/Button/Button'
import { useEffect, useRef, useState } from 'react'
import './page.scss'

export default function Home() {
  const [todoList, setTodoList] = useState<ITodoSimple[]>([])

  const inputRef = useRef<HTMLInputElement>(null)
  /** 입력값이 존재한다면 등록하고 초기화 */
  const createTodo = async () => {
    const todo = inputRef.current?.value
    if (!todo || todo.trim() === '') {
      alert('Todo를 작성해주세요.')
      return
    }
    try {
      const params: IPostTodo = {
        name: todo,
      }
      await postTodo(params)
      inputRef.current.value = ''
    } catch (err) {
      alert('Todo 등록에 실패했습니다.')
      console.log(err)
    }
  }

  /** TodoList 조회 후 저장 */
  const getList = async () => {
    try {
      const res = await getTodoList()
      console.log(res.data)
      setTodoList(res.data)
    } catch (err) {
      alert('Todo list 호출에 실패했습니다.')
      console.log(err)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <div id="pageWrapper">
        <div id="inputWrapper">
          <input
            type="text"
            name="inputTodo"
            id="inputTodo"
            ref={inputRef}
            placeholder="할 일을 입력해주세요"
            onKeyDown={(e) => e.key === 'Enter' && createTodo()}
          />
          <Button
            text="추가하기"
            color="#e2e8f0"
            img="/icons/plus.svg"
            onClick={createTodo}
          />
        </div>
      </div>
    </>
  )
}
