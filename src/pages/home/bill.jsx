import { Button, Input, Table } from "antd";
import axios from "../../axios/index";
import { useEffect, useState } from "react";
import moment from "moment";

export default function () {

    const [number, setNumber] = useState("")
    const [data, setData] = useState("")

    useEffect(() => {
        number && axios.get(`car/${number.toUpperCase()}`).then(res => {
            setData(res?.data)
        })
    }, [number])


    const columns = [
        {
            title: 'Slot',
            dataIndex: 'slot',
            key: 'slot',
            render : s => <b>{s.toUpperCase()}</b>
        },
        {
            title: 'Arrival Time',
            dataIndex: 'arrivedAt',
            key: 'arrivedAt',
            render : e => moment(e).format('LLLL')
        },
        {
            title: 'Departure Time',
            dataIndex: 'leavedAt',
            key: 'leavedAt',
            render : e => moment(e).format('LLLL')
        },
        {
            title: 'Duration (min)',
            key: 'leavedAt',
            render: e => ((e.leavedAt - e.arrivedAt) / 60).toFixed(2)
        },
        {
            title: 'Bill (₹)',
            key: 'bill',
            render: e => ((e.leavedAt - e.arrivedAt) / 60 > 30) ? ((e.leavedAt - e.arrivedAt) / 60).toFixed(2) : "0.00"
        }
    ];

    return (
        <>
            <div style={{
                display: "block",
                margin: "30px auto",
                width: "300px"
            }}>
                <h3>Know your bill </h3> <br />
                Car Number :
                <Input onChange={(e) => setNumber(e.target.value)} placeholder="eg. UP4556FG" /> <br /><br />
            </div>


            {data?.length > 0 &&
                <div style={{ maxWidth: "700px", margin: "auto" }} >
                    <big>{data?.length} Result found for <b style={{ textTransform: "uppercase" }}>{number}</b></big> <br /><br />
                    <Table dataSource={data} columns={columns} /> 
                </div>
            }

        </>
    )
}