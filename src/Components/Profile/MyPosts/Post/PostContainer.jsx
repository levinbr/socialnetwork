
import {connect} from "react-redux";
import Post from "./Post";

const mapStateToProps = (state) => {
    return {
        photoOwner: state.profilePage.profile?.photos.small
    }
}

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;
