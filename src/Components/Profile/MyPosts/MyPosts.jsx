import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Elem} from "../../common/FormControls/FormControls";

const MyPosts = (props) => {
  let newPosts = props.myPosts.map( post => {
    return <Post message={post.message} likes={post.likes}/>
  });

  let addPost = (formData) => {
      props.addPost(formData.newPost);
  };

  return (
        <div>
          <div>
              Что нового?
              <PostReduxForm onSubmit={addPost}/>
          </div>
          <div>
            {newPosts}
          </div>
        </div>
  );
}

const maxLength10 = maxLength(10)
const Textarea2 = Elem("textarea")

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPost"}
                   component={Textarea2}
                   validate={[required, maxLength10]}
                   placeholder={'post message'}/>
            <div>
                <button> Add post </button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'addPost'})(PostForm);

export default MyPosts;
