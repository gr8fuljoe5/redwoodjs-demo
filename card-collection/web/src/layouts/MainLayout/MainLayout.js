import Header from 'src/components/Header'
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={'container mx-auto mt-24'}>{children}</main>
    </>
  )
}

export default MainLayout
