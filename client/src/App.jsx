import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div className="h-screen">
      <div className="gradient-bg-welcome h-full">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
    </div>
  )
}

export default App
