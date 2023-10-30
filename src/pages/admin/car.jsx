import { Button, Input, Modal, Select, Table } from "antd";
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
            title: 'Number',
            dataIndex: 'v_number',
            key: 'v_number', 
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
                <div style={{ maxWidth: "800px"}} > 
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <big>Car Details {data?.length} Result Found</big>
                        <Button type="primary">Add Car</Button>
                    </div>
                    <Table dataSource={data} columns={columns} loading={loading}/> 
                    <Modal open={true} closeIcon width={400} okText="Add">
                       <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
                       <Select style={{width:"100px"}} placeholder="Slot">
                            <option value="s1">S1</option>
                            <option value="s2">S2</option>
                            <option value="s3">S3</option>
                            <option value="s4">S4</option>
                            <option value="s5">S4</option>
                        </Select>
                        <Input placeholder="Car number" />
                       </div>
                    </Modal>
                </div> 

        </>
    )
}