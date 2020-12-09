import React from 'react';
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Elem} from "../../common/FormControls/FormControls";
import PostContainer from "./Post/PostContainer";

const MyPosts = (props) => {
  let newPosts = props.myPosts.map( post => {
    return <PostContainer key={post.message} message={post.message} likes={post.likes}/>
  });

  let addPost = (formData) => {
      props.addPost(formData.newPost);
  };

  return (
        <div className={s['container']}>
          <div className={s['post-input']}>
              <PostReduxForm onSubmit={addPost}/>
          </div>
          <div className={s['posts']}>
            {newPosts}
          </div>
        </div>
  );
}

const maxLength100 = maxLength(100)
const Textarea2 = Elem("textarea")

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPost"}
                   component={Textarea2}
                   validate={[required, maxLength100]}
                   placeholder={`what's up?`}
                    />
            <button> Add post </button>

        </form>
    )
}

const PostReduxForm = reduxForm({form: 'addPost'})(PostForm);

export default MyPosts;
