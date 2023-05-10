import { Button, Input } from "antd";
import { useState } from "react";

export default function () {
    const [id, setid] = useState("")

    const handleAdminLogin = () => {
        localStorage.setItem("token",id)
        window.location.reload()
    }
    return(
        <div style={{
            display:"block",
            margin:"100px auto",
            width:"300px"
        }}>
            <h3>Admin Login </h3> <br />
            User Id :
            <Input onChange={(e) => setid(e.target.value)} placeholder="Enter User Id"/> <br /><br />
            <Button style={{display:"block",margin:"auto"}} onClick={handleAdminLogin}>Login</Button>
        </div>
    )
}