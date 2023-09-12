import axios from './../http-common'

const addRequest = async (news_url: string) => {
    try {
        let response = await axios.post('/article/info', { news_url: news_url })
        console.log(response)
        return await response.data
    } catch (error) {
        console.log('[> Error]', error)
    }
}

const getAllHistory = async () => {
    try {
        const response = await axios.get('/history/getAll')
        return response.data
    } catch (error) {
        console.log('[> Error]', error)
    }
}

const getHistoryById = async (id: string) => {
    if (id == undefined) return []
    try {
        const response = await axios.get(`/history/${id}`)
        return response.data
    } catch (error) {
        console.log('[> Error]', error)
    }
}
export default { addRequest, getAllHistory, getHistoryById }
