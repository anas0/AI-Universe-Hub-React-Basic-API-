import React from 'react';

const Modal = (props) => {
    const {tool_name, image_link, accuracy, description, features, input_output_examples, integrations, pricing, } = props.singleData;
    const featureName = Object.values(features || {});
    console.log(props);

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{description}</h2>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-xl font-bold">Features</h1>
                                    {
                                        featureName.map(feature => <p>{feature.feature_name}</p>)
                                    }
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Integrations</h1>
                                    {
                                        integrations ? integrations.map(integration => <p>{integration}</p>) : 'Not Found'
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <figure className='w-full'><img 
                                className='w-full h-64' 
                                src={image_link && image_link[0]} 
                                alt="Album"
                            /></figure>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;