import React ,{useState,useEffect}from 'react';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/material.css";
import { FormControl,InputLabel,Box,FormHelperText } from '@mui/material';
import { Label, Phone } from '@mui/icons-material';

export const MobileLable = ({
    label = "Mobile Number",
    value,
    onChange,
    error = false,
    helperText = "",
}) => {
    const [focused,setFocused] = useState(false);
    
  return (
    <>
        <FormControl
        variant="standard"
        fullWidth
        error={error}
        sx={{position:"relative",width:"100%",mt:1}}
        >
            <InputLabel
            shrink={focused || Phone.length>0}
            sx={{
                left:100,
                // top:0,
                position:"absolute",
                zIndex:2,                   //keep label on top
                background:"#fff",         //hide overloap
                px:2,
                transform:focused || value.length >0
                ? "translate(0,-6px) scale(0.85)":"translate(0,22px) sclae(1)",
                transition:"all 0.2s ease",
                fontSize:"0.9rem",
                color:"rgba(0,0,0,0.45)",
                fontWeight:300,
                mt:1,
            }}
            
            >
            Mobile Number </InputLabel>
            <Box>
                <PhoneInput 
                country={"in"}
                value={value}
                onChange={(val)=>onChange(val)}

                specialLabel=''
                inputStyle={{
                    width:"100%",
                    border:"none",
                    borderRadius:0,
                    borderBottom:error ? "2px solid #d32f2f"
                    :"1px solid rgba(0,0,0,0.25)",
                    boxShadow:"none",
                    outline:"none",   
                    mt:1
                }}
                buttonStyle={{
                    border:"none",
                    boxShadow:"none",
                    outline:"none",
                    borderBottom:error ? "2px solid #d32f2f"
                    :"1px solid rgba(0,0,0,0.25)"
                }} 
                inputProps={{
                    onFocus:()=>setFocused(true),
                    onBlur:()=>setFocused(false),
                }}
                />
            </Box>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    </>
  )
}
export default  MobileLable;