import React, { Component } from "react";
import { getTicketsByFlightId } from "../../services/ticket-service";
import { buyTicket } from "../../services/customer-ticket-service";
import {getAccountIdFromToken} from '../../utils';
import { getProizvodById } from "../../services/proizvod-service";

export class ProizvodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      proizvodi: [],
    };
    this.userId = getAccountIdFromToken();

  }

  handleConfirm = (e) => {
    e.preventDefault();

    this.props.onConfirm();

    this.toggle();
  };

  handleClose = (e) => {
    e.preventDefault();
    this.toggle();
  };

  handleClickKupiProizvod = (id) => () => {
    kupiProizvod(this.userId, id);
    this.toggle();
  };

  toggle = () => {
    const { toggled } = this.state;

    this.setState({
      toggled: !toggled,
    });
  };

  loadProizvode = (idproizvod) => {
    getProizvodById(idproizvod)
      .then((resp) => {
        this.setState({
          proizvodi: resp.data,
        });
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { toggled } = this.state;
    return (
      <div
        className={toggled ? "modal fade show d-block" : "modal fade"}
        id="exampleModalCenter"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Naziv</th>
                      <th scope="col">Cena</th>
                      <th scope="col">Neto tezina</th>
                      <th scope="col">Vrsta</th>
                      <th scope="col">Na stanju</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.proizvodi.map(
                      (proizvod, i) =>
                      proizvod && (
                          <tr key={i}>
                            <td>{proizvod.naziv}</td>
                            <td>{proizvod.cena}</td>
                            <td>{proizvod.netotezina}</td>
                            <td>{proizvod.vrstaproizvoda}</td>
                            <td>{proizvod.stanje}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-success save-btn"
                                onClick={this.handleClickKupiProizvod(proizvod.idproizvod)}
                              >
                                Kupi
                              </button>
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={this.toggle}
                >
                  Odustani
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}