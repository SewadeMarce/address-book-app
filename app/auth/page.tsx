import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import { Form, useActionData, useNavigation, useNavigate, type ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { useMobile } from '~/hooks/useHoohs';

const step = ['Connexion', 'Inscription'];


export async function clientAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const isLogin = formData.get('condition') === 'true';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const username = formData.get('username') as string;

  try {
    if (isLogin) {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });


      if (!response.ok) {
        const error = await response.json();
        return { error: error.error || 'Erreur de connexion' };
      }

      const userData = await response.json();
      return { success: true, user: userData, redirectTo: '/carnet-adresses' };
    } else {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return { error: error.error || 'Erreur d\'inscription' };
      }

      const userData = await response.json();
      return { success: true, user: userData, redirectTo: '/carnet-adresses' };
    }
  } catch (error) {
    console.error('Auth error:', error);
    return { error: 'Erreur réseau. Veuillez réessayer.' };
  }
}

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<null | 'name' | 'email' | 'password'>(null);
  const { isMobile } = useMobile();

  const actionData = useActionData<typeof clientAction>();
  const navigation = useNavigation();
  const navigate = useNavigate();


  useEffect(() => {
    if (actionData?.success && actionData.user) {
      // Store user in localStorage and redirect
      // navigate(actionData.redirectTo || '/carnet-adresses', { replace: true });
      setIsLogin(!isLogin)
    }
  }, [actionData, navigate]);

  const isSubmitting = navigation.state === 'submitting';

  return (
    <div style={{
      width: '100%', maxWidth: '480px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', borderRadius: isMobile ? '36px' : '50px', padding: isMobile ? '36px 24px' : '60px', boxShadow: '0 30px 90px rgba(0,0,0,0.10)', border: '1px solid rgba(255,255,255,0.8)', animation: isMobile ? 'slideInUp 0.8s ease-out 0.2s both' : 'slideInRight 0.8s ease-out'
    }}>
      {/* Error Message */}
      {actionData?.error && (
        <div style={{
          background: '#fee',
          border: '1px solid #fcc',
          color: '#c33',
          padding: '12px 16px',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          {actionData.error}
        </div>
      )}

      {/* Toggle Buttons */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', justifyContent: 'center' }}>
        {step.map((label, i) => {
          const active = i === 0 ? isLogin : !isLogin;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setIsLogin(i === 0)}
              className={`toggle-button ${active ? 'active' : ''}`}
              style={{
                background: 'transparent', border: 'none', fontSize: isMobile ? '20px' : '24px', fontFamily: '"Instrument Serif", serif', color: active ? '#2d2d2d' : '#aaa', cursor: 'pointer', padding: '10px 0', fontWeight: '400', transition: 'all 0.3s ease'
              }}
            >{label}</button>
          );
        })}
      </div>

      <Form method="post" >
        {/* Name Field */}
        {!isLogin && (
          <div className="input-container" style={{ marginBottom: '20px', animation: 'scaleIn 0.3s ease-out' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: '600', color: '#2d2d2d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nom complet</label>
            <div style={{ position: 'relative' }}>
              <div className="icon-wrapper" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: focusedField === 'name' ? '#667eea' : '#aaa', zIndex: 1 }}>
                <User size={18} />
              </div>
              <input
                name="username"
                type="text"
                defaultValue=""
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="input-field"
                style={{ width: '100%', padding: '16px 18px 16px 50px', border: `2px solid ${focusedField === 'name' ? '#667eea' : '#f0f0f0'}`, borderRadius: '22px', fontSize: '15px', fontFamily: '"Inter", sans-serif', outline: 'none', background: 'white' }}
                placeholder="Votre nom"
                required={!isLogin}
              />
            </div>
          </div>
        )}

        {/* Email Field */}
        <div className="input-container" style={{ marginBottom: '20px', animation: `scaleIn 0.3s ease-out ${!isLogin ? '0.1s' : '0s'} both` }}>
          <label style={{ display: 'block', marginBottom: '10px', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: '600', color: '#2d2d2d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</label>
          <div style={{ position: 'relative' }}>
            <div className="icon-wrapper" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: focusedField === 'email' ? '#667eea' : '#aaa', zIndex: 1 }}>
              <Mail size={18} />
            </div>
            <input
              name="email"
              defaultValue="" onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
              className="input-field"
              style={{ width: '100%', padding: '16px 18px 16px 50px', border: `2px solid ${focusedField === 'email' ? '#667eea' : '#f0f0f0'}`, borderRadius: '22px', fontSize: '15px', fontFamily: '"Inter", sans-serif', outline: 'none', background: 'white' }}
              placeholder="votre@email.fr"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="input-container" style={{ marginBottom: '28px', animation: `scaleIn 0.3s ease-out ${!isLogin ? '0.2s' : '0.1s'} both` }}>
          <label style={{ display: 'block', marginBottom: '10px', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: '600', color: '#2d2d2d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Mot de passe</label>
          <div style={{ position: 'relative' }}>
            <div className="icon-wrapper" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: focusedField === 'password' ? '#667eea' : '#aaa', zIndex: 1 }}>
              <Lock size={18} />
            </div>
            <input
              name="password"
              defaultValue="" onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)}
              className="input-field"
              style={{ width: '100%', padding: '16px 50px 16px 50px', border: `2px solid ${focusedField === 'password' ? '#667eea' : '#f0f0f0'}`, borderRadius: '22px', fontSize: '15px', fontFamily: '"Inter", sans-serif', outline: 'none', background: 'white' }}
              placeholder="••••••••"
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', color: '#aaa', padding: '5px', display: 'flex', alignItems: 'center', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#aaa'}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        {isLogin && (
          <div style={{ marginBottom: '28px', textAlign: 'right', animation: 'fadeIn 0.3s ease-out 0.2s both' }}>
            <button type="button" style={{ background: 'transparent', border: 'none', color: '#667eea', fontFamily: '"Inter", sans-serif', fontSize: '14px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
              Mot de passe oublié ?
            </button>
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={isSubmitting} className="button" style={{ width: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', padding: '18px', borderRadius: '28px', fontSize: '16px', fontFamily: '"Inter", sans-serif', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 12px 35px rgba(102,126,234,0.4)', marginBottom: '24px', animation: 'scaleIn 0.3s ease-out 0.3s both', opacity: isSubmitting ? 0.7 : 1 }}>
          {isSubmitting ? 'Chargement...' : (isLogin ? 'Se connecter' : 'Créer mon compte')}
          {!isSubmitting && <ArrowRight size={18} />}
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', animation: 'fadeIn 0.3s ease-out 0.4s both' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)' }}></div>
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#aaa', fontWeight: '500' }}>OU</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)' }}></div>
        </div>

        <input type="hidden" name="condition" value={`${isLogin}`} />
      </Form>

      <p style={{ textAlign: 'center', marginTop: '28px', fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#888', lineHeight: '1.6', animation: 'fadeIn 0.3s ease-out 0.6s both' }}>
        {isLogin ? "Vous n'avez pas de compte ? " : "Vous avez déjà un compte ? "}
        <button style={{ background: 'transparent', border: 'none', color: '#667eea', cursor: 'pointer', fontWeight: '600', fontSize: '13px', fontFamily: '"Inter", sans-serif', transition: 'all 0.3s ease' }}
          onClick={() => setIsLogin(!isLogin)}
          onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
          {isLogin ? 'Créez-en un' : 'Connectez-vous'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;