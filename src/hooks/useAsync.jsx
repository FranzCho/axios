import { useEffect, useState } from 'react'

function useAsync(callback) {
    // 데이터, 에러, 로딩을 저장하는 state 작성
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // 요청보내는 함수 (로딩, 에러, 데이터를 set)
    const fetchData = async () => {
        try {
            setIsLoading(true)
            const responseData = await callback()
            setData(responseData)
        } catch (err) {
            setError(err)
        }
        setIsLoading(false)
    }

    // 이 함수를 실행하면 아래 코드가 실행됨
    useEffect(() => {
        fetchData()
    }, [])

    // 데이터, 에러, 로딩을 한번에 리턴
    return { data, isLoading, error }
}

export default useAsync