import './App.css'
import StudCard from './StudCard'
import StudCardClass from './StudCardClass'
import MinMaxCard from './minMaxCard'
import MinMaxInput from './minMaxInput'

const minValue1 = 1
const maxValue1 = 10
const minValue2 = 10
const maxValue2 = 20

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <StudCardClass />
      <MinMaxCard minValue={minValue1} maxValue={maxValue1} />
      <MinMaxInput minValue={minValue2} maxValue={maxValue2} />
    </div>
  )
}

export default App
