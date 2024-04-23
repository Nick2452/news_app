import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from './helpers/context/themeContext.tsx'
import './index.css'
import { store } from './store/index'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
)
