import React from 'react';
import Axios from 'axios';
import { API_KUPOVINA } from "../../api_routes";

export const stripePayment = (kolicina, kupovina, callback) => (token) => {
    kupovina.placeno = true;
    Axios.post(`${API_KUPOVINA}/${kupovina.proizvod}`, kupovina, {
        headers: {
            token: token.id,
            kolicina,
        }
    }).then(() => {
        alert('Uspesna kupovina');
        callback();
    }).catch((err) => {
        console.log(err);
    });
}

export const stripeKey = 'pk_test_51L7dA0Fhkye7LkOgcXfxRx8QjAOIPO69ydQolApzPUDtVJzMxZPQWw4On9TWwGpWyWjDHEpJTro0Mq2jPlxEcLRj00ApnYpFBN';