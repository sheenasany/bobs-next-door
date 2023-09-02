import React from "react"
import Store from "./Store"

function StoreList({ stores }) {
    //another way of mapping out of JSX line
    const storeInfo = stores.map((store) => {
        return <Store key={store.id} store={store} />
    })
        


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {/* {stores.map(store => <Store key={store.id} store={store}/>)} */}
                {storeInfo}
            </tbody>
        
        </table>
    );
}

export default StoreList;