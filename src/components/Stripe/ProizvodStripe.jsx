import React, { Component } from "react";
import moment from "moment";
import { getAccountIdFromToken } from "../../services/auth-one";
import { stripePayment, stripeKey } from "./StripeHelp";
import Stripe from "react-stripe-checkout";
import { getKupovinaById } from "../../services/kupovina-service";
import { Table } from "@material-ui/core";

export default class ProizvodStripe extends Component{
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <Table>
                
            </Table>
        )
    }
}