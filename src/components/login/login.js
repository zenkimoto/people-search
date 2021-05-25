import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

const loginReducer = (state, action) => {
  const setValidState = (state) => ({
    ...state,
    valid: state.username && state.password ? true : false,
  });

  switch (action.type) {
    case 'SET_USERNAME':
      return setValidState({ ...state, username: action.payload });
    case 'SET_PASSWORD':
      return setValidState({ ...state, password: action.payload });
    case 'SET_ERROR':
      return setValidState({ ...state, error: action.payload });
    default:
      return state;
  }
};

const Login = ({ authService }) => {
  const [state, dispatch] = useReducer(loginReducer, {
    username: '',
    password: '',
    valid: false,
  });
  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await authService.login(state.username, state.password);

      history.push('/main');
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.error });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <p className="text-red-700">{state.error}</p>
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: 'SET_USERNAME', payload: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-red text-xs italic">
            Use "user" for username and "password" for password.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={!state.valid}
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
