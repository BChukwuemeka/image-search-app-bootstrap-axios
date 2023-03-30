import { useState, useEffect } from "react";
import axios from "axios";




export default function LoadImages () {
    const count = 1;
    const [state, setState] = useState([])


    //make api calls inside useEffect to avoid multiple calls
    useEffect (() => {
        axios
        .get("https://api.unsplash.com/photos?client_id=Drsmg0zwRR074bHnf_AxtytP2Ygi4PJ11RzicwBkSj8")
        .then((data) => {
            setState(data.data)
        })

    }, [count])


    return state;
}