import { Button, Input, Spin, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

const Index = () => {

  const [loading, setloading] = useState(false)
  const [uploadLoading, setUploadLoading] = useState(false)
  const [data, setdata] = useState({
    image: "",
    note: "",
    address: "",
    pincode: ""
  })

  const handleAdd = () => {
    if (!data.image) return message.warning("Image is required.")
    if (!data.note) return message.warning("Note type is required.")
    if (!data.pincode) return message.warning("Pincode is required.")
    setloading(true)
    axios.post(`/image/add`, data)
      .then(e => {
        message.success("Success.")
      })
      .catch(e => console.log(e))
      .finally(e => setloading(false))
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
        Upload File :&ensp; {uploadLoading && <Spin size='small' spinning={true} />} <br />
        <Input
          accept='image/*'
          id='image' type="file"
          style={{ width: "250px" }}
          onChange={async (e) => {
            setUploadLoading(true);
            var d = new FormData();
            d.append("file", e.target.files[0])
            var res = await axios.post("/image/upload", d);
            setdata({ ...data, image: res.data?.path })
            setUploadLoading(false);
          }} />
      </label> <br /><br />

      <label>
        Note : <label>500 <input onChange={e => setloading({ ...data, note: e.target.value })} value={500} type="radio" name='note' /></label> &ensp;
        <label>2000 <input type="radio" name='note' onChange={e => setloading({ ...data, note: e.target.value })} value={2000} /></label>
      </label><br /><br />

      <label>
        Address : <br /> <Input.TextArea onChange={e => setloading({ ...data, address: e.target.value })} placeholder='eg. Lucknow IN' type="text" style={{ width: "200px" }} />
      </label><br /><br />
      {
        data.image
      }
      <label>
        Pincode : <br /> <Input placeholder='eg. 346005' type="number" style={{ width: "200px" }} />
      </label><br /><br />

      <Button onClick={handleAdd}>Submit</Button>

    </div>
  )
}

export default Index