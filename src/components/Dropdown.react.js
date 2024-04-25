import {useState} from 'react';
import '../styles/dropdownMenu.css';
import caretDown from '../assets/icons/caret-down.svg';
import caretUp from '../assets/icons/caret-up.svg';
import square from '../assets/icons/square.svg'
import squareCheck from "../assets/icons/square-check.svg"


const Dropdown = ({
    title,
    multiselect = false,
    options,
    placeholderText = 'Select',
}) => {
    // State management for opening and closing dropdown menu
    const [expanded, setExpanded] = useState(false);
    
    // Manage state for selectedItems options
    const [selectedItems, setSelectedItems] = useState([]);
    
    const handleSelect = ({label, value, isSelected, multiselect}) => {
        if (multiselect) {
            setSelectedItems(s => {
                // If option is in selectedItems, unselect value and update
                if (isSelected && s.find(option => option.value === value)) {
                    return(s.filter(option => option.value !== value));
                } else {
                    if (s.length+1 === options.length) {
                    }
                    return [...s, {label: label, value: value}]
                }
            });
        } else {
            setSelectedItems([{label, value}]);
        }
    };

    const toggleSelectAll = () => {
        if (selectedItems.length === options.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems([...options]);
        }
    }

    const selectAllMenuItem = <DropdownMenuItem 
        label={selectedItems.length === options.length ? "Deselect All" : "Select All"}
        value={"select-all"}
        isSelected={selectedItems.length === options.length}
        multiselect={multiselect}
        handleSelect={toggleSelectAll}
    />;

    const dropdownMenu = <DropdownMenu>
        {multiselect && selectAllMenuItem}
        {options.map(({label, value}) => {
            return (
                <DropdownMenuItem
                    label={label}
                    value={value}
                    isSelected={selectedItems.find(option => option.value === value)}
                    multiselect={multiselect}
                    handleSelect={handleSelect}
                />
        );
    })}
    </DropdownMenu>

    return (
        <div className="dropdown">
            <label>
            <span className="dropdown__title">{title}</span>
            <button className="dropdown__toggle" onClick={() => setExpanded(!expanded)}>
                <span className="dropdown__label">{selectedItems.map(option => option.label).join(", ") || placeholderText}</span>
                <img src={expanded ? caretUp : caretDown} alt=""/>
            </button>
            </label>
            {expanded && dropdownMenu}
        </div>
    );
}

const DropdownMenuItem = ({
        label,
        value,
        isSelected,
        multiselect = false,
        handleSelect,
    }) => {
    const uncheckedIcon = <img className="dropdown-menu-item__checkbox" src={square} alt="unselectedItems-icon"/>
    const checkedIcon = <img className="dropdown-menu-item__checkbox" src={squareCheck} alt="unselectedItems-icon"/>
    const checkbox = isSelected ? checkedIcon : uncheckedIcon;

    return (
        <li key={value}>
            <div className={isSelected ? "dropdown-menu-item--selected" : "dropdown-menu-item"} onClick={() => handleSelect({label, value, isSelected, multiselect})}>
                {multiselect && checkbox}
                <div className="dropdown-menu-item__label">{label}</div>
            </div>
        </li>
    );
}

const DropdownMenu = ({children}) => {
    return(
        <div className="dropdown-menu">
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default Dropdown