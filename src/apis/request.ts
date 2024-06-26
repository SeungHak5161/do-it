import axios from 'axios'
import setResponse from './setResponse'

// 고유 식별 id, 프로젝트 규모상 따로 환경변수로 관리하지 않음
const tenantId = 'shbaek0923'
// axios instance 생성
const service = axios.create({
  baseURL: `https://assignment-todolist-api.vercel.app/api/${tenantId}`,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
})

setResponse(service)

export default service
