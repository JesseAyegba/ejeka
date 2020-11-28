export const sidebar = (state=false, action) => {
    switch(action.type) {
        case "SHOW SIDEBAR": 
            return true;
        
        case "HIDE SIDEBAR":
            return false;
        
        default: 
            return false;
    }
} 