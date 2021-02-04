import React, {useState} from 'react'

const ProfileFleet = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Fleet</h5>
                <p className="card-body">Your fleet description</p>
                <p className="card-text"><small className="text-muted">Not available for now</small></p>
            </div>
        </div>
    )
}

const ProfileProd = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Production</h5>
                <p className="card-body">Your production</p>
                <p className="card-text"><small className="text-muted">Not available for now</small></p>
            </div>
        </div>
    )
}

const Profile = () => {
    const [isEditing, setEditing] = useState(0)
    return (
        <div className="container">
            <div className="row"><h1>Profile</h1></div>
            <div className="row">
                <div className="btn-group">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
            <div className="row">
                <div className="card-columns">
                    <ProfileFleet />
                    <ProfileProd />
                </div>
            </div>
        </div>
    )
  }

export default Profile