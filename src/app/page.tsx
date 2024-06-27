'use client'
import { getTodoList, postTodo, updateTodo } from '@/apis/apis'
import Button from '@/components/Button/Button'
import TodoItem from '@/components/TodoItem/TodoItem'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import './page.scss'

export default function Home() {
  const [todoList, setTodoList] = useState<ITodoSimple[]>([])
  const [sizeOptimize, setSizeOptimize] = useState<any>({
    addBtnText: '추가하기',
    addBtnColor: '#e2e8f0',
    noDataImgSize: '240',
  })

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
      getList()
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

  /** Todo 아이템 완료 여부 변경 */
  const changeStateTodoItem = async (id: string) => {
    try {
      const updateTarget: ITodoSimple | undefined = todoList.find(
        (todo) => todo.id === id,
      )
      if (updateTarget) {
        const { id, ...props } = updateTarget
        await updateTodo(id, { ...props, isCompleted: !props.isCompleted })
        getList()
      }
    } catch (err) {
      alert('Todo 상태 변경에 실패했습니다.')
      console.log(err)
    }
  }

  useEffect(() => {
    // todo list 조회
    getList()

    // 화면 너비 변경에 따라 버튼 텍스트 변경
    const resizeEvent = () => {
      if (window.innerWidth > 375)
        setSizeOptimize({
          addBtnText: '추가하기',
          addBtnColor: '#e2e8f0',
          noDataImgSize: '240',
        })
      else
        setSizeOptimize({
          addBtnText: '',
          addBtnColor: '#7C3AED',
          noDataImgSize: '120',
        })
    }
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
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
            text={sizeOptimize.addBtnText}
            color={sizeOptimize.addBtnColor}
            img="/icons/plus.svg"
            onClick={createTodo}
          />
        </div>

        <div id="todoWrapper">
          <div id="undo">
            <Image src="/images/todo.svg" alt="to do" width={101} height={36} />
            {todoList.filter((todo) => !todo.isCompleted)?.length === 0 && (
              <div className="noData">
                <Image
                  src="/images/emptyTodo.svg"
                  alt="no todo"
                  width={sizeOptimize.noDataImgSize}
                  height={sizeOptimize.noDataImgSize}
                ></Image>
                <span>할 일이 없어요.</span>
                <span>TODO를 새롭게 추가해주세요!</span>
              </div>
            )}
            {todoList
              .filter((todo) => !todo.isCompleted)
              .map((todo) => {
                return (
                  <TodoItem
                    ClickEvent={changeStateTodoItem}
                    props={todo}
                    key={todo.id}
                  />
                )
              })}
          </div>
          <div id="done">
            <Image src="/images/done.svg" alt="to do" width={97} height={36} />
            {todoList.filter((todo) => todo.isCompleted)?.length === 0 && (
              <div className="noData">
                <Image
                  src="/images/emptyDone.svg"
                  alt="no done"
                  width={sizeOptimize.noDataImgSize}
                  height={sizeOptimize.noDataImgSize}
                ></Image>
                <span>아직 다 한 일이 없어요.</span>
                <span>해야 할 일을 체크해보세요!</span>
              </div>
            )}
            {todoList
              .filter((todo) => todo.isCompleted)
              .map((todo) => {
                return (
                  <TodoItem
                    ClickEvent={changeStateTodoItem}
                    props={todo}
                    key={todo.id}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
