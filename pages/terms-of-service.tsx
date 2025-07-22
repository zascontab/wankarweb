import Head from 'next/head'

export default function TermsOfService() {
  return (
    <section className="py-5">
      <Head>
        <title>Wankar - Términos de Servicio</title>
        <meta name="description" content="Términos de servicio de Wankar" />
      </Head>
      <div className="container">
        <h1>Términos de Servicio</h1>
        <p>Bienvenido a Wankar. Al utilizar nuestros servicios aceptas los siguientes términos y condiciones. Nuestro sitio ofrece soluciones de software y facturación electrónica. Todas las funcionalidades, incluyendo integraciones con terceros como TikTok, se proporcionan conforme a estas condiciones.</p>
        <p>Los usuarios deben respetar nuestras políticas de uso y cumplir con la normativa aplicable. Nos reservamos el derecho a actualizar estos términos cuando sea necesario. Si continúas utilizando el sitio tras publicarse los cambios, aceptas los términos actualizados.</p>
        <p>Si tienes preguntas sobre estos términos, contáctanos en <a href="mailto:info@wankar.com">info@wankar.com</a>.</p>
      </div>
    </section>
  )
}
