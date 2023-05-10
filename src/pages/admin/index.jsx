import { Column, Line, Pie } from "@ant-design/plots";
import { Button, DatePicker, Radio, Select } from "antd";

export default function () {
    const data = [
        {
            date: "12 Apr",
            cars: 456
        }, {
            date: "13 Apr",
            cars: 876
        }, {
            date: "14 Apr",
            cars: 123
        }, {
            date: "15 Apr",
            cars: 1675
        }, {
            date: "16 Apr",
            cars: 349
        }, {
            date: "17 Apr",
            cars: 987
        }, {
            date: "18 Apr",
            cars: 789
        }, {
            date: "19 Apr",
            cars: 456
        }
    ]

    const visitor = [
        {
            date: "Apr",
            cars: 4566
        }, {
            date: "Mar",
            cars: 70764
        }, {
            date: "May",
            cars: 12332
        }, {
            date: "June",
            cars: 86752
        }, {
            date: "Jul",
            cars: 34292
        }, {
            date: "Aug",
            cars: 52873
        }, {
            date: "Sep",
            cars: 17895
        }, {
            date: "Oct",
            cars: 84565
        }
    ]
    
    var configData = {
        data,
        xField: "date",
        yField: "cars", label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    var visitorData = {
        data: visitor,
        xField: "date",
        yField: "cars", label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    return (
        <div style={{ padding: "10px 3%" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button size="large"> 100k Visitors</Button>
                <Button size="large"> 3k Cars </Button>
                <Button size="large"> 10k Paid Bill </Button>
                <Button size="large"> 60 Unpaid Bill </Button>
            </div> <br /><br />


            <div style={{ border: "1px solid lightgray", padding: "50px", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <big>Visitors </big>
                    <Select style={{ width: "150px" }} defaultValue={"2023"}>
                        <option value="2023"></option>
                        <option value="2022"></option>
                        <option value="2021"></option>
                    </Select>
                </div> <br />
                <Line {...visitorData} />
            </div><br /><br />

            <div className="chart-flex" >


                <div className="chart">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <big>Car Traffic </big>
                        <DatePicker />
                    </div> <br />
                    <Line {...configData} />
                </div>

                <div className="chart">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <big>Bill </big>
                        <Radio.Group
                            optionType="button"
                            defaultValue={"Paid"}
                            options={["Paid", "Unpaid"]}
                        />
                    </div> <br />
                    <Column {...configData} />
                </div>

            </div> <br /><br />

        </div>
    )
}

