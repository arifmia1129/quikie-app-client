import { useQuery } from "react-query"

const useSavedStock = () => {
    const { isLoading, data: savedStock, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/stock').then(res =>
            res.json()
        )
    )
    return [savedStock, isLoading, refetch]
}

export default useSavedStock;