import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/cards/new" page={NewCardPage} name="newCard" />
      <Route path="/cards/{id:Int}/edit" page={EditCardPage} name="editCard" />
      <Route path="/cards/{id:Int}" page={CardPage} name="card" />
      <Route path="/cards" page={CardsPage} name="cards" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
