import React from "react";
import { UserContext } from "../context/UserContext";

function Info() {
    return (
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <>
                            <p>{user.nama}</p>
                            <p>{user.hobbi}</p>
                        </>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default Info