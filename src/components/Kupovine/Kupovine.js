import React, { Component } from 'react';
import { setAxiosInterceptors } from '../../services/auth-one';
import { getAllPayments } from '../../services/kupovina-service';
import Tabela from '../Tabela';

const totalPages = 10;
const keywords = "";
const sortBy = "idplan";
const PAGE_SIZE = 20;
const INITAL_PAGE = 1;
let searchTerm = "";
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
export default class Kupovine extends Component{

    constructor(props){
        super(props);
        this.state = {
            payments: [],
            ukupno: '',
            page: INITAL_PAGE,
            sortBy: sortBy,
            keyword: keywords, 
        };
        this.child = React.createRef();
        this.child2 = React.createRef();
        this.child3 = React.createRef();
    }

    componentDidMount(){
        setAxiosInterceptors();
        this.loadPayments();
    }

    loadPayments = () => {
        getAllPayments().then((resp) => {
            this.setState({
                ...this.state,
                payments: resp.data,
            });
        })
        .catch((e) => console.log(e));;
    }

    setUkupno = () => {
        getAllPayments().then((resp) => {
            this.setState({
                ukupno: resp.data.length,
            });
        }).catch((e) => console.log(e));
    };

    setCurrentPage(num){
        this.currentPage = num; 
    }

    /*changePage = (selected) => {
        this.setState({
            ...this.state,
            INITAL_PAGE: selected,
        });
    };*/

    changePage = ({ selected }) => {
        this.setState({
            ...this.state,
            page: selected,
        });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    searchHandler = (e) => {
        searchTerm = e.target.value;
    }

    render(){
        const {payments} = this.state;
        return(
            <>
            <Tabela
                ref={this.child2}
                data={payments.map(pay => [pay.id, pay.customerid, pay.customer, pay.amount, pay.currency, pay.status])}
                load={this.loadPayments}
                title={'Pregled kupovina'}
                headerTitles={['ID', 'Identifikator', 'Kupac', 'Ukupno', 'Valuta', 'Status']}
                headerTitleProperties={['id', 'customerid', 'customer', 'amount', 'currency', 'status']}
                totalCount={this.state.ukupno}
                />
            </>
        )
    }
}