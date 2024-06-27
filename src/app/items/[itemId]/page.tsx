import './page.scss'

export default function page({ params }: { params: { itemId: string } }) {
  return <>{params.itemId}</>
}
