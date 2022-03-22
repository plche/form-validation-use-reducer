import './App.css';
import {useReducer} from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const {name, value: newValue} = e.target;
        let objValidated = {}

        // Validations
        if (name === "firstName") {
            if (newValue.length < 2) {
                objValidated = {
                    value: newValue,
                    error: "First Name must be at least 2 characters"
                }
            } else {
                objValidated = {
                    value: newValue,
                    error: null
                }
            }
        }
        if (name === "lastName") {
            if (newValue.length < 2) {
                objValidated = {
                    value: newValue,
                    error: "Last Name must be at least 2 characters"
                }
            } else {
                objValidated = {
                    value: newValue,
                    error: null
                }
            }
        }
        if (name === "email") {
            const validEmailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (newValue.match(validEmailRegExp)) {
                objValidated = {
                    value: newValue,
                    error: null
                }
            } else {
                objValidated = {
                    value: newValue,
                    error: "Email must be a valid email address"
                }
            }
        }

        dispatch({
            type: name,
            payload: objValidated
        });
    }

    return (
        <div className="App">
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    name="firstName"
                    value={state.firstName.value}
                    onChange={handleChange}
                />
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    name="lastName"
                    value={state.lastName.value}
                    onChange={handleChange}
                />
                {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    value={state.email.value}
                    onChange={handleChange}
                />
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
        </div>
    );
}

export default App;
