import service from './request'

/** 항목 목록 조회 */
export const getTodoList = () => {
  return service.get('/items')
}

/**
 * 항목 등록
 * @param data
 * @type IPostTodo
 */
export const postTodo = (data: IPostTodo) => {
  return service.post('/items', data)
}

/**
 * 항목 상세 조회
 * @param itemId
 * @type string
 */
export const getTodoDetail = (itemId: string) => {
  return service.get(`/items/${itemId}`)
}

/**
 * 항목 수정
 * @param itemId
 * @param data
 */
export const updateTodo = (itemId: string, data: IUpdateTodo) => {
  return service.patch(`/items/${itemId}`, data)
}
