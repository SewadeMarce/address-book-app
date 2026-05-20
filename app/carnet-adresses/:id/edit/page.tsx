import { redirect, useLoaderData, useNavigate, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { useMobile } from "~/hooks/useHoohs";
import ModificationCard from "~/carnet-adresses/ui/modification-card";
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

    const data = {
        
        name: formData.get('username') as string,
        emails: formData.get('email') as string,
        favorite: formData.get('favorite') === 'true',
        color: formData.get('color') as string,
        phones: formData.get('phone') as string,
        addresses: formData.get('address') as string,
        initials: formData.get('initials') as string,
    }

    const response = await fetch('/api/contacts/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),

    });

    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }

    return redirect(`/carnet-adresses/${id}`)
}
export default function Page() {
    const contact = useLoaderData()
    const navigate = useNavigate()
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
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', marginBottom: '30px'
                    }}>
                        <h2 style={{
                            fontSize: isMobile ? '26px' : '32px', fontWeight: '400',
                            margin: 0, fontFamily: '"Instrument Serif", serif', color: '#2d2d2d'
                        }}>
                            {'Modifier le contact'}
                        </h2>
                        <button
                            onClick={() => navigate(-1)}
                            className="button" style={{
                                background: 'transparent', border: 'none', cursor: 'pointer',
                                padding: '8px', color: '#aaa'
                            }}>
                            <X size={24} />
                        </button>
                    </div>
                    <ModificationCard c={contact} />
                </div>
            )
        }

    </>

};
