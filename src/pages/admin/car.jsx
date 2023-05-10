export default function () {
    return (
        <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"20px",
            maxWidth:"800px",
            margin:"50px auto",
            padding:"0 5%"
        }}>
            {new Array(8).fill().map((e, i) => (
                <div key={i} className="slot-div" >
                    <h3>S{i + 1}</h3>
                    <img src="https://mini-project-eta-one.vercel.app/assest/car.png" width={70} alt="" />
                </div>
            ))}
        </div>
    )
}