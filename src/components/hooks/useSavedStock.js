import { useQuery } from "react-query"

const useSavedStock = () => {
    const { isLoading, data, refetch } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )
    return [data, isLoading, refetch]
}

export default useSavedStock;