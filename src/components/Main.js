import React, { Component } from 'react';
import Identicon from 'identicon.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Main extends Component {


  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '700px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <div style={{

                display: 'inline',
                width: '100%', padding: 30
              }}>

                <Accordion defaultActiveKey="1">
                  <Card style={{ backgroundColor: '#ffe4e1', marginTop: '2.5rem' }}>
                    <Card.Header>
                      <Accordion.Toggle as={Button}
                        variant="button" eventKey="0">
                        <p style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '28px' }}>What is ETHERGRAM?</p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p style={{ textAlign: 'left', fontFamily: 'cursive', fontSize: '20px' }}><b>ETHERGRAM is a CENSORSHIP-FREE decentralized platform running on Ethereum blockchain which facilitates users to post photos along with providing optional anonymity.</b></p>
                        <p style={{ fontSize: '20px', fontFamily: 'cursive' }}>Liked a post?</p><p style={{ fontFamily: 'cursive', fontSize: '20px' }}><b>Go on,Tip it to increase it's reach.</b></p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <h2 style={{ marginTop: '3rem' }} >Share Your Post</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                <div className="form-group mr-sm-2">
                  <br></br>
                  <input
                    id="imageDescription"
                    type="text"
                    ref={(input) => { this.imageDescription = input }}
                    className="form-control"
                    placeholder="Image caption"
                    required />
                </div>
                <button type="submit" className="btn btn-outline-primary ">Upload!</button>
              </form>
              <p>&nbsp;</p>
              {this.props.images.map((image, key) => {
                return (
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px' }} /></p>
                        <p style={{ fontFamily: 'cursive' }}>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;