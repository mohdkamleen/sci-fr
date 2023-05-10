export default function () {
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
                    <button className="nav-btn">Home</button>
                    <button className="nav-btn">Bill</button>
                    <button className="nav-btn">About</button>
                </div>
            </nav>
        </>
    )
}