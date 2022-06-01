import { useQuery } from "react-query"

const useSavedStock = () => {
    const { isLoading, data: SavedStock, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/stock').then(res =>
            res.json()
        )
    )
    return [SavedStock, isLoading, refetch]
}

export default useSavedStock;