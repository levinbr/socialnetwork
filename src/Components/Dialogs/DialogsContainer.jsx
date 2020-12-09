
import {addNewMessage} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect
)(Dialogs);