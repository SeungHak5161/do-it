import './Main.scss'

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div id="mainWrapper">
        <main id="main">{children}</main>
      </div>
    </>
  )
}
