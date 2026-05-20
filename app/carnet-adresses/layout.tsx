import { Outlet, redirect, useLoaderData, useParams } from "react-router";
import Header from "./ui/header";
import ContactList from "./ui/contact-liste";
import type { LoaderFunctionArgs } from "react-router";
import { getTotalContacts } from "~/lib/utils";
import type { DefaultTimestampProps, Document, Types } from "mongoose";
import { useMobile } from "~/hooks/useHoohs";
import type { Route } from "./+types/layout";


type ContactType = {
    _id?: Types.ObjectId | string;
    userId?: Types.ObjectId;
    name: string;
    emails: string;
    favorite: boolean;
    color: string;
    phones: string | null | undefined;
    addresses: string | null | undefined;
    initials?: string | null | undefined;
}
export async function loader({ request, context }: LoaderFunctionArgs) {

    const user = context.user;
    if (!user) {
        throw redirect("/auth");
    }
    return user
}

export async function clientLoader({
    serverLoader,
    request,
}: Route.ClientLoaderArgs) {




    const url = new URL(request.url);
    const q = url.searchParams.get('q') || "";

    const user = await serverLoader();
    const response = await fetch('/api/contacts/search/' + user.id + '?q=' + q);

    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    const resultats = await response.json();
    const contacts = resultats.contacts as ContactType[];
    const favoriteContacts = contacts?.filter((c: ContactType) => c.favorite);
    const regularContacts = contacts?.filter((c: ContactType) => !c.favorite);
    const totalContacts = getTotalContacts(contacts)
  
    return {
        user,
        filteredContacts: contacts,
        favoriteContacts,
        regularContacts,
        totalContacts

    }
}

export default function Layout() {
    const { isMobile } = useMobile()

    const  {
        user,
        filteredContacts,
        favoriteContacts,
        regularContacts,
        totalContacts

    } = useLoaderData();
    
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #fdfbfb 0%, #f7f4f9 50%, #fef9f8 100%)',
                fontFamily: '"Instrument Serif", serif',
            }}>

            {/* Header */}
            <Header totalContacts={totalContacts} />
            {/* Main Content */}

            <div
                style={{
                    maxWidth: '1400px', margin: '0 auto',
                    padding: isMobile ? '20px 16px' : '40px 60px',
                    display: isMobile ? 'block' : 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: '30px',
                    alignItems: 'start'
                }}>

                {/* Left Panel - Contact List */}
                <ContactList filteredContacts={filteredContacts} favoriteContacts={favoriteContacts} regularContacts={regularContacts} />

                {/* Right Panel - Contact Detail */}
                <Outlet />

            </div>

           
        </div>
    );
};

