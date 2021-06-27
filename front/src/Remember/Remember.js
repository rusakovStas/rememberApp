import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logout} from "../redux/actions/user";


const Remember = () => {
    const dispatch = useDispatch();
    return (
        <Container>
        <div style={{display: "grid", gridTemplateRows: "auto 1fr", height: "100vh", backgroundColor: "#fff"}}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "10px"
            }}>
                <div>

                </div>
                <div style={{
                    justifySelf: "flex-end"
                }}>
                    <Button onClick={() => dispatch(logout())}>
                        Выйти
                    </Button>
                </div>
            </div>
            <div style={{
               flexGrow: "1",
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                placeItems: "center"
            }}>
                <div style={{width: "80%", height: "80%"}}>
                    <textarea className={"textContainer"}></textarea>
                </div>
                <div style={{width: "80%", height: "80%"}}>
                    <textarea className={"textContainer"}></textarea>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Remember;
