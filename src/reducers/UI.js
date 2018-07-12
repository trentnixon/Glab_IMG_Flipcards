// import React from "react";

const InitialState ={
	Data:false,
	Theme:false,
	UI:false,
	UI_SET:false,
	SETFLIP:false,
	FLIPSTATE:false,
	ImagePath:"https://gdn-cdn.s3.amazonaws.com/embed/2018/07/icare/atom/assets/images/",
	TrackOpenCards:[]
}

const UI = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			// Fetch Initial Meta Data
			case "STORE_DATA":{
					return {...state, Data:action.payload}
					// eslint-disable-next-line 
					break
				}	
			case "STORE_THEME":{
				return {...state, Theme:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_UI":{
				return {...state, UI:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "UI_SET":{
				return {...state, UI_SET:action.payload}
					// eslint-disable-next-line 
					break
			}
			
			case "SET_FLIP":{
				return {...state, SETFLIP:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "FLIP_STATE":{
				console.log(action.payload)
				return {...state, FLIPSTATE:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_IMAGEPATH":{
				return {...state, ImagePath:action.payload}
				// eslint-disable-next-line 
				break
			}	
			
			case "TRACK_CARD":{
				return {...state, TrackOpenCards:action.payload}
				// eslint-disable-next-line 
				break
			}	

		}
		return state;
	}
export default UI;	