import { Button, Input, Segmented, Spin, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

const Index = () => {

  const [arealoading, setarealoading] = useState(false)
  const [loading, setloading] = useState(false)
  const [uploadLoading, setUploadLoading] = useState(false)
  const [area, setarea] = useState([])
  const [data, setdata] = useState({
    image: "",
    note: "500",
    address: "",
    pincode: ""
  })

  const handleAdd = () => {
    // if (!data.image) return message.warning("Image is required.")
    if (!data.note) return message.warning("Note type is required.")
    if (!data.pincode) return message.warning("Pincode is required.")
    setloading(true)
    axios.post(`https://adengage-task-bk.onrender.com/api/image/add`, data)
      .then(e => {
        message.success("Success.")
      })
      .catch(e => console.log(e))
      .finally(e => setloading(false))
  }

  const handlePincode = (e) => {
    setdata({ ...data, pincode: e.target.value })
    // if (e.target.length == 6) {
      setarealoading(true)
      axios.get(`https://api.postalpincode.in/pincode/${data.pincode}`)
        .then(e => setarea(e?.data[0]?.PostOffice))
        .catch(err => console.log(err))
        .finally(e => setarealoading(false))
    // }
  }

  return (
    <div style={{ padding: "20px 5%" }}>
      <nav style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "lightgray",
      }}>
        <h2>Fake Currency Detection</h2>
      </nav> <br />

      <label>
        Upload File : &ensp; {uploadLoading && <Spin size='small' spinning={true} />} <br />
        <Input
          accept='image/*'
          id='image' type="file"
          style={{ width: "250px" }}
          onChange={async (e) => {
            setUploadLoading(true);
            var d = new FormData();
            d.append("file", e.target.files[0])
            var res = await axios.post("https://adengage-task-bk.onrender.com/api/image/upload", d);
            setdata({ ...data, image: res.data?.path })
            setUploadLoading(false);
          }} />
      </label> <br /><br />

      Note :
      <Segmented
        options={[500, 2000]}
        default={500}
        onChange={e => setloading({ ...data, note: e })}
      /> <br /><br />

      <label>
        Pincode : &ensp; {arealoading && <Spin size='small' spinning={true} />}  <br /> <Input onChange={handlePincode} placeholder='eg. 346005' type="number" style={{ width: "200px" }} />
      </label><br /><br />

      <label>
        Address : <br /> <Input.TextArea value={data?.address} onChange={e => setloading({ ...data, address: e.target.value })} placeholder='eg. Lucknow IN' type="text" style={{ width: "300px" }} />
      </label><br /><br />


      <ul style={{ margin: "0 5%", cursor: "pointer", display: "flex", gap: "5px", flexDirection: "column" }} >
        {
          area?.length > 0 && area.map(e => (
            <li onClick={j => setdata({ ...data, address: `${e?.Name}, ${e?.District} ${e?.State}, ${e?.Country} (${e?.Pincode})` })} key={e?.Name}>{e?.Name}, {e?.District} {e?.State}, {e?.Country} ({e?.Pincode}) </li>
          ))
        }
      </ul>
      <br />

      <Button onClick={handleAdd} loading={loading}>Submit</Button>

    </div>
  )
}

export default Index