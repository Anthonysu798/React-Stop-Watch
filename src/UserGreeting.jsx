import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomeMessage = <h2 className="Welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

{/* Defaul Propts if no username pass in then it will display Guest automatically*/}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting;