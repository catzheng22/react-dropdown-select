# Overview
This project was started with `npm create-react-app dropdown-test` and includes the implementation of a reusable React dropdown menu component, built from scratch in React.js in less than 24 hours.

### The component lives in `/src/components/Dropdown.react.js`

# Usage & How to Run
1. Clone or fork this repo.
2. In command line, run `npm start` and open the app on your local browser to see live changes.
3. See usage examples on `App.js`.

## Props
`title: string` -> Small descriptive title that appears in top left corner.
`multiselect: boolean` -> Variable that determines which type of dropdown menu you get.
`options: ArrayList<Objects>` -> Dropdown menu options, specified in [{label: "x", value: "y"}] format (examples below).
`placeholderText?: string` -> Override the default placeholder text "Select".

![alt text](src/assets/multiselect_example.png)
### Multi-Select Example
```
const multiselectOptions = [
  {label: "Vincent Van Gogh", value: "Vincent Van Gogh"},
  {label: "Picasso", value: "Picasso"},
  {label: "Claude Monet", value: "Claude Monet"},
  {label: "Leonardo Da Vinci", value: "Leonardo Da Vinci"},
  {label: "Justin Bieber", value: "Justin Bieber"},
]
...

<Dropdown
    title={"Artists"}
    multiselect={true}
    options={multiselectOptions}
/>
```

![alt text](src/assets/singleselect_example.png)
### Single-Select Example

```
const singleSelectOptions = [
  {label: "Under 18", value: "0-18"},
  {label: "18-25", value: "18-25"},
  {label: "26-39", value: "26-39"},
  {label: "40-69", value: "40-69"},
  {label: "70+", value: "70+"},
]
...

<Dropdown
    title={"Age Group"}
    multiselect={false}
    options={singleSelectOptions}
    placeholderText='Select an age group'
/>
```