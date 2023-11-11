import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status: false,
    userData:null,

    regbtn:false,  //header singin and singup btn for
    sidebartoogle:false, // sidebar toogle
    loginform:false,
    sinupform:false,
    homepagetoggle:true
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        authlogin:(state, action)=>{
            state.status=true;
            if (action.payload) {
                state.userData=action.payload;
            }
        },
        setlogout:(state, action)=>{
            console.log("cl");
            state.status=false;
            state.userData=null;
        },
        setLogindata:(state, action)=>{
            // console.log(action.payload);
            state.logindatas=action.payload
        },
        dataTest: (state, action)=>{
            console.log(state.userData)
        },

        regFn:(state, action)=>{
            if (action.payload.login) {
                state.loginform=action.payload.btn
                console.log(action.payload.login);
            }
            if (action.payload.singup) {
                state.sinupform=action.payload.btn
            }
        }, 
        sidebarFn:(state, action)=>{
            console.log(action.payload);
            state.sidebartoogle=action.payload
        },
        homepageFn:(state, action)=>{
            state.homepagetoggle=action.payload
        }


    }
})

export const {regFn,sidebarFn,  authlogin,setlogout, setLogindata, dataTest, homepageFn} =authSlice.actions;

export default authSlice.reducer
