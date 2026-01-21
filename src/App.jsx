import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'


export default function App() {
return (
<BrowserRouter>
<Navbar />
<AppRoutes />
<Footer />
</BrowserRouter>
)
}