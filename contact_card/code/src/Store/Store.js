import {createSlice, configureStore} from '@reduxjs/toolkit';
 

const cardVal={cards:[{}] };
const messageVal={heading:'Message', message:'Click ok to continue', status:false};
 
 


const msgreducer={
	changeHeading(state, action)
	{
		state.heading=action.payload;
	},
	changeMsg(state, action)
	{
		state.message=action.payload;
	},
	changeStatus(state)
	{
		state.status=!state.status;
	}
	
};

const cardReducer=
{
	setCard(state, action)
	{
		state.cards=action.payload;
	}
};

const msgSlice=createSlice({name:'msg', initialState:messageVal, reducers:msgreducer});
const cardSlice=createSlice({name:'card', initialState:cardVal, reducers:cardReducer}); 

const loginStore=configureStore({reducer: {msg:msgSlice.reducer, card:cardSlice.reducer } });


export const msgactions=msgSlice.actions;
export const cardactions=cardSlice.actions; 

export default loginStore;