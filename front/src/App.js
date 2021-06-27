import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import UserRoute from "./Routers/UserRoute";
import Remember from "./Remember/Remember";
import GuestRouter from "./Routers/GuestRouter";
import Login from "./Login/Login";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadUser} from "./redux/actions/user";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch]);


    return (<>
        <GuestRouter path="/" exact component={Login}/>
        <UserRoute path="/remember" exact component={Remember}/>
    </>);
}

export default App;
