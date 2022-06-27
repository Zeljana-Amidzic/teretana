import React from "react";
import { useParams } from "react-router-dom";

export default function GetIdFromUrl(){
    let params = useParams();

    console.log(params.idproizvod);

    return params.idproizvod;
}