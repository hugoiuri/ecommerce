import React from 'react';

import '../css/item-detail.css'

export default props => {
    return (
        <div className="card">
            <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
                            <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                            <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                            <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                            <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                        </div>
                        <ul className="preview-thumbnail nav nav-tabs">
                            <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                            <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                            <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                            <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                            <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                        </ul>

                    </div>
                    <div className="details col-md-6">
                        <h3 className="product-title">men's shoes fashion</h3>
                        <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                        <h4 className="price">current price: <span>$180</span></h4>
                        <div className="action">
                            <button className="btn btn-primary" type="button">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};