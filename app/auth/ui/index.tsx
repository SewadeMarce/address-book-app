import { Sparkles } from "lucide-react"

export const Floating = () => {
    return (
        <>
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
        </>
    )
}
export const MobileHeader = () => {
    return (
        <>
            <div style={{
                padding: '40px 24px 30px', textAlign: 'center', position: 'relative', zIndex: 1, animation: 'slideInUp 0.7s ease-out'
            }}>
                <div style={{
                    width: '72px', height: '72px', borderRadius: '24px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 40px rgba(102,126,234,0.4)', animation: 'float 6s ease-in-out infinite'
                }}>
                    <Sparkles size={36} color="white" strokeWidth={1.5} />
                </div>
                <h1 style={{
                    fontSize: '32px', fontWeight: '400', margin: '0 0 10px 0',
                    color: '#2d2d2d', lineHeight: '1.2', letterSpacing: '-0.02em'
                }}>
                    Gérez vos contacts{' '}
                    <span className="shimmer-text">avec élégance</span>
                </h1>
                <p style={{
                    fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#666',
                    lineHeight: '1.7', fontWeight: '300', margin: '0', maxWidth: '420px',
                    marginLeft: 'auto', marginRight: 'auto'
                }}>
                    Une expérience moderne et intuitive pour organiser tous vos contacts.
                </p>
            </div>
        </>
    )
}

export const DesktopPanel = () => {
    return (
        <>
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                padding: '80px', position: 'relative', zIndex: 1,
                animation: 'slideInLeft 0.8s ease-out'
            }}>
                <div style={{ maxWidth: '500px', textAlign: 'center' }}>
                    <div style={{
                        width: '120px', height: '120px', borderRadius: '40px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        margin: '0 auto 40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 20px 60px rgba(102,126,234,0.4)',
                        animation: 'float 6s ease-in-out infinite'
                    }}>
                        <Sparkles size={60} color="white" strokeWidth={1.5} />
                    </div>
                    <h1 style={{
                        fontSize: '56px', fontWeight: '400', margin: '0 0 20px 0',
                        color: '#2d2d2d', lineHeight: '1.2', letterSpacing: '-0.02em'
                    }}>
                        Gérez vos contacts{' '}
                        <span className="shimmer-text">avec élégance</span>
                    </h1>
                    <p style={{
                        fontFamily: '"Inter", sans-serif', fontSize: '18px', color: '#666',
                        lineHeight: '1.8', fontWeight: '300', margin: '0'
                    }}>
                        Une expérience moderne et intuitive pour organiser tous vos contacts professionnels et personnels en un seul endroit.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '60px', opacity: 0.6 }}>
                        {[
                            'linear-gradient(135deg, #FF6B9D 0%, #ff8fab 100%)',
                            'linear-gradient(135deg, #4ECDC4 0%, #44a08d 100%)',
                            'linear-gradient(135deg, #FFD93D 0%, #ffc107 100%)'
                        ].map((bg, i) => (
                            <div key={i} style={{
                                width: '60px', height: '60px', borderRadius: '50%', background: bg,
                                animation: `float 4s ease-in-out infinite`,
                                animationDelay: `${i * 0.5}s`
                            }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}