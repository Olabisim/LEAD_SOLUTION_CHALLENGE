// import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar'
import DashBoard from './components/Dashboard/Dashboard'



function App() {
        return (
                <div style={{display: 'flex'}}>

                        <SideBar />
                        <DashBoard />
                        
                </div>
        );
}

export default App;
