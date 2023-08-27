import Alert from 'react-bootstrap/Alert';
import "./Alert.scss";

const AlertContainer = () => {
    return (
        <div id="alert-container">
            <Alert variant="success" onClose={() => {}} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        </div>
    )
}

export default AlertContainer;