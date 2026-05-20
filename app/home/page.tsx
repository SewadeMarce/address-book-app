import { ArrowRight, Heart, Plus, Search, Sparkles, Star } from "lucide-react";
import { Link } from "react-router";

export default function Home() {

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }} className="hero-padding">
      <div className="floating-shape" style={{ width: '600px', height: '600px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', top: '-200px', right: '-150px', animation: 'float 20s ease-in-out infinite' }}></div>
      <div className="floating-shape" style={{ width: '500px', height: '500px', background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)', bottom: '-150px', left: '-100px', animation: 'floatReverse 15s ease-in-out infinite' }}></div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="hero-grid">
        {/* Left / Main Content */}
        <div style={{ animation: 'slideInLeft 0.8s ease-out' }}>
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #f8f9ff 0%, #fff5f8 100%)', border: '2px solid #667eea', borderRadius: '50px', padding: '8px 18px', marginBottom: '24px', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: '600', color: '#667eea', animation: 'scaleIn 0.6s ease-out 0.3s both' }}>
            ✨ Nouveau: Synchronisation automatique
          </div>

          <h1 className="hero-title" style={{ fontWeight: '400', lineHeight: '1.1', margin: '0 0 24px 0', color: '#2d2d2d', letterSpacing: '-0.03em' }}>
            Gérez vos contacts avec{' '}
            <span className="shimmer-text">style</span>
          </h1>

          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: '#666', lineHeight: '1.7', margin: '0 0 40px 0', fontWeight: '300', maxWidth: '540px' }}>
            L'application de carnet d'adresses la plus élégante et intuitive. Organisez, synchronisez et accédez à vos contacts depuis n'importe où.
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: '15px' }}>
            <Link to={'/carnet-adresses'} className="button" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', padding: '16px 32px', borderRadius: '35px', fontSize: '16px', fontFamily: '"Inter", sans-serif', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 12px 35px rgba(102,126,234,0.4)' }}>
              Commencer gratuitement <ArrowRight size={18} />
            </Link>
            <Link to='/detail' className="button" style={{ background: 'white', color: '#2d2d2d', border: '2px solid #e0e0e0', padding: '16px 32px', borderRadius: '35px', fontSize: '16px', fontFamily: '"Inter", sans-serif', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              Voir la Détaile <Sparkles size={18} />
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '40px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#ffd93d" color="#ffd93d" />)}
              <span style={{ marginLeft: '5px', color: '#2d2d2d', fontWeight: '600' }}>4.9/5</span>
            </div>
            <div>10,000+ utilisateurs satisfaits</div>
          </div>
        </div>

        {/* Right Mockup - hidden on mobile */}
        <div className="hero-mockup" style={{ position: 'relative', animation: 'slideInLeft 0.8s ease-out' }}>
          <div style={{ background: 'white', borderRadius: '40px', padding: '35px', boxShadow: '0 40px 100px rgba(0,0,0,0.15)', transform: 'perspective(1000px) rotateY(-5deg)', animation: 'float 6s ease-in-out infinite' }}>
            {[
              { name: 'Sophie Martin', phone: '+33 6 12 34 56 78', color: '#ff6b9d', initials: 'SM' },
              { name: 'Alexandre Dubois', phone: '+33 6 98 76 54 32', color: '#4ecdc4', initials: 'AD' },
              { name: 'Marie Laurent', phone: '+33 7 11 22 33 44', color: '#ffd93d', initials: 'ML' }
            ].map((contact, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '18px', background: index === 0 ? 'linear-gradient(135deg, #f8f9ff 0%, #fff5f8 100%)' : 'transparent', border: index === 0 ? '2px solid #667eea' : '2px solid transparent', borderRadius: '22px', marginBottom: '12px', animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both` }}>
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: contact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: '17px', flexShrink: 0 }}>{contact.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '500', fontSize: '17px', color: '#2d2d2d', marginBottom: '4px', fontFamily: '"Instrument Serif", serif' }}>{contact.name}</div>
                  <div style={{ fontSize: '13px', color: '#888', fontFamily: '"Inter", sans-serif' }}>{contact.phone}</div>
                </div>
                {index === 0 && <Heart size={18} fill="#ff6b9d" color="#ff6b9d" />}
              </div>
            ))}
          </div>
          <div style={{ position: 'absolute', top: '-25px', right: '-25px', width: '85px', height: '85px', borderRadius: '25px', background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 50px rgba(255,107,157,0.4)', animation: 'pulse 3s ease-in-out infinite' }}>
            <Plus size={35} color="white" strokeWidth={3} />
          </div>
          <div style={{ position: 'absolute', bottom: '-25px', left: '-25px', width: '85px', height: '85px', borderRadius: '25px', background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 50px rgba(78,205,196,0.4)', animation: 'pulse 3s ease-in-out infinite 1.5s' }}>
            <Search size={35} color="white" strokeWidth={3} />
          </div>
        </div>
      </div>
    </section>
  )
}