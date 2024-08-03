import { useState, useCallback } from 'react';

export const useGetDataList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getDataList = useCallback(async (skip: number, limit: number) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/work?skip=${skip}&limit=${limit}`);
            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }
            const data = await res.json();
            console.log("====",data);
            return data;
        } catch (err) {
            setError((err as Error).message);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    return { getDataList, loading, error };
};
