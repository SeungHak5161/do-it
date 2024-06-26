/** 항목 등록 */
interface IPostTodo {
  name: string
}

/** 항목 조회(목록 조회 시) */
interface ITodoSimple {
  id: number
  isComplete: boolean
  name: string
}

/** 항목 상세 조회 */
interface ITodoDetail extends ITodoSimple {
  imageUrl: string
  memo: string
  tenantId: string
}

/** 항목 수정 */
interface IUpdateTodo {
  name: string
  memo: string
  imageUrl: string
  isComplete: boolean
}

/** 이미지 업로드 */
interface IUploadImage {
  image: string
}
