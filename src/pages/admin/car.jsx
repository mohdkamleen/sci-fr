import { Button, Input, Table } from "antd";
import axios from "../../axios/index";
import { useEffect, useState } from "react";
import moment from "moment";

export default function () {

    const [number, setNumber] = useState("")
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`car/${number.toUpperCase()}`).then(res => {
            setData(res?.data)
            setLoading(false)
        })
    }, [])


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
        },
        {
            title: 'Action',
            key: 'action',
            render: e => <Button size="small">Pay</Button>
        }
    ];

    return (
        <>  
                <div style={{ maxWidth: "700px"}} >
                    <big>Car Details {data?.length} Result Found </big> <br /><br />
                    <Table dataSource={data} columns={columns} loading={loading}/> 
                </div> 

        </>
    )
}