import { useState } from 'react';
import axios from 'axios';

interface FetchState<T> {
    isLoading: boolean;
    data: T | null;
    error: Error | null;
}

function useFetch<T>(): [FetchState<T>, (url: string) => void] {
    const [state, setState] = useState<FetchState<T>>({
        isLoading: true,
        data: null,
        error: null,
    });
   

    const fetchData = async(url: string) => {
      await axios
            .get(url)
            .then((response) => {
                
                setState({
                    isLoading: false,
                    data: response.data,
                    error: null,
                });
            })
            .catch((error) => {
                setState({
                    isLoading: false,
                    data: null,
                    error,
                });
            });
    };

    return [state, fetchData];
}

export default useFetch;
