import { stringify } from "querystring";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom'
import './profile.css'
import { getAllOrder } from './../JS/actions/index';

const Profile = () => {

  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const cmd = useSelector(state => state.cardReducer.allcard);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrder())
  }, [dispatch])
  return (
    <>
      <div >
        {loading ? <h1>Please wait </h1>
          :
          user ?

            <div className="page-content page-container" id="page-content">
              <div className="padding">
                <div className="row">
                  <div className="col-xl-6 col-md-12">
                    <div style={{ width: '1200px' }} className="card user-card-full">
                      <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                          <div className="card-block text-center text-white">
                            <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                            <h6 className="f-w-600">{user.name}</h6>
                            <p>client</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="card-block">
                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div className="row">
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Email</p>
                                <h6 className="text-muted f-w-400">{user.email}</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Phone</p>
                                <h6 className="text-muted f-w-400">{user.phoneNumber}</h6>
                              </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                            <div className="row">
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Commande</p>
                                <h6 className="text-muted f-w-400">{cmd.filter(el => el.client.name == user.name).map(e=>e.somme).join('')} DT</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">confirmation</p>
                                <h6 className="text-muted f-w-400">{cmd.filter(el => el.client.name == user.name).map(e=>e.confirm).join('')=="false" ? <span>n'est pas encore confirmé</span> : <span>confirmé</span> }</h6>
                              </div>
                            </div>
                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true" /></a></li>
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true" /></a></li>
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : ""

          // <p>{JSON.stringify(user)}</p>



        }
      </div>
      <div>{user == null ? <Redirect to="/profile" /> : ""}</div>
    </>
  );
};

export default Profile;
