import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <h1>AboutPage</h1>
      <Link to={routes.home()}>My Blog</Link>
    </MainLayout>
  )
}

export default AboutPage
