import dataSource from "./data.json";
import {useEffect, useState} from "react";


const dataTemplate = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#EC932F',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
        },
        {
            label: 'My First dataset 2',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
        }
    ]
};

function App() {

    const [mappedData, setMappedData] = useState();

    const fieldNameMapper = (item) => ({
        label: item.app,
        jumlah: item.jumlah
    })
    useEffect(() => {
        const {data} = dataSource;
        let result = data.map(fieldNameMapper);
        let labels = [];
        let jumlahArr = [];
        result.forEach(item => {
            labels.push(item.label);
            jumlahArr.push(item.jumlah);
        })
        dataTemplate.labels = labels;
        dataTemplate.datasets.forEach(item => {
            item.data = jumlahArr
        })
        setMappedData(dataTemplate);
    }, [])

    return (
        <div className="App">
            <p>{JSON.stringify(dataTemplate)}</p>

            <h3>Example Mapped Data Take a not the logic not already functioned</h3>
            {JSON.stringify(mappedData)}
        </div>
    );
}

export default App;
