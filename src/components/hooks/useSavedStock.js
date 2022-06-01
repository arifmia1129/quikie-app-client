import { useQuery } from "react-query"

const useSavedStock = () => {
    const { isLoading, data: savedStock, refetch } = useQuery('repoData', () =>
        fetch('https://quikie-app.herokuapp.com/stock').then(res =>
            res.json()
        )
    )
    return [savedStock, isLoading, refetch]
}

export default useSavedStock;