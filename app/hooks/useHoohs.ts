import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { getTotalContacts } from "~/lib/utils";
import type { ContactType } from "~/types";

export const useMobile = () => {

    const [isMobile, setIsMobile] = useState(false);

    // 'list' | 'detail'
    const params = useParams();
    const mobileView = params.id ? 'detail' : 'list'
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return {

        id: params.id,
        isMobile,
        setIsMobile,
        mobileView
    }
}


export function useLoader(id: string) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState<ContactType[]>([]);
    const q = searchParams.get('q') || "";
    async function loader() {
        const response = await fetch('/api/contacts/search/' + id + '?q=' + q);

        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        const resultats = await response.json();
        const contacts = resultats.contacts as ContactType[];
        setData(contacts)

    }
    useEffect(() => {
        console.log({ q });
      //  loader()
    }, [id, q])
    return {
        filteredContacts: data,
        favoriteContacts: data?.filter((c: ContactType) => c.favorite),
        regularContacts: data?.filter((c: ContactType) => !c.favorite),
        totalContacts: getTotalContacts(data),

    }
}
