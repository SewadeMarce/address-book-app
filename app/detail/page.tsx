export default function Page() {
  return (
    <main
      style={{
        maxWidth: '990px',
        margin: '0 auto',
        padding: '40px 20px',
        background: 'white',
        borderRadius: '32px',
        boxShadow: '0 20px 60px rgba(15, 23, 42, 0.12)',
        fontFamily: 'Inter, sans-serif',
        color: '#1f2937',
        lineHeight: 1.75,
      }}
    >
        
      <header style={{ marginBottom: '36px' }}>
        <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#4b5563', margin: 0 }}>
          Documentation
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '16px 0 0 0', color: '#111827' }}>
          Address Book App
        </h1>
      </header>


      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#111827' }}>Aperçu</h2>
        <img
          src="/address-book.png"
          alt="Address Book App"
          style={{
            width: '100%',
            maxWidth: '720px',
            display: 'block',
            margin: '20px 0',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          }}
        />
        <p>
          Une application de carnet d'adresses fullstack basée sur <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>React Router v7</strong>, <strong>Express</strong> et <strong>MongoDB</strong>.
          Elle propose une interface moderne pour gérer des contacts, ainsi qu'une API sécurisée pour l'authentification et le stockage.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#111827' }}>Fonctionnalités</h2>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#374151' }}>
          <li>Inscription et connexion utilisateur</li>
          <li>Ajout, modification et suppression de contacts</li>
          <li>Recherche de contacts et navigation par listes</li>
          <li>Marquage des contacts comme favoris</li>
          <li>Authentification JWT protégée par cookie</li>
          <li>Responsive design pour bureau et mobile</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#111827' }}>Installation</h2>
        <p>Cloner le dépôt, installer les dépendances et créer le fichier de configuration d'environnement :</p>
        <pre
          style={{
            background: '#f3f4f6',
            padding: '18px',
            borderRadius: '16px',
            overflowX: 'auto',
            fontSize: '0.95rem',
            color: '#111827',
          }}
        >
          git clone &lt;URL_DU_DÉPÔT&gt;
          <br />
          cd address-book-app
          <br />
          npm install
        </pre>
        <p style={{ marginTop: '16px' }}>Créer un fichier <code>.env</code> à la racine :</p>
        <pre
          style={{
            background: '#f3f4f6',
            padding: '18px',
            borderRadius: '16px',
            overflowX: 'auto',
            fontSize: '0.95rem',
            color: '#111827',
          }}
        >
          MONGODB_URI=mongodb://localhost:27017/addressbook
          <br />
          JWT_SECRET=une_cle_secrete_pour_la_signature_jwt
          <br />
          JWT_EXPIRY=7d
          <br />
          COOKIE_EXPIRY=604800000
          <br />
          PORT=5000
        </pre>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#111827' }}>Scripts</h2>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#374151' }}>
          <li><code>npm run dev</code> : démarre l'application en développement</li>
          <li><code>npm run build</code> : génère le build de production</li>
          <li><code>npm start</code> : démarre le serveur de production</li>
          <li><code>npm run typecheck</code> : vérifie les types TypeScript</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#111827' }}>API</h2>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#374151' }}>
          <li><code>POST /api/auth/register</code> : inscription</li>
          <li><code>POST /api/auth/login</code> : connexion</li>
          <li><code>POST /api/auth/logout</code> : déconnexion</li>
          <li><code>GET /api/auth/profile/:id</code> : profil utilisateur</li>
          <li><code>GET /api/contacts/search/:id</code> : recherche de contacts</li>
          <li><code>GET /api/contacts/:id</code> : détails d'un contact</li>
          <li><code>PUT /api/contacts/favorite/:id</code> : mise à jour favori</li>
          <li><code>PUT /api/contacts/:id</code> : mise à jour d'un contact</li>
          <li><code>DELETE /api/contacts/:id</code> : suppression d'un contact</li>
          <li><code>POST /api/contacts/create</code> : création d'un contact</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#111827' }}>Notes</h2>
        <p style={{ marginBottom: '0' }}>
          Cette page est conçue comme un guide de présentation de l'application. Elle peut être utilisée pour afficher une documentation interne ou un mode d'emploi directement depuis l'application.
        </p>
      </section>
    </main>
  );
}
