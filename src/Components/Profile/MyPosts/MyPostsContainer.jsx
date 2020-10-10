import React from 'react';
import MyPosts from "./MyPosts";
import {addPost} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        myPosts: state.profilePage.myPosts
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {addPost})(MyPosts);


export default MyPostsContainer;