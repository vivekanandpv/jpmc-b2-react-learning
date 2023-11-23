import React from 'react';

const Login = (props) => {
    const formReducer = (state, action) => {
        switch (action.type) {
            case 'changeEmail': {
                return {...state, email: action.payload};
            }
            case 'changePassword': {
                return {...state, password: action.payload};
            }
            case 'changeCheckMeOut': {
                return {...state, checkMeOut: action.payload};
            }
            default:
                return state;
        }
    }

    const initialFormState = {
        email: '',
        password: '',
        checkMeOut: ''
    };

    const [form, dispatch] = React.useReducer(formReducer, initialFormState);

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'email': {
                dispatch({
                    type: 'changeEmail',
                    payload: e.target.value
                });
                break;
            }
            case 'password': {
                dispatch({
                    type: 'changePassword',
                    payload: e.target.value
                });
                break;
            }
            case 'checkMeOut': {
                dispatch({
                    type: 'changeCheckMeOut',
                    payload: e.target.checked
                });
                break;
            }
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', form);
    };

    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} name='email' onChange={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={form.password} name='password' onChange={handleInput}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={form.checkMeOut} name='checkMeOut' onChange={handleInput}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default Login;