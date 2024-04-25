import './styles/App.css';
import Dropdown from './components/Dropdown.react';

/* Note: Dropdown menu ignores duplicates that are selected */
const multiselectOptions = [
  {label: "Vincent Van Gogh", value: "Vincent Van Gogh"},
  {label: "Picasso", value: "Picasso"},
  {label: "Claude Monet", value: "Claude Monet"},
  {label: "Leonardo Da Vinci", value: "Leonardo Da Vinci"},
  {label: "Justin Bieber", value: "Justin Bieber"},
]

const singleSelectOptions = [
  {label: "Under 18", value: "0-18"},
  {label: "18-25", value: "18-25"},
  {label: "26-39", value: "26-39"},
  {label: "40-69", value: "40-69"},
  {label: "70+", value: "70+"},
]

function App() {
  return (
    <div className="app">
      <h1 className="app__header">
        React.js Dropdown Menus
      </h1>
      <div className="app__content">
        <div className="app__section">
          <h2>Multiselect Dropdown Menu</h2>
          <Dropdown
            title={"Artists"}
            multiselect={true}
            options={multiselectOptions}
          />
        </div>
        <div className='app__section'>
          <h2>Single-select dropdown menu</h2>
          <Dropdown
            title={"Age Group"}
            multiselect={false}
            options={singleSelectOptions}
            placeholderText='Select an age group'
          />
        </div>
        
        </div>
    </div>
  );
}

export default App;
