import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Header />
        <main className="app-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
