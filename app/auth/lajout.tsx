import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import { Form, useActionData, useNavigation, useNavigate, type ActionFunctionArgs, Outlet } from 'react-router';
import { redirect } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { useMobile } from '~/hooks/useHoohs';
import { DesktopPanel, Floating, MobileHeader } from './ui';

export async function loader({ request, context }: LoaderFunctionArgs) {

    const user = context.user;
    if (user) {
        throw redirect("/carnet-adresses");
    }
}


export default function Layout() {
    const { isMobile } = useMobile();


    return (
        <div style={{
            minHeight: '100vh', display: 'flex', flexDirection: isMobile ? 'column' : 'row', fontFamily: '"Instrument Serif", serif', background: 'linear-gradient(135deg, #fdfbfb 0%, #f7f4f9 50%, #fef9f8 100%)', position: 'relative', overflow: 'hidden'
        }}>
          <Floating />
            {/* Left Panel - shown on desktop, condensed header on mobile */}
            {isMobile ? (
                /* Mobile top header strip */
               <MobileHeader />
            ) : (
                /* Desktop left panel */
                <DesktopPanel />
            )}

            {/* Right Panel - Auth Form */}
            <div style={{
                flex: isMobile ? 'none' : 1, display: 'flex', flexDirection: 'column', justifyContent: isMobile ? 'flex-start' : 'center', alignItems: 'center', padding: isMobile ? '0 16px 40px' : '80px', position: 'relative', zIndex: 1
            }}>
               <Outlet />
            </div>
        </div>
    );
};

