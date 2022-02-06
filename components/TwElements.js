import dynamic from 'next/dynamic'

const TwElements = dynamic(
  () => {
    return import('tw-elements')
  },
  { ssr: false }
)
export default TwElements
