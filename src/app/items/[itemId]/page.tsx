'use client'
import { deleteTodo, getTodoDetail, updateTodo } from '@/apis/apis'
import Button from '@/components/Button/Button'
import { checkFileSize } from '@/utils/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
  const { id, isCompleted, name, imageUrl } = todoDetail

  const router = useRouter()

  const memoRef = useRef<HTMLTextAreaElement>(null)

  const changeTodoState = async (changeCompleted?: boolean) => {
    try {
      const params: IUpdateTodo = {
        name: name,
        isCompleted: isCompleted,
      }
      if (changeCompleted !== undefined) {
        params.isCompleted = changeCompleted
      }
      if (memoRef.current) params.memo = memoRef.current.value
      if (imageUrl) params.imageUrl = imageUrl
      await updateTodo(id, params)
      getDetail()
    } catch (err) {
      alert('Todo 수정에 실패했습니다.')
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

  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0]
      // 파일이 없는 경우 return
      if (!file) return
      // 용량 제한
      if (!checkFileSize(file, 5)) {
        alert('파일 사이즈는 5MB 이하로 업로드 가능합니다.')
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = async () => {
        const image = reader.result as string
        // 이미지 업로드 api에서 에러가 발생하는데 원인을 찾을 수 없어서 우선 주석처리
        // try {
        //   const res = await uploadImage({ image: image })
        //   setTodoDetail({ ...todoDetail, imageUrl: res.data.url })
        // } catch (err) {
        //   alert('이미지 업로드에 실패했습니다.')
        //   console.log(err)
        // }
        setTodoDetail({ ...todoDetail, imageUrl: image })
      }
    } catch (err) {
      alert('이미지 업로드에 실패했습니다.')
      console.log(err)
    }
  }

  const deleteItem = async () => {
    try {
      await deleteTodo(id)
    } catch (err) {
      alert('Todo 삭제에 실패했습니다.')
      console.log(err)
    }
  }

  const handleActionThenRedirect = async (action: () => Promise<void>) => {
    action().then(() => {
      router.push('/')
    })
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
            onClick={() => {
              changeTodoState(!isCompleted)
            }}
          />
          <span className="font-bold">{name}</span>
        </div>
        <div id="todoListWrapper">
          <div id="imgWrapper">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={'todo image'}
                width={100}
                height={100}
                layout="responsive"
              />
            ) : (
              <Image
                src="/images/img.svg"
                alt="no image"
                width={54}
                height={54}
              />
            )}
            <div
              id="imgAddBtnWrapper"
              className={imageUrl ? 'editImg' : 'addImg'}
            >
              <label htmlFor="attachImg" id="attachImglabel">
                <input type="file" id="attachImg" onChange={onImageUpload} />
              </label>
              <Image
                id="addImg"
                src={imageUrl ? '/icons/edit.svg' : '/icons/plus.svg'}
                alt="add image"
                width={18}
                height={18}
              />
            </div>
          </div>
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
            onClick={() => handleActionThenRedirect(changeTodoState)}
          />
          <Button
            text="삭제하기"
            color="#F43F5E"
            textColor="#fff"
            img="/icons/X.svg"
            onClick={() => {
              handleActionThenRedirect(deleteItem)
            }}
          />
        </div>
      </div>
    </>
  )
}
