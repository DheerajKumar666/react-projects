import DisplayNotes from './DisplayNotes'
import Form from './Form'
import './global.css'
import Navbar from './Navbar'
import TaskProvider from './TaskProvider'
const App = () => {
  return (
    <>
    <Navbar/>
    <TaskProvider>
    <main className='mainContainer'>
        <Form/>
        <DisplayNotes/>
      </main>
    </TaskProvider>
      
    </>
  )
}

export default App   