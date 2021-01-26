import axios from 'axios';
import React, { Component } from 'react';

class ModalAddUser extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            username: '',
            email: '',
            password:''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            username: nextProps.username,
            email: nextProps.email,
        });
    }

    usernameHandler(e) {
        this.setState({ username: e.target.value });
    }

    emailHandler(e) {
        this.setState({ email: e.target.value });
    }

    passwordHandler(e) {
        this.setState({ password: e.target.value });
    }

    handleSave() {
        const item = this.state;
        //this.props.saveModalDetails(item)
        
        axios
        .post('http://localhost:8080/ajouterUser', item)
        .then(response => {
            console.log(response)
            console.log("-----")
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-username" id="exampleModalLabel">Ajouter</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Nom:</span><input value={this.state.username} onChange={(e) => this.usernameHandler(e)} /></p>
                            <p><span className="modal-lable">Email:</span><input value={this.state.email} onChange={(e) => this.emailHandler(e)} /></p>
                            <p><span className="modal-lable" type="password">Mot de passe:</span><input value={this.state.password} onChange={(e) => this.passwordHandler(e)} /></p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { this.handleClose() }}>Fermer</button>
                            <button type="button" className="btn btn-primary" style={{backgroundColor:"#17a2b8"}} data-dismiss="modal" onClick={() => { this.handleSave() }}>Terminer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAddUser;

/*import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            username: '',
            email: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            username: nextProps.username,
            email: nextProps.email,
        });
    }

    usernameHandler(e) {
        this.setState({ username: e.target.value });
    }

    emailHandler(e) {
        this.setState({ email: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Nom d'utilisateur:</span><input value={this.state.username} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">Email:</span><input value={this.state.email} onChange={(e) => this.emailHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Terminer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;*/

/*import React from 'react';
const Modal = props => {
  return (
     <div className="modal">
       <div className="modal-content">
          <span className="close">&times;</span>
       </div>
     </div>
  );
}
export default Modal;
*/