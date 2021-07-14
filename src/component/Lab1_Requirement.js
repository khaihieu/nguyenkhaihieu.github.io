import React, { Component } from 'react'

export default class Lab1_Requirement extends Component {
    render() {
        return (
            <div className="requirement">
              <div style={{marginTop: '30px',display: 'flex',justifyContent: 'center'}}><h1>PLAYER MANAGEMENT </h1></div>
              <div className="xxxx" ></div>
            <form className="contact100-form validate-form">
              <div className="formA">
                <div className="wrap-input100 validate-input" data-validate="Name is required">
                  <span className="label-input100"><strong>Name</strong></span>
                  <input className="input100" type="text" name="name" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Player shirt number is required">
                  <span className="label-input100"><strong>Shirt Number</strong></span>
                  <input className="input100" type="number" placeholder />
                  <span className="focus-input100" />
                </div>
              </div>
              <div className="formB">
                <div className="wrap-input100 validate-input" data-validate="Player shirt number is required">
                  <span className="label-input100"><strong>Football Club</strong></span>
                  <input className="input100" type="text" placeholder="Ex: Manchester United" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input">
                  <span className="label-input100"><strong>Position</strong></span>
                  <div>
                    <select className="input100 selection-2 " name="service">
                      <option>GK</option>
                      <option>DF</option>
                      <option>MF</option>
                      <option>FW</option>
                    </select>
                  </div>
                  <span className="focus-input100" />
                </div>
              </div>
            </form>
            <div className="btn-div">
              <button className="btn-xxx" style={{border: 'none', outline: 'none', textDecoration: 'none'}}>ADD</button>
            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-3" style={{marginLeft: '63.9%'}}>
                <form action className="search-form">
                  <div className="form-group has-feedback">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input type="text" className="form-control" name="search" id="search" placeholder="search" />
                    <span className="glyphicon glyphicon-search form-control-feedback" />
                  </div>
                </form>
              </div>
            </div>
            <div className="table-wrap table-x ">
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Shirt number</th>
                    <th>Fooball Club</th>
                    <th>Position</th>
                    <th>Edit</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>David Degea</td>
                    <td>01</td>
                    <td>Manchester United</td>
                    <td>GK</td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit" /></button>
                      </div>
                    </td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash" /></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Lionel Messi</td>
                    <td>10</td>
                    <td>Barcelona</td>
                    <td>FW</td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit" /></button>
                      </div>
                    </td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash" /></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Cristiano Ronaldo</td>
                    <td>07</td>
                    <td>Juvetus</td>
                    <td>FW</td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit" /></button>
                      </div>
                    </td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash" /></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Bruno Fernandes</td>
                    <td>18</td>
                    <td>Manchester United</td>
                    <td>DF</td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit" /></button>
                      </div>
                    </td>
                    <td>
                      <div className="list-inline-item">
                        <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash" /></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
    }
}