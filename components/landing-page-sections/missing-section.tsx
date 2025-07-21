
export default function MissingSection({ type, ...sectionData }: any) {
  console.log(`Missing section ${type} data ${sectionData}`)

  return (
    <div>
      <h3>Missing a template for {type}</h3>
      <p>Check console for component details</p>
    </div>
  )
}