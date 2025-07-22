import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <section className="py-5">
      <Head>
        <title>Wankar - Política de Privacidad</title>
        <meta name="description" content="Política de privacidad de Wankar" />
      </Head>
      <div className="container">
        <h1>Política de Privacidad</h1>
        <p>En Wankar respetamos tu privacidad. La información personal que recopilamos se utiliza únicamente para proveer y mejorar nuestros servicios. No compartimos tus datos con terceros salvo que sea necesario para operar nuestra plataforma o cumplir con obligaciones legales.</p>
        <p>Si te registras utilizando TikTok u otros proveedores, solo almacenamos los datos mínimos necesarios para autenticarte y brindarte acceso. Puedes solicitar la eliminación de tus datos escribiendo a <a href="mailto:privacidad@wankar.com">privacidad@wankar.com</a>.</p>
        <p>Podemos actualizar esta política ocasionalmente. Te notificaremos cualquier cambio publicando la nueva versión en este sitio.</p>
      </div>
    </section>
  )
}
