import React from 'react'
import style from '../ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    openEditMode = () => {
        this.setState({editMode: true})
    }
    closeEditMode = () =>  {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div className={style.profileInfo}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.openEditMode}> {this.props.status || 'Изменить статус'} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onChange={this.onStatusChange}
                               onBlur={this.closeEditMode}
                               value={this.state.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;