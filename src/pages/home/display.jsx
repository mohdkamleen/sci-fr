import axios from "../../axios/index"
import { useEffect, useState } from "react"
import { Empty, Skeleton, Spin } from "antd"

export default function () {
    const [slot, setSlot] = useState(null) 

    useEffect(() => { 
        axios.get("/slot").then(res => {
            setSlot(res.data) 
        })
    }, [])

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Welcom to White Eagle Parking System</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                maxWidth: "800px",
                margin: "50px auto",
                padding: "0 5%"
            }}>
                {slot?.length > 0 ? slot.map((e, i) => (
                    <div key={i} className="slot-div" style={!e.isFull ? { background: "rgba(101, 233, 97, 0.281)" } : {}}>
                        <h3 style={{ textTransform: "uppercase" }}>{e.slot}</h3>
                        {
                            e.isFull
                                ? <img src="https://mini-project-eta-one.vercel.app/assest/car.png" width={70} alt="" />
                                : <big>Open</big>
                        }
                    </div>
                )) : <>
                <Skeleton /><Skeleton />
                <Skeleton /><Skeleton />
                <Skeleton /><Skeleton />
                <Skeleton /><Skeleton />
                </>}
            </div>
        </>
    )
}