import { useNavigate } from "react-router"

export default function () {
    const navigate = useNavigate()

    return (
        <>
            <nav style={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background:"lightgray", 
            }}>

                {/* this is our logo  */}
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px"
                }}>
                    <img src="logo.png" height={50} alt="" /> 
                    <big>WhiteEagle</big>
                </div>

                {/* this is manu part  */}
                <div>
                    <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
                    <button className="nav-btn" onClick={() => navigate("/bill")}>Bill</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
                </div>
            </nav>
        </>
    )
}