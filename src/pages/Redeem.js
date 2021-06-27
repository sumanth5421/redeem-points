import React, {useState} from 'react';
import _ from 'lodash'
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex !important;
    flex-direction: column !important; 
    align-items: center;
    justify-content: center;

`;
const Form = Styled.div`
width: 400px !important;

.w3-row {
    display: flex !important;
    flex-direction: row !important; 
    width: 100% !important;
}
.w3-half {
    width: 50% !important;
}
`;

const RedeemPoints = () =>{
    const [state, setState] = useState({
        price: null,
        "1xpoint": 0,
        "2xpoint": 0
    })

    const updateState = ({target}) =>{
        console.log(typeof target.value);
        setState(preState=>({
            ...preState,
            [target.name] : target.value
        }))
        calculateRedeemPoint(parseFloat(target.value))
    }

    const getRedeemValue = (price) =>{
        let point1X
        let point2X
       if(price>100){
        point2X = (price - 100) * 2
        point1X = 50;
       } else if (price > 50) {
           point1X = price - 50;
           point2X= 0
       }
       return {point1X,point2X}
    }

    const calculateRedeemPoint =(p) =>{
        const price = Math.round(p);
        const {point1X, point2X} =getRedeemValue(price);
        setState(preState=>({
            ...preState,
            "1xpoint": point1X,
            '2xpoint': point2X 
        }))

    }

    return (
        <>
        <Container>
            <h1>
                Redeem Points
            </h1>
            <Form> 
                <div className="w3-row">
                    <div className="w3-half">
                        <label className="w3-half">Enter Purchase Price :</label>
                    </div>
                    <div>
                    <input name="price"  id="price" onKeyUp={updateState} />
                    </div>
                </div>
                <div className="w3-row">
                    <div className="w3-half">
                        <span className="w3-half">Redeem 1X points :</span>
                    </div>
                    <b>{state['1xpoint']} </b>

                </div>
                <div className="w3-row">
                    <div className="w3-half">
                        <span className="w3-half">Redeem 2X points :</span>
                    </div>
                    <b>{state['2xpoint']} </b>
                </div>
                <div className="w3-row">
                    <div className="w3-half">
                        <span >Total points :</span>
                    </div>
                    <b>{state['2xpoint'] + state['1xpoint']} </b>
                </div>
            </Form>
        </Container>
        </>
    )
}



export default RedeemPoints