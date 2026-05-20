import { redirect, useLoaderData, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import DetailCard from "../ui/detail-panel";
import { useMobile } from "~/hooks/useHoohs";

export async function clientLoader({ params }: LoaderFunctionArgs) {
    const id = params.id as string;

    const response = await fetch('/api/contacts/' + id);

    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    const { contact } = await response.json();
    if (!contact) throw new Response('contact non trouvé', { status: 404 });

    return contact
}
export async function clientAction({ params, request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const id = params.id as string;
    const condition = formData.get('condition');

    if (condition === 'delete') {
        const response = await fetch('/api/contacts/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }


        throw redirect('/carnet-adresses')
    }
    if (condition === 'favorite') {
        const favorite = formData.get('favorite') === 'true'
        console.log({ favorite });
        //        const res = await contactsStore.pushFavorite(id, { favorite: !favorite })
        const response = await fetch('/api/contacts/favorite/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ favorite: !favorite }),

        });

        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
    }


}
export default function Page() {
    const contact = useLoaderData()
    const { isMobile, mobileView } = useMobile()
    return <>
        {
            (!isMobile || mobileView === 'detail') && (
                <div
                    style={{
                        background: 'white', borderRadius: '30px',
                        padding: isMobile ? '25px 20px' : '50px',
                        boxShadow: '0 10px 50px rgba(0,0,0,0.06)',
                        minHeight: isMobile ? 'auto' : '500px',
                        animation: 'fadeInUp 0.6s ease-out 0.2s both'
                    }}>
                    <DetailCard c={contact} />
                </div>
            )
        }

    </>

};
