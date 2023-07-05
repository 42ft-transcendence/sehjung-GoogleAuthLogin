import './App.css'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios'
import { useStore } from './hooks/useStore';
import Profile from './components/Profile';

function App() {
	const setAuthData = useStore((state: any) => state.setAuthData)
  return (
    <div className="App">
		<GoogleOAuthProvider clientId="480756209931-9dkicb5597d6o823a1smapbmr5i516f3.apps.googleusercontent.com">
			<div>
			<GoogleLogin 
				useOneTap
				onSuccess={async credentialResponse => {
					const response = await axios.post(
					'http://localhost:3001/login',
					{
						token: credentialResponse.credential
					}
					);
					const data = response.data

					localStorage.setItem('authData', JSON.stringify(data))
					setAuthData(data)
				}}
				onError={() => {
				console.log('Login Failed');
				}}
			/>
			</div>
			
			<Profile />
		</GoogleOAuthProvider>
		

	</div>
  )
}

export default App
