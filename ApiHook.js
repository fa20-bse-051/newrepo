import axios from "axios";
import { useState } from "react";

const CreateApiHook = () =>{
    const [data, setData] = useState();
    const getData = async (url) => {
        console.log("get data called");
        axios.get(url).then((response)=>{
            console.log(response.data);
            setData(response.data);
        });
    }

    return {data, getData};
}

export default CreateApiHook;