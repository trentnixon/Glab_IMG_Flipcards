import axios from 'axios';
import store from "../store/store";

export function FetchData(){

    /** Set Properties */
        this.theme="theme.json"
        this.data="data.json"
        this.ui="UI.json"
       
    /** Set Methods */
 
    this.start = ($Path,$ImgPath) => {

        // Set Json Path
        this.path=$Path;
        // Create Json Array 
        this.init=[this.path+this.theme,this.path+this.data,this.path+this.ui]

        // Set Image path
        store.dispatch({ type:"STORE_IMAGEPATH", payload:$ImgPath });
        
        // Fetch Json Data for build
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
                // Store the returned Values to the Reducer
                store.dispatch({ type:"STORE_DATA", payload:res[1].data });
                store.dispatch({ type:"STORE_THEME", payload:res[0].data });
                store.dispatch({ type:"STORE_UI", payload:res[2].data });
                store.dispatch({ type:"UI_SET", payload:true });
            })
        )
        .catch(function (error) { console.log(error); });
    }
}
