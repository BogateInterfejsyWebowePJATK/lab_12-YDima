import './App.css';
import usersData from "./data/users.json";

import LoginForm from "./components/LoginForm";

function App() {
    return (
        <div className="container" style={{width: "300px"}}>
            <div className="row">
                <div className="col-md-12">
                    <LoginForm usersData={usersData} />
                </div>
            </div>
        </div>
    );
}

export default App;
